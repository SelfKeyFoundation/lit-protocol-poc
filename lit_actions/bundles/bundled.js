(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined")
      return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x + '" is not supported');
  });
  var __commonJS = (cb, mod) => function __require2() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name8 in all)
      __defProp(target, name8, { get: all[name8], enumerable: true });
  };
  var __copyProps = (to, from14, except, desc) => {
    if (from14 && typeof from14 === "object" || typeof from14 === "function") {
      for (let key of __getOwnPropNames(from14))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from14[key], enumerable: !(desc = __getOwnPropDesc(from14, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/varint/encode.js
  var require_encode = __commonJS({
    "node_modules/varint/encode.js"(exports, module) {
      module.exports = encode31;
      var MSB10 = 128;
      var REST10 = 127;
      var MSBALL10 = ~REST10;
      var INT10 = Math.pow(2, 31);
      function encode31(num, out, offset) {
        if (Number.MAX_SAFE_INTEGER && num > Number.MAX_SAFE_INTEGER) {
          encode31.bytes = 0;
          throw new RangeError("Could not encode varint");
        }
        out = out || [];
        offset = offset || 0;
        var oldOffset = offset;
        while (num >= INT10) {
          out[offset++] = num & 255 | MSB10;
          num /= 128;
        }
        while (num & MSBALL10) {
          out[offset++] = num & 255 | MSB10;
          num >>>= 7;
        }
        out[offset] = num | 0;
        encode31.bytes = offset - oldOffset + 1;
        return out;
      }
    }
  });

  // node_modules/varint/decode.js
  var require_decode = __commonJS({
    "node_modules/varint/decode.js"(exports, module) {
      module.exports = read10;
      var MSB10 = 128;
      var REST10 = 127;
      function read10(buf2, offset) {
        var res = 0, offset = offset || 0, shift = 0, counter = offset, b, l = buf2.length;
        do {
          if (counter >= l || shift > 49) {
            read10.bytes = 0;
            throw new RangeError("Could not decode varint");
          }
          b = buf2[counter++];
          res += shift < 28 ? (b & REST10) << shift : (b & REST10) * Math.pow(2, shift);
          shift += 7;
        } while (b >= MSB10);
        read10.bytes = counter - offset;
        return res;
      }
    }
  });

  // node_modules/varint/length.js
  var require_length = __commonJS({
    "node_modules/varint/length.js"(exports, module) {
      var N110 = Math.pow(2, 7);
      var N210 = Math.pow(2, 14);
      var N310 = Math.pow(2, 21);
      var N410 = Math.pow(2, 28);
      var N510 = Math.pow(2, 35);
      var N610 = Math.pow(2, 42);
      var N710 = Math.pow(2, 49);
      var N810 = Math.pow(2, 56);
      var N910 = Math.pow(2, 63);
      module.exports = function(value) {
        return value < N110 ? 1 : value < N210 ? 2 : value < N310 ? 3 : value < N410 ? 4 : value < N510 ? 5 : value < N610 ? 6 : value < N710 ? 7 : value < N810 ? 8 : value < N910 ? 9 : 10;
      };
    }
  });

  // node_modules/varint/index.js
  var require_varint = __commonJS({
    "node_modules/varint/index.js"(exports, module) {
      module.exports = {
        encode: require_encode(),
        decode: require_decode(),
        encodingLength: require_length()
      };
    }
  });

  // node_modules/lodash.clonedeep/index.js
  var require_lodash = __commonJS({
    "node_modules/lodash.clonedeep/index.js"(exports, module) {
      var LARGE_ARRAY_SIZE = 200;
      var HASH_UNDEFINED = "__lodash_hash_undefined__";
      var MAX_SAFE_INTEGER = 9007199254740991;
      var argsTag = "[object Arguments]";
      var arrayTag = "[object Array]";
      var boolTag = "[object Boolean]";
      var dateTag = "[object Date]";
      var errorTag = "[object Error]";
      var funcTag = "[object Function]";
      var genTag = "[object GeneratorFunction]";
      var mapTag = "[object Map]";
      var numberTag = "[object Number]";
      var objectTag = "[object Object]";
      var promiseTag = "[object Promise]";
      var regexpTag = "[object RegExp]";
      var setTag = "[object Set]";
      var stringTag = "[object String]";
      var symbolTag = "[object Symbol]";
      var weakMapTag = "[object WeakMap]";
      var arrayBufferTag = "[object ArrayBuffer]";
      var dataViewTag = "[object DataView]";
      var float32Tag = "[object Float32Array]";
      var float64Tag = "[object Float64Array]";
      var int8Tag = "[object Int8Array]";
      var int16Tag = "[object Int16Array]";
      var int32Tag = "[object Int32Array]";
      var uint8Tag = "[object Uint8Array]";
      var uint8ClampedTag = "[object Uint8ClampedArray]";
      var uint16Tag = "[object Uint16Array]";
      var uint32Tag = "[object Uint32Array]";
      var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
      var reFlags = /\w*$/;
      var reIsHostCtor = /^\[object .+?Constructor\]$/;
      var reIsUint = /^(?:0|[1-9]\d*)$/;
      var cloneableTags = {};
      cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
      cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
      var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
      var freeSelf = typeof self == "object" && self && self.Object === Object && self;
      var root = freeGlobal || freeSelf || Function("return this")();
      var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
      var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
      var moduleExports = freeModule && freeModule.exports === freeExports;
      function addMapEntry(map2, pair) {
        map2.set(pair[0], pair[1]);
        return map2;
      }
      function addSetEntry(set, value) {
        set.add(value);
        return set;
      }
      function arrayEach(array, iteratee) {
        var index = -1, length10 = array ? array.length : 0;
        while (++index < length10) {
          if (iteratee(array[index], index, array) === false) {
            break;
          }
        }
        return array;
      }
      function arrayPush(array, values) {
        var index = -1, length10 = values.length, offset = array.length;
        while (++index < length10) {
          array[offset + index] = values[index];
        }
        return array;
      }
      function arrayReduce(array, iteratee, accumulator, initAccum) {
        var index = -1, length10 = array ? array.length : 0;
        if (initAccum && length10) {
          accumulator = array[++index];
        }
        while (++index < length10) {
          accumulator = iteratee(accumulator, array[index], index, array);
        }
        return accumulator;
      }
      function baseTimes(n, iteratee) {
        var index = -1, result = Array(n);
        while (++index < n) {
          result[index] = iteratee(index);
        }
        return result;
      }
      function getValue(object, key) {
        return object == null ? void 0 : object[key];
      }
      function isHostObject(value) {
        var result = false;
        if (value != null && typeof value.toString != "function") {
          try {
            result = !!(value + "");
          } catch (e) {
          }
        }
        return result;
      }
      function mapToArray(map2) {
        var index = -1, result = Array(map2.size);
        map2.forEach(function(value, key) {
          result[++index] = [key, value];
        });
        return result;
      }
      function overArg(func, transform) {
        return function(arg) {
          return func(transform(arg));
        };
      }
      function setToArray(set) {
        var index = -1, result = Array(set.size);
        set.forEach(function(value) {
          result[++index] = value;
        });
        return result;
      }
      var arrayProto = Array.prototype;
      var funcProto = Function.prototype;
      var objectProto = Object.prototype;
      var coreJsData = root["__core-js_shared__"];
      var maskSrcKey = function() {
        var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
        return uid ? "Symbol(src)_1." + uid : "";
      }();
      var funcToString = funcProto.toString;
      var hasOwnProperty2 = objectProto.hasOwnProperty;
      var objectToString = objectProto.toString;
      var reIsNative = RegExp(
        "^" + funcToString.call(hasOwnProperty2).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      );
      var Buffer2 = moduleExports ? root.Buffer : void 0;
      var Symbol2 = root.Symbol;
      var Uint8Array2 = root.Uint8Array;
      var getPrototype = overArg(Object.getPrototypeOf, Object);
      var objectCreate = Object.create;
      var propertyIsEnumerable = objectProto.propertyIsEnumerable;
      var splice = arrayProto.splice;
      var nativeGetSymbols = Object.getOwnPropertySymbols;
      var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
      var nativeKeys = overArg(Object.keys, Object);
      var DataView2 = getNative(root, "DataView");
      var Map2 = getNative(root, "Map");
      var Promise2 = getNative(root, "Promise");
      var Set2 = getNative(root, "Set");
      var WeakMap2 = getNative(root, "WeakMap");
      var nativeCreate = getNative(Object, "create");
      var dataViewCtorString = toSource(DataView2);
      var mapCtorString = toSource(Map2);
      var promiseCtorString = toSource(Promise2);
      var setCtorString = toSource(Set2);
      var weakMapCtorString = toSource(WeakMap2);
      var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
      var symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
      function Hash(entries) {
        var index = -1, length10 = entries ? entries.length : 0;
        this.clear();
        while (++index < length10) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      function hashClear() {
        this.__data__ = nativeCreate ? nativeCreate(null) : {};
      }
      function hashDelete(key) {
        return this.has(key) && delete this.__data__[key];
      }
      function hashGet(key) {
        var data = this.__data__;
        if (nativeCreate) {
          var result = data[key];
          return result === HASH_UNDEFINED ? void 0 : result;
        }
        return hasOwnProperty2.call(data, key) ? data[key] : void 0;
      }
      function hashHas(key) {
        var data = this.__data__;
        return nativeCreate ? data[key] !== void 0 : hasOwnProperty2.call(data, key);
      }
      function hashSet(key, value) {
        var data = this.__data__;
        data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
        return this;
      }
      Hash.prototype.clear = hashClear;
      Hash.prototype["delete"] = hashDelete;
      Hash.prototype.get = hashGet;
      Hash.prototype.has = hashHas;
      Hash.prototype.set = hashSet;
      function ListCache(entries) {
        var index = -1, length10 = entries ? entries.length : 0;
        this.clear();
        while (++index < length10) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      function listCacheClear() {
        this.__data__ = [];
      }
      function listCacheDelete(key) {
        var data = this.__data__, index = assocIndexOf(data, key);
        if (index < 0) {
          return false;
        }
        var lastIndex = data.length - 1;
        if (index == lastIndex) {
          data.pop();
        } else {
          splice.call(data, index, 1);
        }
        return true;
      }
      function listCacheGet(key) {
        var data = this.__data__, index = assocIndexOf(data, key);
        return index < 0 ? void 0 : data[index][1];
      }
      function listCacheHas(key) {
        return assocIndexOf(this.__data__, key) > -1;
      }
      function listCacheSet(key, value) {
        var data = this.__data__, index = assocIndexOf(data, key);
        if (index < 0) {
          data.push([key, value]);
        } else {
          data[index][1] = value;
        }
        return this;
      }
      ListCache.prototype.clear = listCacheClear;
      ListCache.prototype["delete"] = listCacheDelete;
      ListCache.prototype.get = listCacheGet;
      ListCache.prototype.has = listCacheHas;
      ListCache.prototype.set = listCacheSet;
      function MapCache(entries) {
        var index = -1, length10 = entries ? entries.length : 0;
        this.clear();
        while (++index < length10) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      function mapCacheClear() {
        this.__data__ = {
          "hash": new Hash(),
          "map": new (Map2 || ListCache)(),
          "string": new Hash()
        };
      }
      function mapCacheDelete(key) {
        return getMapData(this, key)["delete"](key);
      }
      function mapCacheGet(key) {
        return getMapData(this, key).get(key);
      }
      function mapCacheHas(key) {
        return getMapData(this, key).has(key);
      }
      function mapCacheSet(key, value) {
        getMapData(this, key).set(key, value);
        return this;
      }
      MapCache.prototype.clear = mapCacheClear;
      MapCache.prototype["delete"] = mapCacheDelete;
      MapCache.prototype.get = mapCacheGet;
      MapCache.prototype.has = mapCacheHas;
      MapCache.prototype.set = mapCacheSet;
      function Stack(entries) {
        this.__data__ = new ListCache(entries);
      }
      function stackClear() {
        this.__data__ = new ListCache();
      }
      function stackDelete(key) {
        return this.__data__["delete"](key);
      }
      function stackGet(key) {
        return this.__data__.get(key);
      }
      function stackHas(key) {
        return this.__data__.has(key);
      }
      function stackSet(key, value) {
        var cache4 = this.__data__;
        if (cache4 instanceof ListCache) {
          var pairs = cache4.__data__;
          if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
            pairs.push([key, value]);
            return this;
          }
          cache4 = this.__data__ = new MapCache(pairs);
        }
        cache4.set(key, value);
        return this;
      }
      Stack.prototype.clear = stackClear;
      Stack.prototype["delete"] = stackDelete;
      Stack.prototype.get = stackGet;
      Stack.prototype.has = stackHas;
      Stack.prototype.set = stackSet;
      function arrayLikeKeys(value, inherited) {
        var result = isArray2(value) || isArguments(value) ? baseTimes(value.length, String) : [];
        var length10 = result.length, skipIndexes = !!length10;
        for (var key in value) {
          if ((inherited || hasOwnProperty2.call(value, key)) && !(skipIndexes && (key == "length" || isIndex(key, length10)))) {
            result.push(key);
          }
        }
        return result;
      }
      function assignValue(object, key, value) {
        var objValue = object[key];
        if (!(hasOwnProperty2.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) {
          object[key] = value;
        }
      }
      function assocIndexOf(array, key) {
        var length10 = array.length;
        while (length10--) {
          if (eq(array[length10][0], key)) {
            return length10;
          }
        }
        return -1;
      }
      function baseAssign(object, source) {
        return object && copyObject(source, keys(source), object);
      }
      function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
        var result;
        if (customizer) {
          result = object ? customizer(value, key, object, stack) : customizer(value);
        }
        if (result !== void 0) {
          return result;
        }
        if (!isObject(value)) {
          return value;
        }
        var isArr = isArray2(value);
        if (isArr) {
          result = initCloneArray(value);
          if (!isDeep) {
            return copyArray(value, result);
          }
        } else {
          var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
          if (isBuffer3(value)) {
            return cloneBuffer(value, isDeep);
          }
          if (tag == objectTag || tag == argsTag || isFunc && !object) {
            if (isHostObject(value)) {
              return object ? value : {};
            }
            result = initCloneObject(isFunc ? {} : value);
            if (!isDeep) {
              return copySymbols(value, baseAssign(result, value));
            }
          } else {
            if (!cloneableTags[tag]) {
              return object ? value : {};
            }
            result = initCloneByTag(value, tag, baseClone, isDeep);
          }
        }
        stack || (stack = new Stack());
        var stacked = stack.get(value);
        if (stacked) {
          return stacked;
        }
        stack.set(value, result);
        if (!isArr) {
          var props = isFull ? getAllKeys(value) : keys(value);
        }
        arrayEach(props || value, function(subValue, key2) {
          if (props) {
            key2 = subValue;
            subValue = value[key2];
          }
          assignValue(result, key2, baseClone(subValue, isDeep, isFull, customizer, key2, value, stack));
        });
        return result;
      }
      function baseCreate(proto) {
        return isObject(proto) ? objectCreate(proto) : {};
      }
      function baseGetAllKeys(object, keysFunc, symbolsFunc) {
        var result = keysFunc(object);
        return isArray2(object) ? result : arrayPush(result, symbolsFunc(object));
      }
      function baseGetTag(value) {
        return objectToString.call(value);
      }
      function baseIsNative(value) {
        if (!isObject(value) || isMasked(value)) {
          return false;
        }
        var pattern = isFunction3(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
        return pattern.test(toSource(value));
      }
      function baseKeys(object) {
        if (!isPrototype(object)) {
          return nativeKeys(object);
        }
        var result = [];
        for (var key in Object(object)) {
          if (hasOwnProperty2.call(object, key) && key != "constructor") {
            result.push(key);
          }
        }
        return result;
      }
      function cloneBuffer(buffer2, isDeep) {
        if (isDeep) {
          return buffer2.slice();
        }
        var result = new buffer2.constructor(buffer2.length);
        buffer2.copy(result);
        return result;
      }
      function cloneArrayBuffer(arrayBuffer) {
        var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
        new Uint8Array2(result).set(new Uint8Array2(arrayBuffer));
        return result;
      }
      function cloneDataView(dataView2, isDeep) {
        var buffer2 = isDeep ? cloneArrayBuffer(dataView2.buffer) : dataView2.buffer;
        return new dataView2.constructor(buffer2, dataView2.byteOffset, dataView2.byteLength);
      }
      function cloneMap(map2, isDeep, cloneFunc) {
        var array = isDeep ? cloneFunc(mapToArray(map2), true) : mapToArray(map2);
        return arrayReduce(array, addMapEntry, new map2.constructor());
      }
      function cloneRegExp(regexp) {
        var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
        result.lastIndex = regexp.lastIndex;
        return result;
      }
      function cloneSet(set, isDeep, cloneFunc) {
        var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
        return arrayReduce(array, addSetEntry, new set.constructor());
      }
      function cloneSymbol(symbol) {
        return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
      }
      function cloneTypedArray(typedArray, isDeep) {
        var buffer2 = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
        return new typedArray.constructor(buffer2, typedArray.byteOffset, typedArray.length);
      }
      function copyArray(source, array) {
        var index = -1, length10 = source.length;
        array || (array = Array(length10));
        while (++index < length10) {
          array[index] = source[index];
        }
        return array;
      }
      function copyObject(source, props, object, customizer) {
        object || (object = {});
        var index = -1, length10 = props.length;
        while (++index < length10) {
          var key = props[index];
          var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
          assignValue(object, key, newValue === void 0 ? source[key] : newValue);
        }
        return object;
      }
      function copySymbols(source, object) {
        return copyObject(source, getSymbols(source), object);
      }
      function getAllKeys(object) {
        return baseGetAllKeys(object, keys, getSymbols);
      }
      function getMapData(map2, key) {
        var data = map2.__data__;
        return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
      }
      function getNative(object, key) {
        var value = getValue(object, key);
        return baseIsNative(value) ? value : void 0;
      }
      var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;
      var getTag = baseGetTag;
      if (DataView2 && getTag(new DataView2(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set2 && getTag(new Set2()) != setTag || WeakMap2 && getTag(new WeakMap2()) != weakMapTag) {
        getTag = function(value) {
          var result = objectToString.call(value), Ctor = result == objectTag ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : void 0;
          if (ctorString) {
            switch (ctorString) {
              case dataViewCtorString:
                return dataViewTag;
              case mapCtorString:
                return mapTag;
              case promiseCtorString:
                return promiseTag;
              case setCtorString:
                return setTag;
              case weakMapCtorString:
                return weakMapTag;
            }
          }
          return result;
        };
      }
      function initCloneArray(array) {
        var length10 = array.length, result = array.constructor(length10);
        if (length10 && typeof array[0] == "string" && hasOwnProperty2.call(array, "index")) {
          result.index = array.index;
          result.input = array.input;
        }
        return result;
      }
      function initCloneObject(object) {
        return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
      }
      function initCloneByTag(object, tag, cloneFunc, isDeep) {
        var Ctor = object.constructor;
        switch (tag) {
          case arrayBufferTag:
            return cloneArrayBuffer(object);
          case boolTag:
          case dateTag:
            return new Ctor(+object);
          case dataViewTag:
            return cloneDataView(object, isDeep);
          case float32Tag:
          case float64Tag:
          case int8Tag:
          case int16Tag:
          case int32Tag:
          case uint8Tag:
          case uint8ClampedTag:
          case uint16Tag:
          case uint32Tag:
            return cloneTypedArray(object, isDeep);
          case mapTag:
            return cloneMap(object, isDeep, cloneFunc);
          case numberTag:
          case stringTag:
            return new Ctor(object);
          case regexpTag:
            return cloneRegExp(object);
          case setTag:
            return cloneSet(object, isDeep, cloneFunc);
          case symbolTag:
            return cloneSymbol(object);
        }
      }
      function isIndex(value, length10) {
        length10 = length10 == null ? MAX_SAFE_INTEGER : length10;
        return !!length10 && (typeof value == "number" || reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length10);
      }
      function isKeyable(value) {
        var type = typeof value;
        return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
      }
      function isMasked(func) {
        return !!maskSrcKey && maskSrcKey in func;
      }
      function isPrototype(value) {
        var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
        return value === proto;
      }
      function toSource(func) {
        if (func != null) {
          try {
            return funcToString.call(func);
          } catch (e) {
          }
          try {
            return func + "";
          } catch (e) {
          }
        }
        return "";
      }
      function cloneDeep5(value) {
        return baseClone(value, true, true);
      }
      function eq(value, other) {
        return value === other || value !== value && other !== other;
      }
      function isArguments(value) {
        return isArrayLikeObject(value) && hasOwnProperty2.call(value, "callee") && (!propertyIsEnumerable.call(value, "callee") || objectToString.call(value) == argsTag);
      }
      var isArray2 = Array.isArray;
      function isArrayLike3(value) {
        return value != null && isLength(value.length) && !isFunction3(value);
      }
      function isArrayLikeObject(value) {
        return isObjectLike(value) && isArrayLike3(value);
      }
      var isBuffer3 = nativeIsBuffer || stubFalse;
      function isFunction3(value) {
        var tag = isObject(value) ? objectToString.call(value) : "";
        return tag == funcTag || tag == genTag;
      }
      function isLength(value) {
        return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
      }
      function isObject(value) {
        var type = typeof value;
        return !!value && (type == "object" || type == "function");
      }
      function isObjectLike(value) {
        return !!value && typeof value == "object";
      }
      function keys(object) {
        return isArrayLike3(object) ? arrayLikeKeys(object) : baseKeys(object);
      }
      function stubArray() {
        return [];
      }
      function stubFalse() {
        return false;
      }
      module.exports = cloneDeep5;
    }
  });

  // node_modules/cross-fetch/dist/browser-ponyfill.js
  var require_browser_ponyfill = __commonJS({
    "node_modules/cross-fetch/dist/browser-ponyfill.js"(exports, module) {
      var global2 = typeof self !== "undefined" ? self : exports;
      var __self__ = function() {
        function F() {
          this.fetch = false;
          this.DOMException = global2.DOMException;
        }
        F.prototype = global2;
        return new F();
      }();
      (function(self2) {
        var irrelevant = function(exports2) {
          var support = {
            searchParams: "URLSearchParams" in self2,
            iterable: "Symbol" in self2 && "iterator" in Symbol,
            blob: "FileReader" in self2 && "Blob" in self2 && function() {
              try {
                new Blob();
                return true;
              } catch (e) {
                return false;
              }
            }(),
            formData: "FormData" in self2,
            arrayBuffer: "ArrayBuffer" in self2
          };
          function isDataView(obj) {
            return obj && DataView.prototype.isPrototypeOf(obj);
          }
          if (support.arrayBuffer) {
            var viewClasses = [
              "[object Int8Array]",
              "[object Uint8Array]",
              "[object Uint8ClampedArray]",
              "[object Int16Array]",
              "[object Uint16Array]",
              "[object Int32Array]",
              "[object Uint32Array]",
              "[object Float32Array]",
              "[object Float64Array]"
            ];
            var isArrayBufferView = ArrayBuffer.isView || function(obj) {
              return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
            };
          }
          function normalizeName(name8) {
            if (typeof name8 !== "string") {
              name8 = String(name8);
            }
            if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name8)) {
              throw new TypeError("Invalid character in header field name");
            }
            return name8.toLowerCase();
          }
          function normalizeValue(value) {
            if (typeof value !== "string") {
              value = String(value);
            }
            return value;
          }
          function iteratorFor(items) {
            var iterator3 = {
              next: function() {
                var value = items.shift();
                return { done: value === void 0, value };
              }
            };
            if (support.iterable) {
              iterator3[Symbol.iterator] = function() {
                return iterator3;
              };
            }
            return iterator3;
          }
          function Headers(headers) {
            this.map = {};
            if (headers instanceof Headers) {
              headers.forEach(function(value, name8) {
                this.append(name8, value);
              }, this);
            } else if (Array.isArray(headers)) {
              headers.forEach(function(header) {
                this.append(header[0], header[1]);
              }, this);
            } else if (headers) {
              Object.getOwnPropertyNames(headers).forEach(function(name8) {
                this.append(name8, headers[name8]);
              }, this);
            }
          }
          Headers.prototype.append = function(name8, value) {
            name8 = normalizeName(name8);
            value = normalizeValue(value);
            var oldValue = this.map[name8];
            this.map[name8] = oldValue ? oldValue + ", " + value : value;
          };
          Headers.prototype["delete"] = function(name8) {
            delete this.map[normalizeName(name8)];
          };
          Headers.prototype.get = function(name8) {
            name8 = normalizeName(name8);
            return this.has(name8) ? this.map[name8] : null;
          };
          Headers.prototype.has = function(name8) {
            return this.map.hasOwnProperty(normalizeName(name8));
          };
          Headers.prototype.set = function(name8, value) {
            this.map[normalizeName(name8)] = normalizeValue(value);
          };
          Headers.prototype.forEach = function(callback, thisArg) {
            for (var name8 in this.map) {
              if (this.map.hasOwnProperty(name8)) {
                callback.call(thisArg, this.map[name8], name8, this);
              }
            }
          };
          Headers.prototype.keys = function() {
            var items = [];
            this.forEach(function(value, name8) {
              items.push(name8);
            });
            return iteratorFor(items);
          };
          Headers.prototype.values = function() {
            var items = [];
            this.forEach(function(value) {
              items.push(value);
            });
            return iteratorFor(items);
          };
          Headers.prototype.entries = function() {
            var items = [];
            this.forEach(function(value, name8) {
              items.push([name8, value]);
            });
            return iteratorFor(items);
          };
          if (support.iterable) {
            Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
          }
          function consumed(body) {
            if (body.bodyUsed) {
              return Promise.reject(new TypeError("Already read"));
            }
            body.bodyUsed = true;
          }
          function fileReaderReady(reader) {
            return new Promise(function(resolve, reject) {
              reader.onload = function() {
                resolve(reader.result);
              };
              reader.onerror = function() {
                reject(reader.error);
              };
            });
          }
          function readBlobAsArrayBuffer(blob) {
            var reader = new FileReader();
            var promise = fileReaderReady(reader);
            reader.readAsArrayBuffer(blob);
            return promise;
          }
          function readBlobAsText(blob) {
            var reader = new FileReader();
            var promise = fileReaderReady(reader);
            reader.readAsText(blob);
            return promise;
          }
          function readArrayBufferAsText(buf2) {
            var view = new Uint8Array(buf2);
            var chars = new Array(view.length);
            for (var i = 0; i < view.length; i++) {
              chars[i] = String.fromCharCode(view[i]);
            }
            return chars.join("");
          }
          function bufferClone(buf2) {
            if (buf2.slice) {
              return buf2.slice(0);
            } else {
              var view = new Uint8Array(buf2.byteLength);
              view.set(new Uint8Array(buf2));
              return view.buffer;
            }
          }
          function Body() {
            this.bodyUsed = false;
            this._initBody = function(body) {
              this._bodyInit = body;
              if (!body) {
                this._bodyText = "";
              } else if (typeof body === "string") {
                this._bodyText = body;
              } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
                this._bodyBlob = body;
              } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
                this._bodyFormData = body;
              } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
                this._bodyText = body.toString();
              } else if (support.arrayBuffer && support.blob && isDataView(body)) {
                this._bodyArrayBuffer = bufferClone(body.buffer);
                this._bodyInit = new Blob([this._bodyArrayBuffer]);
              } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
                this._bodyArrayBuffer = bufferClone(body);
              } else {
                this._bodyText = body = Object.prototype.toString.call(body);
              }
              if (!this.headers.get("content-type")) {
                if (typeof body === "string") {
                  this.headers.set("content-type", "text/plain;charset=UTF-8");
                } else if (this._bodyBlob && this._bodyBlob.type) {
                  this.headers.set("content-type", this._bodyBlob.type);
                } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
                  this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8");
                }
              }
            };
            if (support.blob) {
              this.blob = function() {
                var rejected = consumed(this);
                if (rejected) {
                  return rejected;
                }
                if (this._bodyBlob) {
                  return Promise.resolve(this._bodyBlob);
                } else if (this._bodyArrayBuffer) {
                  return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                } else if (this._bodyFormData) {
                  throw new Error("could not read FormData body as blob");
                } else {
                  return Promise.resolve(new Blob([this._bodyText]));
                }
              };
              this.arrayBuffer = function() {
                if (this._bodyArrayBuffer) {
                  return consumed(this) || Promise.resolve(this._bodyArrayBuffer);
                } else {
                  return this.blob().then(readBlobAsArrayBuffer);
                }
              };
            }
            this.text = function() {
              var rejected = consumed(this);
              if (rejected) {
                return rejected;
              }
              if (this._bodyBlob) {
                return readBlobAsText(this._bodyBlob);
              } else if (this._bodyArrayBuffer) {
                return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
              } else if (this._bodyFormData) {
                throw new Error("could not read FormData body as text");
              } else {
                return Promise.resolve(this._bodyText);
              }
            };
            if (support.formData) {
              this.formData = function() {
                return this.text().then(decode45);
              };
            }
            this.json = function() {
              return this.text().then(JSON.parse);
            };
            return this;
          }
          var methods = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
          function normalizeMethod(method) {
            var upcased = method.toUpperCase();
            return methods.indexOf(upcased) > -1 ? upcased : method;
          }
          function Request(input, options) {
            options = options || {};
            var body = options.body;
            if (input instanceof Request) {
              if (input.bodyUsed) {
                throw new TypeError("Already read");
              }
              this.url = input.url;
              this.credentials = input.credentials;
              if (!options.headers) {
                this.headers = new Headers(input.headers);
              }
              this.method = input.method;
              this.mode = input.mode;
              this.signal = input.signal;
              if (!body && input._bodyInit != null) {
                body = input._bodyInit;
                input.bodyUsed = true;
              }
            } else {
              this.url = String(input);
            }
            this.credentials = options.credentials || this.credentials || "same-origin";
            if (options.headers || !this.headers) {
              this.headers = new Headers(options.headers);
            }
            this.method = normalizeMethod(options.method || this.method || "GET");
            this.mode = options.mode || this.mode || null;
            this.signal = options.signal || this.signal;
            this.referrer = null;
            if ((this.method === "GET" || this.method === "HEAD") && body) {
              throw new TypeError("Body not allowed for GET or HEAD requests");
            }
            this._initBody(body);
          }
          Request.prototype.clone = function() {
            return new Request(this, { body: this._bodyInit });
          };
          function decode45(body) {
            var form = new FormData();
            body.trim().split("&").forEach(function(bytes) {
              if (bytes) {
                var split = bytes.split("=");
                var name8 = split.shift().replace(/\+/g, " ");
                var value = split.join("=").replace(/\+/g, " ");
                form.append(decodeURIComponent(name8), decodeURIComponent(value));
              }
            });
            return form;
          }
          function parseHeaders(rawHeaders) {
            var headers = new Headers();
            var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, " ");
            preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
              var parts = line.split(":");
              var key = parts.shift().trim();
              if (key) {
                var value = parts.join(":").trim();
                headers.append(key, value);
              }
            });
            return headers;
          }
          Body.call(Request.prototype);
          function Response(bodyInit, options) {
            if (!options) {
              options = {};
            }
            this.type = "default";
            this.status = options.status === void 0 ? 200 : options.status;
            this.ok = this.status >= 200 && this.status < 300;
            this.statusText = "statusText" in options ? options.statusText : "OK";
            this.headers = new Headers(options.headers);
            this.url = options.url || "";
            this._initBody(bodyInit);
          }
          Body.call(Response.prototype);
          Response.prototype.clone = function() {
            return new Response(this._bodyInit, {
              status: this.status,
              statusText: this.statusText,
              headers: new Headers(this.headers),
              url: this.url
            });
          };
          Response.error = function() {
            var response = new Response(null, { status: 0, statusText: "" });
            response.type = "error";
            return response;
          };
          var redirectStatuses = [301, 302, 303, 307, 308];
          Response.redirect = function(url, status) {
            if (redirectStatuses.indexOf(status) === -1) {
              throw new RangeError("Invalid status code");
            }
            return new Response(null, { status, headers: { location: url } });
          };
          exports2.DOMException = self2.DOMException;
          try {
            new exports2.DOMException();
          } catch (err) {
            exports2.DOMException = function(message, name8) {
              this.message = message;
              this.name = name8;
              var error = Error(message);
              this.stack = error.stack;
            };
            exports2.DOMException.prototype = Object.create(Error.prototype);
            exports2.DOMException.prototype.constructor = exports2.DOMException;
          }
          fetch2 = fetch;
          fetch2.polyfill = true;
          if (!self2.fetch) {
            self2.fetch = fetch2;
            self2.Headers = Headers;
            self2.Request = Request;
            self2.Response = Response;
          }
          exports2.Headers = Headers;
          exports2.Request = Request;
          exports2.Response = Response;
          exports2.fetch = fetch2;
          Object.defineProperty(exports2, "__esModule", { value: true });
          return exports2;
        }({});
      })(__self__);
      __self__.fetch.ponyfill = true;
      delete __self__.fetch.polyfill;
      var ctx = __self__;
      exports = ctx.fetch;
      exports.default = ctx.fetch;
      exports.fetch = ctx.fetch;
      exports.Headers = ctx.Headers;
      exports.Request = ctx.Request;
      exports.Response = ctx.Response;
      module.exports = exports;
    }
  });

  // node_modules/@stablelib/random/lib/source/browser.js
  var require_browser = __commonJS({
    "node_modules/@stablelib/random/lib/source/browser.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.BrowserRandomSource = void 0;
      var QUOTA = 65536;
      var BrowserRandomSource = class {
        constructor() {
          this.isAvailable = false;
          this.isInstantiated = false;
          const browserCrypto = typeof self !== "undefined" ? self.crypto || self.msCrypto : null;
          if (browserCrypto && browserCrypto.getRandomValues !== void 0) {
            this._crypto = browserCrypto;
            this.isAvailable = true;
            this.isInstantiated = true;
          }
        }
        randomBytes(length10) {
          if (!this.isAvailable || !this._crypto) {
            throw new Error("Browser random byte generator is not available.");
          }
          const out = new Uint8Array(length10);
          for (let i = 0; i < out.length; i += QUOTA) {
            this._crypto.getRandomValues(out.subarray(i, i + Math.min(out.length - i, QUOTA)));
          }
          return out;
        }
      };
      exports.BrowserRandomSource = BrowserRandomSource;
    }
  });

  // node_modules/@stablelib/wipe/lib/wipe.js
  var require_wipe = __commonJS({
    "node_modules/@stablelib/wipe/lib/wipe.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      function wipe(array) {
        for (var i = 0; i < array.length; i++) {
          array[i] = 0;
        }
        return array;
      }
      exports.wipe = wipe;
    }
  });

  // (disabled):crypto
  var require_crypto = __commonJS({
    "(disabled):crypto"() {
    }
  });

  // node_modules/@stablelib/random/lib/source/node.js
  var require_node = __commonJS({
    "node_modules/@stablelib/random/lib/source/node.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.NodeRandomSource = void 0;
      var wipe_1 = require_wipe();
      var NodeRandomSource = class {
        constructor() {
          this.isAvailable = false;
          this.isInstantiated = false;
          if (typeof __require !== "undefined") {
            const nodeCrypto = require_crypto();
            if (nodeCrypto && nodeCrypto.randomBytes) {
              this._crypto = nodeCrypto;
              this.isAvailable = true;
              this.isInstantiated = true;
            }
          }
        }
        randomBytes(length10) {
          if (!this.isAvailable || !this._crypto) {
            throw new Error("Node.js random byte generator is not available.");
          }
          let buffer2 = this._crypto.randomBytes(length10);
          if (buffer2.length !== length10) {
            throw new Error("NodeRandomSource: got fewer bytes than requested");
          }
          const out = new Uint8Array(length10);
          for (let i = 0; i < out.length; i++) {
            out[i] = buffer2[i];
          }
          (0, wipe_1.wipe)(buffer2);
          return out;
        }
      };
      exports.NodeRandomSource = NodeRandomSource;
    }
  });

  // node_modules/@stablelib/random/lib/source/system.js
  var require_system = __commonJS({
    "node_modules/@stablelib/random/lib/source/system.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.SystemRandomSource = void 0;
      var browser_1 = require_browser();
      var node_1 = require_node();
      var SystemRandomSource = class {
        constructor() {
          this.isAvailable = false;
          this.name = "";
          this._source = new browser_1.BrowserRandomSource();
          if (this._source.isAvailable) {
            this.isAvailable = true;
            this.name = "Browser";
            return;
          }
          this._source = new node_1.NodeRandomSource();
          if (this._source.isAvailable) {
            this.isAvailable = true;
            this.name = "Node";
            return;
          }
        }
        randomBytes(length10) {
          if (!this.isAvailable) {
            throw new Error("System random byte generator is not available.");
          }
          return this._source.randomBytes(length10);
        }
      };
      exports.SystemRandomSource = SystemRandomSource;
    }
  });

  // node_modules/@stablelib/int/lib/int.js
  var require_int = __commonJS({
    "node_modules/@stablelib/int/lib/int.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      function imulShim(a, b) {
        var ah = a >>> 16 & 65535, al = a & 65535;
        var bh = b >>> 16 & 65535, bl = b & 65535;
        return al * bl + (ah * bl + al * bh << 16 >>> 0) | 0;
      }
      exports.mul = Math.imul || imulShim;
      function add(a, b) {
        return a + b | 0;
      }
      exports.add = add;
      function sub(a, b) {
        return a - b | 0;
      }
      exports.sub = sub;
      function rotl(x, n) {
        return x << n | x >>> 32 - n;
      }
      exports.rotl = rotl;
      function rotr(x, n) {
        return x << 32 - n | x >>> n;
      }
      exports.rotr = rotr;
      function isIntegerShim(n) {
        return typeof n === "number" && isFinite(n) && Math.floor(n) === n;
      }
      exports.isInteger = Number.isInteger || isIntegerShim;
      exports.MAX_SAFE_INTEGER = 9007199254740991;
      exports.isSafeInteger = function(n) {
        return exports.isInteger(n) && (n >= -exports.MAX_SAFE_INTEGER && n <= exports.MAX_SAFE_INTEGER);
      };
    }
  });

  // node_modules/@stablelib/binary/lib/binary.js
  var require_binary = __commonJS({
    "node_modules/@stablelib/binary/lib/binary.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var int_1 = require_int();
      function readInt16BE(array, offset) {
        if (offset === void 0) {
          offset = 0;
        }
        return (array[offset + 0] << 8 | array[offset + 1]) << 16 >> 16;
      }
      exports.readInt16BE = readInt16BE;
      function readUint16BE(array, offset) {
        if (offset === void 0) {
          offset = 0;
        }
        return (array[offset + 0] << 8 | array[offset + 1]) >>> 0;
      }
      exports.readUint16BE = readUint16BE;
      function readInt16LE(array, offset) {
        if (offset === void 0) {
          offset = 0;
        }
        return (array[offset + 1] << 8 | array[offset]) << 16 >> 16;
      }
      exports.readInt16LE = readInt16LE;
      function readUint16LE(array, offset) {
        if (offset === void 0) {
          offset = 0;
        }
        return (array[offset + 1] << 8 | array[offset]) >>> 0;
      }
      exports.readUint16LE = readUint16LE;
      function writeUint16BE(value, out, offset) {
        if (out === void 0) {
          out = new Uint8Array(2);
        }
        if (offset === void 0) {
          offset = 0;
        }
        out[offset + 0] = value >>> 8;
        out[offset + 1] = value >>> 0;
        return out;
      }
      exports.writeUint16BE = writeUint16BE;
      exports.writeInt16BE = writeUint16BE;
      function writeUint16LE(value, out, offset) {
        if (out === void 0) {
          out = new Uint8Array(2);
        }
        if (offset === void 0) {
          offset = 0;
        }
        out[offset + 0] = value >>> 0;
        out[offset + 1] = value >>> 8;
        return out;
      }
      exports.writeUint16LE = writeUint16LE;
      exports.writeInt16LE = writeUint16LE;
      function readInt32BE(array, offset) {
        if (offset === void 0) {
          offset = 0;
        }
        return array[offset] << 24 | array[offset + 1] << 16 | array[offset + 2] << 8 | array[offset + 3];
      }
      exports.readInt32BE = readInt32BE;
      function readUint32BE(array, offset) {
        if (offset === void 0) {
          offset = 0;
        }
        return (array[offset] << 24 | array[offset + 1] << 16 | array[offset + 2] << 8 | array[offset + 3]) >>> 0;
      }
      exports.readUint32BE = readUint32BE;
      function readInt32LE(array, offset) {
        if (offset === void 0) {
          offset = 0;
        }
        return array[offset + 3] << 24 | array[offset + 2] << 16 | array[offset + 1] << 8 | array[offset];
      }
      exports.readInt32LE = readInt32LE;
      function readUint32LE(array, offset) {
        if (offset === void 0) {
          offset = 0;
        }
        return (array[offset + 3] << 24 | array[offset + 2] << 16 | array[offset + 1] << 8 | array[offset]) >>> 0;
      }
      exports.readUint32LE = readUint32LE;
      function writeUint32BE(value, out, offset) {
        if (out === void 0) {
          out = new Uint8Array(4);
        }
        if (offset === void 0) {
          offset = 0;
        }
        out[offset + 0] = value >>> 24;
        out[offset + 1] = value >>> 16;
        out[offset + 2] = value >>> 8;
        out[offset + 3] = value >>> 0;
        return out;
      }
      exports.writeUint32BE = writeUint32BE;
      exports.writeInt32BE = writeUint32BE;
      function writeUint32LE(value, out, offset) {
        if (out === void 0) {
          out = new Uint8Array(4);
        }
        if (offset === void 0) {
          offset = 0;
        }
        out[offset + 0] = value >>> 0;
        out[offset + 1] = value >>> 8;
        out[offset + 2] = value >>> 16;
        out[offset + 3] = value >>> 24;
        return out;
      }
      exports.writeUint32LE = writeUint32LE;
      exports.writeInt32LE = writeUint32LE;
      function readInt64BE(array, offset) {
        if (offset === void 0) {
          offset = 0;
        }
        var hi = readInt32BE(array, offset);
        var lo = readInt32BE(array, offset + 4);
        return hi * 4294967296 + lo - (lo >> 31) * 4294967296;
      }
      exports.readInt64BE = readInt64BE;
      function readUint64BE(array, offset) {
        if (offset === void 0) {
          offset = 0;
        }
        var hi = readUint32BE(array, offset);
        var lo = readUint32BE(array, offset + 4);
        return hi * 4294967296 + lo;
      }
      exports.readUint64BE = readUint64BE;
      function readInt64LE(array, offset) {
        if (offset === void 0) {
          offset = 0;
        }
        var lo = readInt32LE(array, offset);
        var hi = readInt32LE(array, offset + 4);
        return hi * 4294967296 + lo - (lo >> 31) * 4294967296;
      }
      exports.readInt64LE = readInt64LE;
      function readUint64LE(array, offset) {
        if (offset === void 0) {
          offset = 0;
        }
        var lo = readUint32LE(array, offset);
        var hi = readUint32LE(array, offset + 4);
        return hi * 4294967296 + lo;
      }
      exports.readUint64LE = readUint64LE;
      function writeUint64BE(value, out, offset) {
        if (out === void 0) {
          out = new Uint8Array(8);
        }
        if (offset === void 0) {
          offset = 0;
        }
        writeUint32BE(value / 4294967296 >>> 0, out, offset);
        writeUint32BE(value >>> 0, out, offset + 4);
        return out;
      }
      exports.writeUint64BE = writeUint64BE;
      exports.writeInt64BE = writeUint64BE;
      function writeUint64LE(value, out, offset) {
        if (out === void 0) {
          out = new Uint8Array(8);
        }
        if (offset === void 0) {
          offset = 0;
        }
        writeUint32LE(value >>> 0, out, offset);
        writeUint32LE(value / 4294967296 >>> 0, out, offset + 4);
        return out;
      }
      exports.writeUint64LE = writeUint64LE;
      exports.writeInt64LE = writeUint64LE;
      function readUintBE(bitLength, array, offset) {
        if (offset === void 0) {
          offset = 0;
        }
        if (bitLength % 8 !== 0) {
          throw new Error("readUintBE supports only bitLengths divisible by 8");
        }
        if (bitLength / 8 > array.length - offset) {
          throw new Error("readUintBE: array is too short for the given bitLength");
        }
        var result = 0;
        var mul = 1;
        for (var i = bitLength / 8 + offset - 1; i >= offset; i--) {
          result += array[i] * mul;
          mul *= 256;
        }
        return result;
      }
      exports.readUintBE = readUintBE;
      function readUintLE(bitLength, array, offset) {
        if (offset === void 0) {
          offset = 0;
        }
        if (bitLength % 8 !== 0) {
          throw new Error("readUintLE supports only bitLengths divisible by 8");
        }
        if (bitLength / 8 > array.length - offset) {
          throw new Error("readUintLE: array is too short for the given bitLength");
        }
        var result = 0;
        var mul = 1;
        for (var i = offset; i < offset + bitLength / 8; i++) {
          result += array[i] * mul;
          mul *= 256;
        }
        return result;
      }
      exports.readUintLE = readUintLE;
      function writeUintBE(bitLength, value, out, offset) {
        if (out === void 0) {
          out = new Uint8Array(bitLength / 8);
        }
        if (offset === void 0) {
          offset = 0;
        }
        if (bitLength % 8 !== 0) {
          throw new Error("writeUintBE supports only bitLengths divisible by 8");
        }
        if (!int_1.isSafeInteger(value)) {
          throw new Error("writeUintBE value must be an integer");
        }
        var div = 1;
        for (var i = bitLength / 8 + offset - 1; i >= offset; i--) {
          out[i] = value / div & 255;
          div *= 256;
        }
        return out;
      }
      exports.writeUintBE = writeUintBE;
      function writeUintLE(bitLength, value, out, offset) {
        if (out === void 0) {
          out = new Uint8Array(bitLength / 8);
        }
        if (offset === void 0) {
          offset = 0;
        }
        if (bitLength % 8 !== 0) {
          throw new Error("writeUintLE supports only bitLengths divisible by 8");
        }
        if (!int_1.isSafeInteger(value)) {
          throw new Error("writeUintLE value must be an integer");
        }
        var div = 1;
        for (var i = offset; i < offset + bitLength / 8; i++) {
          out[i] = value / div & 255;
          div *= 256;
        }
        return out;
      }
      exports.writeUintLE = writeUintLE;
      function readFloat32BE(array, offset) {
        if (offset === void 0) {
          offset = 0;
        }
        var view = new DataView(array.buffer, array.byteOffset, array.byteLength);
        return view.getFloat32(offset);
      }
      exports.readFloat32BE = readFloat32BE;
      function readFloat32LE(array, offset) {
        if (offset === void 0) {
          offset = 0;
        }
        var view = new DataView(array.buffer, array.byteOffset, array.byteLength);
        return view.getFloat32(offset, true);
      }
      exports.readFloat32LE = readFloat32LE;
      function readFloat64BE(array, offset) {
        if (offset === void 0) {
          offset = 0;
        }
        var view = new DataView(array.buffer, array.byteOffset, array.byteLength);
        return view.getFloat64(offset);
      }
      exports.readFloat64BE = readFloat64BE;
      function readFloat64LE(array, offset) {
        if (offset === void 0) {
          offset = 0;
        }
        var view = new DataView(array.buffer, array.byteOffset, array.byteLength);
        return view.getFloat64(offset, true);
      }
      exports.readFloat64LE = readFloat64LE;
      function writeFloat32BE(value, out, offset) {
        if (out === void 0) {
          out = new Uint8Array(4);
        }
        if (offset === void 0) {
          offset = 0;
        }
        var view = new DataView(out.buffer, out.byteOffset, out.byteLength);
        view.setFloat32(offset, value);
        return out;
      }
      exports.writeFloat32BE = writeFloat32BE;
      function writeFloat32LE(value, out, offset) {
        if (out === void 0) {
          out = new Uint8Array(4);
        }
        if (offset === void 0) {
          offset = 0;
        }
        var view = new DataView(out.buffer, out.byteOffset, out.byteLength);
        view.setFloat32(offset, value, true);
        return out;
      }
      exports.writeFloat32LE = writeFloat32LE;
      function writeFloat64BE(value, out, offset) {
        if (out === void 0) {
          out = new Uint8Array(8);
        }
        if (offset === void 0) {
          offset = 0;
        }
        var view = new DataView(out.buffer, out.byteOffset, out.byteLength);
        view.setFloat64(offset, value);
        return out;
      }
      exports.writeFloat64BE = writeFloat64BE;
      function writeFloat64LE(value, out, offset) {
        if (out === void 0) {
          out = new Uint8Array(8);
        }
        if (offset === void 0) {
          offset = 0;
        }
        var view = new DataView(out.buffer, out.byteOffset, out.byteLength);
        view.setFloat64(offset, value, true);
        return out;
      }
      exports.writeFloat64LE = writeFloat64LE;
    }
  });

  // node_modules/@stablelib/random/lib/random.js
  var require_random = __commonJS({
    "node_modules/@stablelib/random/lib/random.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.randomStringForEntropy = exports.randomString = exports.randomUint32 = exports.randomBytes = exports.defaultRandomSource = void 0;
      var system_1 = require_system();
      var binary_1 = require_binary();
      var wipe_1 = require_wipe();
      exports.defaultRandomSource = new system_1.SystemRandomSource();
      function randomBytes3(length10, prng = exports.defaultRandomSource) {
        return prng.randomBytes(length10);
      }
      exports.randomBytes = randomBytes3;
      function randomUint32(prng = exports.defaultRandomSource) {
        const buf2 = randomBytes3(4, prng);
        const result = (0, binary_1.readUint32LE)(buf2);
        (0, wipe_1.wipe)(buf2);
        return result;
      }
      exports.randomUint32 = randomUint32;
      var ALPHANUMERIC = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      function randomString(length10, charset = ALPHANUMERIC, prng = exports.defaultRandomSource) {
        if (charset.length < 2) {
          throw new Error("randomString charset is too short");
        }
        if (charset.length > 256) {
          throw new Error("randomString charset is too long");
        }
        let out = "";
        const charsLen = charset.length;
        const maxByte = 256 - 256 % charsLen;
        while (length10 > 0) {
          const buf2 = randomBytes3(Math.ceil(length10 * 256 / maxByte), prng);
          for (let i = 0; i < buf2.length && length10 > 0; i++) {
            const randomByte = buf2[i];
            if (randomByte < maxByte) {
              out += charset.charAt(randomByte % charsLen);
              length10--;
            }
          }
          (0, wipe_1.wipe)(buf2);
        }
        return out;
      }
      exports.randomString = randomString;
      function randomStringForEntropy(bits, charset = ALPHANUMERIC, prng = exports.defaultRandomSource) {
        const length10 = Math.ceil(bits / (Math.log(charset.length) / Math.LN2));
        return randomString(length10, charset, prng);
      }
      exports.randomStringForEntropy = randomStringForEntropy;
    }
  });

  // node_modules/base64-js/index.js
  var require_base64_js = __commonJS({
    "node_modules/base64-js/index.js"(exports) {
      "use strict";
      exports.byteLength = byteLength;
      exports.toByteArray = toByteArray;
      exports.fromByteArray = fromByteArray;
      var lookup = [];
      var revLookup = [];
      var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
      var code8 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
      for (i = 0, len = code8.length; i < len; ++i) {
        lookup[i] = code8[i];
        revLookup[code8.charCodeAt(i)] = i;
      }
      var i;
      var len;
      revLookup["-".charCodeAt(0)] = 62;
      revLookup["_".charCodeAt(0)] = 63;
      function getLens(b64) {
        var len2 = b64.length;
        if (len2 % 4 > 0) {
          throw new Error("Invalid string. Length must be a multiple of 4");
        }
        var validLen = b64.indexOf("=");
        if (validLen === -1)
          validLen = len2;
        var placeHoldersLen = validLen === len2 ? 0 : 4 - validLen % 4;
        return [validLen, placeHoldersLen];
      }
      function byteLength(b64) {
        var lens = getLens(b64);
        var validLen = lens[0];
        var placeHoldersLen = lens[1];
        return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
      }
      function _byteLength(b64, validLen, placeHoldersLen) {
        return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
      }
      function toByteArray(b64) {
        var tmp;
        var lens = getLens(b64);
        var validLen = lens[0];
        var placeHoldersLen = lens[1];
        var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
        var curByte = 0;
        var len2 = placeHoldersLen > 0 ? validLen - 4 : validLen;
        var i2;
        for (i2 = 0; i2 < len2; i2 += 4) {
          tmp = revLookup[b64.charCodeAt(i2)] << 18 | revLookup[b64.charCodeAt(i2 + 1)] << 12 | revLookup[b64.charCodeAt(i2 + 2)] << 6 | revLookup[b64.charCodeAt(i2 + 3)];
          arr[curByte++] = tmp >> 16 & 255;
          arr[curByte++] = tmp >> 8 & 255;
          arr[curByte++] = tmp & 255;
        }
        if (placeHoldersLen === 2) {
          tmp = revLookup[b64.charCodeAt(i2)] << 2 | revLookup[b64.charCodeAt(i2 + 1)] >> 4;
          arr[curByte++] = tmp & 255;
        }
        if (placeHoldersLen === 1) {
          tmp = revLookup[b64.charCodeAt(i2)] << 10 | revLookup[b64.charCodeAt(i2 + 1)] << 4 | revLookup[b64.charCodeAt(i2 + 2)] >> 2;
          arr[curByte++] = tmp >> 8 & 255;
          arr[curByte++] = tmp & 255;
        }
        return arr;
      }
      function tripletToBase64(num) {
        return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63];
      }
      function encodeChunk(uint8, start, end) {
        var tmp;
        var output = [];
        for (var i2 = start; i2 < end; i2 += 3) {
          tmp = (uint8[i2] << 16 & 16711680) + (uint8[i2 + 1] << 8 & 65280) + (uint8[i2 + 2] & 255);
          output.push(tripletToBase64(tmp));
        }
        return output.join("");
      }
      function fromByteArray(uint8) {
        var tmp;
        var len2 = uint8.length;
        var extraBytes = len2 % 3;
        var parts = [];
        var maxChunkLength = 16383;
        for (var i2 = 0, len22 = len2 - extraBytes; i2 < len22; i2 += maxChunkLength) {
          parts.push(encodeChunk(uint8, i2, i2 + maxChunkLength > len22 ? len22 : i2 + maxChunkLength));
        }
        if (extraBytes === 1) {
          tmp = uint8[len2 - 1];
          parts.push(
            lookup[tmp >> 2] + lookup[tmp << 4 & 63] + "=="
          );
        } else if (extraBytes === 2) {
          tmp = (uint8[len2 - 2] << 8) + uint8[len2 - 1];
          parts.push(
            lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + "="
          );
        }
        return parts.join("");
      }
    }
  });

  // node_modules/object-sizeof/byte_size.js
  var require_byte_size = __commonJS({
    "node_modules/object-sizeof/byte_size.js"(exports, module) {
      module.exports = {
        STRING: 2,
        BOOLEAN: 4,
        BYTES: 4,
        NUMBER: 8,
        Int8Array: 1,
        Uint8Array: 1,
        Uint8ClampedArray: 1,
        Int16Array: 2,
        Uint16Array: 2,
        Int32Array: 4,
        Uint32Array: 4,
        Float32Array: 4,
        Float64Array: 8
      };
    }
  });

  // node_modules/ieee754/index.js
  var require_ieee754 = __commonJS({
    "node_modules/ieee754/index.js"(exports) {
      exports.read = function(buffer2, offset, isLE, mLen, nBytes) {
        var e, m;
        var eLen = nBytes * 8 - mLen - 1;
        var eMax = (1 << eLen) - 1;
        var eBias = eMax >> 1;
        var nBits = -7;
        var i = isLE ? nBytes - 1 : 0;
        var d = isLE ? -1 : 1;
        var s = buffer2[offset + i];
        i += d;
        e = s & (1 << -nBits) - 1;
        s >>= -nBits;
        nBits += eLen;
        for (; nBits > 0; e = e * 256 + buffer2[offset + i], i += d, nBits -= 8) {
        }
        m = e & (1 << -nBits) - 1;
        e >>= -nBits;
        nBits += mLen;
        for (; nBits > 0; m = m * 256 + buffer2[offset + i], i += d, nBits -= 8) {
        }
        if (e === 0) {
          e = 1 - eBias;
        } else if (e === eMax) {
          return m ? NaN : (s ? -1 : 1) * Infinity;
        } else {
          m = m + Math.pow(2, mLen);
          e = e - eBias;
        }
        return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
      };
      exports.write = function(buffer2, value, offset, isLE, mLen, nBytes) {
        var e, m, c;
        var eLen = nBytes * 8 - mLen - 1;
        var eMax = (1 << eLen) - 1;
        var eBias = eMax >> 1;
        var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
        var i = isLE ? 0 : nBytes - 1;
        var d = isLE ? 1 : -1;
        var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
        value = Math.abs(value);
        if (isNaN(value) || value === Infinity) {
          m = isNaN(value) ? 1 : 0;
          e = eMax;
        } else {
          e = Math.floor(Math.log(value) / Math.LN2);
          if (value * (c = Math.pow(2, -e)) < 1) {
            e--;
            c *= 2;
          }
          if (e + eBias >= 1) {
            value += rt / c;
          } else {
            value += rt * Math.pow(2, 1 - eBias);
          }
          if (value * c >= 2) {
            e++;
            c /= 2;
          }
          if (e + eBias >= eMax) {
            m = 0;
            e = eMax;
          } else if (e + eBias >= 1) {
            m = (value * c - 1) * Math.pow(2, mLen);
            e = e + eBias;
          } else {
            m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
            e = 0;
          }
        }
        for (; mLen >= 8; buffer2[offset + i] = m & 255, i += d, m /= 256, mLen -= 8) {
        }
        e = e << mLen | m;
        eLen += mLen;
        for (; eLen > 0; buffer2[offset + i] = e & 255, i += d, e /= 256, eLen -= 8) {
        }
        buffer2[offset + i - d] |= s * 128;
      };
    }
  });

  // node_modules/buffer/index.js
  var require_buffer = __commonJS({
    "node_modules/buffer/index.js"(exports) {
      "use strict";
      var base642 = require_base64_js();
      var ieee754 = require_ieee754();
      var customInspectSymbol = typeof Symbol === "function" && typeof Symbol["for"] === "function" ? Symbol["for"]("nodejs.util.inspect.custom") : null;
      exports.Buffer = Buffer2;
      exports.SlowBuffer = SlowBuffer;
      exports.INSPECT_MAX_BYTES = 50;
      var K_MAX_LENGTH = 2147483647;
      exports.kMaxLength = K_MAX_LENGTH;
      Buffer2.TYPED_ARRAY_SUPPORT = typedArraySupport();
      if (!Buffer2.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") {
        console.error(
          "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
        );
      }
      function typedArraySupport() {
        try {
          const arr = new Uint8Array(1);
          const proto = { foo: function() {
            return 42;
          } };
          Object.setPrototypeOf(proto, Uint8Array.prototype);
          Object.setPrototypeOf(arr, proto);
          return arr.foo() === 42;
        } catch (e) {
          return false;
        }
      }
      Object.defineProperty(Buffer2.prototype, "parent", {
        enumerable: true,
        get: function() {
          if (!Buffer2.isBuffer(this))
            return void 0;
          return this.buffer;
        }
      });
      Object.defineProperty(Buffer2.prototype, "offset", {
        enumerable: true,
        get: function() {
          if (!Buffer2.isBuffer(this))
            return void 0;
          return this.byteOffset;
        }
      });
      function createBuffer(length10) {
        if (length10 > K_MAX_LENGTH) {
          throw new RangeError('The value "' + length10 + '" is invalid for option "size"');
        }
        const buf2 = new Uint8Array(length10);
        Object.setPrototypeOf(buf2, Buffer2.prototype);
        return buf2;
      }
      function Buffer2(arg, encodingOrOffset, length10) {
        if (typeof arg === "number") {
          if (typeof encodingOrOffset === "string") {
            throw new TypeError(
              'The "string" argument must be of type string. Received type number'
            );
          }
          return allocUnsafe2(arg);
        }
        return from14(arg, encodingOrOffset, length10);
      }
      Buffer2.poolSize = 8192;
      function from14(value, encodingOrOffset, length10) {
        if (typeof value === "string") {
          return fromString22(value, encodingOrOffset);
        }
        if (ArrayBuffer.isView(value)) {
          return fromArrayView(value);
        }
        if (value == null) {
          throw new TypeError(
            "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value
          );
        }
        if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) {
          return fromArrayBuffer(value, encodingOrOffset, length10);
        }
        if (typeof SharedArrayBuffer !== "undefined" && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) {
          return fromArrayBuffer(value, encodingOrOffset, length10);
        }
        if (typeof value === "number") {
          throw new TypeError(
            'The "value" argument must not be of type number. Received type number'
          );
        }
        const valueOf = value.valueOf && value.valueOf();
        if (valueOf != null && valueOf !== value) {
          return Buffer2.from(valueOf, encodingOrOffset, length10);
        }
        const b = fromObject(value);
        if (b)
          return b;
        if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === "function") {
          return Buffer2.from(value[Symbol.toPrimitive]("string"), encodingOrOffset, length10);
        }
        throw new TypeError(
          "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value
        );
      }
      Buffer2.from = function(value, encodingOrOffset, length10) {
        return from14(value, encodingOrOffset, length10);
      };
      Object.setPrototypeOf(Buffer2.prototype, Uint8Array.prototype);
      Object.setPrototypeOf(Buffer2, Uint8Array);
      function assertSize(size) {
        if (typeof size !== "number") {
          throw new TypeError('"size" argument must be of type number');
        } else if (size < 0) {
          throw new RangeError('The value "' + size + '" is invalid for option "size"');
        }
      }
      function alloc2(size, fill, encoding) {
        assertSize(size);
        if (size <= 0) {
          return createBuffer(size);
        }
        if (fill !== void 0) {
          return typeof encoding === "string" ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
        }
        return createBuffer(size);
      }
      Buffer2.alloc = function(size, fill, encoding) {
        return alloc2(size, fill, encoding);
      };
      function allocUnsafe2(size) {
        assertSize(size);
        return createBuffer(size < 0 ? 0 : checked(size) | 0);
      }
      Buffer2.allocUnsafe = function(size) {
        return allocUnsafe2(size);
      };
      Buffer2.allocUnsafeSlow = function(size) {
        return allocUnsafe2(size);
      };
      function fromString22(string2, encoding) {
        if (typeof encoding !== "string" || encoding === "") {
          encoding = "utf8";
        }
        if (!Buffer2.isEncoding(encoding)) {
          throw new TypeError("Unknown encoding: " + encoding);
        }
        const length10 = byteLength(string2, encoding) | 0;
        let buf2 = createBuffer(length10);
        const actual = buf2.write(string2, encoding);
        if (actual !== length10) {
          buf2 = buf2.slice(0, actual);
        }
        return buf2;
      }
      function fromArrayLike3(array) {
        const length10 = array.length < 0 ? 0 : checked(array.length) | 0;
        const buf2 = createBuffer(length10);
        for (let i = 0; i < length10; i += 1) {
          buf2[i] = array[i] & 255;
        }
        return buf2;
      }
      function fromArrayView(arrayView) {
        if (isInstance(arrayView, Uint8Array)) {
          const copy = new Uint8Array(arrayView);
          return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
        }
        return fromArrayLike3(arrayView);
      }
      function fromArrayBuffer(array, byteOffset, length10) {
        if (byteOffset < 0 || array.byteLength < byteOffset) {
          throw new RangeError('"offset" is outside of buffer bounds');
        }
        if (array.byteLength < byteOffset + (length10 || 0)) {
          throw new RangeError('"length" is outside of buffer bounds');
        }
        let buf2;
        if (byteOffset === void 0 && length10 === void 0) {
          buf2 = new Uint8Array(array);
        } else if (length10 === void 0) {
          buf2 = new Uint8Array(array, byteOffset);
        } else {
          buf2 = new Uint8Array(array, byteOffset, length10);
        }
        Object.setPrototypeOf(buf2, Buffer2.prototype);
        return buf2;
      }
      function fromObject(obj) {
        if (Buffer2.isBuffer(obj)) {
          const len = checked(obj.length) | 0;
          const buf2 = createBuffer(len);
          if (buf2.length === 0) {
            return buf2;
          }
          obj.copy(buf2, 0, 0, len);
          return buf2;
        }
        if (obj.length !== void 0) {
          if (typeof obj.length !== "number" || numberIsNaN(obj.length)) {
            return createBuffer(0);
          }
          return fromArrayLike3(obj);
        }
        if (obj.type === "Buffer" && Array.isArray(obj.data)) {
          return fromArrayLike3(obj.data);
        }
      }
      function checked(length10) {
        if (length10 >= K_MAX_LENGTH) {
          throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + " bytes");
        }
        return length10 | 0;
      }
      function SlowBuffer(length10) {
        if (+length10 != length10) {
          length10 = 0;
        }
        return Buffer2.alloc(+length10);
      }
      Buffer2.isBuffer = function isBuffer3(b) {
        return b != null && b._isBuffer === true && b !== Buffer2.prototype;
      };
      Buffer2.compare = function compare4(a, b) {
        if (isInstance(a, Uint8Array))
          a = Buffer2.from(a, a.offset, a.byteLength);
        if (isInstance(b, Uint8Array))
          b = Buffer2.from(b, b.offset, b.byteLength);
        if (!Buffer2.isBuffer(a) || !Buffer2.isBuffer(b)) {
          throw new TypeError(
            'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
          );
        }
        if (a === b)
          return 0;
        let x = a.length;
        let y = b.length;
        for (let i = 0, len = Math.min(x, y); i < len; ++i) {
          if (a[i] !== b[i]) {
            x = a[i];
            y = b[i];
            break;
          }
        }
        if (x < y)
          return -1;
        if (y < x)
          return 1;
        return 0;
      };
      Buffer2.isEncoding = function isEncoding(encoding) {
        switch (String(encoding).toLowerCase()) {
          case "hex":
          case "utf8":
          case "utf-8":
          case "ascii":
          case "latin1":
          case "binary":
          case "base64":
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return true;
          default:
            return false;
        }
      };
      Buffer2.concat = function concat3(list, length10) {
        if (!Array.isArray(list)) {
          throw new TypeError('"list" argument must be an Array of Buffers');
        }
        if (list.length === 0) {
          return Buffer2.alloc(0);
        }
        let i;
        if (length10 === void 0) {
          length10 = 0;
          for (i = 0; i < list.length; ++i) {
            length10 += list[i].length;
          }
        }
        const buffer2 = Buffer2.allocUnsafe(length10);
        let pos = 0;
        for (i = 0; i < list.length; ++i) {
          let buf2 = list[i];
          if (isInstance(buf2, Uint8Array)) {
            if (pos + buf2.length > buffer2.length) {
              if (!Buffer2.isBuffer(buf2))
                buf2 = Buffer2.from(buf2);
              buf2.copy(buffer2, pos);
            } else {
              Uint8Array.prototype.set.call(
                buffer2,
                buf2,
                pos
              );
            }
          } else if (!Buffer2.isBuffer(buf2)) {
            throw new TypeError('"list" argument must be an Array of Buffers');
          } else {
            buf2.copy(buffer2, pos);
          }
          pos += buf2.length;
        }
        return buffer2;
      };
      function byteLength(string2, encoding) {
        if (Buffer2.isBuffer(string2)) {
          return string2.length;
        }
        if (ArrayBuffer.isView(string2) || isInstance(string2, ArrayBuffer)) {
          return string2.byteLength;
        }
        if (typeof string2 !== "string") {
          throw new TypeError(
            'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof string2
          );
        }
        const len = string2.length;
        const mustMatch = arguments.length > 2 && arguments[2] === true;
        if (!mustMatch && len === 0)
          return 0;
        let loweredCase = false;
        for (; ; ) {
          switch (encoding) {
            case "ascii":
            case "latin1":
            case "binary":
              return len;
            case "utf8":
            case "utf-8":
              return utf8ToBytes2(string2).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return len * 2;
            case "hex":
              return len >>> 1;
            case "base64":
              return base64ToBytes(string2).length;
            default:
              if (loweredCase) {
                return mustMatch ? -1 : utf8ToBytes2(string2).length;
              }
              encoding = ("" + encoding).toLowerCase();
              loweredCase = true;
          }
        }
      }
      Buffer2.byteLength = byteLength;
      function slowToString(encoding, start, end) {
        let loweredCase = false;
        if (start === void 0 || start < 0) {
          start = 0;
        }
        if (start > this.length) {
          return "";
        }
        if (end === void 0 || end > this.length) {
          end = this.length;
        }
        if (end <= 0) {
          return "";
        }
        end >>>= 0;
        start >>>= 0;
        if (end <= start) {
          return "";
        }
        if (!encoding)
          encoding = "utf8";
        while (true) {
          switch (encoding) {
            case "hex":
              return hexSlice(this, start, end);
            case "utf8":
            case "utf-8":
              return utf8Slice2(this, start, end);
            case "ascii":
              return asciiSlice(this, start, end);
            case "latin1":
            case "binary":
              return latin1Slice(this, start, end);
            case "base64":
              return base64Slice(this, start, end);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return utf16leSlice(this, start, end);
            default:
              if (loweredCase)
                throw new TypeError("Unknown encoding: " + encoding);
              encoding = (encoding + "").toLowerCase();
              loweredCase = true;
          }
        }
      }
      Buffer2.prototype._isBuffer = true;
      function swap(b, n, m) {
        const i = b[n];
        b[n] = b[m];
        b[m] = i;
      }
      Buffer2.prototype.swap16 = function swap16() {
        const len = this.length;
        if (len % 2 !== 0) {
          throw new RangeError("Buffer size must be a multiple of 16-bits");
        }
        for (let i = 0; i < len; i += 2) {
          swap(this, i, i + 1);
        }
        return this;
      };
      Buffer2.prototype.swap32 = function swap32() {
        const len = this.length;
        if (len % 4 !== 0) {
          throw new RangeError("Buffer size must be a multiple of 32-bits");
        }
        for (let i = 0; i < len; i += 4) {
          swap(this, i, i + 3);
          swap(this, i + 1, i + 2);
        }
        return this;
      };
      Buffer2.prototype.swap64 = function swap64() {
        const len = this.length;
        if (len % 8 !== 0) {
          throw new RangeError("Buffer size must be a multiple of 64-bits");
        }
        for (let i = 0; i < len; i += 8) {
          swap(this, i, i + 7);
          swap(this, i + 1, i + 6);
          swap(this, i + 2, i + 5);
          swap(this, i + 3, i + 4);
        }
        return this;
      };
      Buffer2.prototype.toString = function toString4() {
        const length10 = this.length;
        if (length10 === 0)
          return "";
        if (arguments.length === 0)
          return utf8Slice2(this, 0, length10);
        return slowToString.apply(this, arguments);
      };
      Buffer2.prototype.toLocaleString = Buffer2.prototype.toString;
      Buffer2.prototype.equals = function equals20(b) {
        if (!Buffer2.isBuffer(b))
          throw new TypeError("Argument must be a Buffer");
        if (this === b)
          return true;
        return Buffer2.compare(this, b) === 0;
      };
      Buffer2.prototype.inspect = function inspect() {
        let str = "";
        const max = exports.INSPECT_MAX_BYTES;
        str = this.toString("hex", 0, max).replace(/(.{2})/g, "$1 ").trim();
        if (this.length > max)
          str += " ... ";
        return "<Buffer " + str + ">";
      };
      if (customInspectSymbol) {
        Buffer2.prototype[customInspectSymbol] = Buffer2.prototype.inspect;
      }
      Buffer2.prototype.compare = function compare4(target, start, end, thisStart, thisEnd) {
        if (isInstance(target, Uint8Array)) {
          target = Buffer2.from(target, target.offset, target.byteLength);
        }
        if (!Buffer2.isBuffer(target)) {
          throw new TypeError(
            'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof target
          );
        }
        if (start === void 0) {
          start = 0;
        }
        if (end === void 0) {
          end = target ? target.length : 0;
        }
        if (thisStart === void 0) {
          thisStart = 0;
        }
        if (thisEnd === void 0) {
          thisEnd = this.length;
        }
        if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
          throw new RangeError("out of range index");
        }
        if (thisStart >= thisEnd && start >= end) {
          return 0;
        }
        if (thisStart >= thisEnd) {
          return -1;
        }
        if (start >= end) {
          return 1;
        }
        start >>>= 0;
        end >>>= 0;
        thisStart >>>= 0;
        thisEnd >>>= 0;
        if (this === target)
          return 0;
        let x = thisEnd - thisStart;
        let y = end - start;
        const len = Math.min(x, y);
        const thisCopy = this.slice(thisStart, thisEnd);
        const targetCopy = target.slice(start, end);
        for (let i = 0; i < len; ++i) {
          if (thisCopy[i] !== targetCopy[i]) {
            x = thisCopy[i];
            y = targetCopy[i];
            break;
          }
        }
        if (x < y)
          return -1;
        if (y < x)
          return 1;
        return 0;
      };
      function bidirectionalIndexOf(buffer2, val, byteOffset, encoding, dir) {
        if (buffer2.length === 0)
          return -1;
        if (typeof byteOffset === "string") {
          encoding = byteOffset;
          byteOffset = 0;
        } else if (byteOffset > 2147483647) {
          byteOffset = 2147483647;
        } else if (byteOffset < -2147483648) {
          byteOffset = -2147483648;
        }
        byteOffset = +byteOffset;
        if (numberIsNaN(byteOffset)) {
          byteOffset = dir ? 0 : buffer2.length - 1;
        }
        if (byteOffset < 0)
          byteOffset = buffer2.length + byteOffset;
        if (byteOffset >= buffer2.length) {
          if (dir)
            return -1;
          else
            byteOffset = buffer2.length - 1;
        } else if (byteOffset < 0) {
          if (dir)
            byteOffset = 0;
          else
            return -1;
        }
        if (typeof val === "string") {
          val = Buffer2.from(val, encoding);
        }
        if (Buffer2.isBuffer(val)) {
          if (val.length === 0) {
            return -1;
          }
          return arrayIndexOf(buffer2, val, byteOffset, encoding, dir);
        } else if (typeof val === "number") {
          val = val & 255;
          if (typeof Uint8Array.prototype.indexOf === "function") {
            if (dir) {
              return Uint8Array.prototype.indexOf.call(buffer2, val, byteOffset);
            } else {
              return Uint8Array.prototype.lastIndexOf.call(buffer2, val, byteOffset);
            }
          }
          return arrayIndexOf(buffer2, [val], byteOffset, encoding, dir);
        }
        throw new TypeError("val must be string, number or Buffer");
      }
      function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
        let indexSize = 1;
        let arrLength = arr.length;
        let valLength = val.length;
        if (encoding !== void 0) {
          encoding = String(encoding).toLowerCase();
          if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
            if (arr.length < 2 || val.length < 2) {
              return -1;
            }
            indexSize = 2;
            arrLength /= 2;
            valLength /= 2;
            byteOffset /= 2;
          }
        }
        function read10(buf2, i2) {
          if (indexSize === 1) {
            return buf2[i2];
          } else {
            return buf2.readUInt16BE(i2 * indexSize);
          }
        }
        let i;
        if (dir) {
          let foundIndex = -1;
          for (i = byteOffset; i < arrLength; i++) {
            if (read10(arr, i) === read10(val, foundIndex === -1 ? 0 : i - foundIndex)) {
              if (foundIndex === -1)
                foundIndex = i;
              if (i - foundIndex + 1 === valLength)
                return foundIndex * indexSize;
            } else {
              if (foundIndex !== -1)
                i -= i - foundIndex;
              foundIndex = -1;
            }
          }
        } else {
          if (byteOffset + valLength > arrLength)
            byteOffset = arrLength - valLength;
          for (i = byteOffset; i >= 0; i--) {
            let found = true;
            for (let j = 0; j < valLength; j++) {
              if (read10(arr, i + j) !== read10(val, j)) {
                found = false;
                break;
              }
            }
            if (found)
              return i;
          }
        }
        return -1;
      }
      Buffer2.prototype.includes = function includes(val, byteOffset, encoding) {
        return this.indexOf(val, byteOffset, encoding) !== -1;
      };
      Buffer2.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
        return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
      };
      Buffer2.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
        return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
      };
      function hexWrite(buf2, string2, offset, length10) {
        offset = Number(offset) || 0;
        const remaining = buf2.length - offset;
        if (!length10) {
          length10 = remaining;
        } else {
          length10 = Number(length10);
          if (length10 > remaining) {
            length10 = remaining;
          }
        }
        const strLen = string2.length;
        if (length10 > strLen / 2) {
          length10 = strLen / 2;
        }
        let i;
        for (i = 0; i < length10; ++i) {
          const parsed = parseInt(string2.substr(i * 2, 2), 16);
          if (numberIsNaN(parsed))
            return i;
          buf2[offset + i] = parsed;
        }
        return i;
      }
      function utf8Write(buf2, string2, offset, length10) {
        return blitBuffer(utf8ToBytes2(string2, buf2.length - offset), buf2, offset, length10);
      }
      function asciiWrite(buf2, string2, offset, length10) {
        return blitBuffer(asciiToBytes(string2), buf2, offset, length10);
      }
      function base64Write(buf2, string2, offset, length10) {
        return blitBuffer(base64ToBytes(string2), buf2, offset, length10);
      }
      function ucs2Write(buf2, string2, offset, length10) {
        return blitBuffer(utf16leToBytes(string2, buf2.length - offset), buf2, offset, length10);
      }
      Buffer2.prototype.write = function write(string2, offset, length10, encoding) {
        if (offset === void 0) {
          encoding = "utf8";
          length10 = this.length;
          offset = 0;
        } else if (length10 === void 0 && typeof offset === "string") {
          encoding = offset;
          length10 = this.length;
          offset = 0;
        } else if (isFinite(offset)) {
          offset = offset >>> 0;
          if (isFinite(length10)) {
            length10 = length10 >>> 0;
            if (encoding === void 0)
              encoding = "utf8";
          } else {
            encoding = length10;
            length10 = void 0;
          }
        } else {
          throw new Error(
            "Buffer.write(string, encoding, offset[, length]) is no longer supported"
          );
        }
        const remaining = this.length - offset;
        if (length10 === void 0 || length10 > remaining)
          length10 = remaining;
        if (string2.length > 0 && (length10 < 0 || offset < 0) || offset > this.length) {
          throw new RangeError("Attempt to write outside buffer bounds");
        }
        if (!encoding)
          encoding = "utf8";
        let loweredCase = false;
        for (; ; ) {
          switch (encoding) {
            case "hex":
              return hexWrite(this, string2, offset, length10);
            case "utf8":
            case "utf-8":
              return utf8Write(this, string2, offset, length10);
            case "ascii":
            case "latin1":
            case "binary":
              return asciiWrite(this, string2, offset, length10);
            case "base64":
              return base64Write(this, string2, offset, length10);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return ucs2Write(this, string2, offset, length10);
            default:
              if (loweredCase)
                throw new TypeError("Unknown encoding: " + encoding);
              encoding = ("" + encoding).toLowerCase();
              loweredCase = true;
          }
        }
      };
      Buffer2.prototype.toJSON = function toJSON() {
        return {
          type: "Buffer",
          data: Array.prototype.slice.call(this._arr || this, 0)
        };
      };
      function base64Slice(buf2, start, end) {
        if (start === 0 && end === buf2.length) {
          return base642.fromByteArray(buf2);
        } else {
          return base642.fromByteArray(buf2.slice(start, end));
        }
      }
      function utf8Slice2(buf2, start, end) {
        end = Math.min(buf2.length, end);
        const res = [];
        let i = start;
        while (i < end) {
          const firstByte = buf2[i];
          let codePoint = null;
          let bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
          if (i + bytesPerSequence <= end) {
            let secondByte, thirdByte, fourthByte, tempCodePoint;
            switch (bytesPerSequence) {
              case 1:
                if (firstByte < 128) {
                  codePoint = firstByte;
                }
                break;
              case 2:
                secondByte = buf2[i + 1];
                if ((secondByte & 192) === 128) {
                  tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
                  if (tempCodePoint > 127) {
                    codePoint = tempCodePoint;
                  }
                }
                break;
              case 3:
                secondByte = buf2[i + 1];
                thirdByte = buf2[i + 2];
                if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
                  tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
                  if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) {
                    codePoint = tempCodePoint;
                  }
                }
                break;
              case 4:
                secondByte = buf2[i + 1];
                thirdByte = buf2[i + 2];
                fourthByte = buf2[i + 3];
                if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
                  tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
                  if (tempCodePoint > 65535 && tempCodePoint < 1114112) {
                    codePoint = tempCodePoint;
                  }
                }
            }
          }
          if (codePoint === null) {
            codePoint = 65533;
            bytesPerSequence = 1;
          } else if (codePoint > 65535) {
            codePoint -= 65536;
            res.push(codePoint >>> 10 & 1023 | 55296);
            codePoint = 56320 | codePoint & 1023;
          }
          res.push(codePoint);
          i += bytesPerSequence;
        }
        return decodeCodePointsArray2(res);
      }
      var MAX_ARGUMENTS_LENGTH2 = 4096;
      function decodeCodePointsArray2(codePoints) {
        const len = codePoints.length;
        if (len <= MAX_ARGUMENTS_LENGTH2) {
          return String.fromCharCode.apply(String, codePoints);
        }
        let res = "";
        let i = 0;
        while (i < len) {
          res += String.fromCharCode.apply(
            String,
            codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH2)
          );
        }
        return res;
      }
      function asciiSlice(buf2, start, end) {
        let ret = "";
        end = Math.min(buf2.length, end);
        for (let i = start; i < end; ++i) {
          ret += String.fromCharCode(buf2[i] & 127);
        }
        return ret;
      }
      function latin1Slice(buf2, start, end) {
        let ret = "";
        end = Math.min(buf2.length, end);
        for (let i = start; i < end; ++i) {
          ret += String.fromCharCode(buf2[i]);
        }
        return ret;
      }
      function hexSlice(buf2, start, end) {
        const len = buf2.length;
        if (!start || start < 0)
          start = 0;
        if (!end || end < 0 || end > len)
          end = len;
        let out = "";
        for (let i = start; i < end; ++i) {
          out += hexSliceLookupTable[buf2[i]];
        }
        return out;
      }
      function utf16leSlice(buf2, start, end) {
        const bytes = buf2.slice(start, end);
        let res = "";
        for (let i = 0; i < bytes.length - 1; i += 2) {
          res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
        }
        return res;
      }
      Buffer2.prototype.slice = function slice2(start, end) {
        const len = this.length;
        start = ~~start;
        end = end === void 0 ? len : ~~end;
        if (start < 0) {
          start += len;
          if (start < 0)
            start = 0;
        } else if (start > len) {
          start = len;
        }
        if (end < 0) {
          end += len;
          if (end < 0)
            end = 0;
        } else if (end > len) {
          end = len;
        }
        if (end < start)
          end = start;
        const newBuf = this.subarray(start, end);
        Object.setPrototypeOf(newBuf, Buffer2.prototype);
        return newBuf;
      };
      function checkOffset(offset, ext, length10) {
        if (offset % 1 !== 0 || offset < 0)
          throw new RangeError("offset is not uint");
        if (offset + ext > length10)
          throw new RangeError("Trying to access beyond buffer length");
      }
      Buffer2.prototype.readUintLE = Buffer2.prototype.readUIntLE = function readUIntLE(offset, byteLength2, noAssert) {
        offset = offset >>> 0;
        byteLength2 = byteLength2 >>> 0;
        if (!noAssert)
          checkOffset(offset, byteLength2, this.length);
        let val = this[offset];
        let mul = 1;
        let i = 0;
        while (++i < byteLength2 && (mul *= 256)) {
          val += this[offset + i] * mul;
        }
        return val;
      };
      Buffer2.prototype.readUintBE = Buffer2.prototype.readUIntBE = function readUIntBE(offset, byteLength2, noAssert) {
        offset = offset >>> 0;
        byteLength2 = byteLength2 >>> 0;
        if (!noAssert) {
          checkOffset(offset, byteLength2, this.length);
        }
        let val = this[offset + --byteLength2];
        let mul = 1;
        while (byteLength2 > 0 && (mul *= 256)) {
          val += this[offset + --byteLength2] * mul;
        }
        return val;
      };
      Buffer2.prototype.readUint8 = Buffer2.prototype.readUInt8 = function readUInt8(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert)
          checkOffset(offset, 1, this.length);
        return this[offset];
      };
      Buffer2.prototype.readUint16LE = Buffer2.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert)
          checkOffset(offset, 2, this.length);
        return this[offset] | this[offset + 1] << 8;
      };
      Buffer2.prototype.readUint16BE = Buffer2.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert)
          checkOffset(offset, 2, this.length);
        return this[offset] << 8 | this[offset + 1];
      };
      Buffer2.prototype.readUint32LE = Buffer2.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert)
          checkOffset(offset, 4, this.length);
        return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216;
      };
      Buffer2.prototype.readUint32BE = Buffer2.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert)
          checkOffset(offset, 4, this.length);
        return this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
      };
      Buffer2.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE(offset) {
        offset = offset >>> 0;
        validateNumber(offset, "offset");
        const first2 = this[offset];
        const last2 = this[offset + 7];
        if (first2 === void 0 || last2 === void 0) {
          boundsError(offset, this.length - 8);
        }
        const lo = first2 + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24;
        const hi = this[++offset] + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + last2 * 2 ** 24;
        return BigInt(lo) + (BigInt(hi) << BigInt(32));
      });
      Buffer2.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE(offset) {
        offset = offset >>> 0;
        validateNumber(offset, "offset");
        const first2 = this[offset];
        const last2 = this[offset + 7];
        if (first2 === void 0 || last2 === void 0) {
          boundsError(offset, this.length - 8);
        }
        const hi = first2 * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
        const lo = this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last2;
        return (BigInt(hi) << BigInt(32)) + BigInt(lo);
      });
      Buffer2.prototype.readIntLE = function readIntLE(offset, byteLength2, noAssert) {
        offset = offset >>> 0;
        byteLength2 = byteLength2 >>> 0;
        if (!noAssert)
          checkOffset(offset, byteLength2, this.length);
        let val = this[offset];
        let mul = 1;
        let i = 0;
        while (++i < byteLength2 && (mul *= 256)) {
          val += this[offset + i] * mul;
        }
        mul *= 128;
        if (val >= mul)
          val -= Math.pow(2, 8 * byteLength2);
        return val;
      };
      Buffer2.prototype.readIntBE = function readIntBE(offset, byteLength2, noAssert) {
        offset = offset >>> 0;
        byteLength2 = byteLength2 >>> 0;
        if (!noAssert)
          checkOffset(offset, byteLength2, this.length);
        let i = byteLength2;
        let mul = 1;
        let val = this[offset + --i];
        while (i > 0 && (mul *= 256)) {
          val += this[offset + --i] * mul;
        }
        mul *= 128;
        if (val >= mul)
          val -= Math.pow(2, 8 * byteLength2);
        return val;
      };
      Buffer2.prototype.readInt8 = function readInt8(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert)
          checkOffset(offset, 1, this.length);
        if (!(this[offset] & 128))
          return this[offset];
        return (255 - this[offset] + 1) * -1;
      };
      Buffer2.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert)
          checkOffset(offset, 2, this.length);
        const val = this[offset] | this[offset + 1] << 8;
        return val & 32768 ? val | 4294901760 : val;
      };
      Buffer2.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert)
          checkOffset(offset, 2, this.length);
        const val = this[offset + 1] | this[offset] << 8;
        return val & 32768 ? val | 4294901760 : val;
      };
      Buffer2.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert)
          checkOffset(offset, 4, this.length);
        return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
      };
      Buffer2.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert)
          checkOffset(offset, 4, this.length);
        return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
      };
      Buffer2.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE(offset) {
        offset = offset >>> 0;
        validateNumber(offset, "offset");
        const first2 = this[offset];
        const last2 = this[offset + 7];
        if (first2 === void 0 || last2 === void 0) {
          boundsError(offset, this.length - 8);
        }
        const val = this[offset + 4] + this[offset + 5] * 2 ** 8 + this[offset + 6] * 2 ** 16 + (last2 << 24);
        return (BigInt(val) << BigInt(32)) + BigInt(first2 + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24);
      });
      Buffer2.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE(offset) {
        offset = offset >>> 0;
        validateNumber(offset, "offset");
        const first2 = this[offset];
        const last2 = this[offset + 7];
        if (first2 === void 0 || last2 === void 0) {
          boundsError(offset, this.length - 8);
        }
        const val = (first2 << 24) + // Overflow
        this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
        return (BigInt(val) << BigInt(32)) + BigInt(this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last2);
      });
      Buffer2.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert)
          checkOffset(offset, 4, this.length);
        return ieee754.read(this, offset, true, 23, 4);
      };
      Buffer2.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert)
          checkOffset(offset, 4, this.length);
        return ieee754.read(this, offset, false, 23, 4);
      };
      Buffer2.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert)
          checkOffset(offset, 8, this.length);
        return ieee754.read(this, offset, true, 52, 8);
      };
      Buffer2.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert)
          checkOffset(offset, 8, this.length);
        return ieee754.read(this, offset, false, 52, 8);
      };
      function checkInt(buf2, value, offset, ext, max, min) {
        if (!Buffer2.isBuffer(buf2))
          throw new TypeError('"buffer" argument must be a Buffer instance');
        if (value > max || value < min)
          throw new RangeError('"value" argument is out of bounds');
        if (offset + ext > buf2.length)
          throw new RangeError("Index out of range");
      }
      Buffer2.prototype.writeUintLE = Buffer2.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength2, noAssert) {
        value = +value;
        offset = offset >>> 0;
        byteLength2 = byteLength2 >>> 0;
        if (!noAssert) {
          const maxBytes = Math.pow(2, 8 * byteLength2) - 1;
          checkInt(this, value, offset, byteLength2, maxBytes, 0);
        }
        let mul = 1;
        let i = 0;
        this[offset] = value & 255;
        while (++i < byteLength2 && (mul *= 256)) {
          this[offset + i] = value / mul & 255;
        }
        return offset + byteLength2;
      };
      Buffer2.prototype.writeUintBE = Buffer2.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength2, noAssert) {
        value = +value;
        offset = offset >>> 0;
        byteLength2 = byteLength2 >>> 0;
        if (!noAssert) {
          const maxBytes = Math.pow(2, 8 * byteLength2) - 1;
          checkInt(this, value, offset, byteLength2, maxBytes, 0);
        }
        let i = byteLength2 - 1;
        let mul = 1;
        this[offset + i] = value & 255;
        while (--i >= 0 && (mul *= 256)) {
          this[offset + i] = value / mul & 255;
        }
        return offset + byteLength2;
      };
      Buffer2.prototype.writeUint8 = Buffer2.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert)
          checkInt(this, value, offset, 1, 255, 0);
        this[offset] = value & 255;
        return offset + 1;
      };
      Buffer2.prototype.writeUint16LE = Buffer2.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert)
          checkInt(this, value, offset, 2, 65535, 0);
        this[offset] = value & 255;
        this[offset + 1] = value >>> 8;
        return offset + 2;
      };
      Buffer2.prototype.writeUint16BE = Buffer2.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert)
          checkInt(this, value, offset, 2, 65535, 0);
        this[offset] = value >>> 8;
        this[offset + 1] = value & 255;
        return offset + 2;
      };
      Buffer2.prototype.writeUint32LE = Buffer2.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert)
          checkInt(this, value, offset, 4, 4294967295, 0);
        this[offset + 3] = value >>> 24;
        this[offset + 2] = value >>> 16;
        this[offset + 1] = value >>> 8;
        this[offset] = value & 255;
        return offset + 4;
      };
      Buffer2.prototype.writeUint32BE = Buffer2.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert)
          checkInt(this, value, offset, 4, 4294967295, 0);
        this[offset] = value >>> 24;
        this[offset + 1] = value >>> 16;
        this[offset + 2] = value >>> 8;
        this[offset + 3] = value & 255;
        return offset + 4;
      };
      function wrtBigUInt64LE(buf2, value, offset, min, max) {
        checkIntBI(value, min, max, buf2, offset, 7);
        let lo = Number(value & BigInt(4294967295));
        buf2[offset++] = lo;
        lo = lo >> 8;
        buf2[offset++] = lo;
        lo = lo >> 8;
        buf2[offset++] = lo;
        lo = lo >> 8;
        buf2[offset++] = lo;
        let hi = Number(value >> BigInt(32) & BigInt(4294967295));
        buf2[offset++] = hi;
        hi = hi >> 8;
        buf2[offset++] = hi;
        hi = hi >> 8;
        buf2[offset++] = hi;
        hi = hi >> 8;
        buf2[offset++] = hi;
        return offset;
      }
      function wrtBigUInt64BE(buf2, value, offset, min, max) {
        checkIntBI(value, min, max, buf2, offset, 7);
        let lo = Number(value & BigInt(4294967295));
        buf2[offset + 7] = lo;
        lo = lo >> 8;
        buf2[offset + 6] = lo;
        lo = lo >> 8;
        buf2[offset + 5] = lo;
        lo = lo >> 8;
        buf2[offset + 4] = lo;
        let hi = Number(value >> BigInt(32) & BigInt(4294967295));
        buf2[offset + 3] = hi;
        hi = hi >> 8;
        buf2[offset + 2] = hi;
        hi = hi >> 8;
        buf2[offset + 1] = hi;
        hi = hi >> 8;
        buf2[offset] = hi;
        return offset + 8;
      }
      Buffer2.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE(value, offset = 0) {
        return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
      });
      Buffer2.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE(value, offset = 0) {
        return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
      });
      Buffer2.prototype.writeIntLE = function writeIntLE(value, offset, byteLength2, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) {
          const limit = Math.pow(2, 8 * byteLength2 - 1);
          checkInt(this, value, offset, byteLength2, limit - 1, -limit);
        }
        let i = 0;
        let mul = 1;
        let sub = 0;
        this[offset] = value & 255;
        while (++i < byteLength2 && (mul *= 256)) {
          if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
            sub = 1;
          }
          this[offset + i] = (value / mul >> 0) - sub & 255;
        }
        return offset + byteLength2;
      };
      Buffer2.prototype.writeIntBE = function writeIntBE(value, offset, byteLength2, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) {
          const limit = Math.pow(2, 8 * byteLength2 - 1);
          checkInt(this, value, offset, byteLength2, limit - 1, -limit);
        }
        let i = byteLength2 - 1;
        let mul = 1;
        let sub = 0;
        this[offset + i] = value & 255;
        while (--i >= 0 && (mul *= 256)) {
          if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
            sub = 1;
          }
          this[offset + i] = (value / mul >> 0) - sub & 255;
        }
        return offset + byteLength2;
      };
      Buffer2.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert)
          checkInt(this, value, offset, 1, 127, -128);
        if (value < 0)
          value = 255 + value + 1;
        this[offset] = value & 255;
        return offset + 1;
      };
      Buffer2.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert)
          checkInt(this, value, offset, 2, 32767, -32768);
        this[offset] = value & 255;
        this[offset + 1] = value >>> 8;
        return offset + 2;
      };
      Buffer2.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert)
          checkInt(this, value, offset, 2, 32767, -32768);
        this[offset] = value >>> 8;
        this[offset + 1] = value & 255;
        return offset + 2;
      };
      Buffer2.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert)
          checkInt(this, value, offset, 4, 2147483647, -2147483648);
        this[offset] = value & 255;
        this[offset + 1] = value >>> 8;
        this[offset + 2] = value >>> 16;
        this[offset + 3] = value >>> 24;
        return offset + 4;
      };
      Buffer2.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert)
          checkInt(this, value, offset, 4, 2147483647, -2147483648);
        if (value < 0)
          value = 4294967295 + value + 1;
        this[offset] = value >>> 24;
        this[offset + 1] = value >>> 16;
        this[offset + 2] = value >>> 8;
        this[offset + 3] = value & 255;
        return offset + 4;
      };
      Buffer2.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE(value, offset = 0) {
        return wrtBigUInt64LE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
      });
      Buffer2.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE(value, offset = 0) {
        return wrtBigUInt64BE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
      });
      function checkIEEE754(buf2, value, offset, ext, max, min) {
        if (offset + ext > buf2.length)
          throw new RangeError("Index out of range");
        if (offset < 0)
          throw new RangeError("Index out of range");
      }
      function writeFloat(buf2, value, offset, littleEndian, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) {
          checkIEEE754(buf2, value, offset, 4, 34028234663852886e22, -34028234663852886e22);
        }
        ieee754.write(buf2, value, offset, littleEndian, 23, 4);
        return offset + 4;
      }
      Buffer2.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
        return writeFloat(this, value, offset, true, noAssert);
      };
      Buffer2.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
        return writeFloat(this, value, offset, false, noAssert);
      };
      function writeDouble(buf2, value, offset, littleEndian, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) {
          checkIEEE754(buf2, value, offset, 8, 17976931348623157e292, -17976931348623157e292);
        }
        ieee754.write(buf2, value, offset, littleEndian, 52, 8);
        return offset + 8;
      }
      Buffer2.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
        return writeDouble(this, value, offset, true, noAssert);
      };
      Buffer2.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
        return writeDouble(this, value, offset, false, noAssert);
      };
      Buffer2.prototype.copy = function copy(target, targetStart, start, end) {
        if (!Buffer2.isBuffer(target))
          throw new TypeError("argument should be a Buffer");
        if (!start)
          start = 0;
        if (!end && end !== 0)
          end = this.length;
        if (targetStart >= target.length)
          targetStart = target.length;
        if (!targetStart)
          targetStart = 0;
        if (end > 0 && end < start)
          end = start;
        if (end === start)
          return 0;
        if (target.length === 0 || this.length === 0)
          return 0;
        if (targetStart < 0) {
          throw new RangeError("targetStart out of bounds");
        }
        if (start < 0 || start >= this.length)
          throw new RangeError("Index out of range");
        if (end < 0)
          throw new RangeError("sourceEnd out of bounds");
        if (end > this.length)
          end = this.length;
        if (target.length - targetStart < end - start) {
          end = target.length - targetStart + start;
        }
        const len = end - start;
        if (this === target && typeof Uint8Array.prototype.copyWithin === "function") {
          this.copyWithin(targetStart, start, end);
        } else {
          Uint8Array.prototype.set.call(
            target,
            this.subarray(start, end),
            targetStart
          );
        }
        return len;
      };
      Buffer2.prototype.fill = function fill(val, start, end, encoding) {
        if (typeof val === "string") {
          if (typeof start === "string") {
            encoding = start;
            start = 0;
            end = this.length;
          } else if (typeof end === "string") {
            encoding = end;
            end = this.length;
          }
          if (encoding !== void 0 && typeof encoding !== "string") {
            throw new TypeError("encoding must be a string");
          }
          if (typeof encoding === "string" && !Buffer2.isEncoding(encoding)) {
            throw new TypeError("Unknown encoding: " + encoding);
          }
          if (val.length === 1) {
            const code8 = val.charCodeAt(0);
            if (encoding === "utf8" && code8 < 128 || encoding === "latin1") {
              val = code8;
            }
          }
        } else if (typeof val === "number") {
          val = val & 255;
        } else if (typeof val === "boolean") {
          val = Number(val);
        }
        if (start < 0 || this.length < start || this.length < end) {
          throw new RangeError("Out of range index");
        }
        if (end <= start) {
          return this;
        }
        start = start >>> 0;
        end = end === void 0 ? this.length : end >>> 0;
        if (!val)
          val = 0;
        let i;
        if (typeof val === "number") {
          for (i = start; i < end; ++i) {
            this[i] = val;
          }
        } else {
          const bytes = Buffer2.isBuffer(val) ? val : Buffer2.from(val, encoding);
          const len = bytes.length;
          if (len === 0) {
            throw new TypeError('The value "' + val + '" is invalid for argument "value"');
          }
          for (i = 0; i < end - start; ++i) {
            this[i + start] = bytes[i % len];
          }
        }
        return this;
      };
      var errors = {};
      function E(sym, getMessage, Base) {
        errors[sym] = class NodeError extends Base {
          constructor() {
            super();
            Object.defineProperty(this, "message", {
              value: getMessage.apply(this, arguments),
              writable: true,
              configurable: true
            });
            this.name = `${this.name} [${sym}]`;
            this.stack;
            delete this.name;
          }
          get code() {
            return sym;
          }
          set code(value) {
            Object.defineProperty(this, "code", {
              configurable: true,
              enumerable: true,
              value,
              writable: true
            });
          }
          toString() {
            return `${this.name} [${sym}]: ${this.message}`;
          }
        };
      }
      E(
        "ERR_BUFFER_OUT_OF_BOUNDS",
        function(name8) {
          if (name8) {
            return `${name8} is outside of buffer bounds`;
          }
          return "Attempt to access memory outside buffer bounds";
        },
        RangeError
      );
      E(
        "ERR_INVALID_ARG_TYPE",
        function(name8, actual) {
          return `The "${name8}" argument must be of type number. Received type ${typeof actual}`;
        },
        TypeError
      );
      E(
        "ERR_OUT_OF_RANGE",
        function(str, range, input) {
          let msg = `The value of "${str}" is out of range.`;
          let received = input;
          if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) {
            received = addNumericalSeparator(String(input));
          } else if (typeof input === "bigint") {
            received = String(input);
            if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) {
              received = addNumericalSeparator(received);
            }
            received += "n";
          }
          msg += ` It must be ${range}. Received ${received}`;
          return msg;
        },
        RangeError
      );
      function addNumericalSeparator(val) {
        let res = "";
        let i = val.length;
        const start = val[0] === "-" ? 1 : 0;
        for (; i >= start + 4; i -= 3) {
          res = `_${val.slice(i - 3, i)}${res}`;
        }
        return `${val.slice(0, i)}${res}`;
      }
      function checkBounds(buf2, offset, byteLength2) {
        validateNumber(offset, "offset");
        if (buf2[offset] === void 0 || buf2[offset + byteLength2] === void 0) {
          boundsError(offset, buf2.length - (byteLength2 + 1));
        }
      }
      function checkIntBI(value, min, max, buf2, offset, byteLength2) {
        if (value > max || value < min) {
          const n = typeof min === "bigint" ? "n" : "";
          let range;
          if (byteLength2 > 3) {
            if (min === 0 || min === BigInt(0)) {
              range = `>= 0${n} and < 2${n} ** ${(byteLength2 + 1) * 8}${n}`;
            } else {
              range = `>= -(2${n} ** ${(byteLength2 + 1) * 8 - 1}${n}) and < 2 ** ${(byteLength2 + 1) * 8 - 1}${n}`;
            }
          } else {
            range = `>= ${min}${n} and <= ${max}${n}`;
          }
          throw new errors.ERR_OUT_OF_RANGE("value", range, value);
        }
        checkBounds(buf2, offset, byteLength2);
      }
      function validateNumber(value, name8) {
        if (typeof value !== "number") {
          throw new errors.ERR_INVALID_ARG_TYPE(name8, "number", value);
        }
      }
      function boundsError(value, length10, type) {
        if (Math.floor(value) !== value) {
          validateNumber(value, type);
          throw new errors.ERR_OUT_OF_RANGE(type || "offset", "an integer", value);
        }
        if (length10 < 0) {
          throw new errors.ERR_BUFFER_OUT_OF_BOUNDS();
        }
        throw new errors.ERR_OUT_OF_RANGE(
          type || "offset",
          `>= ${type ? 1 : 0} and <= ${length10}`,
          value
        );
      }
      var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
      function base64clean(str) {
        str = str.split("=")[0];
        str = str.trim().replace(INVALID_BASE64_RE, "");
        if (str.length < 2)
          return "";
        while (str.length % 4 !== 0) {
          str = str + "=";
        }
        return str;
      }
      function utf8ToBytes2(string2, units) {
        units = units || Infinity;
        let codePoint;
        const length10 = string2.length;
        let leadSurrogate = null;
        const bytes = [];
        for (let i = 0; i < length10; ++i) {
          codePoint = string2.charCodeAt(i);
          if (codePoint > 55295 && codePoint < 57344) {
            if (!leadSurrogate) {
              if (codePoint > 56319) {
                if ((units -= 3) > -1)
                  bytes.push(239, 191, 189);
                continue;
              } else if (i + 1 === length10) {
                if ((units -= 3) > -1)
                  bytes.push(239, 191, 189);
                continue;
              }
              leadSurrogate = codePoint;
              continue;
            }
            if (codePoint < 56320) {
              if ((units -= 3) > -1)
                bytes.push(239, 191, 189);
              leadSurrogate = codePoint;
              continue;
            }
            codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
          } else if (leadSurrogate) {
            if ((units -= 3) > -1)
              bytes.push(239, 191, 189);
          }
          leadSurrogate = null;
          if (codePoint < 128) {
            if ((units -= 1) < 0)
              break;
            bytes.push(codePoint);
          } else if (codePoint < 2048) {
            if ((units -= 2) < 0)
              break;
            bytes.push(
              codePoint >> 6 | 192,
              codePoint & 63 | 128
            );
          } else if (codePoint < 65536) {
            if ((units -= 3) < 0)
              break;
            bytes.push(
              codePoint >> 12 | 224,
              codePoint >> 6 & 63 | 128,
              codePoint & 63 | 128
            );
          } else if (codePoint < 1114112) {
            if ((units -= 4) < 0)
              break;
            bytes.push(
              codePoint >> 18 | 240,
              codePoint >> 12 & 63 | 128,
              codePoint >> 6 & 63 | 128,
              codePoint & 63 | 128
            );
          } else {
            throw new Error("Invalid code point");
          }
        }
        return bytes;
      }
      function asciiToBytes(str) {
        const byteArray = [];
        for (let i = 0; i < str.length; ++i) {
          byteArray.push(str.charCodeAt(i) & 255);
        }
        return byteArray;
      }
      function utf16leToBytes(str, units) {
        let c, hi, lo;
        const byteArray = [];
        for (let i = 0; i < str.length; ++i) {
          if ((units -= 2) < 0)
            break;
          c = str.charCodeAt(i);
          hi = c >> 8;
          lo = c % 256;
          byteArray.push(lo);
          byteArray.push(hi);
        }
        return byteArray;
      }
      function base64ToBytes(str) {
        return base642.toByteArray(base64clean(str));
      }
      function blitBuffer(src10, dst, offset, length10) {
        let i;
        for (i = 0; i < length10; ++i) {
          if (i + offset >= dst.length || i >= src10.length)
            break;
          dst[i + offset] = src10[i];
        }
        return i;
      }
      function isInstance(obj, type) {
        return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
      }
      function numberIsNaN(obj) {
        return obj !== obj;
      }
      var hexSliceLookupTable = function() {
        const alphabet2 = "0123456789abcdef";
        const table = new Array(256);
        for (let i = 0; i < 16; ++i) {
          const i16 = i * 16;
          for (let j = 0; j < 16; ++j) {
            table[i16 + j] = alphabet2[i] + alphabet2[j];
          }
        }
        return table;
      }();
      function defineBigIntMethod(fn) {
        return typeof BigInt === "undefined" ? BufferBigIntNotDefined : fn;
      }
      function BufferBigIntNotDefined() {
        throw new Error("BigInt not supported");
      }
    }
  });

  // node_modules/object-sizeof/indexv2.js
  var require_indexv2 = __commonJS({
    "node_modules/object-sizeof/indexv2.js"(exports, module) {
      "use strict";
      var ECMA_SIZES = require_byte_size();
      var Buffer2 = require_buffer().Buffer;
      function preciseStringSizeNode(str) {
        return 12 + 4 * Math.ceil(str.length / 4);
      }
      function isNodeEnvironment() {
        if (typeof window !== "undefined" && typeof document !== "undefined") {
          return false;
        }
        return true;
      }
      function objectSizeComplex(obj) {
        let totalSize = 0;
        const errorIndication = -1;
        try {
          let potentialConversion = obj;
          if (obj instanceof Map) {
            potentialConversion = Object.fromEntries(obj);
          } else if (obj instanceof Set) {
            potentialConversion = Array.from(obj);
          }
          if (obj instanceof Int8Array) {
            return obj.length * ECMA_SIZES.Int8Array;
          } else if (obj instanceof Uint8Array || obj instanceof Uint8ClampedArray) {
            return obj.length * ECMA_SIZES.Uint8Array;
          } else if (obj instanceof Int16Array) {
            return obj.length * ECMA_SIZES.Int16Array;
          } else if (obj instanceof Uint16Array) {
            return obj.length * ECMA_SIZES.Uint16Array;
          } else if (obj instanceof Int32Array) {
            return obj.length * ECMA_SIZES.Int32Array;
          } else if (obj instanceof Uint32Array) {
            return obj.length * ECMA_SIZES.Uint32Array;
          } else if (obj instanceof Float32Array) {
            return obj.length * ECMA_SIZES.Float32Array;
          } else if (obj instanceof Float64Array) {
            return obj.length * ECMA_SIZES.Float64Array;
          }
          const objectToString = JSON.stringify(potentialConversion);
          const buffer2 = new Buffer2.from(objectToString);
          totalSize = buffer2.byteLength;
        } catch (ex) {
          console.error("Error detected, return " + errorIndication, ex);
          return errorIndication;
        }
        return totalSize;
      }
      function objectSizeSimple(obj) {
        const objectList = [];
        const stack = [obj];
        let bytes = 0;
        while (stack.length) {
          const value = stack.pop();
          if (typeof value === "boolean") {
            bytes += ECMA_SIZES.BYTES;
          } else if (typeof value === "string") {
            if (isNodeEnvironment()) {
              bytes += preciseStringSizeNode(value);
            } else {
              bytes += value.length * ECMA_SIZES.STRING;
            }
          } else if (typeof value === "number") {
            bytes += ECMA_SIZES.NUMBER;
          } else if (typeof value === "symbol") {
            const isGlobalSymbol = Symbol.keyFor && Symbol.keyFor(obj);
            if (isGlobalSymbol) {
              bytes += Symbol.keyFor(obj).length * ECMA_SIZES.STRING;
            } else {
              bytes += (obj.toString().length - 8) * ECMA_SIZES.STRING;
            }
          } else if (typeof value === "bigint") {
            bytes += Buffer2.from(value.toString()).byteLength;
          } else if (typeof value === "function") {
            bytes += value.toString().length;
          } else if (typeof value === "object" && objectList.indexOf(value) === -1) {
            objectList.push(value);
            for (const i in value) {
              stack.push(value[i]);
            }
          }
        }
        return bytes;
      }
      module.exports = function(obj) {
        let totalSize = 0;
        if (obj !== null && typeof obj === "object") {
          totalSize = objectSizeComplex(obj);
        } else {
          totalSize = objectSizeSimple(obj);
        }
        return totalSize;
      };
    }
  });

  // node_modules/multiformats/vendor/varint.js
  var encode_1 = encode;
  var MSB = 128;
  var REST = 127;
  var MSBALL = ~REST;
  var INT = Math.pow(2, 31);
  function encode(num, out, offset) {
    out = out || [];
    offset = offset || 0;
    var oldOffset = offset;
    while (num >= INT) {
      out[offset++] = num & 255 | MSB;
      num /= 128;
    }
    while (num & MSBALL) {
      out[offset++] = num & 255 | MSB;
      num >>>= 7;
    }
    out[offset] = num | 0;
    encode.bytes = offset - oldOffset + 1;
    return out;
  }
  var decode = read;
  var MSB$1 = 128;
  var REST$1 = 127;
  function read(buf2, offset) {
    var res = 0, offset = offset || 0, shift = 0, counter = offset, b, l = buf2.length;
    do {
      if (counter >= l) {
        read.bytes = 0;
        throw new RangeError("Could not decode varint");
      }
      b = buf2[counter++];
      res += shift < 28 ? (b & REST$1) << shift : (b & REST$1) * Math.pow(2, shift);
      shift += 7;
    } while (b >= MSB$1);
    read.bytes = counter - offset;
    return res;
  }
  var N1 = Math.pow(2, 7);
  var N2 = Math.pow(2, 14);
  var N3 = Math.pow(2, 21);
  var N4 = Math.pow(2, 28);
  var N5 = Math.pow(2, 35);
  var N6 = Math.pow(2, 42);
  var N7 = Math.pow(2, 49);
  var N8 = Math.pow(2, 56);
  var N9 = Math.pow(2, 63);
  var length = function(value) {
    return value < N1 ? 1 : value < N2 ? 2 : value < N3 ? 3 : value < N4 ? 4 : value < N5 ? 5 : value < N6 ? 6 : value < N7 ? 7 : value < N8 ? 8 : value < N9 ? 9 : 10;
  };
  var varint = {
    encode: encode_1,
    decode,
    encodingLength: length
  };
  var _brrp_varint = varint;
  var varint_default = _brrp_varint;

  // node_modules/multiformats/src/varint.js
  var decode2 = (data, offset = 0) => {
    const code8 = varint_default.decode(data, offset);
    return [code8, varint_default.decode.bytes];
  };
  var encodeTo = (int, target, offset = 0) => {
    varint_default.encode(int, target, offset);
    return target;
  };
  var encodingLength = (int) => {
    return varint_default.encodingLength(int);
  };

  // node_modules/multiformats/src/bytes.js
  var empty = new Uint8Array(0);
  var equals = (aa, bb) => {
    if (aa === bb)
      return true;
    if (aa.byteLength !== bb.byteLength) {
      return false;
    }
    for (let ii = 0; ii < aa.byteLength; ii++) {
      if (aa[ii] !== bb[ii]) {
        return false;
      }
    }
    return true;
  };
  var coerce = (o) => {
    if (o instanceof Uint8Array && o.constructor.name === "Uint8Array")
      return o;
    if (o instanceof ArrayBuffer)
      return new Uint8Array(o);
    if (ArrayBuffer.isView(o)) {
      return new Uint8Array(o.buffer, o.byteOffset, o.byteLength);
    }
    throw new Error("Unknown type, must be binary type");
  };
  var fromString = (str) => new TextEncoder().encode(str);
  var toString = (b) => new TextDecoder().decode(b);

  // node_modules/multiformats/src/hashes/digest.js
  var create = (code8, digest2) => {
    const size = digest2.byteLength;
    const sizeOffset = encodingLength(code8);
    const digestOffset = sizeOffset + encodingLength(size);
    const bytes = new Uint8Array(digestOffset + size);
    encodeTo(code8, bytes, 0);
    encodeTo(size, bytes, sizeOffset);
    bytes.set(digest2, digestOffset);
    return new Digest(code8, size, digest2, bytes);
  };
  var decode3 = (multihash) => {
    const bytes = coerce(multihash);
    const [code8, sizeOffset] = decode2(bytes);
    const [size, digestOffset] = decode2(bytes.subarray(sizeOffset));
    const digest2 = bytes.subarray(sizeOffset + digestOffset);
    if (digest2.byteLength !== size) {
      throw new Error("Incorrect length");
    }
    return new Digest(code8, size, digest2, bytes);
  };
  var equals2 = (a, b) => {
    if (a === b) {
      return true;
    } else {
      const data = (
        /** @type {{code?:unknown, size?:unknown, bytes?:unknown}} */
        b
      );
      return a.code === data.code && a.size === data.size && data.bytes instanceof Uint8Array && equals(a.bytes, data.bytes);
    }
  };
  var Digest = class {
    /**
     * Creates a multihash digest.
     *
     * @param {Code} code
     * @param {Size} size
     * @param {Uint8Array} digest
     * @param {Uint8Array} bytes
     */
    constructor(code8, size, digest2, bytes) {
      this.code = code8;
      this.size = size;
      this.digest = digest2;
      this.bytes = bytes;
    }
  };

  // node_modules/multiformats/src/bases/base58.js
  var base58_exports = {};
  __export(base58_exports, {
    base58btc: () => base58btc,
    base58flickr: () => base58flickr
  });

  // node_modules/multiformats/vendor/base-x.js
  function base(ALPHABET, name8) {
    if (ALPHABET.length >= 255) {
      throw new TypeError("Alphabet too long");
    }
    var BASE_MAP = new Uint8Array(256);
    for (var j = 0; j < BASE_MAP.length; j++) {
      BASE_MAP[j] = 255;
    }
    for (var i = 0; i < ALPHABET.length; i++) {
      var x = ALPHABET.charAt(i);
      var xc = x.charCodeAt(0);
      if (BASE_MAP[xc] !== 255) {
        throw new TypeError(x + " is ambiguous");
      }
      BASE_MAP[xc] = i;
    }
    var BASE = ALPHABET.length;
    var LEADER = ALPHABET.charAt(0);
    var FACTOR = Math.log(BASE) / Math.log(256);
    var iFACTOR = Math.log(256) / Math.log(BASE);
    function encode31(source) {
      if (source instanceof Uint8Array)
        ;
      else if (ArrayBuffer.isView(source)) {
        source = new Uint8Array(source.buffer, source.byteOffset, source.byteLength);
      } else if (Array.isArray(source)) {
        source = Uint8Array.from(source);
      }
      if (!(source instanceof Uint8Array)) {
        throw new TypeError("Expected Uint8Array");
      }
      if (source.length === 0) {
        return "";
      }
      var zeroes = 0;
      var length10 = 0;
      var pbegin = 0;
      var pend = source.length;
      while (pbegin !== pend && source[pbegin] === 0) {
        pbegin++;
        zeroes++;
      }
      var size = (pend - pbegin) * iFACTOR + 1 >>> 0;
      var b58 = new Uint8Array(size);
      while (pbegin !== pend) {
        var carry = source[pbegin];
        var i2 = 0;
        for (var it1 = size - 1; (carry !== 0 || i2 < length10) && it1 !== -1; it1--, i2++) {
          carry += 256 * b58[it1] >>> 0;
          b58[it1] = carry % BASE >>> 0;
          carry = carry / BASE >>> 0;
        }
        if (carry !== 0) {
          throw new Error("Non-zero carry");
        }
        length10 = i2;
        pbegin++;
      }
      var it2 = size - length10;
      while (it2 !== size && b58[it2] === 0) {
        it2++;
      }
      var str = LEADER.repeat(zeroes);
      for (; it2 < size; ++it2) {
        str += ALPHABET.charAt(b58[it2]);
      }
      return str;
    }
    function decodeUnsafe(source) {
      if (typeof source !== "string") {
        throw new TypeError("Expected String");
      }
      if (source.length === 0) {
        return new Uint8Array();
      }
      var psz = 0;
      if (source[psz] === " ") {
        return;
      }
      var zeroes = 0;
      var length10 = 0;
      while (source[psz] === LEADER) {
        zeroes++;
        psz++;
      }
      var size = (source.length - psz) * FACTOR + 1 >>> 0;
      var b256 = new Uint8Array(size);
      while (source[psz]) {
        var carry = BASE_MAP[source.charCodeAt(psz)];
        if (carry === 255) {
          return;
        }
        var i2 = 0;
        for (var it3 = size - 1; (carry !== 0 || i2 < length10) && it3 !== -1; it3--, i2++) {
          carry += BASE * b256[it3] >>> 0;
          b256[it3] = carry % 256 >>> 0;
          carry = carry / 256 >>> 0;
        }
        if (carry !== 0) {
          throw new Error("Non-zero carry");
        }
        length10 = i2;
        psz++;
      }
      if (source[psz] === " ") {
        return;
      }
      var it4 = size - length10;
      while (it4 !== size && b256[it4] === 0) {
        it4++;
      }
      var vch = new Uint8Array(zeroes + (size - it4));
      var j2 = zeroes;
      while (it4 !== size) {
        vch[j2++] = b256[it4++];
      }
      return vch;
    }
    function decode45(string2) {
      var buffer2 = decodeUnsafe(string2);
      if (buffer2) {
        return buffer2;
      }
      throw new Error(`Non-${name8} character`);
    }
    return {
      encode: encode31,
      decodeUnsafe,
      decode: decode45
    };
  }
  var src = base;
  var _brrp__multiformats_scope_baseX = src;
  var base_x_default = _brrp__multiformats_scope_baseX;

  // node_modules/multiformats/src/bases/base.js
  var Encoder = class {
    /**
     * @param {Base} name
     * @param {Prefix} prefix
     * @param {(bytes:Uint8Array) => string} baseEncode
     */
    constructor(name8, prefix, baseEncode) {
      this.name = name8;
      this.prefix = prefix;
      this.baseEncode = baseEncode;
    }
    /**
     * @param {Uint8Array} bytes
     * @returns {API.Multibase<Prefix>}
     */
    encode(bytes) {
      if (bytes instanceof Uint8Array) {
        return `${this.prefix}${this.baseEncode(bytes)}`;
      } else {
        throw Error("Unknown type, must be binary type");
      }
    }
  };
  var Decoder = class {
    /**
     * @param {Base} name
     * @param {Prefix} prefix
     * @param {(text:string) => Uint8Array} baseDecode
     */
    constructor(name8, prefix, baseDecode) {
      this.name = name8;
      this.prefix = prefix;
      if (prefix.codePointAt(0) === void 0) {
        throw new Error("Invalid prefix character");
      }
      this.prefixCodePoint = /** @type {number} */
      prefix.codePointAt(0);
      this.baseDecode = baseDecode;
    }
    /**
     * @param {string} text
     */
    decode(text) {
      if (typeof text === "string") {
        if (text.codePointAt(0) !== this.prefixCodePoint) {
          throw Error(`Unable to decode multibase string ${JSON.stringify(text)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
        }
        return this.baseDecode(text.slice(this.prefix.length));
      } else {
        throw Error("Can only multibase decode strings");
      }
    }
    /**
     * @template {string} OtherPrefix
     * @param {API.UnibaseDecoder<OtherPrefix>|ComposedDecoder<OtherPrefix>} decoder
     * @returns {ComposedDecoder<Prefix|OtherPrefix>}
     */
    or(decoder) {
      return or(this, decoder);
    }
  };
  var ComposedDecoder = class {
    /**
     * @param {Decoders<Prefix>} decoders
     */
    constructor(decoders) {
      this.decoders = decoders;
    }
    /**
     * @template {string} OtherPrefix
     * @param {API.UnibaseDecoder<OtherPrefix>|ComposedDecoder<OtherPrefix>} decoder
     * @returns {ComposedDecoder<Prefix|OtherPrefix>}
     */
    or(decoder) {
      return or(this, decoder);
    }
    /**
     * @param {string} input
     * @returns {Uint8Array}
     */
    decode(input) {
      const prefix = (
        /** @type {Prefix} */
        input[0]
      );
      const decoder = this.decoders[prefix];
      if (decoder) {
        return decoder.decode(input);
      } else {
        throw RangeError(`Unable to decode multibase string ${JSON.stringify(input)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
      }
    }
  };
  var or = (left, right) => new ComposedDecoder(
    /** @type {Decoders<L|R>} */
    {
      ...left.decoders || { [
        /** @type API.UnibaseDecoder<L> */
        left.prefix
      ]: left },
      ...right.decoders || { [
        /** @type API.UnibaseDecoder<R> */
        right.prefix
      ]: right }
    }
  );
  var Codec = class {
    /**
     * @param {Base} name
     * @param {Prefix} prefix
     * @param {(bytes:Uint8Array) => string} baseEncode
     * @param {(text:string) => Uint8Array} baseDecode
     */
    constructor(name8, prefix, baseEncode, baseDecode) {
      this.name = name8;
      this.prefix = prefix;
      this.baseEncode = baseEncode;
      this.baseDecode = baseDecode;
      this.encoder = new Encoder(name8, prefix, baseEncode);
      this.decoder = new Decoder(name8, prefix, baseDecode);
    }
    /**
     * @param {Uint8Array} input
     */
    encode(input) {
      return this.encoder.encode(input);
    }
    /**
     * @param {string} input
     */
    decode(input) {
      return this.decoder.decode(input);
    }
  };
  var from = ({ name: name8, prefix, encode: encode31, decode: decode45 }) => new Codec(name8, prefix, encode31, decode45);
  var baseX = ({ prefix, name: name8, alphabet: alphabet2 }) => {
    const { encode: encode31, decode: decode45 } = base_x_default(alphabet2, name8);
    return from({
      prefix,
      name: name8,
      encode: encode31,
      /**
       * @param {string} text
       */
      decode: (text) => coerce(decode45(text))
    });
  };
  var decode4 = (string2, alphabet2, bitsPerChar, name8) => {
    const codes = {};
    for (let i = 0; i < alphabet2.length; ++i) {
      codes[alphabet2[i]] = i;
    }
    let end = string2.length;
    while (string2[end - 1] === "=") {
      --end;
    }
    const out = new Uint8Array(end * bitsPerChar / 8 | 0);
    let bits = 0;
    let buffer2 = 0;
    let written = 0;
    for (let i = 0; i < end; ++i) {
      const value = codes[string2[i]];
      if (value === void 0) {
        throw new SyntaxError(`Non-${name8} character`);
      }
      buffer2 = buffer2 << bitsPerChar | value;
      bits += bitsPerChar;
      if (bits >= 8) {
        bits -= 8;
        out[written++] = 255 & buffer2 >> bits;
      }
    }
    if (bits >= bitsPerChar || 255 & buffer2 << 8 - bits) {
      throw new SyntaxError("Unexpected end of data");
    }
    return out;
  };
  var encode2 = (data, alphabet2, bitsPerChar) => {
    const pad = alphabet2[alphabet2.length - 1] === "=";
    const mask = (1 << bitsPerChar) - 1;
    let out = "";
    let bits = 0;
    let buffer2 = 0;
    for (let i = 0; i < data.length; ++i) {
      buffer2 = buffer2 << 8 | data[i];
      bits += 8;
      while (bits > bitsPerChar) {
        bits -= bitsPerChar;
        out += alphabet2[mask & buffer2 >> bits];
      }
    }
    if (bits) {
      out += alphabet2[mask & buffer2 << bitsPerChar - bits];
    }
    if (pad) {
      while (out.length * bitsPerChar & 7) {
        out += "=";
      }
    }
    return out;
  };
  var rfc4648 = ({ name: name8, prefix, bitsPerChar, alphabet: alphabet2 }) => {
    return from({
      prefix,
      name: name8,
      encode(input) {
        return encode2(input, alphabet2, bitsPerChar);
      },
      decode(input) {
        return decode4(input, alphabet2, bitsPerChar, name8);
      }
    });
  };

  // node_modules/multiformats/src/bases/base58.js
  var base58btc = baseX({
    name: "base58btc",
    prefix: "z",
    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
  });
  var base58flickr = baseX({
    name: "base58flickr",
    prefix: "Z",
    alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
  });

  // node_modules/multiformats/src/bases/base32.js
  var base32_exports = {};
  __export(base32_exports, {
    base32: () => base32,
    base32hex: () => base32hex,
    base32hexpad: () => base32hexpad,
    base32hexpadupper: () => base32hexpadupper,
    base32hexupper: () => base32hexupper,
    base32pad: () => base32pad,
    base32padupper: () => base32padupper,
    base32upper: () => base32upper,
    base32z: () => base32z
  });
  var base32 = rfc4648({
    prefix: "b",
    name: "base32",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
    bitsPerChar: 5
  });
  var base32upper = rfc4648({
    prefix: "B",
    name: "base32upper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
    bitsPerChar: 5
  });
  var base32pad = rfc4648({
    prefix: "c",
    name: "base32pad",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
    bitsPerChar: 5
  });
  var base32padupper = rfc4648({
    prefix: "C",
    name: "base32padupper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
    bitsPerChar: 5
  });
  var base32hex = rfc4648({
    prefix: "v",
    name: "base32hex",
    alphabet: "0123456789abcdefghijklmnopqrstuv",
    bitsPerChar: 5
  });
  var base32hexupper = rfc4648({
    prefix: "V",
    name: "base32hexupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
    bitsPerChar: 5
  });
  var base32hexpad = rfc4648({
    prefix: "t",
    name: "base32hexpad",
    alphabet: "0123456789abcdefghijklmnopqrstuv=",
    bitsPerChar: 5
  });
  var base32hexpadupper = rfc4648({
    prefix: "T",
    name: "base32hexpadupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
    bitsPerChar: 5
  });
  var base32z = rfc4648({
    prefix: "h",
    name: "base32z",
    alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
    bitsPerChar: 5
  });

  // node_modules/multiformats/src/cid.js
  var format = (link, base13) => {
    const { bytes, version: version7 } = link;
    switch (version7) {
      case 0:
        return toStringV0(
          bytes,
          baseCache(link),
          /** @type {API.MultibaseEncoder<"z">} */
          base13 || base58btc.encoder
        );
      default:
        return toStringV1(
          bytes,
          baseCache(link),
          /** @type {API.MultibaseEncoder<Prefix>} */
          base13 || base32.encoder
        );
    }
  };
  var cache = /* @__PURE__ */ new WeakMap();
  var baseCache = (cid) => {
    const baseCache4 = cache.get(cid);
    if (baseCache4 == null) {
      const baseCache5 = /* @__PURE__ */ new Map();
      cache.set(cid, baseCache5);
      return baseCache5;
    }
    return baseCache4;
  };
  var CID = class _CID {
    /**
     * @param {Version} version - Version of the CID
     * @param {Format} code - Code of the codec content is encoded in, see https://github.com/multiformats/multicodec/blob/master/table.csv
     * @param {API.MultihashDigest<Alg>} multihash - (Multi)hash of the of the content.
     * @param {Uint8Array} bytes
     *
     */
    constructor(version7, code8, multihash, bytes) {
      this.code = code8;
      this.version = version7;
      this.multihash = multihash;
      this.bytes = bytes;
      this["/"] = bytes;
    }
    /**
     * Signalling `cid.asCID === cid` has been replaced with `cid['/'] === cid.bytes`
     * please either use `CID.asCID(cid)` or switch to new signalling mechanism
     *
     * @deprecated
     */
    get asCID() {
      return this;
    }
    // ArrayBufferView
    get byteOffset() {
      return this.bytes.byteOffset;
    }
    // ArrayBufferView
    get byteLength() {
      return this.bytes.byteLength;
    }
    /**
     * @returns {CID<Data, API.DAG_PB, API.SHA_256, 0>}
     */
    toV0() {
      switch (this.version) {
        case 0: {
          return (
            /** @type {CID<Data, API.DAG_PB, API.SHA_256, 0>} */
            this
          );
        }
        case 1: {
          const { code: code8, multihash } = this;
          if (code8 !== DAG_PB_CODE) {
            throw new Error("Cannot convert a non dag-pb CID to CIDv0");
          }
          if (multihash.code !== SHA_256_CODE) {
            throw new Error("Cannot convert non sha2-256 multihash CID to CIDv0");
          }
          return (
            /** @type {CID<Data, API.DAG_PB, API.SHA_256, 0>} */
            _CID.createV0(
              /** @type {API.MultihashDigest<API.SHA_256>} */
              multihash
            )
          );
        }
        default: {
          throw Error(
            `Can not convert CID version ${this.version} to version 0. This is a bug please report`
          );
        }
      }
    }
    /**
     * @returns {CID<Data, Format, Alg, 1>}
     */
    toV1() {
      switch (this.version) {
        case 0: {
          const { code: code8, digest: digest2 } = this.multihash;
          const multihash = create(code8, digest2);
          return (
            /** @type {CID<Data, Format, Alg, 1>} */
            _CID.createV1(this.code, multihash)
          );
        }
        case 1: {
          return (
            /** @type {CID<Data, Format, Alg, 1>} */
            this
          );
        }
        default: {
          throw Error(
            `Can not convert CID version ${this.version} to version 1. This is a bug please report`
          );
        }
      }
    }
    /**
     * @param {unknown} other
     * @returns {other is CID<Data, Format, Alg, Version>}
     */
    equals(other) {
      return _CID.equals(this, other);
    }
    /**
     * @template {unknown} Data
     * @template {number} Format
     * @template {number} Alg
     * @template {API.Version} Version
     * @param {API.Link<Data, Format, Alg, Version>} self
     * @param {unknown} other
     * @returns {other is CID}
     */
    static equals(self2, other) {
      const unknown = (
        /** @type {{code?:unknown, version?:unknown, multihash?:unknown}} */
        other
      );
      return unknown && self2.code === unknown.code && self2.version === unknown.version && equals2(self2.multihash, unknown.multihash);
    }
    /**
     * @param {API.MultibaseEncoder<string>} [base]
     * @returns {string}
     */
    toString(base13) {
      return format(this, base13);
    }
    toJSON() {
      return { "/": format(this) };
    }
    link() {
      return this;
    }
    get [Symbol.toStringTag]() {
      return "CID";
    }
    // Legacy
    [Symbol.for("nodejs.util.inspect.custom")]() {
      return `CID(${this.toString()})`;
    }
    /**
     * Takes any input `value` and returns a `CID` instance if it was
     * a `CID` otherwise returns `null`. If `value` is instanceof `CID`
     * it will return value back. If `value` is not instance of this CID
     * class, but is compatible CID it will return new instance of this
     * `CID` class. Otherwise returns null.
     *
     * This allows two different incompatible versions of CID library to
     * co-exist and interop as long as binary interface is compatible.
     *
     * @template {unknown} Data
     * @template {number} Format
     * @template {number} Alg
     * @template {API.Version} Version
     * @template {unknown} U
     * @param {API.Link<Data, Format, Alg, Version>|U} input
     * @returns {CID<Data, Format, Alg, Version>|null}
     */
    static asCID(input) {
      if (input == null) {
        return null;
      }
      const value = (
        /** @type {any} */
        input
      );
      if (value instanceof _CID) {
        return value;
      } else if (value["/"] != null && value["/"] === value.bytes || value.asCID === value) {
        const { version: version7, code: code8, multihash, bytes } = value;
        return new _CID(
          version7,
          code8,
          /** @type {API.MultihashDigest<Alg>} */
          multihash,
          bytes || encodeCID(version7, code8, multihash.bytes)
        );
      } else if (value[cidSymbol] === true) {
        const { version: version7, multihash, code: code8 } = value;
        const digest2 = (
          /** @type {API.MultihashDigest<Alg>} */
          decode3(multihash)
        );
        return _CID.create(version7, code8, digest2);
      } else {
        return null;
      }
    }
    /**
     *
     * @template {unknown} Data
     * @template {number} Format
     * @template {number} Alg
     * @template {API.Version} Version
     * @param {Version} version - Version of the CID
     * @param {Format} code - Code of the codec content is encoded in, see https://github.com/multiformats/multicodec/blob/master/table.csv
     * @param {API.MultihashDigest<Alg>} digest - (Multi)hash of the of the content.
     * @returns {CID<Data, Format, Alg, Version>}
     */
    static create(version7, code8, digest2) {
      if (typeof code8 !== "number") {
        throw new Error("String codecs are no longer supported");
      }
      if (!(digest2.bytes instanceof Uint8Array)) {
        throw new Error("Invalid digest");
      }
      switch (version7) {
        case 0: {
          if (code8 !== DAG_PB_CODE) {
            throw new Error(
              `Version 0 CID must use dag-pb (code: ${DAG_PB_CODE}) block encoding`
            );
          } else {
            return new _CID(version7, code8, digest2, digest2.bytes);
          }
        }
        case 1: {
          const bytes = encodeCID(version7, code8, digest2.bytes);
          return new _CID(version7, code8, digest2, bytes);
        }
        default: {
          throw new Error("Invalid version");
        }
      }
    }
    /**
     * Simplified version of `create` for CIDv0.
     *
     * @template {unknown} [T=unknown]
     * @param {API.MultihashDigest<typeof SHA_256_CODE>} digest - Multihash.
     * @returns {CID<T, typeof DAG_PB_CODE, typeof SHA_256_CODE, 0>}
     */
    static createV0(digest2) {
      return _CID.create(0, DAG_PB_CODE, digest2);
    }
    /**
     * Simplified version of `create` for CIDv1.
     *
     * @template {unknown} Data
     * @template {number} Code
     * @template {number} Alg
     * @param {Code} code - Content encoding format code.
     * @param {API.MultihashDigest<Alg>} digest - Miltihash of the content.
     * @returns {CID<Data, Code, Alg, 1>}
     */
    static createV1(code8, digest2) {
      return _CID.create(1, code8, digest2);
    }
    /**
     * Decoded a CID from its binary representation. The byte array must contain
     * only the CID with no additional bytes.
     *
     * An error will be thrown if the bytes provided do not contain a valid
     * binary representation of a CID.
     *
     * @template {unknown} Data
     * @template {number} Code
     * @template {number} Alg
     * @template {API.Version} Ver
     * @param {API.ByteView<API.Link<Data, Code, Alg, Ver>>} bytes
     * @returns {CID<Data, Code, Alg, Ver>}
     */
    static decode(bytes) {
      const [cid, remainder] = _CID.decodeFirst(bytes);
      if (remainder.length) {
        throw new Error("Incorrect length");
      }
      return cid;
    }
    /**
     * Decoded a CID from its binary representation at the beginning of a byte
     * array.
     *
     * Returns an array with the first element containing the CID and the second
     * element containing the remainder of the original byte array. The remainder
     * will be a zero-length byte array if the provided bytes only contained a
     * binary CID representation.
     *
     * @template {unknown} T
     * @template {number} C
     * @template {number} A
     * @template {API.Version} V
     * @param {API.ByteView<API.Link<T, C, A, V>>} bytes
     * @returns {[CID<T, C, A, V>, Uint8Array]}
     */
    static decodeFirst(bytes) {
      const specs = _CID.inspectBytes(bytes);
      const prefixSize = specs.size - specs.multihashSize;
      const multihashBytes = coerce(
        bytes.subarray(prefixSize, prefixSize + specs.multihashSize)
      );
      if (multihashBytes.byteLength !== specs.multihashSize) {
        throw new Error("Incorrect length");
      }
      const digestBytes = multihashBytes.subarray(
        specs.multihashSize - specs.digestSize
      );
      const digest2 = new Digest(
        specs.multihashCode,
        specs.digestSize,
        digestBytes,
        multihashBytes
      );
      const cid = specs.version === 0 ? _CID.createV0(
        /** @type {API.MultihashDigest<API.SHA_256>} */
        digest2
      ) : _CID.createV1(specs.codec, digest2);
      return [
        /** @type {CID<T, C, A, V>} */
        cid,
        bytes.subarray(specs.size)
      ];
    }
    /**
     * Inspect the initial bytes of a CID to determine its properties.
     *
     * Involves decoding up to 4 varints. Typically this will require only 4 to 6
     * bytes but for larger multicodec code values and larger multihash digest
     * lengths these varints can be quite large. It is recommended that at least
     * 10 bytes be made available in the `initialBytes` argument for a complete
     * inspection.
     *
     * @template {unknown} T
     * @template {number} C
     * @template {number} A
     * @template {API.Version} V
     * @param {API.ByteView<API.Link<T, C, A, V>>} initialBytes
     * @returns {{ version:V, codec:C, multihashCode:A, digestSize:number, multihashSize:number, size:number }}
     */
    static inspectBytes(initialBytes) {
      let offset = 0;
      const next = () => {
        const [i, length10] = decode2(initialBytes.subarray(offset));
        offset += length10;
        return i;
      };
      let version7 = (
        /** @type {V} */
        next()
      );
      let codec = (
        /** @type {C} */
        DAG_PB_CODE
      );
      if (
        /** @type {number} */
        version7 === 18
      ) {
        version7 = /** @type {V} */
        0;
        offset = 0;
      } else {
        codec = /** @type {C} */
        next();
      }
      if (version7 !== 0 && version7 !== 1) {
        throw new RangeError(`Invalid CID version ${version7}`);
      }
      const prefixSize = offset;
      const multihashCode = (
        /** @type {A} */
        next()
      );
      const digestSize = next();
      const size = offset + digestSize;
      const multihashSize = size - prefixSize;
      return { version: version7, codec, multihashCode, digestSize, multihashSize, size };
    }
    /**
     * Takes cid in a string representation and creates an instance. If `base`
     * decoder is not provided will use a default from the configuration. It will
     * throw an error if encoding of the CID is not compatible with supplied (or
     * a default decoder).
     *
     * @template {string} Prefix
     * @template {unknown} Data
     * @template {number} Code
     * @template {number} Alg
     * @template {API.Version} Ver
     * @param {API.ToString<API.Link<Data, Code, Alg, Ver>, Prefix>} source
     * @param {API.MultibaseDecoder<Prefix>} [base]
     * @returns {CID<Data, Code, Alg, Ver>}
     */
    static parse(source, base13) {
      const [prefix, bytes] = parseCIDtoBytes(source, base13);
      const cid = _CID.decode(bytes);
      if (cid.version === 0 && source[0] !== "Q") {
        throw Error("Version 0 CID string must not include multibase prefix");
      }
      baseCache(cid).set(prefix, source);
      return cid;
    }
  };
  var parseCIDtoBytes = (source, base13) => {
    switch (source[0]) {
      case "Q": {
        const decoder = base13 || base58btc;
        return [
          /** @type {Prefix} */
          base58btc.prefix,
          decoder.decode(`${base58btc.prefix}${source}`)
        ];
      }
      case base58btc.prefix: {
        const decoder = base13 || base58btc;
        return [
          /** @type {Prefix} */
          base58btc.prefix,
          decoder.decode(source)
        ];
      }
      case base32.prefix: {
        const decoder = base13 || base32;
        return [
          /** @type {Prefix} */
          base32.prefix,
          decoder.decode(source)
        ];
      }
      default: {
        if (base13 == null) {
          throw Error(
            "To parse non base32 or base58btc encoded CID multibase decoder must be provided"
          );
        }
        return [
          /** @type {Prefix} */
          source[0],
          base13.decode(source)
        ];
      }
    }
  };
  var toStringV0 = (bytes, cache4, base13) => {
    const { prefix } = base13;
    if (prefix !== base58btc.prefix) {
      throw Error(`Cannot string encode V0 in ${base13.name} encoding`);
    }
    const cid = cache4.get(prefix);
    if (cid == null) {
      const cid2 = base13.encode(bytes).slice(1);
      cache4.set(prefix, cid2);
      return cid2;
    } else {
      return cid;
    }
  };
  var toStringV1 = (bytes, cache4, base13) => {
    const { prefix } = base13;
    const cid = cache4.get(prefix);
    if (cid == null) {
      const cid2 = base13.encode(bytes);
      cache4.set(prefix, cid2);
      return cid2;
    } else {
      return cid;
    }
  };
  var DAG_PB_CODE = 112;
  var SHA_256_CODE = 18;
  var encodeCID = (version7, code8, multihash) => {
    const codeOffset = encodingLength(version7);
    const hashOffset = codeOffset + encodingLength(code8);
    const bytes = new Uint8Array(hashOffset + multihash.byteLength);
    encodeTo(version7, bytes, 0);
    encodeTo(code8, bytes, codeOffset);
    bytes.set(multihash, hashOffset);
    return bytes;
  };
  var cidSymbol = Symbol.for("@ipld/js-cid/CID");

  // node_modules/multiformats/src/bases/base36.js
  var base36_exports = {};
  __export(base36_exports, {
    base36: () => base36,
    base36upper: () => base36upper
  });
  var base36 = baseX({
    prefix: "k",
    name: "base36",
    alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
  });
  var base36upper = baseX({
    prefix: "K",
    name: "base36upper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  });

  // node_modules/@ceramicnetwork/http-client/node_modules/@ceramicnetwork/streamid/lib/stream-type.js
  var registry = {
    tile: 0,
    "caip10-link": 1,
    model: 2,
    MID: 3,
    UNLOADABLE: 4
  };
  function codeByName(name8) {
    const index = registry[name8];
    if (typeof index !== "undefined") {
      return index;
    } else {
      throw new Error(`No stream type registered for name ${name8}`);
    }
  }
  function nameByCode(index) {
    const pair = Object.entries(registry).find(([, v]) => v === index);
    if (pair) {
      return pair[0];
    } else {
      throw new Error(`No stream type registered for index ${index}`);
    }
  }
  var StreamType = class {
  };
  StreamType.nameByCode = nameByCode;
  StreamType.codeByName = codeByName;

  // node_modules/@ceramicnetwork/http-client/node_modules/@ceramicnetwork/streamid/lib/commit-id.js
  var import_varint5 = __toESM(require_varint(), 1);

  // node_modules/uint8arrays/dist/src/util/as-uint8array.js
  function asUint8Array(buf2) {
    if (globalThis.Buffer != null) {
      return new Uint8Array(buf2.buffer, buf2.byteOffset, buf2.byteLength);
    }
    return buf2;
  }

  // node_modules/uint8arrays/dist/src/alloc.js
  function allocUnsafe(size = 0) {
    if (globalThis.Buffer?.allocUnsafe != null) {
      return asUint8Array(globalThis.Buffer.allocUnsafe(size));
    }
    return new Uint8Array(size);
  }

  // node_modules/uint8arrays/dist/src/concat.js
  function concat(arrays, length10) {
    if (length10 == null) {
      length10 = arrays.reduce((acc, curr) => acc + curr.length, 0);
    }
    const output = allocUnsafe(length10);
    let offset = 0;
    for (const arr of arrays) {
      output.set(arr, offset);
      offset += arr.length;
    }
    return asUint8Array(output);
  }

  // node_modules/multiformats/src/bases/identity.js
  var identity_exports = {};
  __export(identity_exports, {
    identity: () => identity
  });
  var identity = from({
    prefix: "\0",
    name: "identity",
    encode: (buf2) => toString(buf2),
    decode: (str) => fromString(str)
  });

  // node_modules/multiformats/src/bases/base2.js
  var base2_exports = {};
  __export(base2_exports, {
    base2: () => base2
  });
  var base2 = rfc4648({
    prefix: "0",
    name: "base2",
    alphabet: "01",
    bitsPerChar: 1
  });

  // node_modules/multiformats/src/bases/base8.js
  var base8_exports = {};
  __export(base8_exports, {
    base8: () => base8
  });
  var base8 = rfc4648({
    prefix: "7",
    name: "base8",
    alphabet: "01234567",
    bitsPerChar: 3
  });

  // node_modules/multiformats/src/bases/base10.js
  var base10_exports = {};
  __export(base10_exports, {
    base10: () => base10
  });
  var base10 = baseX({
    prefix: "9",
    name: "base10",
    alphabet: "0123456789"
  });

  // node_modules/multiformats/src/bases/base16.js
  var base16_exports = {};
  __export(base16_exports, {
    base16: () => base16,
    base16upper: () => base16upper
  });
  var base16 = rfc4648({
    prefix: "f",
    name: "base16",
    alphabet: "0123456789abcdef",
    bitsPerChar: 4
  });
  var base16upper = rfc4648({
    prefix: "F",
    name: "base16upper",
    alphabet: "0123456789ABCDEF",
    bitsPerChar: 4
  });

  // node_modules/multiformats/src/bases/base64.js
  var base64_exports = {};
  __export(base64_exports, {
    base64: () => base64,
    base64pad: () => base64pad,
    base64url: () => base64url,
    base64urlpad: () => base64urlpad
  });
  var base64 = rfc4648({
    prefix: "m",
    name: "base64",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    bitsPerChar: 6
  });
  var base64pad = rfc4648({
    prefix: "M",
    name: "base64pad",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    bitsPerChar: 6
  });
  var base64url = rfc4648({
    prefix: "u",
    name: "base64url",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
    bitsPerChar: 6
  });
  var base64urlpad = rfc4648({
    prefix: "U",
    name: "base64urlpad",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
    bitsPerChar: 6
  });

  // node_modules/multiformats/src/bases/base256emoji.js
  var base256emoji_exports = {};
  __export(base256emoji_exports, {
    base256emoji: () => base256emoji
  });
  var alphabet = Array.from("\u{1F680}\u{1FA90}\u2604\u{1F6F0}\u{1F30C}\u{1F311}\u{1F312}\u{1F313}\u{1F314}\u{1F315}\u{1F316}\u{1F317}\u{1F318}\u{1F30D}\u{1F30F}\u{1F30E}\u{1F409}\u2600\u{1F4BB}\u{1F5A5}\u{1F4BE}\u{1F4BF}\u{1F602}\u2764\u{1F60D}\u{1F923}\u{1F60A}\u{1F64F}\u{1F495}\u{1F62D}\u{1F618}\u{1F44D}\u{1F605}\u{1F44F}\u{1F601}\u{1F525}\u{1F970}\u{1F494}\u{1F496}\u{1F499}\u{1F622}\u{1F914}\u{1F606}\u{1F644}\u{1F4AA}\u{1F609}\u263A\u{1F44C}\u{1F917}\u{1F49C}\u{1F614}\u{1F60E}\u{1F607}\u{1F339}\u{1F926}\u{1F389}\u{1F49E}\u270C\u2728\u{1F937}\u{1F631}\u{1F60C}\u{1F338}\u{1F64C}\u{1F60B}\u{1F497}\u{1F49A}\u{1F60F}\u{1F49B}\u{1F642}\u{1F493}\u{1F929}\u{1F604}\u{1F600}\u{1F5A4}\u{1F603}\u{1F4AF}\u{1F648}\u{1F447}\u{1F3B6}\u{1F612}\u{1F92D}\u2763\u{1F61C}\u{1F48B}\u{1F440}\u{1F62A}\u{1F611}\u{1F4A5}\u{1F64B}\u{1F61E}\u{1F629}\u{1F621}\u{1F92A}\u{1F44A}\u{1F973}\u{1F625}\u{1F924}\u{1F449}\u{1F483}\u{1F633}\u270B\u{1F61A}\u{1F61D}\u{1F634}\u{1F31F}\u{1F62C}\u{1F643}\u{1F340}\u{1F337}\u{1F63B}\u{1F613}\u2B50\u2705\u{1F97A}\u{1F308}\u{1F608}\u{1F918}\u{1F4A6}\u2714\u{1F623}\u{1F3C3}\u{1F490}\u2639\u{1F38A}\u{1F498}\u{1F620}\u261D\u{1F615}\u{1F33A}\u{1F382}\u{1F33B}\u{1F610}\u{1F595}\u{1F49D}\u{1F64A}\u{1F639}\u{1F5E3}\u{1F4AB}\u{1F480}\u{1F451}\u{1F3B5}\u{1F91E}\u{1F61B}\u{1F534}\u{1F624}\u{1F33C}\u{1F62B}\u26BD\u{1F919}\u2615\u{1F3C6}\u{1F92B}\u{1F448}\u{1F62E}\u{1F646}\u{1F37B}\u{1F343}\u{1F436}\u{1F481}\u{1F632}\u{1F33F}\u{1F9E1}\u{1F381}\u26A1\u{1F31E}\u{1F388}\u274C\u270A\u{1F44B}\u{1F630}\u{1F928}\u{1F636}\u{1F91D}\u{1F6B6}\u{1F4B0}\u{1F353}\u{1F4A2}\u{1F91F}\u{1F641}\u{1F6A8}\u{1F4A8}\u{1F92C}\u2708\u{1F380}\u{1F37A}\u{1F913}\u{1F619}\u{1F49F}\u{1F331}\u{1F616}\u{1F476}\u{1F974}\u25B6\u27A1\u2753\u{1F48E}\u{1F4B8}\u2B07\u{1F628}\u{1F31A}\u{1F98B}\u{1F637}\u{1F57A}\u26A0\u{1F645}\u{1F61F}\u{1F635}\u{1F44E}\u{1F932}\u{1F920}\u{1F927}\u{1F4CC}\u{1F535}\u{1F485}\u{1F9D0}\u{1F43E}\u{1F352}\u{1F617}\u{1F911}\u{1F30A}\u{1F92F}\u{1F437}\u260E\u{1F4A7}\u{1F62F}\u{1F486}\u{1F446}\u{1F3A4}\u{1F647}\u{1F351}\u2744\u{1F334}\u{1F4A3}\u{1F438}\u{1F48C}\u{1F4CD}\u{1F940}\u{1F922}\u{1F445}\u{1F4A1}\u{1F4A9}\u{1F450}\u{1F4F8}\u{1F47B}\u{1F910}\u{1F92E}\u{1F3BC}\u{1F975}\u{1F6A9}\u{1F34E}\u{1F34A}\u{1F47C}\u{1F48D}\u{1F4E3}\u{1F942}");
  var alphabetBytesToChars = (
    /** @type {string[]} */
    alphabet.reduce(
      (p, c, i) => {
        p[i] = c;
        return p;
      },
      /** @type {string[]} */
      []
    )
  );
  var alphabetCharsToBytes = (
    /** @type {number[]} */
    alphabet.reduce(
      (p, c, i) => {
        p[
          /** @type {number} */
          c.codePointAt(0)
        ] = i;
        return p;
      },
      /** @type {number[]} */
      []
    )
  );
  function encode3(data) {
    return data.reduce((p, c) => {
      p += alphabetBytesToChars[c];
      return p;
    }, "");
  }
  function decode5(str) {
    const byts = [];
    for (const char of str) {
      const byt = alphabetCharsToBytes[
        /** @type {number} */
        char.codePointAt(0)
      ];
      if (byt === void 0) {
        throw new Error(`Non-base256emoji character: ${char}`);
      }
      byts.push(byt);
    }
    return new Uint8Array(byts);
  }
  var base256emoji = from({
    prefix: "\u{1F680}",
    name: "base256emoji",
    encode: encode3,
    decode: decode5
  });

  // node_modules/multiformats/src/hashes/sha2-browser.js
  var sha2_browser_exports = {};
  __export(sha2_browser_exports, {
    sha256: () => sha256,
    sha512: () => sha512
  });

  // node_modules/multiformats/src/hashes/hasher.js
  var from2 = ({ name: name8, code: code8, encode: encode31 }) => new Hasher(name8, code8, encode31);
  var Hasher = class {
    /**
     *
     * @param {Name} name
     * @param {Code} code
     * @param {(input: Uint8Array) => Await<Uint8Array>} encode
     */
    constructor(name8, code8, encode31) {
      this.name = name8;
      this.code = code8;
      this.encode = encode31;
    }
    /**
     * @param {Uint8Array} input
     * @returns {Await<Digest.Digest<Code, number>>}
     */
    digest(input) {
      if (input instanceof Uint8Array) {
        const result = this.encode(input);
        return result instanceof Uint8Array ? create(this.code, result) : result.then((digest2) => create(this.code, digest2));
      } else {
        throw Error("Unknown type, must be binary type");
      }
    }
  };

  // node_modules/multiformats/src/hashes/sha2-browser.js
  var sha = (name8) => (
    /**
     * @param {Uint8Array} data
     */
    async (data) => new Uint8Array(await crypto.subtle.digest(name8, data))
  );
  var sha256 = from2({
    name: "sha2-256",
    code: 18,
    encode: sha("SHA-256")
  });
  var sha512 = from2({
    name: "sha2-512",
    code: 19,
    encode: sha("SHA-512")
  });

  // node_modules/multiformats/src/hashes/identity.js
  var identity_exports2 = {};
  __export(identity_exports2, {
    identity: () => identity2
  });
  var code = 0;
  var name = "identity";
  var encode4 = coerce;
  var digest = (input) => create(code, encode4(input));
  var identity2 = { code, name, encode: encode4, digest };

  // node_modules/multiformats/src/codecs/json.js
  var textEncoder = new TextEncoder();
  var textDecoder = new TextDecoder();

  // node_modules/multiformats/src/basics.js
  var bases = { ...identity_exports, ...base2_exports, ...base8_exports, ...base10_exports, ...base16_exports, ...base32_exports, ...base36_exports, ...base58_exports, ...base64_exports, ...base256emoji_exports };
  var hashes = { ...sha2_browser_exports, ...identity_exports2 };

  // node_modules/uint8arrays/dist/src/util/bases.js
  function createCodec(name8, prefix, encode31, decode45) {
    return {
      name: name8,
      prefix,
      encoder: {
        name: name8,
        prefix,
        encode: encode31
      },
      decoder: {
        decode: decode45
      }
    };
  }
  var string = createCodec("utf8", "u", (buf2) => {
    const decoder = new TextDecoder("utf8");
    return "u" + decoder.decode(buf2);
  }, (str) => {
    const encoder = new TextEncoder();
    return encoder.encode(str.substring(1));
  });
  var ascii = createCodec("ascii", "a", (buf2) => {
    let string2 = "a";
    for (let i = 0; i < buf2.length; i++) {
      string2 += String.fromCharCode(buf2[i]);
    }
    return string2;
  }, (str) => {
    str = str.substring(1);
    const buf2 = allocUnsafe(str.length);
    for (let i = 0; i < str.length; i++) {
      buf2[i] = str.charCodeAt(i);
    }
    return buf2;
  });
  var BASES = {
    utf8: string,
    "utf-8": string,
    hex: bases.base16,
    latin1: ascii,
    ascii,
    binary: ascii,
    ...bases
  };
  var bases_default = BASES;

  // node_modules/uint8arrays/dist/src/from-string.js
  function fromString2(string2, encoding = "utf8") {
    const base13 = bases_default[encoding];
    if (base13 == null) {
      throw new Error(`Unsupported encoding "${encoding}"`);
    }
    if ((encoding === "utf8" || encoding === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null) {
      return asUint8Array(globalThis.Buffer.from(string2, "utf-8"));
    }
    return base13.decoder.decode(`${base13.prefix}${string2}`);
  }

  // node_modules/uint8arrays/dist/src/to-string.js
  function toString2(array, encoding = "utf8") {
    const base13 = bases_default[encoding];
    if (base13 == null) {
      throw new Error(`Unsupported encoding "${encoding}"`);
    }
    if ((encoding === "utf8" || encoding === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null) {
      return globalThis.Buffer.from(array.buffer, array.byteOffset, array.byteLength).toString("utf8");
    }
    return base13.encoder.encode(array).substring(1);
  }

  // node_modules/mapmoize/dist/ancillary.js
  var Strategy;
  (function(Strategy2) {
    Strategy2["WEAKMAP"] = "weakmap";
    Strategy2["REPLACE"] = "replace";
  })(Strategy || (Strategy = {}));

  // node_modules/mapmoize/dist/getter.js
  function isGetterDescriptor(input) {
    return Boolean(input.get);
  }
  function memoizeGetter(descriptor, propertyKey, strategy) {
    const originalFunction = descriptor.get;
    switch (strategy) {
      case Strategy.WEAKMAP: {
        const bindings = /* @__PURE__ */ new WeakMap();
        descriptor.get = function() {
          let memoized = bindings.get(this);
          if (!memoized) {
            memoized = originalFunction.apply(this);
            bindings.set(this, memoized);
          }
          return memoized;
        };
        break;
      }
      case Strategy.REPLACE: {
        descriptor.get = function() {
          const value = originalFunction.apply(this);
          Object.defineProperty(this, propertyKey, {
            configurable: false,
            enumerable: false,
            value
          });
          return value;
        };
        break;
      }
      default:
        throw new Error(`Unsupported strategy: ${strategy}`);
    }
  }

  // node_modules/mapmoize/dist/method.js
  function isMethodDescriptor(input) {
    return Boolean(input.value);
  }
  function memoizeMethod(descriptor, propertyKey, strategy, hashFunction, argsCacheBuilder) {
    const originalMethod = descriptor.value;
    switch (originalMethod.length) {
      case 0: {
        switch (strategy) {
          case Strategy.REPLACE: {
            descriptor.value = function() {
              const calculated = originalMethod.apply(this);
              Object.defineProperty(this, propertyKey, {
                enumerable: descriptor.enumerable,
                configurable: descriptor.configurable,
                writable: descriptor.writable,
                value: function() {
                  return calculated;
                }
              });
            };
            return;
          }
          case Strategy.WEAKMAP: {
            const bindingsCache = /* @__PURE__ */ new WeakMap();
            descriptor.value = function() {
              if (bindingsCache.has(this)) {
                return bindingsCache.get(this);
              }
              let calculated = originalMethod.apply(this);
              bindingsCache.set(this, calculated);
              return calculated;
            };
            break;
          }
        }
        break;
      }
      case 1: {
        switch (strategy) {
          case Strategy.WEAKMAP: {
            const bindingsCache = /* @__PURE__ */ new WeakMap();
            descriptor.value = function(arg) {
              let argsCache = bindingsCache.get(this);
              if (!argsCache) {
                argsCache = argsCacheBuilder();
                bindingsCache.set(this, argsCache);
              }
              if (argsCache.has(arg)) {
                return argsCache.get(arg);
              }
              const memoized = originalMethod.call(this, arg);
              argsCache.set(arg, memoized);
              return memoized;
            };
            break;
          }
          case Strategy.REPLACE: {
            descriptor.value = function(arg) {
              const memoizationContainer = argsCacheBuilder();
              function replacement(arg2) {
                if (memoizationContainer.has(arg2)) {
                  return memoizationContainer.get(arg2);
                } else {
                  const memoized = originalMethod.call(this, arg2);
                  memoizationContainer.set(arg2, memoized);
                  return memoized;
                }
              }
              Object.defineProperty(this, propertyKey, {
                configurable: descriptor.configurable,
                enumerable: descriptor.enumerable,
                writable: descriptor.writable,
                value: replacement
              });
              return replacement.call(this, arg);
            };
            break;
          }
        }
        break;
      }
      default: {
        switch (strategy) {
          case Strategy.REPLACE: {
            descriptor.value = function(...args) {
              const memoizationContainer = argsCacheBuilder();
              function replacement(...args2) {
                const digest2 = hashFunction.apply(this, args2);
                if (memoizationContainer.has(digest2)) {
                  return memoizationContainer.get(digest2);
                } else {
                  const memoized = originalMethod.apply(this, args2);
                  memoizationContainer.set(digest2, memoized);
                  return memoized;
                }
              }
              Object.defineProperty(this, propertyKey, {
                configurable: descriptor.configurable,
                enumerable: descriptor.enumerable,
                writable: descriptor.writable,
                value: replacement
              });
              return replacement.apply(this, args);
            };
            break;
          }
          case Strategy.WEAKMAP: {
            const bindingsCache = /* @__PURE__ */ new WeakMap();
            descriptor.value = function replacement(...args) {
              let argsCache = bindingsCache.get(this);
              const digest2 = hashFunction.apply(this, args);
              if (argsCache?.has(digest2)) {
                return argsCache.get(digest2);
              }
              if (!argsCache) {
                argsCache = argsCacheBuilder();
                bindingsCache.set(this, argsCache);
              }
              const memoized = originalMethod.apply(this, args);
              argsCache.set(digest2, memoized);
              return memoized;
            };
          }
        }
      }
    }
  }

  // node_modules/mapmoize/dist/index.js
  function defaultDigest(...args) {
    let result = "";
    for (let i = 0, length10 = args.length; i < length10; i++) {
      result += `${args[i]}$!$`;
    }
    return result;
  }
  function memoize(params) {
    const hashFunction = params?.hashFunction || defaultDigest;
    const strategy = params?.strategy || Strategy.WEAKMAP;
    const argsCacheBuilder = params?.argsCacheBuilder || (() => /* @__PURE__ */ new Map());
    return (target, propertyKey, descriptor) => {
      if (isMethodDescriptor(descriptor)) {
        memoizeMethod(descriptor, propertyKey, strategy, hashFunction, argsCacheBuilder);
        return;
      }
      if (isGetterDescriptor(descriptor)) {
        memoizeGetter(descriptor, propertyKey, strategy);
        return;
      }
      throw new Error("Decorate only a method or get accessor");
    };
  }
  var Memoize = memoize;

  // node_modules/@ceramicnetwork/http-client/node_modules/@ceramicnetwork/streamid/lib/constants.js
  var STREAMID_CODEC = 206;

  // node_modules/multiformats/src/block.js
  function readonly({ enumerable = true, configurable = false } = {}) {
    return { enumerable, configurable, writable: false };
  }
  function* linksWithin(path, value) {
    if (value != null && typeof value === "object") {
      if (Array.isArray(value)) {
        for (const [index, element] of value.entries()) {
          const elementPath = [...path, index];
          const cid = CID.asCID(element);
          if (cid) {
            yield [elementPath.join("/"), cid];
          } else if (typeof element === "object") {
            yield* links(element, elementPath);
          }
        }
      } else {
        const cid = CID.asCID(value);
        if (cid) {
          yield [path.join("/"), cid];
        } else {
          yield* links(value, path);
        }
      }
    }
  }
  function* links(source, base13) {
    if (source == null || source instanceof Uint8Array) {
      return;
    }
    const cid = CID.asCID(source);
    if (cid) {
      yield [base13.join("/"), cid];
    }
    for (const [key, value] of Object.entries(source)) {
      const path = (
        /** @type {[string|number, string]} */
        [...base13, key]
      );
      yield* linksWithin(path, value);
    }
  }
  function* treeWithin(path, value) {
    if (Array.isArray(value)) {
      for (const [index, element] of value.entries()) {
        const elementPath = [...path, index];
        yield elementPath.join("/");
        if (typeof element === "object" && !CID.asCID(element)) {
          yield* tree(element, elementPath);
        }
      }
    } else {
      yield* tree(value, path);
    }
  }
  function* tree(source, base13) {
    if (source == null || typeof source !== "object") {
      return;
    }
    for (const [key, value] of Object.entries(source)) {
      const path = (
        /** @type {[string|number, string]} */
        [...base13, key]
      );
      yield path.join("/");
      if (value != null && !(value instanceof Uint8Array) && typeof value === "object" && !CID.asCID(value)) {
        yield* treeWithin(path, value);
      }
    }
  }
  function get(source, path) {
    let node = (
      /** @type {Record<string, any>} */
      source
    );
    for (const [index, key] of path.entries()) {
      node = node[key];
      if (node == null) {
        throw new Error(`Object has no property at ${path.slice(0, index + 1).map((part) => `[${JSON.stringify(part)}]`).join("")}`);
      }
      const cid = CID.asCID(node);
      if (cid) {
        return { value: cid, remaining: path.slice(index + 1).join("/") };
      }
    }
    return { value: node };
  }
  var Block = class {
    /**
     * @param {object} options
     * @param {CID<T, C, A, V>} options.cid
     * @param {API.ByteView<T>} options.bytes
     * @param {T} options.value
     */
    constructor({ cid, bytes, value }) {
      if (!cid || !bytes || typeof value === "undefined") {
        throw new Error("Missing required argument");
      }
      this.cid = cid;
      this.bytes = bytes;
      this.value = value;
      this.asBlock = this;
      Object.defineProperties(this, {
        cid: readonly(),
        bytes: readonly(),
        value: readonly(),
        asBlock: readonly()
      });
    }
    links() {
      return links(this.value, []);
    }
    tree() {
      return tree(this.value, []);
    }
    /**
     *
     * @param {string} [path]
     * @returns {API.BlockCursorView<unknown>}
     */
    get(path = "/") {
      return get(this.value, path.split("/").filter(Boolean));
    }
  };
  async function encode5({ value, codec, hasher }) {
    if (typeof value === "undefined")
      throw new Error('Missing required argument "value"');
    if (!codec || !hasher)
      throw new Error("Missing required argument: codec or hasher");
    const bytes = codec.encode(value);
    const hash = await hasher.digest(bytes);
    const cid = CID.create(
      1,
      codec.code,
      hash
    );
    return new Block({ value, bytes, cid });
  }

  // node_modules/@ceramicnetwork/http-client/node_modules/@ceramicnetwork/streamid/lib/stream-id.js
  var import_varint4 = __toESM(require_varint(), 1);

  // node_modules/@ceramicnetwork/http-client/node_modules/@ipld/dag-cbor/esm/index.js
  var esm_exports = {};
  __export(esm_exports, {
    code: () => code2,
    decode: () => decode11,
    encode: () => encode9,
    name: () => name2
  });

  // node_modules/cborg/esm/lib/is.js
  var typeofs = [
    "string",
    "number",
    "bigint",
    "symbol"
  ];
  var objectTypeNames = [
    "Function",
    "Generator",
    "AsyncGenerator",
    "GeneratorFunction",
    "AsyncGeneratorFunction",
    "AsyncFunction",
    "Observable",
    "Array",
    "Buffer",
    "Object",
    "RegExp",
    "Date",
    "Error",
    "Map",
    "Set",
    "WeakMap",
    "WeakSet",
    "ArrayBuffer",
    "SharedArrayBuffer",
    "DataView",
    "Promise",
    "URL",
    "HTMLElement",
    "Int8Array",
    "Uint8Array",
    "Uint8ClampedArray",
    "Int16Array",
    "Uint16Array",
    "Int32Array",
    "Uint32Array",
    "Float32Array",
    "Float64Array",
    "BigInt64Array",
    "BigUint64Array"
  ];
  function is(value) {
    if (value === null) {
      return "null";
    }
    if (value === void 0) {
      return "undefined";
    }
    if (value === true || value === false) {
      return "boolean";
    }
    const typeOf = typeof value;
    if (typeofs.includes(typeOf)) {
      return typeOf;
    }
    if (typeOf === "function") {
      return "Function";
    }
    if (Array.isArray(value)) {
      return "Array";
    }
    if (isBuffer(value)) {
      return "Buffer";
    }
    const objectType = getObjectType(value);
    if (objectType) {
      return objectType;
    }
    return "Object";
  }
  function isBuffer(value) {
    return value && value.constructor && value.constructor.isBuffer && value.constructor.isBuffer.call(null, value);
  }
  function getObjectType(value) {
    const objectTypeName = Object.prototype.toString.call(value).slice(8, -1);
    if (objectTypeNames.includes(objectTypeName)) {
      return objectTypeName;
    }
    return void 0;
  }

  // node_modules/cborg/esm/lib/token.js
  var Type = class {
    constructor(major, name8, terminal) {
      this.major = major;
      this.majorEncoded = major << 5;
      this.name = name8;
      this.terminal = terminal;
    }
    toString() {
      return `Type[${this.major}].${this.name}`;
    }
    compare(typ) {
      return this.major < typ.major ? -1 : this.major > typ.major ? 1 : 0;
    }
  };
  Type.uint = new Type(0, "uint", true);
  Type.negint = new Type(1, "negint", true);
  Type.bytes = new Type(2, "bytes", true);
  Type.string = new Type(3, "string", true);
  Type.array = new Type(4, "array", false);
  Type.map = new Type(5, "map", false);
  Type.tag = new Type(6, "tag", false);
  Type.float = new Type(7, "float", true);
  Type.false = new Type(7, "false", true);
  Type.true = new Type(7, "true", true);
  Type.null = new Type(7, "null", true);
  Type.undefined = new Type(7, "undefined", true);
  Type.break = new Type(7, "break", true);
  var Token = class {
    constructor(type, value, encodedLength) {
      this.type = type;
      this.value = value;
      this.encodedLength = encodedLength;
      this.encodedBytes = void 0;
      this.byteValue = void 0;
    }
    toString() {
      return `Token[${this.type}].${this.value}`;
    }
  };

  // node_modules/cborg/esm/lib/byte-utils.js
  var useBuffer = globalThis.process && !globalThis.process.browser && globalThis.Buffer && typeof globalThis.Buffer.isBuffer === "function";
  var textDecoder2 = new TextDecoder();
  var textEncoder2 = new TextEncoder();
  function isBuffer2(buf2) {
    return useBuffer && globalThis.Buffer.isBuffer(buf2);
  }
  function asU8A(buf2) {
    if (!(buf2 instanceof Uint8Array)) {
      return Uint8Array.from(buf2);
    }
    return isBuffer2(buf2) ? new Uint8Array(buf2.buffer, buf2.byteOffset, buf2.byteLength) : buf2;
  }
  var toString3 = useBuffer ? (bytes, start, end) => {
    return end - start > 64 ? globalThis.Buffer.from(bytes.subarray(start, end)).toString("utf8") : utf8Slice(bytes, start, end);
  } : (bytes, start, end) => {
    return end - start > 64 ? textDecoder2.decode(bytes.subarray(start, end)) : utf8Slice(bytes, start, end);
  };
  var fromString3 = useBuffer ? (string2) => {
    return string2.length > 64 ? globalThis.Buffer.from(string2) : utf8ToBytes(string2);
  } : (string2) => {
    return string2.length > 64 ? textEncoder2.encode(string2) : utf8ToBytes(string2);
  };
  var fromArray = (arr) => {
    return Uint8Array.from(arr);
  };
  var slice = useBuffer ? (bytes, start, end) => {
    if (isBuffer2(bytes)) {
      return new Uint8Array(bytes.subarray(start, end));
    }
    return bytes.slice(start, end);
  } : (bytes, start, end) => {
    return bytes.slice(start, end);
  };
  var concat2 = useBuffer ? (chunks, length10) => {
    chunks = chunks.map((c) => c instanceof Uint8Array ? c : globalThis.Buffer.from(c));
    return asU8A(globalThis.Buffer.concat(chunks, length10));
  } : (chunks, length10) => {
    const out = new Uint8Array(length10);
    let off = 0;
    for (let b of chunks) {
      if (off + b.length > out.length) {
        b = b.subarray(0, out.length - off);
      }
      out.set(b, off);
      off += b.length;
    }
    return out;
  };
  var alloc = useBuffer ? (size) => {
    return globalThis.Buffer.allocUnsafe(size);
  } : (size) => {
    return new Uint8Array(size);
  };
  function compare2(b1, b2) {
    if (isBuffer2(b1) && isBuffer2(b2)) {
      return b1.compare(b2);
    }
    for (let i = 0; i < b1.length; i++) {
      if (b1[i] === b2[i]) {
        continue;
      }
      return b1[i] < b2[i] ? -1 : 1;
    }
    return 0;
  }
  function utf8ToBytes(string2, units = Infinity) {
    let codePoint;
    const length10 = string2.length;
    let leadSurrogate = null;
    const bytes = [];
    for (let i = 0; i < length10; ++i) {
      codePoint = string2.charCodeAt(i);
      if (codePoint > 55295 && codePoint < 57344) {
        if (!leadSurrogate) {
          if (codePoint > 56319) {
            if ((units -= 3) > -1)
              bytes.push(239, 191, 189);
            continue;
          } else if (i + 1 === length10) {
            if ((units -= 3) > -1)
              bytes.push(239, 191, 189);
            continue;
          }
          leadSurrogate = codePoint;
          continue;
        }
        if (codePoint < 56320) {
          if ((units -= 3) > -1)
            bytes.push(239, 191, 189);
          leadSurrogate = codePoint;
          continue;
        }
        codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
      } else if (leadSurrogate) {
        if ((units -= 3) > -1)
          bytes.push(239, 191, 189);
      }
      leadSurrogate = null;
      if (codePoint < 128) {
        if ((units -= 1) < 0)
          break;
        bytes.push(codePoint);
      } else if (codePoint < 2048) {
        if ((units -= 2) < 0)
          break;
        bytes.push(codePoint >> 6 | 192, codePoint & 63 | 128);
      } else if (codePoint < 65536) {
        if ((units -= 3) < 0)
          break;
        bytes.push(codePoint >> 12 | 224, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
      } else if (codePoint < 1114112) {
        if ((units -= 4) < 0)
          break;
        bytes.push(codePoint >> 18 | 240, codePoint >> 12 & 63 | 128, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
      } else {
        throw new Error("Invalid code point");
      }
    }
    return bytes;
  }
  function utf8Slice(buf2, offset, end) {
    const res = [];
    while (offset < end) {
      const firstByte = buf2[offset];
      let codePoint = null;
      let bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
      if (offset + bytesPerSequence <= end) {
        let secondByte, thirdByte, fourthByte, tempCodePoint;
        switch (bytesPerSequence) {
          case 1:
            if (firstByte < 128) {
              codePoint = firstByte;
            }
            break;
          case 2:
            secondByte = buf2[offset + 1];
            if ((secondByte & 192) === 128) {
              tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
              if (tempCodePoint > 127) {
                codePoint = tempCodePoint;
              }
            }
            break;
          case 3:
            secondByte = buf2[offset + 1];
            thirdByte = buf2[offset + 2];
            if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
              tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
              if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) {
                codePoint = tempCodePoint;
              }
            }
            break;
          case 4:
            secondByte = buf2[offset + 1];
            thirdByte = buf2[offset + 2];
            fourthByte = buf2[offset + 3];
            if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
              tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
              if (tempCodePoint > 65535 && tempCodePoint < 1114112) {
                codePoint = tempCodePoint;
              }
            }
        }
      }
      if (codePoint === null) {
        codePoint = 65533;
        bytesPerSequence = 1;
      } else if (codePoint > 65535) {
        codePoint -= 65536;
        res.push(codePoint >>> 10 & 1023 | 55296);
        codePoint = 56320 | codePoint & 1023;
      }
      res.push(codePoint);
      offset += bytesPerSequence;
    }
    return decodeCodePointsArray(res);
  }
  var MAX_ARGUMENTS_LENGTH = 4096;
  function decodeCodePointsArray(codePoints) {
    const len = codePoints.length;
    if (len <= MAX_ARGUMENTS_LENGTH) {
      return String.fromCharCode.apply(String, codePoints);
    }
    let res = "";
    let i = 0;
    while (i < len) {
      res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
    }
    return res;
  }

  // node_modules/cborg/esm/lib/bl.js
  var defaultChunkSize = 256;
  var Bl = class {
    constructor(chunkSize = defaultChunkSize) {
      this.chunkSize = chunkSize;
      this.cursor = 0;
      this.maxCursor = -1;
      this.chunks = [];
      this._initReuseChunk = null;
    }
    reset() {
      this.cursor = 0;
      this.maxCursor = -1;
      if (this.chunks.length) {
        this.chunks = [];
      }
      if (this._initReuseChunk !== null) {
        this.chunks.push(this._initReuseChunk);
        this.maxCursor = this._initReuseChunk.length - 1;
      }
    }
    push(bytes) {
      let topChunk = this.chunks[this.chunks.length - 1];
      const newMax = this.cursor + bytes.length;
      if (newMax <= this.maxCursor + 1) {
        const chunkPos = topChunk.length - (this.maxCursor - this.cursor) - 1;
        topChunk.set(bytes, chunkPos);
      } else {
        if (topChunk) {
          const chunkPos = topChunk.length - (this.maxCursor - this.cursor) - 1;
          if (chunkPos < topChunk.length) {
            this.chunks[this.chunks.length - 1] = topChunk.subarray(0, chunkPos);
            this.maxCursor = this.cursor - 1;
          }
        }
        if (bytes.length < 64 && bytes.length < this.chunkSize) {
          topChunk = alloc(this.chunkSize);
          this.chunks.push(topChunk);
          this.maxCursor += topChunk.length;
          if (this._initReuseChunk === null) {
            this._initReuseChunk = topChunk;
          }
          topChunk.set(bytes, 0);
        } else {
          this.chunks.push(bytes);
          this.maxCursor += bytes.length;
        }
      }
      this.cursor += bytes.length;
    }
    toBytes(reset = false) {
      let byts;
      if (this.chunks.length === 1) {
        const chunk = this.chunks[0];
        if (reset && this.cursor > chunk.length / 2) {
          byts = this.cursor === chunk.length ? chunk : chunk.subarray(0, this.cursor);
          this._initReuseChunk = null;
          this.chunks = [];
        } else {
          byts = slice(chunk, 0, this.cursor);
        }
      } else {
        byts = concat2(this.chunks, this.cursor);
      }
      if (reset) {
        this.reset();
      }
      return byts;
    }
  };

  // node_modules/cborg/esm/lib/common.js
  var decodeErrPrefix = "CBOR decode error:";
  var encodeErrPrefix = "CBOR encode error:";
  var uintMinorPrefixBytes = [];
  uintMinorPrefixBytes[23] = 1;
  uintMinorPrefixBytes[24] = 2;
  uintMinorPrefixBytes[25] = 3;
  uintMinorPrefixBytes[26] = 5;
  uintMinorPrefixBytes[27] = 9;
  function assertEnoughData(data, pos, need) {
    if (data.length - pos < need) {
      throw new Error(`${decodeErrPrefix} not enough data for type`);
    }
  }

  // node_modules/cborg/esm/lib/0uint.js
  var uintBoundaries = [
    24,
    256,
    65536,
    4294967296,
    BigInt("18446744073709551616")
  ];
  function readUint8(data, offset, options) {
    assertEnoughData(data, offset, 1);
    const value = data[offset];
    if (options.strict === true && value < uintBoundaries[0]) {
      throw new Error(`${decodeErrPrefix} integer encoded in more bytes than necessary (strict decode)`);
    }
    return value;
  }
  function readUint16(data, offset, options) {
    assertEnoughData(data, offset, 2);
    const value = data[offset] << 8 | data[offset + 1];
    if (options.strict === true && value < uintBoundaries[1]) {
      throw new Error(`${decodeErrPrefix} integer encoded in more bytes than necessary (strict decode)`);
    }
    return value;
  }
  function readUint32(data, offset, options) {
    assertEnoughData(data, offset, 4);
    const value = data[offset] * 16777216 + (data[offset + 1] << 16) + (data[offset + 2] << 8) + data[offset + 3];
    if (options.strict === true && value < uintBoundaries[2]) {
      throw new Error(`${decodeErrPrefix} integer encoded in more bytes than necessary (strict decode)`);
    }
    return value;
  }
  function readUint64(data, offset, options) {
    assertEnoughData(data, offset, 8);
    const hi = data[offset] * 16777216 + (data[offset + 1] << 16) + (data[offset + 2] << 8) + data[offset + 3];
    const lo = data[offset + 4] * 16777216 + (data[offset + 5] << 16) + (data[offset + 6] << 8) + data[offset + 7];
    const value = (BigInt(hi) << BigInt(32)) + BigInt(lo);
    if (options.strict === true && value < uintBoundaries[3]) {
      throw new Error(`${decodeErrPrefix} integer encoded in more bytes than necessary (strict decode)`);
    }
    if (value <= Number.MAX_SAFE_INTEGER) {
      return Number(value);
    }
    if (options.allowBigInt === true) {
      return value;
    }
    throw new Error(`${decodeErrPrefix} integers outside of the safe integer range are not supported`);
  }
  function decodeUint8(data, pos, _minor, options) {
    return new Token(Type.uint, readUint8(data, pos + 1, options), 2);
  }
  function decodeUint16(data, pos, _minor, options) {
    return new Token(Type.uint, readUint16(data, pos + 1, options), 3);
  }
  function decodeUint32(data, pos, _minor, options) {
    return new Token(Type.uint, readUint32(data, pos + 1, options), 5);
  }
  function decodeUint64(data, pos, _minor, options) {
    return new Token(Type.uint, readUint64(data, pos + 1, options), 9);
  }
  function encodeUint(buf2, token) {
    return encodeUintValue(buf2, 0, token.value);
  }
  function encodeUintValue(buf2, major, uint) {
    if (uint < uintBoundaries[0]) {
      const nuint = Number(uint);
      buf2.push([major | nuint]);
    } else if (uint < uintBoundaries[1]) {
      const nuint = Number(uint);
      buf2.push([
        major | 24,
        nuint
      ]);
    } else if (uint < uintBoundaries[2]) {
      const nuint = Number(uint);
      buf2.push([
        major | 25,
        nuint >>> 8,
        nuint & 255
      ]);
    } else if (uint < uintBoundaries[3]) {
      const nuint = Number(uint);
      buf2.push([
        major | 26,
        nuint >>> 24 & 255,
        nuint >>> 16 & 255,
        nuint >>> 8 & 255,
        nuint & 255
      ]);
    } else {
      const buint = BigInt(uint);
      if (buint < uintBoundaries[4]) {
        const set = [
          major | 27,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ];
        let lo = Number(buint & BigInt(4294967295));
        let hi = Number(buint >> BigInt(32) & BigInt(4294967295));
        set[8] = lo & 255;
        lo = lo >> 8;
        set[7] = lo & 255;
        lo = lo >> 8;
        set[6] = lo & 255;
        lo = lo >> 8;
        set[5] = lo & 255;
        set[4] = hi & 255;
        hi = hi >> 8;
        set[3] = hi & 255;
        hi = hi >> 8;
        set[2] = hi & 255;
        hi = hi >> 8;
        set[1] = hi & 255;
        buf2.push(set);
      } else {
        throw new Error(`${decodeErrPrefix} encountered BigInt larger than allowable range`);
      }
    }
  }
  encodeUint.encodedSize = function encodedSize(token) {
    return encodeUintValue.encodedSize(token.value);
  };
  encodeUintValue.encodedSize = function encodedSize2(uint) {
    if (uint < uintBoundaries[0]) {
      return 1;
    }
    if (uint < uintBoundaries[1]) {
      return 2;
    }
    if (uint < uintBoundaries[2]) {
      return 3;
    }
    if (uint < uintBoundaries[3]) {
      return 5;
    }
    return 9;
  };
  encodeUint.compareTokens = function compareTokens(tok1, tok2) {
    return tok1.value < tok2.value ? -1 : tok1.value > tok2.value ? 1 : 0;
  };

  // node_modules/cborg/esm/lib/1negint.js
  function decodeNegint8(data, pos, _minor, options) {
    return new Token(Type.negint, -1 - readUint8(data, pos + 1, options), 2);
  }
  function decodeNegint16(data, pos, _minor, options) {
    return new Token(Type.negint, -1 - readUint16(data, pos + 1, options), 3);
  }
  function decodeNegint32(data, pos, _minor, options) {
    return new Token(Type.negint, -1 - readUint32(data, pos + 1, options), 5);
  }
  var neg1b = BigInt(-1);
  var pos1b = BigInt(1);
  function decodeNegint64(data, pos, _minor, options) {
    const int = readUint64(data, pos + 1, options);
    if (typeof int !== "bigint") {
      const value = -1 - int;
      if (value >= Number.MIN_SAFE_INTEGER) {
        return new Token(Type.negint, value, 9);
      }
    }
    if (options.allowBigInt !== true) {
      throw new Error(`${decodeErrPrefix} integers outside of the safe integer range are not supported`);
    }
    return new Token(Type.negint, neg1b - BigInt(int), 9);
  }
  function encodeNegint(buf2, token) {
    const negint = token.value;
    const unsigned = typeof negint === "bigint" ? negint * neg1b - pos1b : negint * -1 - 1;
    encodeUintValue(buf2, token.type.majorEncoded, unsigned);
  }
  encodeNegint.encodedSize = function encodedSize3(token) {
    const negint = token.value;
    const unsigned = typeof negint === "bigint" ? negint * neg1b - pos1b : negint * -1 - 1;
    if (unsigned < uintBoundaries[0]) {
      return 1;
    }
    if (unsigned < uintBoundaries[1]) {
      return 2;
    }
    if (unsigned < uintBoundaries[2]) {
      return 3;
    }
    if (unsigned < uintBoundaries[3]) {
      return 5;
    }
    return 9;
  };
  encodeNegint.compareTokens = function compareTokens2(tok1, tok2) {
    return tok1.value < tok2.value ? 1 : tok1.value > tok2.value ? -1 : 0;
  };

  // node_modules/cborg/esm/lib/2bytes.js
  function toToken(data, pos, prefix, length10) {
    assertEnoughData(data, pos, prefix + length10);
    const buf2 = slice(data, pos + prefix, pos + prefix + length10);
    return new Token(Type.bytes, buf2, prefix + length10);
  }
  function decodeBytesCompact(data, pos, minor, _options) {
    return toToken(data, pos, 1, minor);
  }
  function decodeBytes8(data, pos, _minor, options) {
    return toToken(data, pos, 2, readUint8(data, pos + 1, options));
  }
  function decodeBytes16(data, pos, _minor, options) {
    return toToken(data, pos, 3, readUint16(data, pos + 1, options));
  }
  function decodeBytes32(data, pos, _minor, options) {
    return toToken(data, pos, 5, readUint32(data, pos + 1, options));
  }
  function decodeBytes64(data, pos, _minor, options) {
    const l = readUint64(data, pos + 1, options);
    if (typeof l === "bigint") {
      throw new Error(`${decodeErrPrefix} 64-bit integer bytes lengths not supported`);
    }
    return toToken(data, pos, 9, l);
  }
  function tokenBytes(token) {
    if (token.encodedBytes === void 0) {
      token.encodedBytes = token.type === Type.string ? fromString3(token.value) : token.value;
    }
    return token.encodedBytes;
  }
  function encodeBytes(buf2, token) {
    const bytes = tokenBytes(token);
    encodeUintValue(buf2, token.type.majorEncoded, bytes.length);
    buf2.push(bytes);
  }
  encodeBytes.encodedSize = function encodedSize4(token) {
    const bytes = tokenBytes(token);
    return encodeUintValue.encodedSize(bytes.length) + bytes.length;
  };
  encodeBytes.compareTokens = function compareTokens3(tok1, tok2) {
    return compareBytes(tokenBytes(tok1), tokenBytes(tok2));
  };
  function compareBytes(b1, b2) {
    return b1.length < b2.length ? -1 : b1.length > b2.length ? 1 : compare2(b1, b2);
  }

  // node_modules/cborg/esm/lib/3string.js
  function toToken2(data, pos, prefix, length10, options) {
    const totLength = prefix + length10;
    assertEnoughData(data, pos, totLength);
    const tok = new Token(Type.string, toString3(data, pos + prefix, pos + totLength), totLength);
    if (options.retainStringBytes === true) {
      tok.byteValue = slice(data, pos + prefix, pos + totLength);
    }
    return tok;
  }
  function decodeStringCompact(data, pos, minor, options) {
    return toToken2(data, pos, 1, minor, options);
  }
  function decodeString8(data, pos, _minor, options) {
    return toToken2(data, pos, 2, readUint8(data, pos + 1, options), options);
  }
  function decodeString16(data, pos, _minor, options) {
    return toToken2(data, pos, 3, readUint16(data, pos + 1, options), options);
  }
  function decodeString32(data, pos, _minor, options) {
    return toToken2(data, pos, 5, readUint32(data, pos + 1, options), options);
  }
  function decodeString64(data, pos, _minor, options) {
    const l = readUint64(data, pos + 1, options);
    if (typeof l === "bigint") {
      throw new Error(`${decodeErrPrefix} 64-bit integer string lengths not supported`);
    }
    return toToken2(data, pos, 9, l, options);
  }
  var encodeString = encodeBytes;

  // node_modules/cborg/esm/lib/4array.js
  function toToken3(_data, _pos, prefix, length10) {
    return new Token(Type.array, length10, prefix);
  }
  function decodeArrayCompact(data, pos, minor, _options) {
    return toToken3(data, pos, 1, minor);
  }
  function decodeArray8(data, pos, _minor, options) {
    return toToken3(data, pos, 2, readUint8(data, pos + 1, options));
  }
  function decodeArray16(data, pos, _minor, options) {
    return toToken3(data, pos, 3, readUint16(data, pos + 1, options));
  }
  function decodeArray32(data, pos, _minor, options) {
    return toToken3(data, pos, 5, readUint32(data, pos + 1, options));
  }
  function decodeArray64(data, pos, _minor, options) {
    const l = readUint64(data, pos + 1, options);
    if (typeof l === "bigint") {
      throw new Error(`${decodeErrPrefix} 64-bit integer array lengths not supported`);
    }
    return toToken3(data, pos, 9, l);
  }
  function decodeArrayIndefinite(data, pos, _minor, options) {
    if (options.allowIndefinite === false) {
      throw new Error(`${decodeErrPrefix} indefinite length items not allowed`);
    }
    return toToken3(data, pos, 1, Infinity);
  }
  function encodeArray(buf2, token) {
    encodeUintValue(buf2, Type.array.majorEncoded, token.value);
  }
  encodeArray.compareTokens = encodeUint.compareTokens;
  encodeArray.encodedSize = function encodedSize5(token) {
    return encodeUintValue.encodedSize(token.value);
  };

  // node_modules/cborg/esm/lib/5map.js
  function toToken4(_data, _pos, prefix, length10) {
    return new Token(Type.map, length10, prefix);
  }
  function decodeMapCompact(data, pos, minor, _options) {
    return toToken4(data, pos, 1, minor);
  }
  function decodeMap8(data, pos, _minor, options) {
    return toToken4(data, pos, 2, readUint8(data, pos + 1, options));
  }
  function decodeMap16(data, pos, _minor, options) {
    return toToken4(data, pos, 3, readUint16(data, pos + 1, options));
  }
  function decodeMap32(data, pos, _minor, options) {
    return toToken4(data, pos, 5, readUint32(data, pos + 1, options));
  }
  function decodeMap64(data, pos, _minor, options) {
    const l = readUint64(data, pos + 1, options);
    if (typeof l === "bigint") {
      throw new Error(`${decodeErrPrefix} 64-bit integer map lengths not supported`);
    }
    return toToken4(data, pos, 9, l);
  }
  function decodeMapIndefinite(data, pos, _minor, options) {
    if (options.allowIndefinite === false) {
      throw new Error(`${decodeErrPrefix} indefinite length items not allowed`);
    }
    return toToken4(data, pos, 1, Infinity);
  }
  function encodeMap(buf2, token) {
    encodeUintValue(buf2, Type.map.majorEncoded, token.value);
  }
  encodeMap.compareTokens = encodeUint.compareTokens;
  encodeMap.encodedSize = function encodedSize6(token) {
    return encodeUintValue.encodedSize(token.value);
  };

  // node_modules/cborg/esm/lib/6tag.js
  function decodeTagCompact(_data, _pos, minor, _options) {
    return new Token(Type.tag, minor, 1);
  }
  function decodeTag8(data, pos, _minor, options) {
    return new Token(Type.tag, readUint8(data, pos + 1, options), 2);
  }
  function decodeTag16(data, pos, _minor, options) {
    return new Token(Type.tag, readUint16(data, pos + 1, options), 3);
  }
  function decodeTag32(data, pos, _minor, options) {
    return new Token(Type.tag, readUint32(data, pos + 1, options), 5);
  }
  function decodeTag64(data, pos, _minor, options) {
    return new Token(Type.tag, readUint64(data, pos + 1, options), 9);
  }
  function encodeTag(buf2, token) {
    encodeUintValue(buf2, Type.tag.majorEncoded, token.value);
  }
  encodeTag.compareTokens = encodeUint.compareTokens;
  encodeTag.encodedSize = function encodedSize7(token) {
    return encodeUintValue.encodedSize(token.value);
  };

  // node_modules/cborg/esm/lib/7float.js
  var MINOR_FALSE = 20;
  var MINOR_TRUE = 21;
  var MINOR_NULL = 22;
  var MINOR_UNDEFINED = 23;
  function decodeUndefined(_data, _pos, _minor, options) {
    if (options.allowUndefined === false) {
      throw new Error(`${decodeErrPrefix} undefined values are not supported`);
    } else if (options.coerceUndefinedToNull === true) {
      return new Token(Type.null, null, 1);
    }
    return new Token(Type.undefined, void 0, 1);
  }
  function decodeBreak(_data, _pos, _minor, options) {
    if (options.allowIndefinite === false) {
      throw new Error(`${decodeErrPrefix} indefinite length items not allowed`);
    }
    return new Token(Type.break, void 0, 1);
  }
  function createToken(value, bytes, options) {
    if (options) {
      if (options.allowNaN === false && Number.isNaN(value)) {
        throw new Error(`${decodeErrPrefix} NaN values are not supported`);
      }
      if (options.allowInfinity === false && (value === Infinity || value === -Infinity)) {
        throw new Error(`${decodeErrPrefix} Infinity values are not supported`);
      }
    }
    return new Token(Type.float, value, bytes);
  }
  function decodeFloat16(data, pos, _minor, options) {
    return createToken(readFloat16(data, pos + 1), 3, options);
  }
  function decodeFloat32(data, pos, _minor, options) {
    return createToken(readFloat32(data, pos + 1), 5, options);
  }
  function decodeFloat64(data, pos, _minor, options) {
    return createToken(readFloat64(data, pos + 1), 9, options);
  }
  function encodeFloat(buf2, token, options) {
    const float = token.value;
    if (float === false) {
      buf2.push([Type.float.majorEncoded | MINOR_FALSE]);
    } else if (float === true) {
      buf2.push([Type.float.majorEncoded | MINOR_TRUE]);
    } else if (float === null) {
      buf2.push([Type.float.majorEncoded | MINOR_NULL]);
    } else if (float === void 0) {
      buf2.push([Type.float.majorEncoded | MINOR_UNDEFINED]);
    } else {
      let decoded;
      let success = false;
      if (!options || options.float64 !== true) {
        encodeFloat16(float);
        decoded = readFloat16(ui8a, 1);
        if (float === decoded || Number.isNaN(float)) {
          ui8a[0] = 249;
          buf2.push(ui8a.slice(0, 3));
          success = true;
        } else {
          encodeFloat32(float);
          decoded = readFloat32(ui8a, 1);
          if (float === decoded) {
            ui8a[0] = 250;
            buf2.push(ui8a.slice(0, 5));
            success = true;
          }
        }
      }
      if (!success) {
        encodeFloat64(float);
        decoded = readFloat64(ui8a, 1);
        ui8a[0] = 251;
        buf2.push(ui8a.slice(0, 9));
      }
    }
  }
  encodeFloat.encodedSize = function encodedSize8(token, options) {
    const float = token.value;
    if (float === false || float === true || float === null || float === void 0) {
      return 1;
    }
    if (!options || options.float64 !== true) {
      encodeFloat16(float);
      let decoded = readFloat16(ui8a, 1);
      if (float === decoded || Number.isNaN(float)) {
        return 3;
      }
      encodeFloat32(float);
      decoded = readFloat32(ui8a, 1);
      if (float === decoded) {
        return 5;
      }
    }
    return 9;
  };
  var buffer = new ArrayBuffer(9);
  var dataView = new DataView(buffer, 1);
  var ui8a = new Uint8Array(buffer, 0);
  function encodeFloat16(inp) {
    if (inp === Infinity) {
      dataView.setUint16(0, 31744, false);
    } else if (inp === -Infinity) {
      dataView.setUint16(0, 64512, false);
    } else if (Number.isNaN(inp)) {
      dataView.setUint16(0, 32256, false);
    } else {
      dataView.setFloat32(0, inp);
      const valu32 = dataView.getUint32(0);
      const exponent = (valu32 & 2139095040) >> 23;
      const mantissa = valu32 & 8388607;
      if (exponent === 255) {
        dataView.setUint16(0, 31744, false);
      } else if (exponent === 0) {
        dataView.setUint16(0, (inp & 2147483648) >> 16 | mantissa >> 13, false);
      } else {
        const logicalExponent = exponent - 127;
        if (logicalExponent < -24) {
          dataView.setUint16(0, 0);
        } else if (logicalExponent < -14) {
          dataView.setUint16(0, (valu32 & 2147483648) >> 16 | 1 << 24 + logicalExponent, false);
        } else {
          dataView.setUint16(0, (valu32 & 2147483648) >> 16 | logicalExponent + 15 << 10 | mantissa >> 13, false);
        }
      }
    }
  }
  function readFloat16(ui8a2, pos) {
    if (ui8a2.length - pos < 2) {
      throw new Error(`${decodeErrPrefix} not enough data for float16`);
    }
    const half = (ui8a2[pos] << 8) + ui8a2[pos + 1];
    if (half === 31744) {
      return Infinity;
    }
    if (half === 64512) {
      return -Infinity;
    }
    if (half === 32256) {
      return NaN;
    }
    const exp = half >> 10 & 31;
    const mant = half & 1023;
    let val;
    if (exp === 0) {
      val = mant * 2 ** -24;
    } else if (exp !== 31) {
      val = (mant + 1024) * 2 ** (exp - 25);
    } else {
      val = mant === 0 ? Infinity : NaN;
    }
    return half & 32768 ? -val : val;
  }
  function encodeFloat32(inp) {
    dataView.setFloat32(0, inp, false);
  }
  function readFloat32(ui8a2, pos) {
    if (ui8a2.length - pos < 4) {
      throw new Error(`${decodeErrPrefix} not enough data for float32`);
    }
    const offset = (ui8a2.byteOffset || 0) + pos;
    return new DataView(ui8a2.buffer, offset, 4).getFloat32(0, false);
  }
  function encodeFloat64(inp) {
    dataView.setFloat64(0, inp, false);
  }
  function readFloat64(ui8a2, pos) {
    if (ui8a2.length - pos < 8) {
      throw new Error(`${decodeErrPrefix} not enough data for float64`);
    }
    const offset = (ui8a2.byteOffset || 0) + pos;
    return new DataView(ui8a2.buffer, offset, 8).getFloat64(0, false);
  }
  encodeFloat.compareTokens = encodeUint.compareTokens;

  // node_modules/cborg/esm/lib/jump.js
  function invalidMinor(data, pos, minor) {
    throw new Error(`${decodeErrPrefix} encountered invalid minor (${minor}) for major ${data[pos] >>> 5}`);
  }
  function errorer(msg) {
    return () => {
      throw new Error(`${decodeErrPrefix} ${msg}`);
    };
  }
  var jump = [];
  for (let i = 0; i <= 23; i++) {
    jump[i] = invalidMinor;
  }
  jump[24] = decodeUint8;
  jump[25] = decodeUint16;
  jump[26] = decodeUint32;
  jump[27] = decodeUint64;
  jump[28] = invalidMinor;
  jump[29] = invalidMinor;
  jump[30] = invalidMinor;
  jump[31] = invalidMinor;
  for (let i = 32; i <= 55; i++) {
    jump[i] = invalidMinor;
  }
  jump[56] = decodeNegint8;
  jump[57] = decodeNegint16;
  jump[58] = decodeNegint32;
  jump[59] = decodeNegint64;
  jump[60] = invalidMinor;
  jump[61] = invalidMinor;
  jump[62] = invalidMinor;
  jump[63] = invalidMinor;
  for (let i = 64; i <= 87; i++) {
    jump[i] = decodeBytesCompact;
  }
  jump[88] = decodeBytes8;
  jump[89] = decodeBytes16;
  jump[90] = decodeBytes32;
  jump[91] = decodeBytes64;
  jump[92] = invalidMinor;
  jump[93] = invalidMinor;
  jump[94] = invalidMinor;
  jump[95] = errorer("indefinite length bytes/strings are not supported");
  for (let i = 96; i <= 119; i++) {
    jump[i] = decodeStringCompact;
  }
  jump[120] = decodeString8;
  jump[121] = decodeString16;
  jump[122] = decodeString32;
  jump[123] = decodeString64;
  jump[124] = invalidMinor;
  jump[125] = invalidMinor;
  jump[126] = invalidMinor;
  jump[127] = errorer("indefinite length bytes/strings are not supported");
  for (let i = 128; i <= 151; i++) {
    jump[i] = decodeArrayCompact;
  }
  jump[152] = decodeArray8;
  jump[153] = decodeArray16;
  jump[154] = decodeArray32;
  jump[155] = decodeArray64;
  jump[156] = invalidMinor;
  jump[157] = invalidMinor;
  jump[158] = invalidMinor;
  jump[159] = decodeArrayIndefinite;
  for (let i = 160; i <= 183; i++) {
    jump[i] = decodeMapCompact;
  }
  jump[184] = decodeMap8;
  jump[185] = decodeMap16;
  jump[186] = decodeMap32;
  jump[187] = decodeMap64;
  jump[188] = invalidMinor;
  jump[189] = invalidMinor;
  jump[190] = invalidMinor;
  jump[191] = decodeMapIndefinite;
  for (let i = 192; i <= 215; i++) {
    jump[i] = decodeTagCompact;
  }
  jump[216] = decodeTag8;
  jump[217] = decodeTag16;
  jump[218] = decodeTag32;
  jump[219] = decodeTag64;
  jump[220] = invalidMinor;
  jump[221] = invalidMinor;
  jump[222] = invalidMinor;
  jump[223] = invalidMinor;
  for (let i = 224; i <= 243; i++) {
    jump[i] = errorer("simple values are not supported");
  }
  jump[244] = invalidMinor;
  jump[245] = invalidMinor;
  jump[246] = invalidMinor;
  jump[247] = decodeUndefined;
  jump[248] = errorer("simple values are not supported");
  jump[249] = decodeFloat16;
  jump[250] = decodeFloat32;
  jump[251] = decodeFloat64;
  jump[252] = invalidMinor;
  jump[253] = invalidMinor;
  jump[254] = invalidMinor;
  jump[255] = decodeBreak;
  var quick = [];
  for (let i = 0; i < 24; i++) {
    quick[i] = new Token(Type.uint, i, 1);
  }
  for (let i = -1; i >= -24; i--) {
    quick[31 - i] = new Token(Type.negint, i, 1);
  }
  quick[64] = new Token(Type.bytes, new Uint8Array(0), 1);
  quick[96] = new Token(Type.string, "", 1);
  quick[128] = new Token(Type.array, 0, 1);
  quick[160] = new Token(Type.map, 0, 1);
  quick[244] = new Token(Type.false, false, 1);
  quick[245] = new Token(Type.true, true, 1);
  quick[246] = new Token(Type.null, null, 1);
  function quickEncodeToken(token) {
    switch (token.type) {
      case Type.false:
        return fromArray([244]);
      case Type.true:
        return fromArray([245]);
      case Type.null:
        return fromArray([246]);
      case Type.bytes:
        if (!token.value.length) {
          return fromArray([64]);
        }
        return;
      case Type.string:
        if (token.value === "") {
          return fromArray([96]);
        }
        return;
      case Type.array:
        if (token.value === 0) {
          return fromArray([128]);
        }
        return;
      case Type.map:
        if (token.value === 0) {
          return fromArray([160]);
        }
        return;
      case Type.uint:
        if (token.value < 24) {
          return fromArray([Number(token.value)]);
        }
        return;
      case Type.negint:
        if (token.value >= -24) {
          return fromArray([31 - Number(token.value)]);
        }
    }
  }

  // node_modules/cborg/esm/lib/encode.js
  var defaultEncodeOptions = {
    float64: false,
    mapSorter,
    quickEncodeToken
  };
  function makeCborEncoders() {
    const encoders = [];
    encoders[Type.uint.major] = encodeUint;
    encoders[Type.negint.major] = encodeNegint;
    encoders[Type.bytes.major] = encodeBytes;
    encoders[Type.string.major] = encodeString;
    encoders[Type.array.major] = encodeArray;
    encoders[Type.map.major] = encodeMap;
    encoders[Type.tag.major] = encodeTag;
    encoders[Type.float.major] = encodeFloat;
    return encoders;
  }
  var cborEncoders = makeCborEncoders();
  var buf = new Bl();
  var Ref = class _Ref {
    constructor(obj, parent) {
      this.obj = obj;
      this.parent = parent;
    }
    includes(obj) {
      let p = this;
      do {
        if (p.obj === obj) {
          return true;
        }
      } while (p = p.parent);
      return false;
    }
    static createCheck(stack, obj) {
      if (stack && stack.includes(obj)) {
        throw new Error(`${encodeErrPrefix} object contains circular references`);
      }
      return new _Ref(obj, stack);
    }
  };
  var simpleTokens = {
    null: new Token(Type.null, null),
    undefined: new Token(Type.undefined, void 0),
    true: new Token(Type.true, true),
    false: new Token(Type.false, false),
    emptyArray: new Token(Type.array, 0),
    emptyMap: new Token(Type.map, 0)
  };
  var typeEncoders = {
    number(obj, _typ, _options, _refStack) {
      if (!Number.isInteger(obj) || !Number.isSafeInteger(obj)) {
        return new Token(Type.float, obj);
      } else if (obj >= 0) {
        return new Token(Type.uint, obj);
      } else {
        return new Token(Type.negint, obj);
      }
    },
    bigint(obj, _typ, _options, _refStack) {
      if (obj >= BigInt(0)) {
        return new Token(Type.uint, obj);
      } else {
        return new Token(Type.negint, obj);
      }
    },
    Uint8Array(obj, _typ, _options, _refStack) {
      return new Token(Type.bytes, obj);
    },
    string(obj, _typ, _options, _refStack) {
      return new Token(Type.string, obj);
    },
    boolean(obj, _typ, _options, _refStack) {
      return obj ? simpleTokens.true : simpleTokens.false;
    },
    null(_obj, _typ, _options, _refStack) {
      return simpleTokens.null;
    },
    undefined(_obj, _typ, _options, _refStack) {
      return simpleTokens.undefined;
    },
    ArrayBuffer(obj, _typ, _options, _refStack) {
      return new Token(Type.bytes, new Uint8Array(obj));
    },
    DataView(obj, _typ, _options, _refStack) {
      return new Token(Type.bytes, new Uint8Array(obj.buffer, obj.byteOffset, obj.byteLength));
    },
    Array(obj, _typ, options, refStack) {
      if (!obj.length) {
        if (options.addBreakTokens === true) {
          return [
            simpleTokens.emptyArray,
            new Token(Type.break)
          ];
        }
        return simpleTokens.emptyArray;
      }
      refStack = Ref.createCheck(refStack, obj);
      const entries = [];
      let i = 0;
      for (const e of obj) {
        entries[i++] = objectToTokens(e, options, refStack);
      }
      if (options.addBreakTokens) {
        return [
          new Token(Type.array, obj.length),
          entries,
          new Token(Type.break)
        ];
      }
      return [
        new Token(Type.array, obj.length),
        entries
      ];
    },
    Object(obj, typ, options, refStack) {
      const isMap = typ !== "Object";
      const keys = isMap ? obj.keys() : Object.keys(obj);
      const length10 = isMap ? obj.size : keys.length;
      if (!length10) {
        if (options.addBreakTokens === true) {
          return [
            simpleTokens.emptyMap,
            new Token(Type.break)
          ];
        }
        return simpleTokens.emptyMap;
      }
      refStack = Ref.createCheck(refStack, obj);
      const entries = [];
      let i = 0;
      for (const key of keys) {
        entries[i++] = [
          objectToTokens(key, options, refStack),
          objectToTokens(isMap ? obj.get(key) : obj[key], options, refStack)
        ];
      }
      sortMapEntries(entries, options);
      if (options.addBreakTokens) {
        return [
          new Token(Type.map, length10),
          entries,
          new Token(Type.break)
        ];
      }
      return [
        new Token(Type.map, length10),
        entries
      ];
    }
  };
  typeEncoders.Map = typeEncoders.Object;
  typeEncoders.Buffer = typeEncoders.Uint8Array;
  for (const typ of "Uint8Clamped Uint16 Uint32 Int8 Int16 Int32 BigUint64 BigInt64 Float32 Float64".split(" ")) {
    typeEncoders[`${typ}Array`] = typeEncoders.DataView;
  }
  function objectToTokens(obj, options = {}, refStack) {
    const typ = is(obj);
    const customTypeEncoder = options && options.typeEncoders && options.typeEncoders[typ] || typeEncoders[typ];
    if (typeof customTypeEncoder === "function") {
      const tokens = customTypeEncoder(obj, typ, options, refStack);
      if (tokens != null) {
        return tokens;
      }
    }
    const typeEncoder = typeEncoders[typ];
    if (!typeEncoder) {
      throw new Error(`${encodeErrPrefix} unsupported type: ${typ}`);
    }
    return typeEncoder(obj, typ, options, refStack);
  }
  function sortMapEntries(entries, options) {
    if (options.mapSorter) {
      entries.sort(options.mapSorter);
    }
  }
  function mapSorter(e1, e2) {
    const keyToken1 = Array.isArray(e1[0]) ? e1[0][0] : e1[0];
    const keyToken2 = Array.isArray(e2[0]) ? e2[0][0] : e2[0];
    if (keyToken1.type !== keyToken2.type) {
      return keyToken1.type.compare(keyToken2.type);
    }
    const major = keyToken1.type.major;
    const tcmp = cborEncoders[major].compareTokens(keyToken1, keyToken2);
    if (tcmp === 0) {
      console.warn("WARNING: complex key types used, CBOR key sorting guarantees are gone");
    }
    return tcmp;
  }
  function tokensToEncoded(buf2, tokens, encoders, options) {
    if (Array.isArray(tokens)) {
      for (const token of tokens) {
        tokensToEncoded(buf2, token, encoders, options);
      }
    } else {
      encoders[tokens.type.major](buf2, tokens, options);
    }
  }
  function encodeCustom(data, encoders, options) {
    const tokens = objectToTokens(data, options);
    if (!Array.isArray(tokens) && options.quickEncodeToken) {
      const quickBytes = options.quickEncodeToken(tokens);
      if (quickBytes) {
        return quickBytes;
      }
      const encoder = encoders[tokens.type.major];
      if (encoder.encodedSize) {
        const size = encoder.encodedSize(tokens, options);
        const buf2 = new Bl(size);
        encoder(buf2, tokens, options);
        if (buf2.chunks.length !== 1) {
          throw new Error(`Unexpected error: pre-calculated length for ${tokens} was wrong`);
        }
        return asU8A(buf2.chunks[0]);
      }
    }
    buf.reset();
    tokensToEncoded(buf, tokens, encoders, options);
    return buf.toBytes(true);
  }
  function encode6(data, options) {
    options = Object.assign({}, defaultEncodeOptions, options);
    return encodeCustom(data, cborEncoders, options);
  }

  // node_modules/cborg/esm/lib/decode.js
  var defaultDecodeOptions = {
    strict: false,
    allowIndefinite: true,
    allowUndefined: true,
    allowBigInt: true
  };
  var Tokeniser = class {
    constructor(data, options = {}) {
      this.pos = 0;
      this.data = data;
      this.options = options;
    }
    done() {
      return this.pos >= this.data.length;
    }
    next() {
      const byt = this.data[this.pos];
      let token = quick[byt];
      if (token === void 0) {
        const decoder = jump[byt];
        if (!decoder) {
          throw new Error(`${decodeErrPrefix} no decoder for major type ${byt >>> 5} (byte 0x${byt.toString(16).padStart(2, "0")})`);
        }
        const minor = byt & 31;
        token = decoder(this.data, this.pos, minor, this.options);
      }
      this.pos += token.encodedLength;
      return token;
    }
  };
  var DONE = Symbol.for("DONE");
  var BREAK = Symbol.for("BREAK");
  function tokenToArray(token, tokeniser, options) {
    const arr = [];
    for (let i = 0; i < token.value; i++) {
      const value = tokensToObject(tokeniser, options);
      if (value === BREAK) {
        if (token.value === Infinity) {
          break;
        }
        throw new Error(`${decodeErrPrefix} got unexpected break to lengthed array`);
      }
      if (value === DONE) {
        throw new Error(`${decodeErrPrefix} found array but not enough entries (got ${i}, expected ${token.value})`);
      }
      arr[i] = value;
    }
    return arr;
  }
  function tokenToMap(token, tokeniser, options) {
    const useMaps = options.useMaps === true;
    const obj = useMaps ? void 0 : {};
    const m = useMaps ? /* @__PURE__ */ new Map() : void 0;
    for (let i = 0; i < token.value; i++) {
      const key = tokensToObject(tokeniser, options);
      if (key === BREAK) {
        if (token.value === Infinity) {
          break;
        }
        throw new Error(`${decodeErrPrefix} got unexpected break to lengthed map`);
      }
      if (key === DONE) {
        throw new Error(`${decodeErrPrefix} found map but not enough entries (got ${i} [no key], expected ${token.value})`);
      }
      if (useMaps !== true && typeof key !== "string") {
        throw new Error(`${decodeErrPrefix} non-string keys not supported (got ${typeof key})`);
      }
      if (options.rejectDuplicateMapKeys === true) {
        if (useMaps && m.has(key) || !useMaps && key in obj) {
          throw new Error(`${decodeErrPrefix} found repeat map key "${key}"`);
        }
      }
      const value = tokensToObject(tokeniser, options);
      if (value === DONE) {
        throw new Error(`${decodeErrPrefix} found map but not enough entries (got ${i} [no value], expected ${token.value})`);
      }
      if (useMaps) {
        m.set(key, value);
      } else {
        obj[key] = value;
      }
    }
    return useMaps ? m : obj;
  }
  function tokensToObject(tokeniser, options) {
    if (tokeniser.done()) {
      return DONE;
    }
    const token = tokeniser.next();
    if (token.type === Type.break) {
      return BREAK;
    }
    if (token.type.terminal) {
      return token.value;
    }
    if (token.type === Type.array) {
      return tokenToArray(token, tokeniser, options);
    }
    if (token.type === Type.map) {
      return tokenToMap(token, tokeniser, options);
    }
    if (token.type === Type.tag) {
      if (options.tags && typeof options.tags[token.value] === "function") {
        const tagged = tokensToObject(tokeniser, options);
        return options.tags[token.value](tagged);
      }
      throw new Error(`${decodeErrPrefix} tag not supported (${token.value})`);
    }
    throw new Error("unsupported");
  }
  function decode6(data, options) {
    if (!(data instanceof Uint8Array)) {
      throw new Error(`${decodeErrPrefix} data to decode must be a Uint8Array`);
    }
    options = Object.assign({}, defaultDecodeOptions, options);
    const tokeniser = options.tokenizer || new Tokeniser(data, options);
    const decoded = tokensToObject(tokeniser, options);
    if (decoded === DONE) {
      throw new Error(`${decodeErrPrefix} did not find any content to decode`);
    }
    if (decoded === BREAK) {
      throw new Error(`${decodeErrPrefix} got unexpected break`);
    }
    if (!tokeniser.done()) {
      throw new Error(`${decodeErrPrefix} too many terminals, data makes no sense`);
    }
    return decoded;
  }

  // node_modules/@ceramicnetwork/http-client/node_modules/@ipld/dag-cbor/node_modules/multiformats/esm/vendor/varint.js
  var encode_12 = encode7;
  var MSB2 = 128;
  var REST2 = 127;
  var MSBALL2 = ~REST2;
  var INT2 = Math.pow(2, 31);
  function encode7(num, out, offset) {
    out = out || [];
    offset = offset || 0;
    var oldOffset = offset;
    while (num >= INT2) {
      out[offset++] = num & 255 | MSB2;
      num /= 128;
    }
    while (num & MSBALL2) {
      out[offset++] = num & 255 | MSB2;
      num >>>= 7;
    }
    out[offset] = num | 0;
    encode7.bytes = offset - oldOffset + 1;
    return out;
  }
  var decode7 = read2;
  var MSB$12 = 128;
  var REST$12 = 127;
  function read2(buf2, offset) {
    var res = 0, offset = offset || 0, shift = 0, counter = offset, b, l = buf2.length;
    do {
      if (counter >= l) {
        read2.bytes = 0;
        throw new RangeError("Could not decode varint");
      }
      b = buf2[counter++];
      res += shift < 28 ? (b & REST$12) << shift : (b & REST$12) * Math.pow(2, shift);
      shift += 7;
    } while (b >= MSB$12);
    read2.bytes = counter - offset;
    return res;
  }
  var N12 = Math.pow(2, 7);
  var N22 = Math.pow(2, 14);
  var N32 = Math.pow(2, 21);
  var N42 = Math.pow(2, 28);
  var N52 = Math.pow(2, 35);
  var N62 = Math.pow(2, 42);
  var N72 = Math.pow(2, 49);
  var N82 = Math.pow(2, 56);
  var N92 = Math.pow(2, 63);
  var length2 = function(value) {
    return value < N12 ? 1 : value < N22 ? 2 : value < N32 ? 3 : value < N42 ? 4 : value < N52 ? 5 : value < N62 ? 6 : value < N72 ? 7 : value < N82 ? 8 : value < N92 ? 9 : 10;
  };
  var varint2 = {
    encode: encode_12,
    decode: decode7,
    encodingLength: length2
  };
  var _brrp_varint2 = varint2;
  var varint_default2 = _brrp_varint2;

  // node_modules/@ceramicnetwork/http-client/node_modules/@ipld/dag-cbor/node_modules/multiformats/esm/src/varint.js
  var decode8 = (data, offset = 0) => {
    const code8 = varint_default2.decode(data, offset);
    return [
      code8,
      varint_default2.decode.bytes
    ];
  };
  var encodeTo2 = (int, target, offset = 0) => {
    varint_default2.encode(int, target, offset);
    return target;
  };
  var encodingLength2 = (int) => {
    return varint_default2.encodingLength(int);
  };

  // node_modules/@ceramicnetwork/http-client/node_modules/@ipld/dag-cbor/node_modules/multiformats/esm/src/bytes.js
  var empty2 = new Uint8Array(0);
  var equals4 = (aa, bb) => {
    if (aa === bb)
      return true;
    if (aa.byteLength !== bb.byteLength) {
      return false;
    }
    for (let ii = 0; ii < aa.byteLength; ii++) {
      if (aa[ii] !== bb[ii]) {
        return false;
      }
    }
    return true;
  };
  var coerce2 = (o) => {
    if (o instanceof Uint8Array && o.constructor.name === "Uint8Array")
      return o;
    if (o instanceof ArrayBuffer)
      return new Uint8Array(o);
    if (ArrayBuffer.isView(o)) {
      return new Uint8Array(o.buffer, o.byteOffset, o.byteLength);
    }
    throw new Error("Unknown type, must be binary type");
  };

  // node_modules/@ceramicnetwork/http-client/node_modules/@ipld/dag-cbor/node_modules/multiformats/esm/src/hashes/digest.js
  var create2 = (code8, digest2) => {
    const size = digest2.byteLength;
    const sizeOffset = encodingLength2(code8);
    const digestOffset = sizeOffset + encodingLength2(size);
    const bytes = new Uint8Array(digestOffset + size);
    encodeTo2(code8, bytes, 0);
    encodeTo2(size, bytes, sizeOffset);
    bytes.set(digest2, digestOffset);
    return new Digest2(code8, size, digest2, bytes);
  };
  var decode9 = (multihash) => {
    const bytes = coerce2(multihash);
    const [code8, sizeOffset] = decode8(bytes);
    const [size, digestOffset] = decode8(bytes.subarray(sizeOffset));
    const digest2 = bytes.subarray(sizeOffset + digestOffset);
    if (digest2.byteLength !== size) {
      throw new Error("Incorrect length");
    }
    return new Digest2(code8, size, digest2, bytes);
  };
  var equals5 = (a, b) => {
    if (a === b) {
      return true;
    } else {
      return a.code === b.code && a.size === b.size && equals4(a.bytes, b.bytes);
    }
  };
  var Digest2 = class {
    constructor(code8, size, digest2, bytes) {
      this.code = code8;
      this.size = size;
      this.digest = digest2;
      this.bytes = bytes;
    }
  };

  // node_modules/@ceramicnetwork/http-client/node_modules/@ipld/dag-cbor/node_modules/multiformats/esm/vendor/base-x.js
  function base3(ALPHABET, name8) {
    if (ALPHABET.length >= 255) {
      throw new TypeError("Alphabet too long");
    }
    var BASE_MAP = new Uint8Array(256);
    for (var j = 0; j < BASE_MAP.length; j++) {
      BASE_MAP[j] = 255;
    }
    for (var i = 0; i < ALPHABET.length; i++) {
      var x = ALPHABET.charAt(i);
      var xc = x.charCodeAt(0);
      if (BASE_MAP[xc] !== 255) {
        throw new TypeError(x + " is ambiguous");
      }
      BASE_MAP[xc] = i;
    }
    var BASE = ALPHABET.length;
    var LEADER = ALPHABET.charAt(0);
    var FACTOR = Math.log(BASE) / Math.log(256);
    var iFACTOR = Math.log(256) / Math.log(BASE);
    function encode31(source) {
      if (source instanceof Uint8Array)
        ;
      else if (ArrayBuffer.isView(source)) {
        source = new Uint8Array(source.buffer, source.byteOffset, source.byteLength);
      } else if (Array.isArray(source)) {
        source = Uint8Array.from(source);
      }
      if (!(source instanceof Uint8Array)) {
        throw new TypeError("Expected Uint8Array");
      }
      if (source.length === 0) {
        return "";
      }
      var zeroes = 0;
      var length10 = 0;
      var pbegin = 0;
      var pend = source.length;
      while (pbegin !== pend && source[pbegin] === 0) {
        pbegin++;
        zeroes++;
      }
      var size = (pend - pbegin) * iFACTOR + 1 >>> 0;
      var b58 = new Uint8Array(size);
      while (pbegin !== pend) {
        var carry = source[pbegin];
        var i2 = 0;
        for (var it1 = size - 1; (carry !== 0 || i2 < length10) && it1 !== -1; it1--, i2++) {
          carry += 256 * b58[it1] >>> 0;
          b58[it1] = carry % BASE >>> 0;
          carry = carry / BASE >>> 0;
        }
        if (carry !== 0) {
          throw new Error("Non-zero carry");
        }
        length10 = i2;
        pbegin++;
      }
      var it2 = size - length10;
      while (it2 !== size && b58[it2] === 0) {
        it2++;
      }
      var str = LEADER.repeat(zeroes);
      for (; it2 < size; ++it2) {
        str += ALPHABET.charAt(b58[it2]);
      }
      return str;
    }
    function decodeUnsafe(source) {
      if (typeof source !== "string") {
        throw new TypeError("Expected String");
      }
      if (source.length === 0) {
        return new Uint8Array();
      }
      var psz = 0;
      if (source[psz] === " ") {
        return;
      }
      var zeroes = 0;
      var length10 = 0;
      while (source[psz] === LEADER) {
        zeroes++;
        psz++;
      }
      var size = (source.length - psz) * FACTOR + 1 >>> 0;
      var b256 = new Uint8Array(size);
      while (source[psz]) {
        var carry = BASE_MAP[source.charCodeAt(psz)];
        if (carry === 255) {
          return;
        }
        var i2 = 0;
        for (var it3 = size - 1; (carry !== 0 || i2 < length10) && it3 !== -1; it3--, i2++) {
          carry += BASE * b256[it3] >>> 0;
          b256[it3] = carry % 256 >>> 0;
          carry = carry / 256 >>> 0;
        }
        if (carry !== 0) {
          throw new Error("Non-zero carry");
        }
        length10 = i2;
        psz++;
      }
      if (source[psz] === " ") {
        return;
      }
      var it4 = size - length10;
      while (it4 !== size && b256[it4] === 0) {
        it4++;
      }
      var vch = new Uint8Array(zeroes + (size - it4));
      var j2 = zeroes;
      while (it4 !== size) {
        vch[j2++] = b256[it4++];
      }
      return vch;
    }
    function decode45(string2) {
      var buffer2 = decodeUnsafe(string2);
      if (buffer2) {
        return buffer2;
      }
      throw new Error(`Non-${name8} character`);
    }
    return {
      encode: encode31,
      decodeUnsafe,
      decode: decode45
    };
  }
  var src2 = base3;
  var _brrp__multiformats_scope_baseX2 = src2;
  var base_x_default2 = _brrp__multiformats_scope_baseX2;

  // node_modules/@ceramicnetwork/http-client/node_modules/@ipld/dag-cbor/node_modules/multiformats/esm/src/bases/base.js
  var Encoder2 = class {
    constructor(name8, prefix, baseEncode) {
      this.name = name8;
      this.prefix = prefix;
      this.baseEncode = baseEncode;
    }
    encode(bytes) {
      if (bytes instanceof Uint8Array) {
        return `${this.prefix}${this.baseEncode(bytes)}`;
      } else {
        throw Error("Unknown type, must be binary type");
      }
    }
  };
  var Decoder2 = class {
    constructor(name8, prefix, baseDecode) {
      this.name = name8;
      this.prefix = prefix;
      if (prefix.codePointAt(0) === void 0) {
        throw new Error("Invalid prefix character");
      }
      this.prefixCodePoint = prefix.codePointAt(0);
      this.baseDecode = baseDecode;
    }
    decode(text) {
      if (typeof text === "string") {
        if (text.codePointAt(0) !== this.prefixCodePoint) {
          throw Error(`Unable to decode multibase string ${JSON.stringify(text)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
        }
        return this.baseDecode(text.slice(this.prefix.length));
      } else {
        throw Error("Can only multibase decode strings");
      }
    }
    or(decoder) {
      return or2(this, decoder);
    }
  };
  var ComposedDecoder2 = class {
    constructor(decoders) {
      this.decoders = decoders;
    }
    or(decoder) {
      return or2(this, decoder);
    }
    decode(input) {
      const prefix = input[0];
      const decoder = this.decoders[prefix];
      if (decoder) {
        return decoder.decode(input);
      } else {
        throw RangeError(`Unable to decode multibase string ${JSON.stringify(input)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
      }
    }
  };
  var or2 = (left, right) => new ComposedDecoder2({
    ...left.decoders || { [left.prefix]: left },
    ...right.decoders || { [right.prefix]: right }
  });
  var Codec2 = class {
    constructor(name8, prefix, baseEncode, baseDecode) {
      this.name = name8;
      this.prefix = prefix;
      this.baseEncode = baseEncode;
      this.baseDecode = baseDecode;
      this.encoder = new Encoder2(name8, prefix, baseEncode);
      this.decoder = new Decoder2(name8, prefix, baseDecode);
    }
    encode(input) {
      return this.encoder.encode(input);
    }
    decode(input) {
      return this.decoder.decode(input);
    }
  };
  var from3 = ({ name: name8, prefix, encode: encode31, decode: decode45 }) => new Codec2(name8, prefix, encode31, decode45);
  var baseX2 = ({ prefix, name: name8, alphabet: alphabet2 }) => {
    const { encode: encode31, decode: decode45 } = base_x_default2(alphabet2, name8);
    return from3({
      prefix,
      name: name8,
      encode: encode31,
      decode: (text) => coerce2(decode45(text))
    });
  };
  var decode10 = (string2, alphabet2, bitsPerChar, name8) => {
    const codes = {};
    for (let i = 0; i < alphabet2.length; ++i) {
      codes[alphabet2[i]] = i;
    }
    let end = string2.length;
    while (string2[end - 1] === "=") {
      --end;
    }
    const out = new Uint8Array(end * bitsPerChar / 8 | 0);
    let bits = 0;
    let buffer2 = 0;
    let written = 0;
    for (let i = 0; i < end; ++i) {
      const value = codes[string2[i]];
      if (value === void 0) {
        throw new SyntaxError(`Non-${name8} character`);
      }
      buffer2 = buffer2 << bitsPerChar | value;
      bits += bitsPerChar;
      if (bits >= 8) {
        bits -= 8;
        out[written++] = 255 & buffer2 >> bits;
      }
    }
    if (bits >= bitsPerChar || 255 & buffer2 << 8 - bits) {
      throw new SyntaxError("Unexpected end of data");
    }
    return out;
  };
  var encode8 = (data, alphabet2, bitsPerChar) => {
    const pad = alphabet2[alphabet2.length - 1] === "=";
    const mask = (1 << bitsPerChar) - 1;
    let out = "";
    let bits = 0;
    let buffer2 = 0;
    for (let i = 0; i < data.length; ++i) {
      buffer2 = buffer2 << 8 | data[i];
      bits += 8;
      while (bits > bitsPerChar) {
        bits -= bitsPerChar;
        out += alphabet2[mask & buffer2 >> bits];
      }
    }
    if (bits) {
      out += alphabet2[mask & buffer2 << bitsPerChar - bits];
    }
    if (pad) {
      while (out.length * bitsPerChar & 7) {
        out += "=";
      }
    }
    return out;
  };
  var rfc46482 = ({ name: name8, prefix, bitsPerChar, alphabet: alphabet2 }) => {
    return from3({
      prefix,
      name: name8,
      encode(input) {
        return encode8(input, alphabet2, bitsPerChar);
      },
      decode(input) {
        return decode10(input, alphabet2, bitsPerChar, name8);
      }
    });
  };

  // node_modules/@ceramicnetwork/http-client/node_modules/@ipld/dag-cbor/node_modules/multiformats/esm/src/bases/base58.js
  var base58btc2 = baseX2({
    name: "base58btc",
    prefix: "z",
    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
  });
  var base58flickr2 = baseX2({
    name: "base58flickr",
    prefix: "Z",
    alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
  });

  // node_modules/@ceramicnetwork/http-client/node_modules/@ipld/dag-cbor/node_modules/multiformats/esm/src/bases/base32.js
  var base322 = rfc46482({
    prefix: "b",
    name: "base32",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
    bitsPerChar: 5
  });
  var base32upper2 = rfc46482({
    prefix: "B",
    name: "base32upper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
    bitsPerChar: 5
  });
  var base32pad2 = rfc46482({
    prefix: "c",
    name: "base32pad",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
    bitsPerChar: 5
  });
  var base32padupper2 = rfc46482({
    prefix: "C",
    name: "base32padupper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
    bitsPerChar: 5
  });
  var base32hex2 = rfc46482({
    prefix: "v",
    name: "base32hex",
    alphabet: "0123456789abcdefghijklmnopqrstuv",
    bitsPerChar: 5
  });
  var base32hexupper2 = rfc46482({
    prefix: "V",
    name: "base32hexupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
    bitsPerChar: 5
  });
  var base32hexpad2 = rfc46482({
    prefix: "t",
    name: "base32hexpad",
    alphabet: "0123456789abcdefghijklmnopqrstuv=",
    bitsPerChar: 5
  });
  var base32hexpadupper2 = rfc46482({
    prefix: "T",
    name: "base32hexpadupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
    bitsPerChar: 5
  });
  var base32z2 = rfc46482({
    prefix: "h",
    name: "base32z",
    alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
    bitsPerChar: 5
  });

  // node_modules/@ceramicnetwork/http-client/node_modules/@ipld/dag-cbor/node_modules/multiformats/esm/src/cid.js
  var CID2 = class _CID {
    constructor(version7, code8, multihash, bytes) {
      this.code = code8;
      this.version = version7;
      this.multihash = multihash;
      this.bytes = bytes;
      this.byteOffset = bytes.byteOffset;
      this.byteLength = bytes.byteLength;
      this.asCID = this;
      this._baseCache = /* @__PURE__ */ new Map();
      Object.defineProperties(this, {
        byteOffset: hidden,
        byteLength: hidden,
        code: readonly2,
        version: readonly2,
        multihash: readonly2,
        bytes: readonly2,
        _baseCache: hidden,
        asCID: hidden
      });
    }
    toV0() {
      switch (this.version) {
        case 0: {
          return this;
        }
        default: {
          const { code: code8, multihash } = this;
          if (code8 !== DAG_PB_CODE2) {
            throw new Error("Cannot convert a non dag-pb CID to CIDv0");
          }
          if (multihash.code !== SHA_256_CODE2) {
            throw new Error("Cannot convert non sha2-256 multihash CID to CIDv0");
          }
          return _CID.createV0(multihash);
        }
      }
    }
    toV1() {
      switch (this.version) {
        case 0: {
          const { code: code8, digest: digest2 } = this.multihash;
          const multihash = create2(code8, digest2);
          return _CID.createV1(this.code, multihash);
        }
        case 1: {
          return this;
        }
        default: {
          throw Error(`Can not convert CID version ${this.version} to version 0. This is a bug please report`);
        }
      }
    }
    equals(other) {
      return other && this.code === other.code && this.version === other.version && equals5(this.multihash, other.multihash);
    }
    toString(base13) {
      const { bytes, version: version7, _baseCache } = this;
      switch (version7) {
        case 0:
          return toStringV02(bytes, _baseCache, base13 || base58btc2.encoder);
        default:
          return toStringV12(bytes, _baseCache, base13 || base322.encoder);
      }
    }
    toJSON() {
      return {
        code: this.code,
        version: this.version,
        hash: this.multihash.bytes
      };
    }
    get [Symbol.toStringTag]() {
      return "CID";
    }
    [Symbol.for("nodejs.util.inspect.custom")]() {
      return "CID(" + this.toString() + ")";
    }
    static isCID(value) {
      deprecate(/^0\.0/, IS_CID_DEPRECATION);
      return !!(value && (value[cidSymbol2] || value.asCID === value));
    }
    get toBaseEncodedString() {
      throw new Error("Deprecated, use .toString()");
    }
    get codec() {
      throw new Error('"codec" property is deprecated, use integer "code" property instead');
    }
    get buffer() {
      throw new Error("Deprecated .buffer property, use .bytes to get Uint8Array instead");
    }
    get multibaseName() {
      throw new Error('"multibaseName" property is deprecated');
    }
    get prefix() {
      throw new Error('"prefix" property is deprecated');
    }
    static asCID(value) {
      if (value instanceof _CID) {
        return value;
      } else if (value != null && value.asCID === value) {
        const { version: version7, code: code8, multihash, bytes } = value;
        return new _CID(version7, code8, multihash, bytes || encodeCID2(version7, code8, multihash.bytes));
      } else if (value != null && value[cidSymbol2] === true) {
        const { version: version7, multihash, code: code8 } = value;
        const digest2 = decode9(multihash);
        return _CID.create(version7, code8, digest2);
      } else {
        return null;
      }
    }
    static create(version7, code8, digest2) {
      if (typeof code8 !== "number") {
        throw new Error("String codecs are no longer supported");
      }
      switch (version7) {
        case 0: {
          if (code8 !== DAG_PB_CODE2) {
            throw new Error(`Version 0 CID must use dag-pb (code: ${DAG_PB_CODE2}) block encoding`);
          } else {
            return new _CID(version7, code8, digest2, digest2.bytes);
          }
        }
        case 1: {
          const bytes = encodeCID2(version7, code8, digest2.bytes);
          return new _CID(version7, code8, digest2, bytes);
        }
        default: {
          throw new Error("Invalid version");
        }
      }
    }
    static createV0(digest2) {
      return _CID.create(0, DAG_PB_CODE2, digest2);
    }
    static createV1(code8, digest2) {
      return _CID.create(1, code8, digest2);
    }
    static decode(bytes) {
      const [cid, remainder] = _CID.decodeFirst(bytes);
      if (remainder.length) {
        throw new Error("Incorrect length");
      }
      return cid;
    }
    static decodeFirst(bytes) {
      const specs = _CID.inspectBytes(bytes);
      const prefixSize = specs.size - specs.multihashSize;
      const multihashBytes = coerce2(bytes.subarray(prefixSize, prefixSize + specs.multihashSize));
      if (multihashBytes.byteLength !== specs.multihashSize) {
        throw new Error("Incorrect length");
      }
      const digestBytes = multihashBytes.subarray(specs.multihashSize - specs.digestSize);
      const digest2 = new Digest2(specs.multihashCode, specs.digestSize, digestBytes, multihashBytes);
      const cid = specs.version === 0 ? _CID.createV0(digest2) : _CID.createV1(specs.codec, digest2);
      return [
        cid,
        bytes.subarray(specs.size)
      ];
    }
    static inspectBytes(initialBytes) {
      let offset = 0;
      const next = () => {
        const [i, length10] = decode8(initialBytes.subarray(offset));
        offset += length10;
        return i;
      };
      let version7 = next();
      let codec = DAG_PB_CODE2;
      if (version7 === 18) {
        version7 = 0;
        offset = 0;
      } else if (version7 === 1) {
        codec = next();
      }
      if (version7 !== 0 && version7 !== 1) {
        throw new RangeError(`Invalid CID version ${version7}`);
      }
      const prefixSize = offset;
      const multihashCode = next();
      const digestSize = next();
      const size = offset + digestSize;
      const multihashSize = size - prefixSize;
      return {
        version: version7,
        codec,
        multihashCode,
        digestSize,
        multihashSize,
        size
      };
    }
    static parse(source, base13) {
      const [prefix, bytes] = parseCIDtoBytes2(source, base13);
      const cid = _CID.decode(bytes);
      cid._baseCache.set(prefix, source);
      return cid;
    }
  };
  var parseCIDtoBytes2 = (source, base13) => {
    switch (source[0]) {
      case "Q": {
        const decoder = base13 || base58btc2;
        return [
          base58btc2.prefix,
          decoder.decode(`${base58btc2.prefix}${source}`)
        ];
      }
      case base58btc2.prefix: {
        const decoder = base13 || base58btc2;
        return [
          base58btc2.prefix,
          decoder.decode(source)
        ];
      }
      case base322.prefix: {
        const decoder = base13 || base322;
        return [
          base322.prefix,
          decoder.decode(source)
        ];
      }
      default: {
        if (base13 == null) {
          throw Error("To parse non base32 or base58btc encoded CID multibase decoder must be provided");
        }
        return [
          source[0],
          base13.decode(source)
        ];
      }
    }
  };
  var toStringV02 = (bytes, cache4, base13) => {
    const { prefix } = base13;
    if (prefix !== base58btc2.prefix) {
      throw Error(`Cannot string encode V0 in ${base13.name} encoding`);
    }
    const cid = cache4.get(prefix);
    if (cid == null) {
      const cid2 = base13.encode(bytes).slice(1);
      cache4.set(prefix, cid2);
      return cid2;
    } else {
      return cid;
    }
  };
  var toStringV12 = (bytes, cache4, base13) => {
    const { prefix } = base13;
    const cid = cache4.get(prefix);
    if (cid == null) {
      const cid2 = base13.encode(bytes);
      cache4.set(prefix, cid2);
      return cid2;
    } else {
      return cid;
    }
  };
  var DAG_PB_CODE2 = 112;
  var SHA_256_CODE2 = 18;
  var encodeCID2 = (version7, code8, multihash) => {
    const codeOffset = encodingLength2(version7);
    const hashOffset = codeOffset + encodingLength2(code8);
    const bytes = new Uint8Array(hashOffset + multihash.byteLength);
    encodeTo2(version7, bytes, 0);
    encodeTo2(code8, bytes, codeOffset);
    bytes.set(multihash, hashOffset);
    return bytes;
  };
  var cidSymbol2 = Symbol.for("@ipld/js-cid/CID");
  var readonly2 = {
    writable: false,
    configurable: false,
    enumerable: true
  };
  var hidden = {
    writable: false,
    enumerable: false,
    configurable: false
  };
  var version = "0.0.0-dev";
  var deprecate = (range, message) => {
    if (range.test(version)) {
      console.warn(message);
    } else {
      throw new Error(message);
    }
  };
  var IS_CID_DEPRECATION = `CID.isCID(v) is deprecated and will be removed in the next major release.
Following code pattern:

if (CID.isCID(value)) {
  doSomethingWithCID(value)
}

Is replaced with:

const cid = CID.asCID(value)
if (cid) {
  // Make sure to use cid instead of value
  doSomethingWithCID(cid)
}
`;

  // node_modules/@ceramicnetwork/http-client/node_modules/@ipld/dag-cbor/esm/index.js
  var CID_CBOR_TAG = 42;
  function cidEncoder(obj) {
    if (obj.asCID !== obj) {
      return null;
    }
    const cid = CID2.asCID(obj);
    if (!cid) {
      return null;
    }
    const bytes = new Uint8Array(cid.bytes.byteLength + 1);
    bytes.set(cid.bytes, 1);
    return [
      new Token(Type.tag, CID_CBOR_TAG),
      new Token(Type.bytes, bytes)
    ];
  }
  function undefinedEncoder() {
    throw new Error("`undefined` is not supported by the IPLD Data Model and cannot be encoded");
  }
  function numberEncoder(num) {
    if (Number.isNaN(num)) {
      throw new Error("`NaN` is not supported by the IPLD Data Model and cannot be encoded");
    }
    if (num === Infinity || num === -Infinity) {
      throw new Error("`Infinity` and `-Infinity` is not supported by the IPLD Data Model and cannot be encoded");
    }
    return null;
  }
  var encodeOptions = {
    float64: true,
    typeEncoders: {
      Object: cidEncoder,
      undefined: undefinedEncoder,
      number: numberEncoder
    }
  };
  function cidDecoder(bytes) {
    if (bytes[0] !== 0) {
      throw new Error("Invalid CID for CBOR tag 42; expected leading 0x00");
    }
    return CID2.decode(bytes.subarray(1));
  }
  var decodeOptions = {
    allowIndefinite: false,
    coerceUndefinedToNull: true,
    allowNaN: false,
    allowInfinity: false,
    allowBigInt: true,
    strict: true,
    useMaps: false,
    tags: []
  };
  decodeOptions.tags[CID_CBOR_TAG] = cidDecoder;
  var name2 = "dag-cbor";
  var code2 = 113;
  var encode9 = (node) => encode6(node, encodeOptions);
  var decode11 = (data) => decode6(data, decodeOptions);

  // node_modules/@ceramicnetwork/http-client/node_modules/@ceramicnetwork/streamid/lib/try-catch.util.js
  function tryCatch(fn) {
    try {
      return fn();
    } catch (e) {
      return e;
    }
  }

  // node_modules/@ceramicnetwork/http-client/node_modules/@ceramicnetwork/streamid/lib/reading-bytes.js
  var import_varint3 = __toESM(require_varint(), 1);
  function readVarint(bytes) {
    const value = import_varint3.default.decode(bytes);
    const readLength = import_varint3.default.decode.bytes;
    const remainder = bytes.subarray(readLength);
    return [value, remainder, readLength];
  }
  function isCidVersion(input) {
    return input === 0 || input === 1;
  }
  function readCid(bytes) {
    const [cidVersion, cidVersionRemainder] = readVarint(bytes);
    if (!isCidVersion(cidVersion)) {
      throw new Error(`Unknown CID version ${cidVersion}`);
    }
    const [codec, codecRemainder] = readVarint(cidVersionRemainder);
    const [, mhCodecRemainder, mhCodecLength] = readVarint(codecRemainder);
    const [mhLength, , mhLengthLength] = readVarint(mhCodecRemainder);
    const multihashBytes = codecRemainder.subarray(0, mhCodecLength + mhLengthLength + mhLength);
    const multihashBytesRemainder = codecRemainder.subarray(mhCodecLength + mhLengthLength + mhLength);
    return [CID.create(cidVersion, codec, decode3(multihashBytes)), multihashBytesRemainder];
  }

  // node_modules/@ceramicnetwork/http-client/node_modules/@ceramicnetwork/streamid/lib/stream-ref-parsing.js
  function fromBytes(input, title = "StreamRef") {
    const [streamCodec, streamCodecRemainder] = readVarint(input);
    if (streamCodec !== STREAMID_CODEC)
      throw new Error(`Invalid ${title}, does not include streamid codec`);
    const [type, streamtypeRemainder] = readVarint(streamCodecRemainder);
    const cidResult = readCid(streamtypeRemainder);
    const [genesis, genesisRemainder] = cidResult;
    if (genesisRemainder.length === 0) {
      return {
        kind: "stream-id",
        type,
        genesis
      };
    } else if (genesisRemainder.length === 1 && genesisRemainder[0] === 0) {
      return {
        kind: "commit-id",
        type,
        genesis,
        commit: null
      };
    } else {
      const [commit] = readCid(genesisRemainder);
      return {
        kind: "commit-id",
        type,
        genesis,
        commit
      };
    }
  }
  var URL_PATTERN = /(ceramic:\/\/|\/ceramic\/)?([a-zA-Z0-9]+)(\?commit=([a-zA-Z0-9]+))?/;
  function fromString4(input, title = "StreamRef") {
    const protocolMatch = URL_PATTERN.exec(input) || [];
    const base13 = protocolMatch[2];
    if (!base13)
      throw new Error(`Malformed ${title} string: ${input}`);
    const bytes = base36.decode(base13);
    const streamRef = fromBytes(bytes);
    const commit = protocolMatch[4];
    if (commit) {
      return {
        kind: "commit-id",
        type: streamRef.type,
        genesis: streamRef.genesis,
        commit: parseCommit(streamRef.genesis, commit)
      };
    }
    return streamRef;
  }
  function parseCID(input) {
    try {
      return typeof input === "string" ? CID.parse(input) : CID.asCID(input);
    } catch {
      return null;
    }
  }
  function parseCommit(genesis, commit = null) {
    if (!commit)
      return null;
    if (commit === "0")
      return null;
    const commitCID = parseCID(commit);
    if (commitCID) {
      if (genesis.equals(commitCID)) {
        return null;
      } else {
        return commitCID;
      }
    } else {
      throw new Error("Cannot specify commit as a number except to request commit 0 (the genesis commit)");
    }
  }

  // node_modules/@ceramicnetwork/http-client/node_modules/@ceramicnetwork/streamid/lib/stream-id.js
  var __decorate = function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var InvalidStreamIDBytesError = class extends Error {
    constructor(bytes) {
      super(`Invalid StreamID bytes ${base36.encode(bytes)}: contains commit`);
    }
  };
  var InvalidStreamIDStringError = class extends Error {
    constructor(input) {
      super(`Invalid StreamID string ${input}: contains commit`);
    }
  };
  function fromBytes2(bytes) {
    const parsed = fromBytes(bytes, "StreamID");
    if (parsed.kind === "stream-id") {
      return new StreamID(parsed.type, parsed.genesis);
    }
    throw new InvalidStreamIDBytesError(bytes);
  }
  function fromBytesNoThrow(bytes) {
    return tryCatch(() => fromBytes2(bytes));
  }
  function fromString5(input) {
    const parsed = fromString4(input, "StreamID");
    if (parsed.kind === "stream-id") {
      return new StreamID(parsed.type, parsed.genesis);
    }
    throw new InvalidStreamIDStringError(input);
  }
  function fromStringNoThrow(input) {
    return tryCatch(() => fromString5(input));
  }
  var TAG = Symbol.for("@ceramicnetwork/streamid/StreamID");
  var StreamID = class _StreamID {
    constructor(type, cid) {
      this._tag = TAG;
      if (!(type || type === 0))
        throw new Error("StreamID constructor: type required");
      if (!cid)
        throw new Error("StreamID constructor: cid required");
      this._type = typeof type === "string" ? StreamType.codeByName(type) : type;
      this._cid = typeof cid === "string" ? CID.parse(cid) : cid;
    }
    static isInstance(instance) {
      return typeof instance === "object" && "_tag" in instance && instance._tag === TAG;
    }
    static async fromGenesis(type, genesis) {
      const block = await encode5({ value: genesis, codec: esm_exports, hasher: sha256 });
      return new _StreamID(type, block.cid);
    }
    get type() {
      return this._type;
    }
    get typeName() {
      return StreamType.nameByCode(this._type);
    }
    get cid() {
      return this._cid;
    }
    get bytes() {
      const codec = import_varint4.default.encode(STREAMID_CODEC);
      const type = import_varint4.default.encode(this.type);
      return concat([codec, type, this.cid.bytes]);
    }
    get baseID() {
      return new _StreamID(this._type, this._cid);
    }
    equals(other) {
      if (_StreamID.isInstance(other)) {
        return this.type === other.type && this.cid.equals(other.cid);
      } else {
        return false;
      }
    }
    toString() {
      return base36.encode(this.bytes);
    }
    toUrl() {
      return `ceramic://${this.toString()}`;
    }
    [Symbol.for("nodejs.util.inspect.custom")]() {
      return `StreamID(${this.toString()})`;
    }
    [Symbol.toPrimitive]() {
      return this.toString();
    }
  };
  StreamID.fromBytes = fromBytes2;
  StreamID.fromBytesNoThrow = fromBytesNoThrow;
  StreamID.fromString = fromString5;
  StreamID.fromStringNoThrow = fromStringNoThrow;
  __decorate([
    Memoize(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
  ], StreamID.prototype, "typeName", null);
  __decorate([
    Memoize(),
    __metadata("design:type", Uint8Array),
    __metadata("design:paramtypes", [])
  ], StreamID.prototype, "bytes", null);
  __decorate([
    Memoize(),
    __metadata("design:type", StreamID),
    __metadata("design:paramtypes", [])
  ], StreamID.prototype, "baseID", null);
  __decorate([
    Memoize(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
  ], StreamID.prototype, "toString", null);
  __decorate([
    Memoize(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
  ], StreamID.prototype, "toUrl", null);

  // node_modules/@ceramicnetwork/http-client/node_modules/@ceramicnetwork/streamid/lib/commit-id.js
  var __decorate2 = function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata2 = function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var __classPrivateFieldSet = function(receiver, state, value, kind, f) {
    if (kind === "m")
      throw new TypeError("Private method is not writable");
    if (kind === "a" && !f)
      throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
      throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
  };
  var __classPrivateFieldGet = function(receiver, state, kind, f) {
    if (kind === "a" && !f)
      throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
      throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
  };
  var _CommitID_type;
  var _CommitID_cid;
  var _CommitID_commit;
  var InvalidCommitIDBytesError = class extends Error {
    constructor(bytes) {
      super(`Error while parsing CommitID from bytes ${base36.encode(bytes)}: no commit information provided`);
    }
  };
  var InvalidCommitIDStringError = class extends Error {
    constructor(input) {
      super(`Error while parsing CommitID from string ${input}: no commit information provided`);
    }
  };
  function fromBytes3(bytes) {
    const parsed = fromBytes(bytes, "CommitID");
    if (parsed.kind === "commit-id") {
      return new CommitID(parsed.type, parsed.genesis, parsed.commit);
    }
    throw new InvalidCommitIDBytesError(bytes);
  }
  function fromBytesNoThrow2(bytes) {
    return tryCatch(() => fromBytes3(bytes));
  }
  function fromString6(input) {
    const parsed = fromString4(input, "CommitID");
    if (parsed.kind === "commit-id") {
      return new CommitID(parsed.type, parsed.genesis, parsed.commit);
    }
    throw new InvalidCommitIDStringError(input);
  }
  function fromStringNoThrow2(input) {
    return tryCatch(() => fromString6(input));
  }
  var TAG2 = Symbol.for("@ceramicnetwork/streamid/CommitID");
  function make(stream, commit) {
    return new CommitID(stream.type, stream.cid, commit);
  }
  var CommitID = class {
    constructor(type, cid, commit = null) {
      this._tag = TAG2;
      _CommitID_type.set(this, void 0);
      _CommitID_cid.set(this, void 0);
      _CommitID_commit.set(this, void 0);
      if (!type && type !== 0)
        throw new Error("constructor: type required");
      if (!cid)
        throw new Error("constructor: cid required");
      __classPrivateFieldSet(this, _CommitID_type, typeof type === "string" ? StreamType.codeByName(type) : type, "f");
      __classPrivateFieldSet(this, _CommitID_cid, typeof cid === "string" ? CID.parse(cid) : cid, "f");
      __classPrivateFieldSet(this, _CommitID_commit, parseCommit(__classPrivateFieldGet(this, _CommitID_cid, "f"), commit), "f");
    }
    static isInstance(instance) {
      return typeof instance === "object" && "_tag" in instance && instance._tag === TAG2;
    }
    get baseID() {
      return new StreamID(__classPrivateFieldGet(this, _CommitID_type, "f"), __classPrivateFieldGet(this, _CommitID_cid, "f"));
    }
    get type() {
      return __classPrivateFieldGet(this, _CommitID_type, "f");
    }
    get typeName() {
      return StreamType.nameByCode(__classPrivateFieldGet(this, _CommitID_type, "f"));
    }
    get cid() {
      return __classPrivateFieldGet(this, _CommitID_cid, "f");
    }
    get commit() {
      return __classPrivateFieldGet(this, _CommitID_commit, "f") || __classPrivateFieldGet(this, _CommitID_cid, "f");
    }
    get bytes() {
      const codec = import_varint5.default.encode(STREAMID_CODEC);
      const type = import_varint5.default.encode(this.type);
      const commitBytes = __classPrivateFieldGet(this, _CommitID_commit, "f")?.bytes || new Uint8Array([0]);
      return concat([codec, type, this.cid.bytes, commitBytes]);
    }
    equals(other) {
      return this.type === other.type && this.cid.equals(other.cid) && this.commit.equals(other.commit);
    }
    toString() {
      return base36.encode(this.bytes);
    }
    toUrl() {
      return `ceramic://${this.toString()}`;
    }
    [(_CommitID_type = /* @__PURE__ */ new WeakMap(), _CommitID_cid = /* @__PURE__ */ new WeakMap(), _CommitID_commit = /* @__PURE__ */ new WeakMap(), Symbol.for("nodejs.util.inspect.custom"))]() {
      return `CommitID(${this.toString()})`;
    }
    [Symbol.toPrimitive]() {
      return this.toString();
    }
  };
  CommitID.fromBytes = fromBytes3;
  CommitID.fromBytesNoThrow = fromBytesNoThrow2;
  CommitID.fromString = fromString6;
  CommitID.fromStringNoThrow = fromStringNoThrow2;
  CommitID.make = make;
  __decorate2([
    Memoize(),
    __metadata2("design:type", StreamID),
    __metadata2("design:paramtypes", [])
  ], CommitID.prototype, "baseID", null);
  __decorate2([
    Memoize(),
    __metadata2("design:type", String),
    __metadata2("design:paramtypes", [])
  ], CommitID.prototype, "typeName", null);
  __decorate2([
    Memoize(),
    __metadata2("design:type", CID),
    __metadata2("design:paramtypes", [])
  ], CommitID.prototype, "commit", null);
  __decorate2([
    Memoize(),
    __metadata2("design:type", Uint8Array),
    __metadata2("design:paramtypes", [])
  ], CommitID.prototype, "bytes", null);
  __decorate2([
    Memoize(),
    __metadata2("design:type", Function),
    __metadata2("design:paramtypes", []),
    __metadata2("design:returntype", String)
  ], CommitID.prototype, "toString", null);
  __decorate2([
    Memoize(),
    __metadata2("design:type", Function),
    __metadata2("design:paramtypes", []),
    __metadata2("design:returntype", String)
  ], CommitID.prototype, "toUrl", null);

  // node_modules/@ceramicnetwork/http-client/node_modules/@ceramicnetwork/streamid/lib/stream-ref.js
  var StreamRef;
  (function(StreamRef6) {
    function fromBytes19(input) {
      const parsed = fromBytes(input);
      switch (parsed.kind) {
        case "commit-id":
          return new CommitID(parsed.type, parsed.genesis, parsed.commit);
        case "stream-id":
          return new StreamID(parsed.type, parsed.genesis);
        default:
          throw new Error(`Malformed StreamRef bytes: ${base36.encode(input)}`);
      }
    }
    StreamRef6.fromBytes = fromBytes19;
    function fromString22(input) {
      const parsed = fromString4(input);
      switch (parsed.kind) {
        case "commit-id":
          return new CommitID(parsed.type, parsed.genesis, parsed.commit);
        case "stream-id":
          return new StreamID(parsed.type, parsed.genesis);
        default:
          throw new Error(`Malformed StreamRef string: ${input}`);
      }
    }
    StreamRef6.fromString = fromString22;
    function from14(input) {
      if (StreamID.isInstance(input)) {
        return input;
      }
      if (CommitID.isInstance(input)) {
        return input;
      }
      if (input instanceof Uint8Array) {
        return fromBytes19(input);
      }
      if (typeof input === "string") {
        return fromString22(input);
      }
      throw new Error(`Can not build CommitID or StreamID from ${JSON.stringify(input)}`);
    }
    StreamRef6.from = from14;
  })(StreamRef || (StreamRef = {}));

  // node_modules/@ceramicnetwork/http-client/lib/utils.js
  function typeStreamID(streamId) {
    return typeof streamId === "string" ? StreamID.fromString(streamId) : streamId;
  }
  function serializeObjectToSearchParams(queryURL, queryObject) {
    const resultURL = new URL(queryURL);
    for (const [key, value] of Object.entries(queryObject)) {
      if (StreamID.isInstance(value)) {
        resultURL.searchParams.set(key, value.toString());
      } else if (typeof value == "object") {
        resultURL.searchParams.set(key, JSON.stringify(value));
      } else {
        resultURL.searchParams.set(key, value);
      }
    }
    return resultURL;
  }
  function serializeObjectForHttpPost(query) {
    const result = {};
    for (const [key, value] of Object.entries(query)) {
      if (StreamID.isInstance(value)) {
        result[key] = value.toString();
      } else {
        result[key] = value;
      }
    }
    return result;
  }
  var MissingDIDError = class extends Error {
    constructor() {
      super("Failed to get DID.  Please make sure your Ceramic client has an authenticated DID attached");
    }
  };

  // node_modules/tslib/tslib.es6.js
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (Object.prototype.hasOwnProperty.call(b2, p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  }
  function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  }
  function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() {
      if (t[0] & 1)
        throw t[1];
      return t[1];
    }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
      return this;
    }), g;
    function verb(n) {
      return function(v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f)
        throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _)
        try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
            return t;
          if (y = 0, t)
            op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2])
                _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5)
        throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  }
  function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m)
      return m.call(o);
    if (o && typeof o.length === "number")
      return {
        next: function() {
          if (o && i >= o.length)
            o = void 0;
          return { value: o && o[i++], done: !o };
        }
      };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }
  function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m)
      return o;
    var i = m.call(o), r, ar = [], e;
    try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
        ar.push(r.value);
    } catch (error) {
      e = { error };
    } finally {
      try {
        if (r && !r.done && (m = i["return"]))
          m.call(i);
      } finally {
        if (e)
          throw e.error;
      }
    }
    return ar;
  }
  function __spreadArray(to, from14, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from14.length, ar; i < l; i++) {
        if (ar || !(i in from14)) {
          if (!ar)
            ar = Array.prototype.slice.call(from14, 0, i);
          ar[i] = from14[i];
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from14));
  }
  function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
  }
  function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator)
      throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
      return this;
    }, i;
    function verb(n) {
      if (g[n])
        i[n] = function(v) {
          return new Promise(function(a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
    }
    function resume(n, v) {
      try {
        step(g[n](v));
      } catch (e) {
        settle(q[0][3], e);
      }
    }
    function step(r) {
      r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
      resume("next", value);
    }
    function reject(value) {
      resume("throw", value);
    }
    function settle(f, v) {
      if (f(v), q.shift(), q.length)
        resume(q[0][0], q[0][1]);
    }
  }
  function __asyncValues(o) {
    if (!Symbol.asyncIterator)
      throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
      return this;
    }, i);
    function verb(n) {
      i[n] = o[n] && function(v) {
        return new Promise(function(resolve, reject) {
          v = o[n](v), settle(resolve, reject, v.done, v.value);
        });
      };
    }
    function settle(resolve, reject, d, v) {
      Promise.resolve(v).then(function(v2) {
        resolve({ value: v2, done: d });
      }, reject);
    }
  }

  // node_modules/@ceramicnetwork/http-client/node_modules/rxjs/dist/esm5/internal/util/isFunction.js
  function isFunction(value) {
    return typeof value === "function";
  }

  // node_modules/@ceramicnetwork/http-client/node_modules/rxjs/dist/esm5/internal/util/createErrorClass.js
  function createErrorClass(createImpl) {
    var _super = function(instance) {
      Error.call(instance);
      instance.stack = new Error().stack;
    };
    var ctorFunc = createImpl(_super);
    ctorFunc.prototype = Object.create(Error.prototype);
    ctorFunc.prototype.constructor = ctorFunc;
    return ctorFunc;
  }

  // node_modules/@ceramicnetwork/http-client/node_modules/rxjs/dist/esm5/internal/util/UnsubscriptionError.js
  var UnsubscriptionError = createErrorClass(function(_super) {
    return function UnsubscriptionErrorImpl(errors) {
      _super(this);
      this.message = errors ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function(err, i) {
        return i + 1 + ") " + err.toString();
      }).join("\n  ") : "";
      this.name = "UnsubscriptionError";
      this.errors = errors;
    };
  });

  // node_modules/@ceramicnetwork/http-client/node_modules/rxjs/dist/esm5/internal/util/arrRemove.js
  function arrRemove(arr, item) {
    if (arr) {
      var index = arr.indexOf(item);
      0 <= index && arr.splice(index, 1);
    }
  }

  // node_modules/@ceramicnetwork/http-client/node_modules/rxjs/dist/esm5/internal/Subscription.js
  var Subscription = function() {
    function Subscription3(initialTeardown) {
      this.initialTeardown = initialTeardown;
      this.closed = false;
      this._parentage = null;
      this._finalizers = null;
    }
    Subscription3.prototype.unsubscribe = function() {
      var e_1, _a, e_2, _b;
      var errors;
      if (!this.closed) {
        this.closed = true;
        var _parentage = this._parentage;
        if (_parentage) {
          this._parentage = null;
          if (Array.isArray(_parentage)) {
            try {
              for (var _parentage_1 = __values(_parentage), _parentage_1_1 = _parentage_1.next(); !_parentage_1_1.done; _parentage_1_1 = _parentage_1.next()) {
                var parent_1 = _parentage_1_1.value;
                parent_1.remove(this);
              }
            } catch (e_1_1) {
              e_1 = { error: e_1_1 };
            } finally {
              try {
                if (_parentage_1_1 && !_parentage_1_1.done && (_a = _parentage_1.return))
                  _a.call(_parentage_1);
              } finally {
                if (e_1)
                  throw e_1.error;
              }
            }
          } else {
            _parentage.remove(this);
          }
        }
        var initialFinalizer = this.initialTeardown;
        if (isFunction(initialFinalizer)) {
          try {
            initialFinalizer();
          } catch (e) {
            errors = e instanceof UnsubscriptionError ? e.errors : [e];
          }
        }
        var _finalizers = this._finalizers;
        if (_finalizers) {
          this._finalizers = null;
          try {
            for (var _finalizers_1 = __values(_finalizers), _finalizers_1_1 = _finalizers_1.next(); !_finalizers_1_1.done; _finalizers_1_1 = _finalizers_1.next()) {
              var finalizer = _finalizers_1_1.value;
              try {
                execFinalizer(finalizer);
              } catch (err) {
                errors = errors !== null && errors !== void 0 ? errors : [];
                if (err instanceof UnsubscriptionError) {
                  errors = __spreadArray(__spreadArray([], __read(errors)), __read(err.errors));
                } else {
                  errors.push(err);
                }
              }
            }
          } catch (e_2_1) {
            e_2 = { error: e_2_1 };
          } finally {
            try {
              if (_finalizers_1_1 && !_finalizers_1_1.done && (_b = _finalizers_1.return))
                _b.call(_finalizers_1);
            } finally {
              if (e_2)
                throw e_2.error;
            }
          }
        }
        if (errors) {
          throw new UnsubscriptionError(errors);
        }
      }
    };
    Subscription3.prototype.add = function(teardown) {
      var _a;
      if (teardown && teardown !== this) {
        if (this.closed) {
          execFinalizer(teardown);
        } else {
          if (teardown instanceof Subscription3) {
            if (teardown.closed || teardown._hasParent(this)) {
              return;
            }
            teardown._addParent(this);
          }
          (this._finalizers = (_a = this._finalizers) !== null && _a !== void 0 ? _a : []).push(teardown);
        }
      }
    };
    Subscription3.prototype._hasParent = function(parent) {
      var _parentage = this._parentage;
      return _parentage === parent || Array.isArray(_parentage) && _parentage.includes(parent);
    };
    Subscription3.prototype._addParent = function(parent) {
      var _parentage = this._parentage;
      this._parentage = Array.isArray(_parentage) ? (_parentage.push(parent), _parentage) : _parentage ? [_parentage, parent] : parent;
    };
    Subscription3.prototype._removeParent = function(parent) {
      var _parentage = this._parentage;
      if (_parentage === parent) {
        this._parentage = null;
      } else if (Array.isArray(_parentage)) {
        arrRemove(_parentage, parent);
      }
    };
    Subscription3.prototype.remove = function(teardown) {
      var _finalizers = this._finalizers;
      _finalizers && arrRemove(_finalizers, teardown);
      if (teardown instanceof Subscription3) {
        teardown._removeParent(this);
      }
    };
    Subscription3.EMPTY = function() {
      var empty10 = new Subscription3();
      empty10.closed = true;
      return empty10;
    }();
    return Subscription3;
  }();
  var EMPTY_SUBSCRIPTION = Subscription.EMPTY;
  function isSubscription(value) {
    return value instanceof Subscription || value && "closed" in value && isFunction(value.remove) && isFunction(value.add) && isFunction(value.unsubscribe);
  }
  function execFinalizer(finalizer) {
    if (isFunction(finalizer)) {
      finalizer();
    } else {
      finalizer.unsubscribe();
    }
  }

  // node_modules/@ceramicnetwork/http-client/node_modules/rxjs/dist/esm5/internal/config.js
  var config = {
    onUnhandledError: null,
    onStoppedNotification: null,
    Promise: void 0,
    useDeprecatedSynchronousErrorHandling: false,
    useDeprecatedNextContext: false
  };

  // node_modules/@ceramicnetwork/http-client/node_modules/rxjs/dist/esm5/internal/scheduler/timeoutProvider.js
  var timeoutProvider = {
    setTimeout: function(handler, timeout) {
      var args = [];
      for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
      }
      var delegate = timeoutProvider.delegate;
      if (delegate === null || delegate === void 0 ? void 0 : delegate.setTimeout) {
        return delegate.setTimeout.apply(delegate, __spreadArray([handler, timeout], __read(args)));
      }
      return setTimeout.apply(void 0, __spreadArray([handler, timeout], __read(args)));
    },
    clearTimeout: function(handle) {
      var delegate = timeoutProvider.delegate;
      return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearTimeout) || clearTimeout)(handle);
    },
    delegate: void 0
  };

  // node_modules/@ceramicnetwork/http-client/node_modules/rxjs/dist/esm5/internal/util/reportUnhandledError.js
  function reportUnhandledError(err) {
    timeoutProvider.setTimeout(function() {
      var onUnhandledError = config.onUnhandledError;
      if (onUnhandledError) {
        onUnhandledError(err);
      } else {
        throw err;
      }
    });
  }

  // node_modules/@ceramicnetwork/http-client/node_modules/rxjs/dist/esm5/internal/util/noop.js
  function noop() {
  }

  // node_modules/@ceramicnetwork/http-client/node_modules/rxjs/dist/esm5/internal/NotificationFactories.js
  var COMPLETE_NOTIFICATION = function() {
    return createNotification("C", void 0, void 0);
  }();
  function errorNotification(error) {
    return createNotification("E", void 0, error);
  }
  function nextNotification(value) {
    return createNotification("N", value, void 0);
  }
  function createNotification(kind, value, error) {
    return {
      kind,
      value,
      error
    };
  }

  // node_modules/@ceramicnetwork/http-client/node_modules/rxjs/dist/esm5/internal/util/errorContext.js
  var context = null;
  function errorContext(cb) {
    if (config.useDeprecatedSynchronousErrorHandling) {
      var isRoot = !context;
      if (isRoot) {
        context = { errorThrown: false, error: null };
      }
      cb();
      if (isRoot) {
        var _a = context, errorThrown = _a.errorThrown, error = _a.error;
        context = null;
        if (errorThrown) {
          throw error;
        }
      }
    } else {
      cb();
    }
  }
  function captureError(err) {
    if (config.useDeprecatedSynchronousErrorHandling && context) {
      context.errorThrown = true;
      context.error = err;
    }
  }

  // node_modules/@ceramicnetwork/http-client/node_modules/rxjs/dist/esm5/internal/Subscriber.js
  var Subscriber = function(_super) {
    __extends(Subscriber3, _super);
    function Subscriber3(destination) {
      var _this = _super.call(this) || this;
      _this.isStopped = false;
      if (destination) {
        _this.destination = destination;
        if (isSubscription(destination)) {
          destination.add(_this);
        }
      } else {
        _this.destination = EMPTY_OBSERVER;
      }
      return _this;
    }
    Subscriber3.create = function(next, error, complete) {
      return new SafeSubscriber(next, error, complete);
    };
    Subscriber3.prototype.next = function(value) {
      if (this.isStopped) {
        handleStoppedNotification(nextNotification(value), this);
      } else {
        this._next(value);
      }
    };
    Subscriber3.prototype.error = function(err) {
      if (this.isStopped) {
        handleStoppedNotification(errorNotification(err), this);
      } else {
        this.isStopped = true;
        this._error(err);
      }
    };
    Subscriber3.prototype.complete = function() {
      if (this.isStopped) {
        handleStoppedNotification(COMPLETE_NOTIFICATION, this);
      } else {
        this.isStopped = true;
        this._complete();
      }
    };
    Subscriber3.prototype.unsubscribe = function() {
      if (!this.closed) {
        this.isStopped = true;
        _super.prototype.unsubscribe.call(this);
        this.destination = null;
      }
    };
    Subscriber3.prototype._next = function(value) {
      this.destination.next(value);
    };
    Subscriber3.prototype._error = function(err) {
      try {
        this.destination.error(err);
      } finally {
        this.unsubscribe();
      }
    };
    Subscriber3.prototype._complete = function() {
      try {
        this.destination.complete();
      } finally {
        this.unsubscribe();
      }
    };
    return Subscriber3;
  }(Subscription);
  var _bind = Function.prototype.bind;
  function bind(fn, thisArg) {
    return _bind.call(fn, thisArg);
  }
  var ConsumerObserver = function() {
    function ConsumerObserver3(partialObserver) {
      this.partialObserver = partialObserver;
    }
    ConsumerObserver3.prototype.next = function(value) {
      var partialObserver = this.partialObserver;
      if (partialObserver.next) {
        try {
          partialObserver.next(value);
        } catch (error) {
          handleUnhandledError(error);
        }
      }
    };
    ConsumerObserver3.prototype.error = function(err) {
      var partialObserver = this.partialObserver;
      if (partialObserver.error) {
        try {
          partialObserver.error(err);
        } catch (error) {
          handleUnhandledError(error);
        }
      } else {
        handleUnhandledError(err);
      }
    };
    ConsumerObserver3.prototype.complete = function() {
      var partialObserver = this.partialObserver;
      if (partialObserver.complete) {
        try {
          partialObserver.complete();
        } catch (error) {
          handleUnhandledError(error);
        }
      }
    };
    return ConsumerObserver3;
  }();
  var SafeSubscriber = function(_super) {
    __extends(SafeSubscriber3, _super);
    function SafeSubscriber3(observerOrNext, error, complete) {
      var _this = _super.call(this) || this;
      var partialObserver;
      if (isFunction(observerOrNext) || !observerOrNext) {
        partialObserver = {
          next: observerOrNext !== null && observerOrNext !== void 0 ? observerOrNext : void 0,
          error: error !== null && error !== void 0 ? error : void 0,
          complete: complete !== null && complete !== void 0 ? complete : void 0
        };
      } else {
        var context_1;
        if (_this && config.useDeprecatedNextContext) {
          context_1 = Object.create(observerOrNext);
          context_1.unsubscribe = function() {
            return _this.unsubscribe();
          };
          partialObserver = {
            next: observerOrNext.next && bind(observerOrNext.next, context_1),
            error: observerOrNext.error && bind(observerOrNext.error, context_1),
            complete: observerOrNext.complete && bind(observerOrNext.complete, context_1)
          };
        } else {
          partialObserver = observerOrNext;
        }
      }
      _this.destination = new ConsumerObserver(partialObserver);
      return _this;
    }
    return SafeSubscriber3;
  }(Subscriber);
  function handleUnhandledError(error) {
    if (config.useDeprecatedSynchronousErrorHandling) {
      captureError(error);
    } else {
      reportUnhandledError(error);
    }
  }
  function defaultErrorHandler(err) {
    throw err;
  }
  function handleStoppedNotification(notification, subscriber) {
    var onStoppedNotification = config.onStoppedNotification;
    onStoppedNotification && timeoutProvider.setTimeout(function() {
      return onStoppedNotification(notification, subscriber);
    });
  }
  var EMPTY_OBSERVER = {
    closed: true,
    next: noop,
    error: defaultErrorHandler,
    complete: noop
  };

  // node_modules/@ceramicnetwork/http-client/node_modules/rxjs/dist/esm5/internal/symbol/observable.js
  var observable = function() {
    return typeof Symbol === "function" && Symbol.observable || "@@observable";
  }();

  // node_modules/@ceramicnetwork/http-client/node_modules/rxjs/dist/esm5/internal/util/identity.js
  function identity3(x) {
    return x;
  }

  // node_modules/@ceramicnetwork/http-client/node_modules/rxjs/dist/esm5/internal/util/pipe.js
  function pipeFromArray(fns) {
    if (fns.length === 0) {
      return identity3;
    }
    if (fns.length === 1) {
      return fns[0];
    }
    return function piped(input) {
      return fns.reduce(function(prev, fn) {
        return fn(prev);
      }, input);
    };
  }

  // node_modules/@ceramicnetwork/http-client/node_modules/rxjs/dist/esm5/internal/Observable.js
  var Observable = function() {
    function Observable3(subscribe) {
      if (subscribe) {
        this._subscribe = subscribe;
      }
    }
    Observable3.prototype.lift = function(operator) {
      var observable3 = new Observable3();
      observable3.source = this;
      observable3.operator = operator;
      return observable3;
    };
    Observable3.prototype.subscribe = function(observerOrNext, error, complete) {
      var _this = this;
      var subscriber = isSubscriber(observerOrNext) ? observerOrNext : new SafeSubscriber(observerOrNext, error, complete);
      errorContext(function() {
        var _a = _this, operator = _a.operator, source = _a.source;
        subscriber.add(operator ? operator.call(subscriber, source) : source ? _this._subscribe(subscriber) : _this._trySubscribe(subscriber));
      });
      return subscriber;
    };
    Observable3.prototype._trySubscribe = function(sink) {
      try {
        return this._subscribe(sink);
      } catch (err) {
        sink.error(err);
      }
    };
    Observable3.prototype.forEach = function(next, promiseCtor) {
      var _this = this;
      promiseCtor = getPromiseCtor(promiseCtor);
      return new promiseCtor(function(resolve, reject) {
        var subscriber = new SafeSubscriber({
          next: function(value) {
            try {
              next(value);
            } catch (err) {
              reject(err);
              subscriber.unsubscribe();
            }
          },
          error: reject,
          complete: resolve
        });
        _this.subscribe(subscriber);
      });
    };
    Observable3.prototype._subscribe = function(subscriber) {
      var _a;
      return (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber);
    };
    Observable3.prototype[observable] = function() {
      return this;
    };
    Observable3.prototype.pipe = function() {
      var operations = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        operations[_i] = arguments[_i];
      }
      return pipeFromArray(operations)(this);
    };
    Observable3.prototype.toPromise = function(promiseCtor) {
      var _this = this;
      promiseCtor = getPromiseCtor(promiseCtor);
      return new promiseCtor(function(resolve, reject) {
        var value;
        _this.subscribe(function(x) {
          return value = x;
        }, function(err) {
          return reject(err);
        }, function() {
          return resolve(value);
        });
      });
    };
    Observable3.create = function(subscribe) {
      return new Observable3(subscribe);
    };
    return Observable3;
  }();
  function getPromiseCtor(promiseCtor) {
    var _a;
    return (_a = promiseCtor !== null && promiseCtor !== void 0 ? promiseCtor : config.Promise) !== null && _a !== void 0 ? _a : Promise;
  }
  function isObserver(value) {
    return value && isFunction(value.next) && isFunction(value.error) && isFunction(value.complete);
  }
  function isSubscriber(value) {
    return value && value instanceof Subscriber || isObserver(value) && isSubscription(value);
  }

  // node_modules/@ceramicnetwork/http-client/node_modules/rxjs/dist/esm5/internal/util/lift.js
  function hasLift(source) {
    return isFunction(source === null || source === void 0 ? void 0 : source.lift);
  }
  function operate(init) {
    return function(source) {
      if (hasLift(source)) {
        return source.lift(function(liftedSource) {
          try {
            return init(liftedSource, this);
          } catch (err) {
            this.error(err);
          }
        });
      }
      throw new TypeError("Unable to lift unknown Observable type");
    };
  }

  // node_modules/@ceramicnetwork/http-client/node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js
  function createOperatorSubscriber(destination, onNext, onComplete, onError, onFinalize) {
    return new OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize);
  }
  var OperatorSubscriber = function(_super) {
    __extends(OperatorSubscriber3, _super);
    function OperatorSubscriber3(destination, onNext, onComplete, onError, onFinalize, shouldUnsubscribe) {
      var _this = _super.call(this, destination) || this;
      _this.onFinalize = onFinalize;
      _this.shouldUnsubscribe = shouldUnsubscribe;
      _this._next = onNext ? function(value) {
        try {
          onNext(value);
        } catch (err) {
          destination.error(err);
        }
      } : _super.prototype._next;
      _this._error = onError ? function(err) {
        try {
          onError(err);
        } catch (err2) {
          destination.error(err2);
        } finally {
          this.unsubscribe();
        }
      } : _super.prototype._error;
      _this._complete = onComplete ? function() {
        try {
          onComplete();
        } catch (err) {
          destination.error(err);
        } finally {
          this.unsubscribe();
        }
      } : _super.prototype._complete;
      return _this;
    }
    OperatorSubscriber3.prototype.unsubscribe = function() {
      var _a;
      if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
        var closed_1 = this.closed;
        _super.prototype.unsubscribe.call(this);
        !closed_1 && ((_a = this.onFinalize) === null || _a === void 0 ? void 0 : _a.call(this));
      }
    };
    return OperatorSubscriber3;
  }(Subscriber);

  // node_modules/@ceramicnetwork/http-client/node_modules/rxjs/dist/esm5/internal/scheduler/dateTimestampProvider.js
  var dateTimestampProvider = {
    now: function() {
      return (dateTimestampProvider.delegate || Date).now();
    },
    delegate: void 0
  };

  // node_modules/@ceramicnetwork/http-client/node_modules/rxjs/dist/esm5/internal/scheduler/Action.js
  var Action = function(_super) {
    __extends(Action3, _super);
    function Action3(scheduler, work) {
      return _super.call(this) || this;
    }
    Action3.prototype.schedule = function(state, delay) {
      if (delay === void 0) {
        delay = 0;
      }
      return this;
    };
    return Action3;
  }(Subscription);

  // node_modules/@ceramicnetwork/http-client/node_modules/rxjs/dist/esm5/internal/scheduler/intervalProvider.js
  var intervalProvider = {
    setInterval: function(handler, timeout) {
      var args = [];
      for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
      }
      var delegate = intervalProvider.delegate;
      if (delegate === null || delegate === void 0 ? void 0 : delegate.setInterval) {
        return delegate.setInterval.apply(delegate, __spreadArray([handler, timeout], __read(args)));
      }
      return setInterval.apply(void 0, __spreadArray([handler, timeout], __read(args)));
    },
    clearInterval: function(handle) {
      var delegate = intervalProvider.delegate;
      return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearInterval) || clearInterval)(handle);
    },
    delegate: void 0
  };

  // node_modules/@ceramicnetwork/http-client/node_modules/rxjs/dist/esm5/internal/scheduler/AsyncAction.js
  var AsyncAction = function(_super) {
    __extends(AsyncAction3, _super);
    function AsyncAction3(scheduler, work) {
      var _this = _super.call(this, scheduler, work) || this;
      _this.scheduler = scheduler;
      _this.work = work;
      _this.pending = false;
      return _this;
    }
    AsyncAction3.prototype.schedule = function(state, delay) {
      var _a;
      if (delay === void 0) {
        delay = 0;
      }
      if (this.closed) {
        return this;
      }
      this.state = state;
      var id = this.id;
      var scheduler = this.scheduler;
      if (id != null) {
        this.id = this.recycleAsyncId(scheduler, id, delay);
      }
      this.pending = true;
      this.delay = delay;
      this.id = (_a = this.id) !== null && _a !== void 0 ? _a : this.requestAsyncId(scheduler, this.id, delay);
      return this;
    };
    AsyncAction3.prototype.requestAsyncId = function(scheduler, _id, delay) {
      if (delay === void 0) {
        delay = 0;
      }
      return intervalProvider.setInterval(scheduler.flush.bind(scheduler, this), delay);
    };
    AsyncAction3.prototype.recycleAsyncId = function(_scheduler, id, delay) {
      if (delay === void 0) {
        delay = 0;
      }
      if (delay != null && this.delay === delay && this.pending === false) {
        return id;
      }
      if (id != null) {
        intervalProvider.clearInterval(id);
      }
      return void 0;
    };
    AsyncAction3.prototype.execute = function(state, delay) {
      if (this.closed) {
        return new Error("executing a cancelled action");
      }
      this.pending = false;
      var error = this._execute(state, delay);
      if (error) {
        return error;
      } else if (this.pending === false && this.id != null) {
        this.id = this.recycleAsyncId(this.scheduler, this.id, null);
      }
    };
    AsyncAction3.prototype._execute = function(state, _delay) {
      var errored = false;
      var errorValue;
      try {
        this.work(state);
      } catch (e) {
        errored = true;
        errorValue = e ? e : new Error("Scheduled action threw falsy error");
      }
      if (errored) {
        this.unsubscribe();
        return errorValue;
      }
    };
    AsyncAction3.prototype.unsubscribe = function() {
      if (!this.closed) {
        var _a = this, id = _a.id, scheduler = _a.scheduler;
        var actions = scheduler.actions;
        this.work = this.state = this.scheduler = null;
        this.pending = false;
        arrRemove(actions, this);
        if (id != null) {
          this.id = this.recycleAsyncId(scheduler, id, null);
        }
        this.delay = null;
        _super.prototype.unsubscribe.call(this);
      }
    };
    return AsyncAction3;
  }(Action);

  // node_modules/@ceramicnetwork/http-client/node_modules/rxjs/dist/esm5/internal/Scheduler.js
  var Scheduler = function() {
    function Scheduler3(schedulerActionCtor, now) {
      if (now === void 0) {
        now = Scheduler3.now;
      }
      this.schedulerActionCtor = schedulerActionCtor;
      this.now = now;
    }
    Scheduler3.prototype.schedule = function(work, delay, state) {
      if (delay === void 0) {
        delay = 0;
      }
      return new this.schedulerActionCtor(this, work).schedule(state, delay);
    };
    Scheduler3.now = dateTimestampProvider.now;
    return Scheduler3;
  }();

  // node_modules/@ceramicnetwork/http-client/node_modules/rxjs/dist/esm5/internal/scheduler/AsyncScheduler.js
  var AsyncScheduler = function(_super) {
    __extends(AsyncScheduler3, _super);
    function AsyncScheduler3(SchedulerAction, now) {
      if (now === void 0) {
        now = Scheduler.now;
      }
      var _this = _super.call(this, SchedulerAction, now) || this;
      _this.actions = [];
      _this._active = false;
      return _this;
    }
    AsyncScheduler3.prototype.flush = function(action) {
      var actions = this.actions;
      if (this._active) {
        actions.push(action);
        return;
      }
      var error;
      this._active = true;
      do {
        if (error = action.execute(action.state, action.delay)) {
          break;
        }
      } while (action = actions.shift());
      this._active = false;
      if (error) {
        while (action = actions.shift()) {
          action.unsubscribe();
        }
        throw error;
      }
    };
    return AsyncScheduler3;
  }(Scheduler);

  // node_modules/@ceramicnetwork/http-client/node_modules/rxjs/dist/esm5/internal/scheduler/async.js
  var asyncScheduler = new AsyncScheduler(AsyncAction);
  var async = asyncScheduler;

  // node_modules/@ceramicnetwork/http-client/node_modules/rxjs/dist/esm5/internal/util/isScheduler.js
  function isScheduler(value) {
    return value && isFunction(value.schedule);
  }

  // node_modules/@ceramicnetwork/http-client/node_modules/rxjs/dist/esm5/internal/util/isArrayLike.js
  var isArrayLike = function(x) {
    return x && typeof x.length === "number" && typeof x !== "function";
  };

  // node_modules/@ceramicnetwork/http-client/node_modules/rxjs/dist/esm5/internal/util/isPromise.js
  function isPromise(value) {
    return isFunction(value === null || value === void 0 ? void 0 : value.then);
  }

  // node_modules/@ceramicnetwork/http-client/node_modules/rxjs/dist/esm5/internal/util/isInteropObservable.js
  function isInteropObservable(input) {
    return isFunction(input[observable]);
  }

  // node_modules/@ceramicnetwork/http-client/node_modules/rxjs/dist/esm5/internal/util/isAsyncIterable.js
  function isAsyncIterable(obj) {
    return Symbol.asyncIterator && isFunction(obj === null || obj === void 0 ? void 0 : obj[Symbol.asyncIterator]);
  }

  // node_modules/@ceramicnetwork/http-client/node_modules/rxjs/dist/esm5/internal/util/throwUnobservableError.js
  function createInvalidObservableTypeError(input) {
    return new TypeError("You provided " + (input !== null && typeof input === "object" ? "an invalid object" : "'" + input + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
  }

  // node_modules/@ceramicnetwork/http-client/node_modules/rxjs/dist/esm5/internal/symbol/iterator.js
  function getSymbolIterator() {
    if (typeof Symbol !== "function" || !Symbol.iterator) {
      return "@@iterator";
    }
    return Symbol.iterator;
  }
  var iterator = getSymbolIterator();

  // node_modules/@ceramicnetwork/http-client/node_modules/rxjs/dist/esm5/internal/util/isIterable.js
  function isIterable(input) {
    return isFunction(input === null || input === void 0 ? void 0 : input[iterator]);
  }

  // node_modules/@ceramicnetwork/http-client/node_modules/rxjs/dist/esm5/internal/util/isReadableStreamLike.js
  function readableStreamLikeToAsyncGenerator(readableStream) {
    return __asyncGenerator(this, arguments, function readableStreamLikeToAsyncGenerator_1() {
      var reader, _a, value, done;
      return __generator(this, function(_b) {
        switch (_b.label) {
          case 0:
            reader = readableStream.getReader();
            _b.label = 1;
          case 1:
            _b.trys.push([1, , 9, 10]);
            _b.label = 2;
          case 2:
            if (false)
              return [3, 8];
            return [4, __await(reader.read())];
          case 3:
            _a = _b.sent(), value = _a.value, done = _a.done;
            if (!done)
              return [3, 5];
            return [4, __await(void 0)];
          case 4:
            return [2, _b.sent()];
          case 5:
            return [4, __await(value)];
          case 6:
            return [4, _b.sent()];
          case 7:
            _b.sent();
            return [3, 2];
          case 8:
            return [3, 10];
          case 9:
            reader.releaseLock();
            return [7];
          case 10:
            return [2];
        }
      });
    });
  }
  function isReadableStreamLike(obj) {
    return isFunction(obj === null || obj === void 0 ? void 0 : obj.getReader);
  }

  // node_modules/@ceramicnetwork/http-client/node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js
  function innerFrom(input) {
    if (input instanceof Observable) {
      return input;
    }
    if (input != null) {
      if (isInteropObservable(input)) {
        return fromInteropObservable(input);
      }
      if (isArrayLike(input)) {
        return fromArrayLike(input);
      }
      if (isPromise(input)) {
        return fromPromise(input);
      }
      if (isAsyncIterable(input)) {
        return fromAsyncIterable(input);
      }
      if (isIterable(input)) {
        return fromIterable(input);
      }
      if (isReadableStreamLike(input)) {
        return fromReadableStreamLike(input);
      }
    }
    throw createInvalidObservableTypeError(input);
  }
  function fromInteropObservable(obj) {
    return new Observable(function(subscriber) {
      var obs = obj[observable]();
      if (isFunction(obs.subscribe)) {
        return obs.subscribe(subscriber);
      }
      throw new TypeError("Provided object does not correctly implement Symbol.observable");
    });
  }
  function fromArrayLike(array) {
    return new Observable(function(subscriber) {
      for (var i = 0; i < array.length && !subscriber.closed; i++) {
        subscriber.next(array[i]);
      }
      subscriber.complete();
    });
  }
  function fromPromise(promise) {
    return new Observable(function(subscriber) {
      promise.then(function(value) {
        if (!subscriber.closed) {
          subscriber.next(value);
          subscriber.complete();
        }
      }, function(err) {
        return subscriber.error(err);
      }).then(null, reportUnhandledError);
    });
  }
  function fromIterable(iterable) {
    return new Observable(function(subscriber) {
      var e_1, _a;
      try {
        for (var iterable_1 = __values(iterable), iterable_1_1 = iterable_1.next(); !iterable_1_1.done; iterable_1_1 = iterable_1.next()) {
          var value = iterable_1_1.value;
          subscriber.next(value);
          if (subscriber.closed) {
            return;
          }
        }
      } catch (e_1_1) {
        e_1 = { error: e_1_1 };
      } finally {
        try {
          if (iterable_1_1 && !iterable_1_1.done && (_a = iterable_1.return))
            _a.call(iterable_1);
        } finally {
          if (e_1)
            throw e_1.error;
        }
      }
      subscriber.complete();
    });
  }
  function fromAsyncIterable(asyncIterable) {
    return new Observable(function(subscriber) {
      process(asyncIterable, subscriber).catch(function(err) {
        return subscriber.error(err);
      });
    });
  }
  function fromReadableStreamLike(readableStream) {
    return fromAsyncIterable(readableStreamLikeToAsyncGenerator(readableStream));
  }
  function process(asyncIterable, subscriber) {
    var asyncIterable_1, asyncIterable_1_1;
    var e_2, _a;
    return __awaiter(this, void 0, void 0, function() {
      var value, e_2_1;
      return __generator(this, function(_b) {
        switch (_b.label) {
          case 0:
            _b.trys.push([0, 5, 6, 11]);
            asyncIterable_1 = __asyncValues(asyncIterable);
            _b.label = 1;
          case 1:
            return [4, asyncIterable_1.next()];
          case 2:
            if (!(asyncIterable_1_1 = _b.sent(), !asyncIterable_1_1.done))
              return [3, 4];
            value = asyncIterable_1_1.value;
            subscriber.next(value);
            if (subscriber.closed) {
              return [2];
            }
            _b.label = 3;
          case 3:
            return [3, 1];
          case 4:
            return [3, 11];
          case 5:
            e_2_1 = _b.sent();
            e_2 = { error: e_2_1 };
            return [3, 11];
          case 6:
            _b.trys.push([6, , 9, 10]);
            if (!(asyncIterable_1_1 && !asyncIterable_1_1.done && (_a = asyncIterable_1.return)))
              return [3, 8];
            return [4, _a.call(asyncIterable_1)];
          case 7:
            _b.sent();
            _b.label = 8;
          case 8:
            return [3, 10];
          case 9:
            if (e_2)
              throw e_2.error;
            return [7];
          case 10:
            return [7];
          case 11:
            subscriber.complete();
            return [2];
        }
      });
    });
  }

  // node_modules/@ceramicnetwork/http-client/node_modules/rxjs/dist/esm5/internal/util/isDate.js
  function isValidDate(value) {
    return value instanceof Date && !isNaN(value);
  }

  // node_modules/@ceramicnetwork/http-client/node_modules/rxjs/dist/esm5/internal/observable/timer.js
  function timer(dueTime, intervalOrScheduler, scheduler) {
    if (dueTime === void 0) {
      dueTime = 0;
    }
    if (scheduler === void 0) {
      scheduler = async;
    }
    var intervalDuration = -1;
    if (intervalOrScheduler != null) {
      if (isScheduler(intervalOrScheduler)) {
        scheduler = intervalOrScheduler;
      } else {
        intervalDuration = intervalOrScheduler;
      }
    }
    return new Observable(function(subscriber) {
      var due = isValidDate(dueTime) ? +dueTime - scheduler.now() : dueTime;
      if (due < 0) {
        due = 0;
      }
      var n = 0;
      return scheduler.schedule(function() {
        if (!subscriber.closed) {
          subscriber.next(n++);
          if (0 <= intervalDuration) {
            this.schedule(void 0, intervalDuration);
          } else {
            subscriber.complete();
          }
        }
      }, due);
    });
  }

  // node_modules/@ceramicnetwork/http-client/node_modules/rxjs/dist/esm5/internal/operators/throttle.js
  function throttle(durationSelector, config3) {
    return operate(function(source, subscriber) {
      var _a = config3 !== null && config3 !== void 0 ? config3 : {}, _b = _a.leading, leading = _b === void 0 ? true : _b, _c = _a.trailing, trailing = _c === void 0 ? false : _c;
      var hasValue = false;
      var sendValue = null;
      var throttled = null;
      var isComplete = false;
      var endThrottling = function() {
        throttled === null || throttled === void 0 ? void 0 : throttled.unsubscribe();
        throttled = null;
        if (trailing) {
          send();
          isComplete && subscriber.complete();
        }
      };
      var cleanupThrottling = function() {
        throttled = null;
        isComplete && subscriber.complete();
      };
      var startThrottle = function(value) {
        return throttled = innerFrom(durationSelector(value)).subscribe(createOperatorSubscriber(subscriber, endThrottling, cleanupThrottling));
      };
      var send = function() {
        if (hasValue) {
          hasValue = false;
          var value = sendValue;
          sendValue = null;
          subscriber.next(value);
          !isComplete && startThrottle(value);
        }
      };
      source.subscribe(createOperatorSubscriber(subscriber, function(value) {
        hasValue = true;
        sendValue = value;
        !(throttled && !throttled.closed) && (leading ? send() : startThrottle(value));
      }, function() {
        isComplete = true;
        !(trailing && hasValue && throttled && !throttled.closed) && subscriber.complete();
      }));
    });
  }

  // node_modules/@ceramicnetwork/common/lib/anchor-service.js
  var AnchorStatus;
  (function(AnchorStatus2) {
    AnchorStatus2[AnchorStatus2["NOT_REQUESTED"] = 0] = "NOT_REQUESTED";
    AnchorStatus2[AnchorStatus2["PENDING"] = 1] = "PENDING";
    AnchorStatus2[AnchorStatus2["PROCESSING"] = 2] = "PROCESSING";
    AnchorStatus2[AnchorStatus2["ANCHORED"] = 3] = "ANCHORED";
    AnchorStatus2[AnchorStatus2["FAILED"] = 4] = "FAILED";
    AnchorStatus2[AnchorStatus2["REPLACED"] = 5] = "REPLACED";
  })(AnchorStatus || (AnchorStatus = {}));
  var AnchorServiceAuthMethods;
  (function(AnchorServiceAuthMethods2) {
    AnchorServiceAuthMethods2["DID"] = "did";
  })(AnchorServiceAuthMethods || (AnchorServiceAuthMethods = {}));

  // node_modules/@ceramicnetwork/common/lib/streamopts.js
  var SyncOptions;
  (function(SyncOptions2) {
    SyncOptions2[SyncOptions2["PREFER_CACHE"] = 0] = "PREFER_CACHE";
    SyncOptions2[SyncOptions2["SYNC_ALWAYS"] = 1] = "SYNC_ALWAYS";
    SyncOptions2[SyncOptions2["NEVER_SYNC"] = 2] = "NEVER_SYNC";
    SyncOptions2[SyncOptions2["SYNC_ON_ERROR"] = 3] = "SYNC_ON_ERROR";
  })(SyncOptions || (SyncOptions = {}));

  // node_modules/@ceramicnetwork/common/lib/stream.js
  var import_lodash = __toESM(require_lodash(), 1);

  // node_modules/@ceramicnetwork/common/node_modules/@ceramicnetwork/streamid/lib/stream-type.js
  var registry2 = {
    tile: 0,
    "caip10-link": 1,
    model: 2,
    MID: 3,
    UNLOADABLE: 4
  };
  function codeByName2(name8) {
    const index = registry2[name8];
    if (typeof index !== "undefined") {
      return index;
    } else {
      throw new Error(`No stream type registered for name ${name8}`);
    }
  }
  function nameByCode2(index) {
    const pair = Object.entries(registry2).find(([, v]) => v === index);
    if (pair) {
      return pair[0];
    } else {
      throw new Error(`No stream type registered for index ${index}`);
    }
  }
  var StreamType2 = class {
  };
  StreamType2.nameByCode = nameByCode2;
  StreamType2.codeByName = codeByName2;

  // node_modules/@ceramicnetwork/common/node_modules/@ceramicnetwork/streamid/lib/commit-id.js
  var import_varint9 = __toESM(require_varint(), 1);

  // node_modules/@ceramicnetwork/common/node_modules/@ceramicnetwork/streamid/lib/constants.js
  var STREAMID_CODEC2 = 206;

  // node_modules/@ceramicnetwork/common/node_modules/@ceramicnetwork/streamid/lib/stream-id.js
  var import_varint8 = __toESM(require_varint(), 1);

  // node_modules/@ceramicnetwork/common/node_modules/@ipld/dag-cbor/esm/index.js
  var esm_exports2 = {};
  __export(esm_exports2, {
    code: () => code3,
    decode: () => decode16,
    encode: () => encode12,
    name: () => name3
  });

  // node_modules/@ceramicnetwork/common/node_modules/@ipld/dag-cbor/node_modules/multiformats/esm/vendor/varint.js
  var encode_13 = encode10;
  var MSB3 = 128;
  var REST3 = 127;
  var MSBALL3 = ~REST3;
  var INT3 = Math.pow(2, 31);
  function encode10(num, out, offset) {
    out = out || [];
    offset = offset || 0;
    var oldOffset = offset;
    while (num >= INT3) {
      out[offset++] = num & 255 | MSB3;
      num /= 128;
    }
    while (num & MSBALL3) {
      out[offset++] = num & 255 | MSB3;
      num >>>= 7;
    }
    out[offset] = num | 0;
    encode10.bytes = offset - oldOffset + 1;
    return out;
  }
  var decode12 = read3;
  var MSB$13 = 128;
  var REST$13 = 127;
  function read3(buf2, offset) {
    var res = 0, offset = offset || 0, shift = 0, counter = offset, b, l = buf2.length;
    do {
      if (counter >= l) {
        read3.bytes = 0;
        throw new RangeError("Could not decode varint");
      }
      b = buf2[counter++];
      res += shift < 28 ? (b & REST$13) << shift : (b & REST$13) * Math.pow(2, shift);
      shift += 7;
    } while (b >= MSB$13);
    read3.bytes = counter - offset;
    return res;
  }
  var N13 = Math.pow(2, 7);
  var N23 = Math.pow(2, 14);
  var N33 = Math.pow(2, 21);
  var N43 = Math.pow(2, 28);
  var N53 = Math.pow(2, 35);
  var N63 = Math.pow(2, 42);
  var N73 = Math.pow(2, 49);
  var N83 = Math.pow(2, 56);
  var N93 = Math.pow(2, 63);
  var length3 = function(value) {
    return value < N13 ? 1 : value < N23 ? 2 : value < N33 ? 3 : value < N43 ? 4 : value < N53 ? 5 : value < N63 ? 6 : value < N73 ? 7 : value < N83 ? 8 : value < N93 ? 9 : 10;
  };
  var varint6 = {
    encode: encode_13,
    decode: decode12,
    encodingLength: length3
  };
  var _brrp_varint3 = varint6;
  var varint_default3 = _brrp_varint3;

  // node_modules/@ceramicnetwork/common/node_modules/@ipld/dag-cbor/node_modules/multiformats/esm/src/varint.js
  var decode13 = (data, offset = 0) => {
    const code8 = varint_default3.decode(data, offset);
    return [
      code8,
      varint_default3.decode.bytes
    ];
  };
  var encodeTo3 = (int, target, offset = 0) => {
    varint_default3.encode(int, target, offset);
    return target;
  };
  var encodingLength3 = (int) => {
    return varint_default3.encodingLength(int);
  };

  // node_modules/@ceramicnetwork/common/node_modules/@ipld/dag-cbor/node_modules/multiformats/esm/src/bytes.js
  var empty3 = new Uint8Array(0);
  var equals6 = (aa, bb) => {
    if (aa === bb)
      return true;
    if (aa.byteLength !== bb.byteLength) {
      return false;
    }
    for (let ii = 0; ii < aa.byteLength; ii++) {
      if (aa[ii] !== bb[ii]) {
        return false;
      }
    }
    return true;
  };
  var coerce3 = (o) => {
    if (o instanceof Uint8Array && o.constructor.name === "Uint8Array")
      return o;
    if (o instanceof ArrayBuffer)
      return new Uint8Array(o);
    if (ArrayBuffer.isView(o)) {
      return new Uint8Array(o.buffer, o.byteOffset, o.byteLength);
    }
    throw new Error("Unknown type, must be binary type");
  };

  // node_modules/@ceramicnetwork/common/node_modules/@ipld/dag-cbor/node_modules/multiformats/esm/src/hashes/digest.js
  var create3 = (code8, digest2) => {
    const size = digest2.byteLength;
    const sizeOffset = encodingLength3(code8);
    const digestOffset = sizeOffset + encodingLength3(size);
    const bytes = new Uint8Array(digestOffset + size);
    encodeTo3(code8, bytes, 0);
    encodeTo3(size, bytes, sizeOffset);
    bytes.set(digest2, digestOffset);
    return new Digest3(code8, size, digest2, bytes);
  };
  var decode14 = (multihash) => {
    const bytes = coerce3(multihash);
    const [code8, sizeOffset] = decode13(bytes);
    const [size, digestOffset] = decode13(bytes.subarray(sizeOffset));
    const digest2 = bytes.subarray(sizeOffset + digestOffset);
    if (digest2.byteLength !== size) {
      throw new Error("Incorrect length");
    }
    return new Digest3(code8, size, digest2, bytes);
  };
  var equals7 = (a, b) => {
    if (a === b) {
      return true;
    } else {
      return a.code === b.code && a.size === b.size && equals6(a.bytes, b.bytes);
    }
  };
  var Digest3 = class {
    constructor(code8, size, digest2, bytes) {
      this.code = code8;
      this.size = size;
      this.digest = digest2;
      this.bytes = bytes;
    }
  };

  // node_modules/@ceramicnetwork/common/node_modules/@ipld/dag-cbor/node_modules/multiformats/esm/vendor/base-x.js
  function base4(ALPHABET, name8) {
    if (ALPHABET.length >= 255) {
      throw new TypeError("Alphabet too long");
    }
    var BASE_MAP = new Uint8Array(256);
    for (var j = 0; j < BASE_MAP.length; j++) {
      BASE_MAP[j] = 255;
    }
    for (var i = 0; i < ALPHABET.length; i++) {
      var x = ALPHABET.charAt(i);
      var xc = x.charCodeAt(0);
      if (BASE_MAP[xc] !== 255) {
        throw new TypeError(x + " is ambiguous");
      }
      BASE_MAP[xc] = i;
    }
    var BASE = ALPHABET.length;
    var LEADER = ALPHABET.charAt(0);
    var FACTOR = Math.log(BASE) / Math.log(256);
    var iFACTOR = Math.log(256) / Math.log(BASE);
    function encode31(source) {
      if (source instanceof Uint8Array)
        ;
      else if (ArrayBuffer.isView(source)) {
        source = new Uint8Array(source.buffer, source.byteOffset, source.byteLength);
      } else if (Array.isArray(source)) {
        source = Uint8Array.from(source);
      }
      if (!(source instanceof Uint8Array)) {
        throw new TypeError("Expected Uint8Array");
      }
      if (source.length === 0) {
        return "";
      }
      var zeroes = 0;
      var length10 = 0;
      var pbegin = 0;
      var pend = source.length;
      while (pbegin !== pend && source[pbegin] === 0) {
        pbegin++;
        zeroes++;
      }
      var size = (pend - pbegin) * iFACTOR + 1 >>> 0;
      var b58 = new Uint8Array(size);
      while (pbegin !== pend) {
        var carry = source[pbegin];
        var i2 = 0;
        for (var it1 = size - 1; (carry !== 0 || i2 < length10) && it1 !== -1; it1--, i2++) {
          carry += 256 * b58[it1] >>> 0;
          b58[it1] = carry % BASE >>> 0;
          carry = carry / BASE >>> 0;
        }
        if (carry !== 0) {
          throw new Error("Non-zero carry");
        }
        length10 = i2;
        pbegin++;
      }
      var it2 = size - length10;
      while (it2 !== size && b58[it2] === 0) {
        it2++;
      }
      var str = LEADER.repeat(zeroes);
      for (; it2 < size; ++it2) {
        str += ALPHABET.charAt(b58[it2]);
      }
      return str;
    }
    function decodeUnsafe(source) {
      if (typeof source !== "string") {
        throw new TypeError("Expected String");
      }
      if (source.length === 0) {
        return new Uint8Array();
      }
      var psz = 0;
      if (source[psz] === " ") {
        return;
      }
      var zeroes = 0;
      var length10 = 0;
      while (source[psz] === LEADER) {
        zeroes++;
        psz++;
      }
      var size = (source.length - psz) * FACTOR + 1 >>> 0;
      var b256 = new Uint8Array(size);
      while (source[psz]) {
        var carry = BASE_MAP[source.charCodeAt(psz)];
        if (carry === 255) {
          return;
        }
        var i2 = 0;
        for (var it3 = size - 1; (carry !== 0 || i2 < length10) && it3 !== -1; it3--, i2++) {
          carry += BASE * b256[it3] >>> 0;
          b256[it3] = carry % 256 >>> 0;
          carry = carry / 256 >>> 0;
        }
        if (carry !== 0) {
          throw new Error("Non-zero carry");
        }
        length10 = i2;
        psz++;
      }
      if (source[psz] === " ") {
        return;
      }
      var it4 = size - length10;
      while (it4 !== size && b256[it4] === 0) {
        it4++;
      }
      var vch = new Uint8Array(zeroes + (size - it4));
      var j2 = zeroes;
      while (it4 !== size) {
        vch[j2++] = b256[it4++];
      }
      return vch;
    }
    function decode45(string2) {
      var buffer2 = decodeUnsafe(string2);
      if (buffer2) {
        return buffer2;
      }
      throw new Error(`Non-${name8} character`);
    }
    return {
      encode: encode31,
      decodeUnsafe,
      decode: decode45
    };
  }
  var src3 = base4;
  var _brrp__multiformats_scope_baseX3 = src3;
  var base_x_default3 = _brrp__multiformats_scope_baseX3;

  // node_modules/@ceramicnetwork/common/node_modules/@ipld/dag-cbor/node_modules/multiformats/esm/src/bases/base.js
  var Encoder3 = class {
    constructor(name8, prefix, baseEncode) {
      this.name = name8;
      this.prefix = prefix;
      this.baseEncode = baseEncode;
    }
    encode(bytes) {
      if (bytes instanceof Uint8Array) {
        return `${this.prefix}${this.baseEncode(bytes)}`;
      } else {
        throw Error("Unknown type, must be binary type");
      }
    }
  };
  var Decoder3 = class {
    constructor(name8, prefix, baseDecode) {
      this.name = name8;
      this.prefix = prefix;
      if (prefix.codePointAt(0) === void 0) {
        throw new Error("Invalid prefix character");
      }
      this.prefixCodePoint = prefix.codePointAt(0);
      this.baseDecode = baseDecode;
    }
    decode(text) {
      if (typeof text === "string") {
        if (text.codePointAt(0) !== this.prefixCodePoint) {
          throw Error(`Unable to decode multibase string ${JSON.stringify(text)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
        }
        return this.baseDecode(text.slice(this.prefix.length));
      } else {
        throw Error("Can only multibase decode strings");
      }
    }
    or(decoder) {
      return or3(this, decoder);
    }
  };
  var ComposedDecoder3 = class {
    constructor(decoders) {
      this.decoders = decoders;
    }
    or(decoder) {
      return or3(this, decoder);
    }
    decode(input) {
      const prefix = input[0];
      const decoder = this.decoders[prefix];
      if (decoder) {
        return decoder.decode(input);
      } else {
        throw RangeError(`Unable to decode multibase string ${JSON.stringify(input)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
      }
    }
  };
  var or3 = (left, right) => new ComposedDecoder3({
    ...left.decoders || { [left.prefix]: left },
    ...right.decoders || { [right.prefix]: right }
  });
  var Codec3 = class {
    constructor(name8, prefix, baseEncode, baseDecode) {
      this.name = name8;
      this.prefix = prefix;
      this.baseEncode = baseEncode;
      this.baseDecode = baseDecode;
      this.encoder = new Encoder3(name8, prefix, baseEncode);
      this.decoder = new Decoder3(name8, prefix, baseDecode);
    }
    encode(input) {
      return this.encoder.encode(input);
    }
    decode(input) {
      return this.decoder.decode(input);
    }
  };
  var from4 = ({ name: name8, prefix, encode: encode31, decode: decode45 }) => new Codec3(name8, prefix, encode31, decode45);
  var baseX3 = ({ prefix, name: name8, alphabet: alphabet2 }) => {
    const { encode: encode31, decode: decode45 } = base_x_default3(alphabet2, name8);
    return from4({
      prefix,
      name: name8,
      encode: encode31,
      decode: (text) => coerce3(decode45(text))
    });
  };
  var decode15 = (string2, alphabet2, bitsPerChar, name8) => {
    const codes = {};
    for (let i = 0; i < alphabet2.length; ++i) {
      codes[alphabet2[i]] = i;
    }
    let end = string2.length;
    while (string2[end - 1] === "=") {
      --end;
    }
    const out = new Uint8Array(end * bitsPerChar / 8 | 0);
    let bits = 0;
    let buffer2 = 0;
    let written = 0;
    for (let i = 0; i < end; ++i) {
      const value = codes[string2[i]];
      if (value === void 0) {
        throw new SyntaxError(`Non-${name8} character`);
      }
      buffer2 = buffer2 << bitsPerChar | value;
      bits += bitsPerChar;
      if (bits >= 8) {
        bits -= 8;
        out[written++] = 255 & buffer2 >> bits;
      }
    }
    if (bits >= bitsPerChar || 255 & buffer2 << 8 - bits) {
      throw new SyntaxError("Unexpected end of data");
    }
    return out;
  };
  var encode11 = (data, alphabet2, bitsPerChar) => {
    const pad = alphabet2[alphabet2.length - 1] === "=";
    const mask = (1 << bitsPerChar) - 1;
    let out = "";
    let bits = 0;
    let buffer2 = 0;
    for (let i = 0; i < data.length; ++i) {
      buffer2 = buffer2 << 8 | data[i];
      bits += 8;
      while (bits > bitsPerChar) {
        bits -= bitsPerChar;
        out += alphabet2[mask & buffer2 >> bits];
      }
    }
    if (bits) {
      out += alphabet2[mask & buffer2 << bitsPerChar - bits];
    }
    if (pad) {
      while (out.length * bitsPerChar & 7) {
        out += "=";
      }
    }
    return out;
  };
  var rfc46483 = ({ name: name8, prefix, bitsPerChar, alphabet: alphabet2 }) => {
    return from4({
      prefix,
      name: name8,
      encode(input) {
        return encode11(input, alphabet2, bitsPerChar);
      },
      decode(input) {
        return decode15(input, alphabet2, bitsPerChar, name8);
      }
    });
  };

  // node_modules/@ceramicnetwork/common/node_modules/@ipld/dag-cbor/node_modules/multiformats/esm/src/bases/base58.js
  var base58btc3 = baseX3({
    name: "base58btc",
    prefix: "z",
    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
  });
  var base58flickr3 = baseX3({
    name: "base58flickr",
    prefix: "Z",
    alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
  });

  // node_modules/@ceramicnetwork/common/node_modules/@ipld/dag-cbor/node_modules/multiformats/esm/src/bases/base32.js
  var base323 = rfc46483({
    prefix: "b",
    name: "base32",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
    bitsPerChar: 5
  });
  var base32upper3 = rfc46483({
    prefix: "B",
    name: "base32upper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
    bitsPerChar: 5
  });
  var base32pad3 = rfc46483({
    prefix: "c",
    name: "base32pad",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
    bitsPerChar: 5
  });
  var base32padupper3 = rfc46483({
    prefix: "C",
    name: "base32padupper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
    bitsPerChar: 5
  });
  var base32hex3 = rfc46483({
    prefix: "v",
    name: "base32hex",
    alphabet: "0123456789abcdefghijklmnopqrstuv",
    bitsPerChar: 5
  });
  var base32hexupper3 = rfc46483({
    prefix: "V",
    name: "base32hexupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
    bitsPerChar: 5
  });
  var base32hexpad3 = rfc46483({
    prefix: "t",
    name: "base32hexpad",
    alphabet: "0123456789abcdefghijklmnopqrstuv=",
    bitsPerChar: 5
  });
  var base32hexpadupper3 = rfc46483({
    prefix: "T",
    name: "base32hexpadupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
    bitsPerChar: 5
  });
  var base32z3 = rfc46483({
    prefix: "h",
    name: "base32z",
    alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
    bitsPerChar: 5
  });

  // node_modules/@ceramicnetwork/common/node_modules/@ipld/dag-cbor/node_modules/multiformats/esm/src/cid.js
  var CID3 = class _CID {
    constructor(version7, code8, multihash, bytes) {
      this.code = code8;
      this.version = version7;
      this.multihash = multihash;
      this.bytes = bytes;
      this.byteOffset = bytes.byteOffset;
      this.byteLength = bytes.byteLength;
      this.asCID = this;
      this._baseCache = /* @__PURE__ */ new Map();
      Object.defineProperties(this, {
        byteOffset: hidden2,
        byteLength: hidden2,
        code: readonly3,
        version: readonly3,
        multihash: readonly3,
        bytes: readonly3,
        _baseCache: hidden2,
        asCID: hidden2
      });
    }
    toV0() {
      switch (this.version) {
        case 0: {
          return this;
        }
        default: {
          const { code: code8, multihash } = this;
          if (code8 !== DAG_PB_CODE3) {
            throw new Error("Cannot convert a non dag-pb CID to CIDv0");
          }
          if (multihash.code !== SHA_256_CODE3) {
            throw new Error("Cannot convert non sha2-256 multihash CID to CIDv0");
          }
          return _CID.createV0(multihash);
        }
      }
    }
    toV1() {
      switch (this.version) {
        case 0: {
          const { code: code8, digest: digest2 } = this.multihash;
          const multihash = create3(code8, digest2);
          return _CID.createV1(this.code, multihash);
        }
        case 1: {
          return this;
        }
        default: {
          throw Error(`Can not convert CID version ${this.version} to version 0. This is a bug please report`);
        }
      }
    }
    equals(other) {
      return other && this.code === other.code && this.version === other.version && equals7(this.multihash, other.multihash);
    }
    toString(base13) {
      const { bytes, version: version7, _baseCache } = this;
      switch (version7) {
        case 0:
          return toStringV03(bytes, _baseCache, base13 || base58btc3.encoder);
        default:
          return toStringV13(bytes, _baseCache, base13 || base323.encoder);
      }
    }
    toJSON() {
      return {
        code: this.code,
        version: this.version,
        hash: this.multihash.bytes
      };
    }
    get [Symbol.toStringTag]() {
      return "CID";
    }
    [Symbol.for("nodejs.util.inspect.custom")]() {
      return "CID(" + this.toString() + ")";
    }
    static isCID(value) {
      deprecate2(/^0\.0/, IS_CID_DEPRECATION2);
      return !!(value && (value[cidSymbol3] || value.asCID === value));
    }
    get toBaseEncodedString() {
      throw new Error("Deprecated, use .toString()");
    }
    get codec() {
      throw new Error('"codec" property is deprecated, use integer "code" property instead');
    }
    get buffer() {
      throw new Error("Deprecated .buffer property, use .bytes to get Uint8Array instead");
    }
    get multibaseName() {
      throw new Error('"multibaseName" property is deprecated');
    }
    get prefix() {
      throw new Error('"prefix" property is deprecated');
    }
    static asCID(value) {
      if (value instanceof _CID) {
        return value;
      } else if (value != null && value.asCID === value) {
        const { version: version7, code: code8, multihash, bytes } = value;
        return new _CID(version7, code8, multihash, bytes || encodeCID3(version7, code8, multihash.bytes));
      } else if (value != null && value[cidSymbol3] === true) {
        const { version: version7, multihash, code: code8 } = value;
        const digest2 = decode14(multihash);
        return _CID.create(version7, code8, digest2);
      } else {
        return null;
      }
    }
    static create(version7, code8, digest2) {
      if (typeof code8 !== "number") {
        throw new Error("String codecs are no longer supported");
      }
      switch (version7) {
        case 0: {
          if (code8 !== DAG_PB_CODE3) {
            throw new Error(`Version 0 CID must use dag-pb (code: ${DAG_PB_CODE3}) block encoding`);
          } else {
            return new _CID(version7, code8, digest2, digest2.bytes);
          }
        }
        case 1: {
          const bytes = encodeCID3(version7, code8, digest2.bytes);
          return new _CID(version7, code8, digest2, bytes);
        }
        default: {
          throw new Error("Invalid version");
        }
      }
    }
    static createV0(digest2) {
      return _CID.create(0, DAG_PB_CODE3, digest2);
    }
    static createV1(code8, digest2) {
      return _CID.create(1, code8, digest2);
    }
    static decode(bytes) {
      const [cid, remainder] = _CID.decodeFirst(bytes);
      if (remainder.length) {
        throw new Error("Incorrect length");
      }
      return cid;
    }
    static decodeFirst(bytes) {
      const specs = _CID.inspectBytes(bytes);
      const prefixSize = specs.size - specs.multihashSize;
      const multihashBytes = coerce3(bytes.subarray(prefixSize, prefixSize + specs.multihashSize));
      if (multihashBytes.byteLength !== specs.multihashSize) {
        throw new Error("Incorrect length");
      }
      const digestBytes = multihashBytes.subarray(specs.multihashSize - specs.digestSize);
      const digest2 = new Digest3(specs.multihashCode, specs.digestSize, digestBytes, multihashBytes);
      const cid = specs.version === 0 ? _CID.createV0(digest2) : _CID.createV1(specs.codec, digest2);
      return [
        cid,
        bytes.subarray(specs.size)
      ];
    }
    static inspectBytes(initialBytes) {
      let offset = 0;
      const next = () => {
        const [i, length10] = decode13(initialBytes.subarray(offset));
        offset += length10;
        return i;
      };
      let version7 = next();
      let codec = DAG_PB_CODE3;
      if (version7 === 18) {
        version7 = 0;
        offset = 0;
      } else if (version7 === 1) {
        codec = next();
      }
      if (version7 !== 0 && version7 !== 1) {
        throw new RangeError(`Invalid CID version ${version7}`);
      }
      const prefixSize = offset;
      const multihashCode = next();
      const digestSize = next();
      const size = offset + digestSize;
      const multihashSize = size - prefixSize;
      return {
        version: version7,
        codec,
        multihashCode,
        digestSize,
        multihashSize,
        size
      };
    }
    static parse(source, base13) {
      const [prefix, bytes] = parseCIDtoBytes3(source, base13);
      const cid = _CID.decode(bytes);
      cid._baseCache.set(prefix, source);
      return cid;
    }
  };
  var parseCIDtoBytes3 = (source, base13) => {
    switch (source[0]) {
      case "Q": {
        const decoder = base13 || base58btc3;
        return [
          base58btc3.prefix,
          decoder.decode(`${base58btc3.prefix}${source}`)
        ];
      }
      case base58btc3.prefix: {
        const decoder = base13 || base58btc3;
        return [
          base58btc3.prefix,
          decoder.decode(source)
        ];
      }
      case base323.prefix: {
        const decoder = base13 || base323;
        return [
          base323.prefix,
          decoder.decode(source)
        ];
      }
      default: {
        if (base13 == null) {
          throw Error("To parse non base32 or base58btc encoded CID multibase decoder must be provided");
        }
        return [
          source[0],
          base13.decode(source)
        ];
      }
    }
  };
  var toStringV03 = (bytes, cache4, base13) => {
    const { prefix } = base13;
    if (prefix !== base58btc3.prefix) {
      throw Error(`Cannot string encode V0 in ${base13.name} encoding`);
    }
    const cid = cache4.get(prefix);
    if (cid == null) {
      const cid2 = base13.encode(bytes).slice(1);
      cache4.set(prefix, cid2);
      return cid2;
    } else {
      return cid;
    }
  };
  var toStringV13 = (bytes, cache4, base13) => {
    const { prefix } = base13;
    const cid = cache4.get(prefix);
    if (cid == null) {
      const cid2 = base13.encode(bytes);
      cache4.set(prefix, cid2);
      return cid2;
    } else {
      return cid;
    }
  };
  var DAG_PB_CODE3 = 112;
  var SHA_256_CODE3 = 18;
  var encodeCID3 = (version7, code8, multihash) => {
    const codeOffset = encodingLength3(version7);
    const hashOffset = codeOffset + encodingLength3(code8);
    const bytes = new Uint8Array(hashOffset + multihash.byteLength);
    encodeTo3(version7, bytes, 0);
    encodeTo3(code8, bytes, codeOffset);
    bytes.set(multihash, hashOffset);
    return bytes;
  };
  var cidSymbol3 = Symbol.for("@ipld/js-cid/CID");
  var readonly3 = {
    writable: false,
    configurable: false,
    enumerable: true
  };
  var hidden2 = {
    writable: false,
    enumerable: false,
    configurable: false
  };
  var version2 = "0.0.0-dev";
  var deprecate2 = (range, message) => {
    if (range.test(version2)) {
      console.warn(message);
    } else {
      throw new Error(message);
    }
  };
  var IS_CID_DEPRECATION2 = `CID.isCID(v) is deprecated and will be removed in the next major release.
Following code pattern:

if (CID.isCID(value)) {
  doSomethingWithCID(value)
}

Is replaced with:

const cid = CID.asCID(value)
if (cid) {
  // Make sure to use cid instead of value
  doSomethingWithCID(cid)
}
`;

  // node_modules/@ceramicnetwork/common/node_modules/@ipld/dag-cbor/esm/index.js
  var CID_CBOR_TAG2 = 42;
  function cidEncoder2(obj) {
    if (obj.asCID !== obj) {
      return null;
    }
    const cid = CID3.asCID(obj);
    if (!cid) {
      return null;
    }
    const bytes = new Uint8Array(cid.bytes.byteLength + 1);
    bytes.set(cid.bytes, 1);
    return [
      new Token(Type.tag, CID_CBOR_TAG2),
      new Token(Type.bytes, bytes)
    ];
  }
  function undefinedEncoder2() {
    throw new Error("`undefined` is not supported by the IPLD Data Model and cannot be encoded");
  }
  function numberEncoder2(num) {
    if (Number.isNaN(num)) {
      throw new Error("`NaN` is not supported by the IPLD Data Model and cannot be encoded");
    }
    if (num === Infinity || num === -Infinity) {
      throw new Error("`Infinity` and `-Infinity` is not supported by the IPLD Data Model and cannot be encoded");
    }
    return null;
  }
  var encodeOptions2 = {
    float64: true,
    typeEncoders: {
      Object: cidEncoder2,
      undefined: undefinedEncoder2,
      number: numberEncoder2
    }
  };
  function cidDecoder2(bytes) {
    if (bytes[0] !== 0) {
      throw new Error("Invalid CID for CBOR tag 42; expected leading 0x00");
    }
    return CID3.decode(bytes.subarray(1));
  }
  var decodeOptions2 = {
    allowIndefinite: false,
    coerceUndefinedToNull: true,
    allowNaN: false,
    allowInfinity: false,
    allowBigInt: true,
    strict: true,
    useMaps: false,
    tags: []
  };
  decodeOptions2.tags[CID_CBOR_TAG2] = cidDecoder2;
  var name3 = "dag-cbor";
  var code3 = 113;
  var encode12 = (node) => encode6(node, encodeOptions2);
  var decode16 = (data) => decode6(data, decodeOptions2);

  // node_modules/@ceramicnetwork/common/node_modules/@ceramicnetwork/streamid/lib/try-catch.util.js
  function tryCatch2(fn) {
    try {
      return fn();
    } catch (e) {
      return e;
    }
  }

  // node_modules/@ceramicnetwork/common/node_modules/@ceramicnetwork/streamid/lib/reading-bytes.js
  var import_varint7 = __toESM(require_varint(), 1);
  function readVarint2(bytes) {
    const value = import_varint7.default.decode(bytes);
    const readLength = import_varint7.default.decode.bytes;
    const remainder = bytes.subarray(readLength);
    return [value, remainder, readLength];
  }
  function isCidVersion2(input) {
    return input === 0 || input === 1;
  }
  function readCid2(bytes) {
    const [cidVersion, cidVersionRemainder] = readVarint2(bytes);
    if (!isCidVersion2(cidVersion)) {
      throw new Error(`Unknown CID version ${cidVersion}`);
    }
    const [codec, codecRemainder] = readVarint2(cidVersionRemainder);
    const [, mhCodecRemainder, mhCodecLength] = readVarint2(codecRemainder);
    const [mhLength, , mhLengthLength] = readVarint2(mhCodecRemainder);
    const multihashBytes = codecRemainder.subarray(0, mhCodecLength + mhLengthLength + mhLength);
    const multihashBytesRemainder = codecRemainder.subarray(mhCodecLength + mhLengthLength + mhLength);
    return [CID.create(cidVersion, codec, decode3(multihashBytes)), multihashBytesRemainder];
  }

  // node_modules/@ceramicnetwork/common/node_modules/@ceramicnetwork/streamid/lib/stream-ref-parsing.js
  function fromBytes4(input, title = "StreamRef") {
    const [streamCodec, streamCodecRemainder] = readVarint2(input);
    if (streamCodec !== STREAMID_CODEC2)
      throw new Error(`Invalid ${title}, does not include streamid codec`);
    const [type, streamtypeRemainder] = readVarint2(streamCodecRemainder);
    const cidResult = readCid2(streamtypeRemainder);
    const [genesis, genesisRemainder] = cidResult;
    if (genesisRemainder.length === 0) {
      return {
        kind: "stream-id",
        type,
        genesis
      };
    } else if (genesisRemainder.length === 1 && genesisRemainder[0] === 0) {
      return {
        kind: "commit-id",
        type,
        genesis,
        commit: null
      };
    } else {
      const [commit] = readCid2(genesisRemainder);
      return {
        kind: "commit-id",
        type,
        genesis,
        commit
      };
    }
  }
  var URL_PATTERN2 = /(ceramic:\/\/|\/ceramic\/)?([a-zA-Z0-9]+)(\?commit=([a-zA-Z0-9]+))?/;
  function fromString7(input, title = "StreamRef") {
    const protocolMatch = URL_PATTERN2.exec(input) || [];
    const base13 = protocolMatch[2];
    if (!base13)
      throw new Error(`Malformed ${title} string: ${input}`);
    const bytes = base36.decode(base13);
    const streamRef = fromBytes4(bytes);
    const commit = protocolMatch[4];
    if (commit) {
      return {
        kind: "commit-id",
        type: streamRef.type,
        genesis: streamRef.genesis,
        commit: parseCommit2(streamRef.genesis, commit)
      };
    }
    return streamRef;
  }
  function parseCID2(input) {
    try {
      return typeof input === "string" ? CID.parse(input) : CID.asCID(input);
    } catch {
      return null;
    }
  }
  function parseCommit2(genesis, commit = null) {
    if (!commit)
      return null;
    if (commit === "0")
      return null;
    const commitCID = parseCID2(commit);
    if (commitCID) {
      if (genesis.equals(commitCID)) {
        return null;
      } else {
        return commitCID;
      }
    } else {
      throw new Error("Cannot specify commit as a number except to request commit 0 (the genesis commit)");
    }
  }

  // node_modules/@ceramicnetwork/common/node_modules/@ceramicnetwork/streamid/lib/stream-id.js
  var __decorate3 = function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata3 = function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var InvalidStreamIDBytesError2 = class extends Error {
    constructor(bytes) {
      super(`Invalid StreamID bytes ${base36.encode(bytes)}: contains commit`);
    }
  };
  var InvalidStreamIDStringError2 = class extends Error {
    constructor(input) {
      super(`Invalid StreamID string ${input}: contains commit`);
    }
  };
  function fromBytes5(bytes) {
    const parsed = fromBytes4(bytes, "StreamID");
    if (parsed.kind === "stream-id") {
      return new StreamID2(parsed.type, parsed.genesis);
    }
    throw new InvalidStreamIDBytesError2(bytes);
  }
  function fromBytesNoThrow3(bytes) {
    return tryCatch2(() => fromBytes5(bytes));
  }
  function fromString8(input) {
    const parsed = fromString7(input, "StreamID");
    if (parsed.kind === "stream-id") {
      return new StreamID2(parsed.type, parsed.genesis);
    }
    throw new InvalidStreamIDStringError2(input);
  }
  function fromStringNoThrow3(input) {
    return tryCatch2(() => fromString8(input));
  }
  var TAG3 = Symbol.for("@ceramicnetwork/streamid/StreamID");
  var StreamID2 = class _StreamID {
    constructor(type, cid) {
      this._tag = TAG3;
      if (!(type || type === 0))
        throw new Error("StreamID constructor: type required");
      if (!cid)
        throw new Error("StreamID constructor: cid required");
      this._type = typeof type === "string" ? StreamType2.codeByName(type) : type;
      this._cid = typeof cid === "string" ? CID.parse(cid) : cid;
    }
    static isInstance(instance) {
      return typeof instance === "object" && "_tag" in instance && instance._tag === TAG3;
    }
    static async fromGenesis(type, genesis) {
      const block = await encode5({ value: genesis, codec: esm_exports2, hasher: sha256 });
      return new _StreamID(type, block.cid);
    }
    get type() {
      return this._type;
    }
    get typeName() {
      return StreamType2.nameByCode(this._type);
    }
    get cid() {
      return this._cid;
    }
    get bytes() {
      const codec = import_varint8.default.encode(STREAMID_CODEC2);
      const type = import_varint8.default.encode(this.type);
      return concat([codec, type, this.cid.bytes]);
    }
    get baseID() {
      return new _StreamID(this._type, this._cid);
    }
    equals(other) {
      if (_StreamID.isInstance(other)) {
        return this.type === other.type && this.cid.equals(other.cid);
      } else {
        return false;
      }
    }
    toString() {
      return base36.encode(this.bytes);
    }
    toUrl() {
      return `ceramic://${this.toString()}`;
    }
    [Symbol.for("nodejs.util.inspect.custom")]() {
      return `StreamID(${this.toString()})`;
    }
    [Symbol.toPrimitive]() {
      return this.toString();
    }
  };
  StreamID2.fromBytes = fromBytes5;
  StreamID2.fromBytesNoThrow = fromBytesNoThrow3;
  StreamID2.fromString = fromString8;
  StreamID2.fromStringNoThrow = fromStringNoThrow3;
  __decorate3([
    Memoize(),
    __metadata3("design:type", String),
    __metadata3("design:paramtypes", [])
  ], StreamID2.prototype, "typeName", null);
  __decorate3([
    Memoize(),
    __metadata3("design:type", Uint8Array),
    __metadata3("design:paramtypes", [])
  ], StreamID2.prototype, "bytes", null);
  __decorate3([
    Memoize(),
    __metadata3("design:type", StreamID2),
    __metadata3("design:paramtypes", [])
  ], StreamID2.prototype, "baseID", null);
  __decorate3([
    Memoize(),
    __metadata3("design:type", Function),
    __metadata3("design:paramtypes", []),
    __metadata3("design:returntype", String)
  ], StreamID2.prototype, "toString", null);
  __decorate3([
    Memoize(),
    __metadata3("design:type", Function),
    __metadata3("design:paramtypes", []),
    __metadata3("design:returntype", String)
  ], StreamID2.prototype, "toUrl", null);

  // node_modules/@ceramicnetwork/common/node_modules/@ceramicnetwork/streamid/lib/commit-id.js
  var __decorate4 = function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata4 = function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var __classPrivateFieldSet2 = function(receiver, state, value, kind, f) {
    if (kind === "m")
      throw new TypeError("Private method is not writable");
    if (kind === "a" && !f)
      throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
      throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
  };
  var __classPrivateFieldGet2 = function(receiver, state, kind, f) {
    if (kind === "a" && !f)
      throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
      throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
  };
  var _CommitID_type2;
  var _CommitID_cid2;
  var _CommitID_commit2;
  var InvalidCommitIDBytesError2 = class extends Error {
    constructor(bytes) {
      super(`Error while parsing CommitID from bytes ${base36.encode(bytes)}: no commit information provided`);
    }
  };
  var InvalidCommitIDStringError2 = class extends Error {
    constructor(input) {
      super(`Error while parsing CommitID from string ${input}: no commit information provided`);
    }
  };
  function fromBytes6(bytes) {
    const parsed = fromBytes4(bytes, "CommitID");
    if (parsed.kind === "commit-id") {
      return new CommitID2(parsed.type, parsed.genesis, parsed.commit);
    }
    throw new InvalidCommitIDBytesError2(bytes);
  }
  function fromBytesNoThrow4(bytes) {
    return tryCatch2(() => fromBytes6(bytes));
  }
  function fromString9(input) {
    const parsed = fromString7(input, "CommitID");
    if (parsed.kind === "commit-id") {
      return new CommitID2(parsed.type, parsed.genesis, parsed.commit);
    }
    throw new InvalidCommitIDStringError2(input);
  }
  function fromStringNoThrow4(input) {
    return tryCatch2(() => fromString9(input));
  }
  var TAG4 = Symbol.for("@ceramicnetwork/streamid/CommitID");
  function make2(stream, commit) {
    return new CommitID2(stream.type, stream.cid, commit);
  }
  var CommitID2 = class {
    constructor(type, cid, commit = null) {
      this._tag = TAG4;
      _CommitID_type2.set(this, void 0);
      _CommitID_cid2.set(this, void 0);
      _CommitID_commit2.set(this, void 0);
      if (!type && type !== 0)
        throw new Error("constructor: type required");
      if (!cid)
        throw new Error("constructor: cid required");
      __classPrivateFieldSet2(this, _CommitID_type2, typeof type === "string" ? StreamType2.codeByName(type) : type, "f");
      __classPrivateFieldSet2(this, _CommitID_cid2, typeof cid === "string" ? CID.parse(cid) : cid, "f");
      __classPrivateFieldSet2(this, _CommitID_commit2, parseCommit2(__classPrivateFieldGet2(this, _CommitID_cid2, "f"), commit), "f");
    }
    static isInstance(instance) {
      return typeof instance === "object" && "_tag" in instance && instance._tag === TAG4;
    }
    get baseID() {
      return new StreamID2(__classPrivateFieldGet2(this, _CommitID_type2, "f"), __classPrivateFieldGet2(this, _CommitID_cid2, "f"));
    }
    get type() {
      return __classPrivateFieldGet2(this, _CommitID_type2, "f");
    }
    get typeName() {
      return StreamType2.nameByCode(__classPrivateFieldGet2(this, _CommitID_type2, "f"));
    }
    get cid() {
      return __classPrivateFieldGet2(this, _CommitID_cid2, "f");
    }
    get commit() {
      return __classPrivateFieldGet2(this, _CommitID_commit2, "f") || __classPrivateFieldGet2(this, _CommitID_cid2, "f");
    }
    get bytes() {
      const codec = import_varint9.default.encode(STREAMID_CODEC2);
      const type = import_varint9.default.encode(this.type);
      const commitBytes = __classPrivateFieldGet2(this, _CommitID_commit2, "f")?.bytes || new Uint8Array([0]);
      return concat([codec, type, this.cid.bytes, commitBytes]);
    }
    equals(other) {
      return this.type === other.type && this.cid.equals(other.cid) && this.commit.equals(other.commit);
    }
    toString() {
      return base36.encode(this.bytes);
    }
    toUrl() {
      return `ceramic://${this.toString()}`;
    }
    [(_CommitID_type2 = /* @__PURE__ */ new WeakMap(), _CommitID_cid2 = /* @__PURE__ */ new WeakMap(), _CommitID_commit2 = /* @__PURE__ */ new WeakMap(), Symbol.for("nodejs.util.inspect.custom"))]() {
      return `CommitID(${this.toString()})`;
    }
    [Symbol.toPrimitive]() {
      return this.toString();
    }
  };
  CommitID2.fromBytes = fromBytes6;
  CommitID2.fromBytesNoThrow = fromBytesNoThrow4;
  CommitID2.fromString = fromString9;
  CommitID2.fromStringNoThrow = fromStringNoThrow4;
  CommitID2.make = make2;
  __decorate4([
    Memoize(),
    __metadata4("design:type", StreamID2),
    __metadata4("design:paramtypes", [])
  ], CommitID2.prototype, "baseID", null);
  __decorate4([
    Memoize(),
    __metadata4("design:type", String),
    __metadata4("design:paramtypes", [])
  ], CommitID2.prototype, "typeName", null);
  __decorate4([
    Memoize(),
    __metadata4("design:type", CID),
    __metadata4("design:paramtypes", [])
  ], CommitID2.prototype, "commit", null);
  __decorate4([
    Memoize(),
    __metadata4("design:type", Uint8Array),
    __metadata4("design:paramtypes", [])
  ], CommitID2.prototype, "bytes", null);
  __decorate4([
    Memoize(),
    __metadata4("design:type", Function),
    __metadata4("design:paramtypes", []),
    __metadata4("design:returntype", String)
  ], CommitID2.prototype, "toString", null);
  __decorate4([
    Memoize(),
    __metadata4("design:type", Function),
    __metadata4("design:paramtypes", []),
    __metadata4("design:returntype", String)
  ], CommitID2.prototype, "toUrl", null);

  // node_modules/@ceramicnetwork/common/node_modules/rxjs/dist/esm5/internal/util/isFunction.js
  function isFunction2(value) {
    return typeof value === "function";
  }

  // node_modules/@ceramicnetwork/common/node_modules/rxjs/dist/esm5/internal/util/createErrorClass.js
  function createErrorClass2(createImpl) {
    var _super = function(instance) {
      Error.call(instance);
      instance.stack = new Error().stack;
    };
    var ctorFunc = createImpl(_super);
    ctorFunc.prototype = Object.create(Error.prototype);
    ctorFunc.prototype.constructor = ctorFunc;
    return ctorFunc;
  }

  // node_modules/@ceramicnetwork/common/node_modules/rxjs/dist/esm5/internal/util/UnsubscriptionError.js
  var UnsubscriptionError2 = createErrorClass2(function(_super) {
    return function UnsubscriptionErrorImpl(errors) {
      _super(this);
      this.message = errors ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function(err, i) {
        return i + 1 + ") " + err.toString();
      }).join("\n  ") : "";
      this.name = "UnsubscriptionError";
      this.errors = errors;
    };
  });

  // node_modules/@ceramicnetwork/common/node_modules/rxjs/dist/esm5/internal/util/arrRemove.js
  function arrRemove2(arr, item) {
    if (arr) {
      var index = arr.indexOf(item);
      0 <= index && arr.splice(index, 1);
    }
  }

  // node_modules/@ceramicnetwork/common/node_modules/rxjs/dist/esm5/internal/Subscription.js
  var Subscription2 = function() {
    function Subscription3(initialTeardown) {
      this.initialTeardown = initialTeardown;
      this.closed = false;
      this._parentage = null;
      this._finalizers = null;
    }
    Subscription3.prototype.unsubscribe = function() {
      var e_1, _a, e_2, _b;
      var errors;
      if (!this.closed) {
        this.closed = true;
        var _parentage = this._parentage;
        if (_parentage) {
          this._parentage = null;
          if (Array.isArray(_parentage)) {
            try {
              for (var _parentage_1 = __values(_parentage), _parentage_1_1 = _parentage_1.next(); !_parentage_1_1.done; _parentage_1_1 = _parentage_1.next()) {
                var parent_1 = _parentage_1_1.value;
                parent_1.remove(this);
              }
            } catch (e_1_1) {
              e_1 = { error: e_1_1 };
            } finally {
              try {
                if (_parentage_1_1 && !_parentage_1_1.done && (_a = _parentage_1.return))
                  _a.call(_parentage_1);
              } finally {
                if (e_1)
                  throw e_1.error;
              }
            }
          } else {
            _parentage.remove(this);
          }
        }
        var initialFinalizer = this.initialTeardown;
        if (isFunction2(initialFinalizer)) {
          try {
            initialFinalizer();
          } catch (e) {
            errors = e instanceof UnsubscriptionError2 ? e.errors : [e];
          }
        }
        var _finalizers = this._finalizers;
        if (_finalizers) {
          this._finalizers = null;
          try {
            for (var _finalizers_1 = __values(_finalizers), _finalizers_1_1 = _finalizers_1.next(); !_finalizers_1_1.done; _finalizers_1_1 = _finalizers_1.next()) {
              var finalizer = _finalizers_1_1.value;
              try {
                execFinalizer2(finalizer);
              } catch (err) {
                errors = errors !== null && errors !== void 0 ? errors : [];
                if (err instanceof UnsubscriptionError2) {
                  errors = __spreadArray(__spreadArray([], __read(errors)), __read(err.errors));
                } else {
                  errors.push(err);
                }
              }
            }
          } catch (e_2_1) {
            e_2 = { error: e_2_1 };
          } finally {
            try {
              if (_finalizers_1_1 && !_finalizers_1_1.done && (_b = _finalizers_1.return))
                _b.call(_finalizers_1);
            } finally {
              if (e_2)
                throw e_2.error;
            }
          }
        }
        if (errors) {
          throw new UnsubscriptionError2(errors);
        }
      }
    };
    Subscription3.prototype.add = function(teardown) {
      var _a;
      if (teardown && teardown !== this) {
        if (this.closed) {
          execFinalizer2(teardown);
        } else {
          if (teardown instanceof Subscription3) {
            if (teardown.closed || teardown._hasParent(this)) {
              return;
            }
            teardown._addParent(this);
          }
          (this._finalizers = (_a = this._finalizers) !== null && _a !== void 0 ? _a : []).push(teardown);
        }
      }
    };
    Subscription3.prototype._hasParent = function(parent) {
      var _parentage = this._parentage;
      return _parentage === parent || Array.isArray(_parentage) && _parentage.includes(parent);
    };
    Subscription3.prototype._addParent = function(parent) {
      var _parentage = this._parentage;
      this._parentage = Array.isArray(_parentage) ? (_parentage.push(parent), _parentage) : _parentage ? [_parentage, parent] : parent;
    };
    Subscription3.prototype._removeParent = function(parent) {
      var _parentage = this._parentage;
      if (_parentage === parent) {
        this._parentage = null;
      } else if (Array.isArray(_parentage)) {
        arrRemove2(_parentage, parent);
      }
    };
    Subscription3.prototype.remove = function(teardown) {
      var _finalizers = this._finalizers;
      _finalizers && arrRemove2(_finalizers, teardown);
      if (teardown instanceof Subscription3) {
        teardown._removeParent(this);
      }
    };
    Subscription3.EMPTY = function() {
      var empty10 = new Subscription3();
      empty10.closed = true;
      return empty10;
    }();
    return Subscription3;
  }();
  var EMPTY_SUBSCRIPTION2 = Subscription2.EMPTY;
  function isSubscription2(value) {
    return value instanceof Subscription2 || value && "closed" in value && isFunction2(value.remove) && isFunction2(value.add) && isFunction2(value.unsubscribe);
  }
  function execFinalizer2(finalizer) {
    if (isFunction2(finalizer)) {
      finalizer();
    } else {
      finalizer.unsubscribe();
    }
  }

  // node_modules/@ceramicnetwork/common/node_modules/rxjs/dist/esm5/internal/config.js
  var config2 = {
    onUnhandledError: null,
    onStoppedNotification: null,
    Promise: void 0,
    useDeprecatedSynchronousErrorHandling: false,
    useDeprecatedNextContext: false
  };

  // node_modules/@ceramicnetwork/common/node_modules/rxjs/dist/esm5/internal/scheduler/timeoutProvider.js
  var timeoutProvider2 = {
    setTimeout: function(handler, timeout) {
      var args = [];
      for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
      }
      var delegate = timeoutProvider2.delegate;
      if (delegate === null || delegate === void 0 ? void 0 : delegate.setTimeout) {
        return delegate.setTimeout.apply(delegate, __spreadArray([handler, timeout], __read(args)));
      }
      return setTimeout.apply(void 0, __spreadArray([handler, timeout], __read(args)));
    },
    clearTimeout: function(handle) {
      var delegate = timeoutProvider2.delegate;
      return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearTimeout) || clearTimeout)(handle);
    },
    delegate: void 0
  };

  // node_modules/@ceramicnetwork/common/node_modules/rxjs/dist/esm5/internal/util/reportUnhandledError.js
  function reportUnhandledError2(err) {
    timeoutProvider2.setTimeout(function() {
      var onUnhandledError = config2.onUnhandledError;
      if (onUnhandledError) {
        onUnhandledError(err);
      } else {
        throw err;
      }
    });
  }

  // node_modules/@ceramicnetwork/common/node_modules/rxjs/dist/esm5/internal/util/noop.js
  function noop2() {
  }

  // node_modules/@ceramicnetwork/common/node_modules/rxjs/dist/esm5/internal/NotificationFactories.js
  var COMPLETE_NOTIFICATION2 = function() {
    return createNotification2("C", void 0, void 0);
  }();
  function errorNotification2(error) {
    return createNotification2("E", void 0, error);
  }
  function nextNotification2(value) {
    return createNotification2("N", value, void 0);
  }
  function createNotification2(kind, value, error) {
    return {
      kind,
      value,
      error
    };
  }

  // node_modules/@ceramicnetwork/common/node_modules/rxjs/dist/esm5/internal/util/errorContext.js
  var context2 = null;
  function errorContext2(cb) {
    if (config2.useDeprecatedSynchronousErrorHandling) {
      var isRoot = !context2;
      if (isRoot) {
        context2 = { errorThrown: false, error: null };
      }
      cb();
      if (isRoot) {
        var _a = context2, errorThrown = _a.errorThrown, error = _a.error;
        context2 = null;
        if (errorThrown) {
          throw error;
        }
      }
    } else {
      cb();
    }
  }
  function captureError2(err) {
    if (config2.useDeprecatedSynchronousErrorHandling && context2) {
      context2.errorThrown = true;
      context2.error = err;
    }
  }

  // node_modules/@ceramicnetwork/common/node_modules/rxjs/dist/esm5/internal/Subscriber.js
  var Subscriber2 = function(_super) {
    __extends(Subscriber3, _super);
    function Subscriber3(destination) {
      var _this = _super.call(this) || this;
      _this.isStopped = false;
      if (destination) {
        _this.destination = destination;
        if (isSubscription2(destination)) {
          destination.add(_this);
        }
      } else {
        _this.destination = EMPTY_OBSERVER2;
      }
      return _this;
    }
    Subscriber3.create = function(next, error, complete) {
      return new SafeSubscriber2(next, error, complete);
    };
    Subscriber3.prototype.next = function(value) {
      if (this.isStopped) {
        handleStoppedNotification2(nextNotification2(value), this);
      } else {
        this._next(value);
      }
    };
    Subscriber3.prototype.error = function(err) {
      if (this.isStopped) {
        handleStoppedNotification2(errorNotification2(err), this);
      } else {
        this.isStopped = true;
        this._error(err);
      }
    };
    Subscriber3.prototype.complete = function() {
      if (this.isStopped) {
        handleStoppedNotification2(COMPLETE_NOTIFICATION2, this);
      } else {
        this.isStopped = true;
        this._complete();
      }
    };
    Subscriber3.prototype.unsubscribe = function() {
      if (!this.closed) {
        this.isStopped = true;
        _super.prototype.unsubscribe.call(this);
        this.destination = null;
      }
    };
    Subscriber3.prototype._next = function(value) {
      this.destination.next(value);
    };
    Subscriber3.prototype._error = function(err) {
      try {
        this.destination.error(err);
      } finally {
        this.unsubscribe();
      }
    };
    Subscriber3.prototype._complete = function() {
      try {
        this.destination.complete();
      } finally {
        this.unsubscribe();
      }
    };
    return Subscriber3;
  }(Subscription2);
  var _bind2 = Function.prototype.bind;
  function bind2(fn, thisArg) {
    return _bind2.call(fn, thisArg);
  }
  var ConsumerObserver2 = function() {
    function ConsumerObserver3(partialObserver) {
      this.partialObserver = partialObserver;
    }
    ConsumerObserver3.prototype.next = function(value) {
      var partialObserver = this.partialObserver;
      if (partialObserver.next) {
        try {
          partialObserver.next(value);
        } catch (error) {
          handleUnhandledError2(error);
        }
      }
    };
    ConsumerObserver3.prototype.error = function(err) {
      var partialObserver = this.partialObserver;
      if (partialObserver.error) {
        try {
          partialObserver.error(err);
        } catch (error) {
          handleUnhandledError2(error);
        }
      } else {
        handleUnhandledError2(err);
      }
    };
    ConsumerObserver3.prototype.complete = function() {
      var partialObserver = this.partialObserver;
      if (partialObserver.complete) {
        try {
          partialObserver.complete();
        } catch (error) {
          handleUnhandledError2(error);
        }
      }
    };
    return ConsumerObserver3;
  }();
  var SafeSubscriber2 = function(_super) {
    __extends(SafeSubscriber3, _super);
    function SafeSubscriber3(observerOrNext, error, complete) {
      var _this = _super.call(this) || this;
      var partialObserver;
      if (isFunction2(observerOrNext) || !observerOrNext) {
        partialObserver = {
          next: observerOrNext !== null && observerOrNext !== void 0 ? observerOrNext : void 0,
          error: error !== null && error !== void 0 ? error : void 0,
          complete: complete !== null && complete !== void 0 ? complete : void 0
        };
      } else {
        var context_1;
        if (_this && config2.useDeprecatedNextContext) {
          context_1 = Object.create(observerOrNext);
          context_1.unsubscribe = function() {
            return _this.unsubscribe();
          };
          partialObserver = {
            next: observerOrNext.next && bind2(observerOrNext.next, context_1),
            error: observerOrNext.error && bind2(observerOrNext.error, context_1),
            complete: observerOrNext.complete && bind2(observerOrNext.complete, context_1)
          };
        } else {
          partialObserver = observerOrNext;
        }
      }
      _this.destination = new ConsumerObserver2(partialObserver);
      return _this;
    }
    return SafeSubscriber3;
  }(Subscriber2);
  function handleUnhandledError2(error) {
    if (config2.useDeprecatedSynchronousErrorHandling) {
      captureError2(error);
    } else {
      reportUnhandledError2(error);
    }
  }
  function defaultErrorHandler2(err) {
    throw err;
  }
  function handleStoppedNotification2(notification, subscriber) {
    var onStoppedNotification = config2.onStoppedNotification;
    onStoppedNotification && timeoutProvider2.setTimeout(function() {
      return onStoppedNotification(notification, subscriber);
    });
  }
  var EMPTY_OBSERVER2 = {
    closed: true,
    next: noop2,
    error: defaultErrorHandler2,
    complete: noop2
  };

  // node_modules/@ceramicnetwork/common/node_modules/rxjs/dist/esm5/internal/symbol/observable.js
  var observable2 = function() {
    return typeof Symbol === "function" && Symbol.observable || "@@observable";
  }();

  // node_modules/@ceramicnetwork/common/node_modules/rxjs/dist/esm5/internal/util/identity.js
  function identity4(x) {
    return x;
  }

  // node_modules/@ceramicnetwork/common/node_modules/rxjs/dist/esm5/internal/util/pipe.js
  function pipeFromArray2(fns) {
    if (fns.length === 0) {
      return identity4;
    }
    if (fns.length === 1) {
      return fns[0];
    }
    return function piped(input) {
      return fns.reduce(function(prev, fn) {
        return fn(prev);
      }, input);
    };
  }

  // node_modules/@ceramicnetwork/common/node_modules/rxjs/dist/esm5/internal/Observable.js
  var Observable2 = function() {
    function Observable3(subscribe) {
      if (subscribe) {
        this._subscribe = subscribe;
      }
    }
    Observable3.prototype.lift = function(operator) {
      var observable3 = new Observable3();
      observable3.source = this;
      observable3.operator = operator;
      return observable3;
    };
    Observable3.prototype.subscribe = function(observerOrNext, error, complete) {
      var _this = this;
      var subscriber = isSubscriber2(observerOrNext) ? observerOrNext : new SafeSubscriber2(observerOrNext, error, complete);
      errorContext2(function() {
        var _a = _this, operator = _a.operator, source = _a.source;
        subscriber.add(operator ? operator.call(subscriber, source) : source ? _this._subscribe(subscriber) : _this._trySubscribe(subscriber));
      });
      return subscriber;
    };
    Observable3.prototype._trySubscribe = function(sink) {
      try {
        return this._subscribe(sink);
      } catch (err) {
        sink.error(err);
      }
    };
    Observable3.prototype.forEach = function(next, promiseCtor) {
      var _this = this;
      promiseCtor = getPromiseCtor2(promiseCtor);
      return new promiseCtor(function(resolve, reject) {
        var subscriber = new SafeSubscriber2({
          next: function(value) {
            try {
              next(value);
            } catch (err) {
              reject(err);
              subscriber.unsubscribe();
            }
          },
          error: reject,
          complete: resolve
        });
        _this.subscribe(subscriber);
      });
    };
    Observable3.prototype._subscribe = function(subscriber) {
      var _a;
      return (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber);
    };
    Observable3.prototype[observable2] = function() {
      return this;
    };
    Observable3.prototype.pipe = function() {
      var operations = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        operations[_i] = arguments[_i];
      }
      return pipeFromArray2(operations)(this);
    };
    Observable3.prototype.toPromise = function(promiseCtor) {
      var _this = this;
      promiseCtor = getPromiseCtor2(promiseCtor);
      return new promiseCtor(function(resolve, reject) {
        var value;
        _this.subscribe(function(x) {
          return value = x;
        }, function(err) {
          return reject(err);
        }, function() {
          return resolve(value);
        });
      });
    };
    Observable3.create = function(subscribe) {
      return new Observable3(subscribe);
    };
    return Observable3;
  }();
  function getPromiseCtor2(promiseCtor) {
    var _a;
    return (_a = promiseCtor !== null && promiseCtor !== void 0 ? promiseCtor : config2.Promise) !== null && _a !== void 0 ? _a : Promise;
  }
  function isObserver2(value) {
    return value && isFunction2(value.next) && isFunction2(value.error) && isFunction2(value.complete);
  }
  function isSubscriber2(value) {
    return value && value instanceof Subscriber2 || isObserver2(value) && isSubscription2(value);
  }

  // node_modules/@ceramicnetwork/common/node_modules/rxjs/dist/esm5/internal/util/lift.js
  function hasLift2(source) {
    return isFunction2(source === null || source === void 0 ? void 0 : source.lift);
  }
  function operate2(init) {
    return function(source) {
      if (hasLift2(source)) {
        return source.lift(function(liftedSource) {
          try {
            return init(liftedSource, this);
          } catch (err) {
            this.error(err);
          }
        });
      }
      throw new TypeError("Unable to lift unknown Observable type");
    };
  }

  // node_modules/@ceramicnetwork/common/node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js
  function createOperatorSubscriber2(destination, onNext, onComplete, onError, onFinalize) {
    return new OperatorSubscriber2(destination, onNext, onComplete, onError, onFinalize);
  }
  var OperatorSubscriber2 = function(_super) {
    __extends(OperatorSubscriber3, _super);
    function OperatorSubscriber3(destination, onNext, onComplete, onError, onFinalize, shouldUnsubscribe) {
      var _this = _super.call(this, destination) || this;
      _this.onFinalize = onFinalize;
      _this.shouldUnsubscribe = shouldUnsubscribe;
      _this._next = onNext ? function(value) {
        try {
          onNext(value);
        } catch (err) {
          destination.error(err);
        }
      } : _super.prototype._next;
      _this._error = onError ? function(err) {
        try {
          onError(err);
        } catch (err2) {
          destination.error(err2);
        } finally {
          this.unsubscribe();
        }
      } : _super.prototype._error;
      _this._complete = onComplete ? function() {
        try {
          onComplete();
        } catch (err) {
          destination.error(err);
        } finally {
          this.unsubscribe();
        }
      } : _super.prototype._complete;
      return _this;
    }
    OperatorSubscriber3.prototype.unsubscribe = function() {
      var _a;
      if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
        var closed_1 = this.closed;
        _super.prototype.unsubscribe.call(this);
        !closed_1 && ((_a = this.onFinalize) === null || _a === void 0 ? void 0 : _a.call(this));
      }
    };
    return OperatorSubscriber3;
  }(Subscriber2);

  // node_modules/@ceramicnetwork/common/node_modules/rxjs/dist/esm5/internal/util/ObjectUnsubscribedError.js
  var ObjectUnsubscribedError = createErrorClass2(function(_super) {
    return function ObjectUnsubscribedErrorImpl() {
      _super(this);
      this.name = "ObjectUnsubscribedError";
      this.message = "object unsubscribed";
    };
  });

  // node_modules/@ceramicnetwork/common/node_modules/rxjs/dist/esm5/internal/Subject.js
  var Subject = function(_super) {
    __extends(Subject2, _super);
    function Subject2() {
      var _this = _super.call(this) || this;
      _this.closed = false;
      _this.currentObservers = null;
      _this.observers = [];
      _this.isStopped = false;
      _this.hasError = false;
      _this.thrownError = null;
      return _this;
    }
    Subject2.prototype.lift = function(operator) {
      var subject = new AnonymousSubject(this, this);
      subject.operator = operator;
      return subject;
    };
    Subject2.prototype._throwIfClosed = function() {
      if (this.closed) {
        throw new ObjectUnsubscribedError();
      }
    };
    Subject2.prototype.next = function(value) {
      var _this = this;
      errorContext2(function() {
        var e_1, _a;
        _this._throwIfClosed();
        if (!_this.isStopped) {
          if (!_this.currentObservers) {
            _this.currentObservers = Array.from(_this.observers);
          }
          try {
            for (var _b = __values(_this.currentObservers), _c = _b.next(); !_c.done; _c = _b.next()) {
              var observer = _c.value;
              observer.next(value);
            }
          } catch (e_1_1) {
            e_1 = { error: e_1_1 };
          } finally {
            try {
              if (_c && !_c.done && (_a = _b.return))
                _a.call(_b);
            } finally {
              if (e_1)
                throw e_1.error;
            }
          }
        }
      });
    };
    Subject2.prototype.error = function(err) {
      var _this = this;
      errorContext2(function() {
        _this._throwIfClosed();
        if (!_this.isStopped) {
          _this.hasError = _this.isStopped = true;
          _this.thrownError = err;
          var observers = _this.observers;
          while (observers.length) {
            observers.shift().error(err);
          }
        }
      });
    };
    Subject2.prototype.complete = function() {
      var _this = this;
      errorContext2(function() {
        _this._throwIfClosed();
        if (!_this.isStopped) {
          _this.isStopped = true;
          var observers = _this.observers;
          while (observers.length) {
            observers.shift().complete();
          }
        }
      });
    };
    Subject2.prototype.unsubscribe = function() {
      this.isStopped = this.closed = true;
      this.observers = this.currentObservers = null;
    };
    Object.defineProperty(Subject2.prototype, "observed", {
      get: function() {
        var _a;
        return ((_a = this.observers) === null || _a === void 0 ? void 0 : _a.length) > 0;
      },
      enumerable: false,
      configurable: true
    });
    Subject2.prototype._trySubscribe = function(subscriber) {
      this._throwIfClosed();
      return _super.prototype._trySubscribe.call(this, subscriber);
    };
    Subject2.prototype._subscribe = function(subscriber) {
      this._throwIfClosed();
      this._checkFinalizedStatuses(subscriber);
      return this._innerSubscribe(subscriber);
    };
    Subject2.prototype._innerSubscribe = function(subscriber) {
      var _this = this;
      var _a = this, hasError = _a.hasError, isStopped = _a.isStopped, observers = _a.observers;
      if (hasError || isStopped) {
        return EMPTY_SUBSCRIPTION2;
      }
      this.currentObservers = null;
      observers.push(subscriber);
      return new Subscription2(function() {
        _this.currentObservers = null;
        arrRemove2(observers, subscriber);
      });
    };
    Subject2.prototype._checkFinalizedStatuses = function(subscriber) {
      var _a = this, hasError = _a.hasError, thrownError = _a.thrownError, isStopped = _a.isStopped;
      if (hasError) {
        subscriber.error(thrownError);
      } else if (isStopped) {
        subscriber.complete();
      }
    };
    Subject2.prototype.asObservable = function() {
      var observable3 = new Observable2();
      observable3.source = this;
      return observable3;
    };
    Subject2.create = function(destination, source) {
      return new AnonymousSubject(destination, source);
    };
    return Subject2;
  }(Observable2);
  var AnonymousSubject = function(_super) {
    __extends(AnonymousSubject2, _super);
    function AnonymousSubject2(destination, source) {
      var _this = _super.call(this) || this;
      _this.destination = destination;
      _this.source = source;
      return _this;
    }
    AnonymousSubject2.prototype.next = function(value) {
      var _a, _b;
      (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.next) === null || _b === void 0 ? void 0 : _b.call(_a, value);
    };
    AnonymousSubject2.prototype.error = function(err) {
      var _a, _b;
      (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.call(_a, err);
    };
    AnonymousSubject2.prototype.complete = function() {
      var _a, _b;
      (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.complete) === null || _b === void 0 ? void 0 : _b.call(_a);
    };
    AnonymousSubject2.prototype._subscribe = function(subscriber) {
      var _a, _b;
      return (_b = (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber)) !== null && _b !== void 0 ? _b : EMPTY_SUBSCRIPTION2;
    };
    return AnonymousSubject2;
  }(Subject);

  // node_modules/@ceramicnetwork/common/node_modules/rxjs/dist/esm5/internal/BehaviorSubject.js
  var BehaviorSubject = function(_super) {
    __extends(BehaviorSubject2, _super);
    function BehaviorSubject2(_value) {
      var _this = _super.call(this) || this;
      _this._value = _value;
      return _this;
    }
    Object.defineProperty(BehaviorSubject2.prototype, "value", {
      get: function() {
        return this.getValue();
      },
      enumerable: false,
      configurable: true
    });
    BehaviorSubject2.prototype._subscribe = function(subscriber) {
      var subscription = _super.prototype._subscribe.call(this, subscriber);
      !subscription.closed && subscriber.next(this._value);
      return subscription;
    };
    BehaviorSubject2.prototype.getValue = function() {
      var _a = this, hasError = _a.hasError, thrownError = _a.thrownError, _value = _a._value;
      if (hasError) {
        throw thrownError;
      }
      this._throwIfClosed();
      return _value;
    };
    BehaviorSubject2.prototype.next = function(value) {
      _super.prototype.next.call(this, this._value = value);
    };
    return BehaviorSubject2;
  }(Subject);

  // node_modules/@ceramicnetwork/common/node_modules/rxjs/dist/esm5/internal/scheduler/dateTimestampProvider.js
  var dateTimestampProvider2 = {
    now: function() {
      return (dateTimestampProvider2.delegate || Date).now();
    },
    delegate: void 0
  };

  // node_modules/@ceramicnetwork/common/node_modules/rxjs/dist/esm5/internal/scheduler/Action.js
  var Action2 = function(_super) {
    __extends(Action3, _super);
    function Action3(scheduler, work) {
      return _super.call(this) || this;
    }
    Action3.prototype.schedule = function(state, delay) {
      if (delay === void 0) {
        delay = 0;
      }
      return this;
    };
    return Action3;
  }(Subscription2);

  // node_modules/@ceramicnetwork/common/node_modules/rxjs/dist/esm5/internal/scheduler/intervalProvider.js
  var intervalProvider2 = {
    setInterval: function(handler, timeout) {
      var args = [];
      for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
      }
      var delegate = intervalProvider2.delegate;
      if (delegate === null || delegate === void 0 ? void 0 : delegate.setInterval) {
        return delegate.setInterval.apply(delegate, __spreadArray([handler, timeout], __read(args)));
      }
      return setInterval.apply(void 0, __spreadArray([handler, timeout], __read(args)));
    },
    clearInterval: function(handle) {
      var delegate = intervalProvider2.delegate;
      return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearInterval) || clearInterval)(handle);
    },
    delegate: void 0
  };

  // node_modules/@ceramicnetwork/common/node_modules/rxjs/dist/esm5/internal/scheduler/AsyncAction.js
  var AsyncAction2 = function(_super) {
    __extends(AsyncAction3, _super);
    function AsyncAction3(scheduler, work) {
      var _this = _super.call(this, scheduler, work) || this;
      _this.scheduler = scheduler;
      _this.work = work;
      _this.pending = false;
      return _this;
    }
    AsyncAction3.prototype.schedule = function(state, delay) {
      var _a;
      if (delay === void 0) {
        delay = 0;
      }
      if (this.closed) {
        return this;
      }
      this.state = state;
      var id = this.id;
      var scheduler = this.scheduler;
      if (id != null) {
        this.id = this.recycleAsyncId(scheduler, id, delay);
      }
      this.pending = true;
      this.delay = delay;
      this.id = (_a = this.id) !== null && _a !== void 0 ? _a : this.requestAsyncId(scheduler, this.id, delay);
      return this;
    };
    AsyncAction3.prototype.requestAsyncId = function(scheduler, _id, delay) {
      if (delay === void 0) {
        delay = 0;
      }
      return intervalProvider2.setInterval(scheduler.flush.bind(scheduler, this), delay);
    };
    AsyncAction3.prototype.recycleAsyncId = function(_scheduler, id, delay) {
      if (delay === void 0) {
        delay = 0;
      }
      if (delay != null && this.delay === delay && this.pending === false) {
        return id;
      }
      if (id != null) {
        intervalProvider2.clearInterval(id);
      }
      return void 0;
    };
    AsyncAction3.prototype.execute = function(state, delay) {
      if (this.closed) {
        return new Error("executing a cancelled action");
      }
      this.pending = false;
      var error = this._execute(state, delay);
      if (error) {
        return error;
      } else if (this.pending === false && this.id != null) {
        this.id = this.recycleAsyncId(this.scheduler, this.id, null);
      }
    };
    AsyncAction3.prototype._execute = function(state, _delay) {
      var errored = false;
      var errorValue;
      try {
        this.work(state);
      } catch (e) {
        errored = true;
        errorValue = e ? e : new Error("Scheduled action threw falsy error");
      }
      if (errored) {
        this.unsubscribe();
        return errorValue;
      }
    };
    AsyncAction3.prototype.unsubscribe = function() {
      if (!this.closed) {
        var _a = this, id = _a.id, scheduler = _a.scheduler;
        var actions = scheduler.actions;
        this.work = this.state = this.scheduler = null;
        this.pending = false;
        arrRemove2(actions, this);
        if (id != null) {
          this.id = this.recycleAsyncId(scheduler, id, null);
        }
        this.delay = null;
        _super.prototype.unsubscribe.call(this);
      }
    };
    return AsyncAction3;
  }(Action2);

  // node_modules/@ceramicnetwork/common/node_modules/rxjs/dist/esm5/internal/Scheduler.js
  var Scheduler2 = function() {
    function Scheduler3(schedulerActionCtor, now) {
      if (now === void 0) {
        now = Scheduler3.now;
      }
      this.schedulerActionCtor = schedulerActionCtor;
      this.now = now;
    }
    Scheduler3.prototype.schedule = function(work, delay, state) {
      if (delay === void 0) {
        delay = 0;
      }
      return new this.schedulerActionCtor(this, work).schedule(state, delay);
    };
    Scheduler3.now = dateTimestampProvider2.now;
    return Scheduler3;
  }();

  // node_modules/@ceramicnetwork/common/node_modules/rxjs/dist/esm5/internal/scheduler/AsyncScheduler.js
  var AsyncScheduler2 = function(_super) {
    __extends(AsyncScheduler3, _super);
    function AsyncScheduler3(SchedulerAction, now) {
      if (now === void 0) {
        now = Scheduler2.now;
      }
      var _this = _super.call(this, SchedulerAction, now) || this;
      _this.actions = [];
      _this._active = false;
      return _this;
    }
    AsyncScheduler3.prototype.flush = function(action) {
      var actions = this.actions;
      if (this._active) {
        actions.push(action);
        return;
      }
      var error;
      this._active = true;
      do {
        if (error = action.execute(action.state, action.delay)) {
          break;
        }
      } while (action = actions.shift());
      this._active = false;
      if (error) {
        while (action = actions.shift()) {
          action.unsubscribe();
        }
        throw error;
      }
    };
    return AsyncScheduler3;
  }(Scheduler2);

  // node_modules/@ceramicnetwork/common/node_modules/rxjs/dist/esm5/internal/scheduler/async.js
  var asyncScheduler2 = new AsyncScheduler2(AsyncAction2);
  var async2 = asyncScheduler2;

  // node_modules/@ceramicnetwork/common/node_modules/rxjs/dist/esm5/internal/observable/empty.js
  var EMPTY = new Observable2(function(subscriber) {
    return subscriber.complete();
  });

  // node_modules/@ceramicnetwork/common/node_modules/rxjs/dist/esm5/internal/util/isScheduler.js
  function isScheduler2(value) {
    return value && isFunction2(value.schedule);
  }

  // node_modules/@ceramicnetwork/common/node_modules/rxjs/dist/esm5/internal/util/args.js
  function last(arr) {
    return arr[arr.length - 1];
  }
  function popScheduler(args) {
    return isScheduler2(last(args)) ? args.pop() : void 0;
  }
  function popNumber(args, defaultValue) {
    return typeof last(args) === "number" ? args.pop() : defaultValue;
  }

  // node_modules/@ceramicnetwork/common/node_modules/rxjs/dist/esm5/internal/util/isArrayLike.js
  var isArrayLike2 = function(x) {
    return x && typeof x.length === "number" && typeof x !== "function";
  };

  // node_modules/@ceramicnetwork/common/node_modules/rxjs/dist/esm5/internal/util/isPromise.js
  function isPromise2(value) {
    return isFunction2(value === null || value === void 0 ? void 0 : value.then);
  }

  // node_modules/@ceramicnetwork/common/node_modules/rxjs/dist/esm5/internal/util/isInteropObservable.js
  function isInteropObservable2(input) {
    return isFunction2(input[observable2]);
  }

  // node_modules/@ceramicnetwork/common/node_modules/rxjs/dist/esm5/internal/util/isAsyncIterable.js
  function isAsyncIterable2(obj) {
    return Symbol.asyncIterator && isFunction2(obj === null || obj === void 0 ? void 0 : obj[Symbol.asyncIterator]);
  }

  // node_modules/@ceramicnetwork/common/node_modules/rxjs/dist/esm5/internal/util/throwUnobservableError.js
  function createInvalidObservableTypeError2(input) {
    return new TypeError("You provided " + (input !== null && typeof input === "object" ? "an invalid object" : "'" + input + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
  }

  // node_modules/@ceramicnetwork/common/node_modules/rxjs/dist/esm5/internal/symbol/iterator.js
  function getSymbolIterator2() {
    if (typeof Symbol !== "function" || !Symbol.iterator) {
      return "@@iterator";
    }
    return Symbol.iterator;
  }
  var iterator2 = getSymbolIterator2();

  // node_modules/@ceramicnetwork/common/node_modules/rxjs/dist/esm5/internal/util/isIterable.js
  function isIterable2(input) {
    return isFunction2(input === null || input === void 0 ? void 0 : input[iterator2]);
  }

  // node_modules/@ceramicnetwork/common/node_modules/rxjs/dist/esm5/internal/util/isReadableStreamLike.js
  function readableStreamLikeToAsyncGenerator2(readableStream) {
    return __asyncGenerator(this, arguments, function readableStreamLikeToAsyncGenerator_1() {
      var reader, _a, value, done;
      return __generator(this, function(_b) {
        switch (_b.label) {
          case 0:
            reader = readableStream.getReader();
            _b.label = 1;
          case 1:
            _b.trys.push([1, , 9, 10]);
            _b.label = 2;
          case 2:
            if (false)
              return [3, 8];
            return [4, __await(reader.read())];
          case 3:
            _a = _b.sent(), value = _a.value, done = _a.done;
            if (!done)
              return [3, 5];
            return [4, __await(void 0)];
          case 4:
            return [2, _b.sent()];
          case 5:
            return [4, __await(value)];
          case 6:
            return [4, _b.sent()];
          case 7:
            _b.sent();
            return [3, 2];
          case 8:
            return [3, 10];
          case 9:
            reader.releaseLock();
            return [7];
          case 10:
            return [2];
        }
      });
    });
  }
  function isReadableStreamLike2(obj) {
    return isFunction2(obj === null || obj === void 0 ? void 0 : obj.getReader);
  }

  // node_modules/@ceramicnetwork/common/node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js
  function innerFrom2(input) {
    if (input instanceof Observable2) {
      return input;
    }
    if (input != null) {
      if (isInteropObservable2(input)) {
        return fromInteropObservable2(input);
      }
      if (isArrayLike2(input)) {
        return fromArrayLike2(input);
      }
      if (isPromise2(input)) {
        return fromPromise2(input);
      }
      if (isAsyncIterable2(input)) {
        return fromAsyncIterable2(input);
      }
      if (isIterable2(input)) {
        return fromIterable2(input);
      }
      if (isReadableStreamLike2(input)) {
        return fromReadableStreamLike2(input);
      }
    }
    throw createInvalidObservableTypeError2(input);
  }
  function fromInteropObservable2(obj) {
    return new Observable2(function(subscriber) {
      var obs = obj[observable2]();
      if (isFunction2(obs.subscribe)) {
        return obs.subscribe(subscriber);
      }
      throw new TypeError("Provided object does not correctly implement Symbol.observable");
    });
  }
  function fromArrayLike2(array) {
    return new Observable2(function(subscriber) {
      for (var i = 0; i < array.length && !subscriber.closed; i++) {
        subscriber.next(array[i]);
      }
      subscriber.complete();
    });
  }
  function fromPromise2(promise) {
    return new Observable2(function(subscriber) {
      promise.then(function(value) {
        if (!subscriber.closed) {
          subscriber.next(value);
          subscriber.complete();
        }
      }, function(err) {
        return subscriber.error(err);
      }).then(null, reportUnhandledError2);
    });
  }
  function fromIterable2(iterable) {
    return new Observable2(function(subscriber) {
      var e_1, _a;
      try {
        for (var iterable_1 = __values(iterable), iterable_1_1 = iterable_1.next(); !iterable_1_1.done; iterable_1_1 = iterable_1.next()) {
          var value = iterable_1_1.value;
          subscriber.next(value);
          if (subscriber.closed) {
            return;
          }
        }
      } catch (e_1_1) {
        e_1 = { error: e_1_1 };
      } finally {
        try {
          if (iterable_1_1 && !iterable_1_1.done && (_a = iterable_1.return))
            _a.call(iterable_1);
        } finally {
          if (e_1)
            throw e_1.error;
        }
      }
      subscriber.complete();
    });
  }
  function fromAsyncIterable2(asyncIterable) {
    return new Observable2(function(subscriber) {
      process2(asyncIterable, subscriber).catch(function(err) {
        return subscriber.error(err);
      });
    });
  }
  function fromReadableStreamLike2(readableStream) {
    return fromAsyncIterable2(readableStreamLikeToAsyncGenerator2(readableStream));
  }
  function process2(asyncIterable, subscriber) {
    var asyncIterable_1, asyncIterable_1_1;
    var e_2, _a;
    return __awaiter(this, void 0, void 0, function() {
      var value, e_2_1;
      return __generator(this, function(_b) {
        switch (_b.label) {
          case 0:
            _b.trys.push([0, 5, 6, 11]);
            asyncIterable_1 = __asyncValues(asyncIterable);
            _b.label = 1;
          case 1:
            return [4, asyncIterable_1.next()];
          case 2:
            if (!(asyncIterable_1_1 = _b.sent(), !asyncIterable_1_1.done))
              return [3, 4];
            value = asyncIterable_1_1.value;
            subscriber.next(value);
            if (subscriber.closed) {
              return [2];
            }
            _b.label = 3;
          case 3:
            return [3, 1];
          case 4:
            return [3, 11];
          case 5:
            e_2_1 = _b.sent();
            e_2 = { error: e_2_1 };
            return [3, 11];
          case 6:
            _b.trys.push([6, , 9, 10]);
            if (!(asyncIterable_1_1 && !asyncIterable_1_1.done && (_a = asyncIterable_1.return)))
              return [3, 8];
            return [4, _a.call(asyncIterable_1)];
          case 7:
            _b.sent();
            _b.label = 8;
          case 8:
            return [3, 10];
          case 9:
            if (e_2)
              throw e_2.error;
            return [7];
          case 10:
            return [7];
          case 11:
            subscriber.complete();
            return [2];
        }
      });
    });
  }

  // node_modules/@ceramicnetwork/common/node_modules/rxjs/dist/esm5/internal/util/executeSchedule.js
  function executeSchedule(parentSubscription, scheduler, work, delay, repeat) {
    if (delay === void 0) {
      delay = 0;
    }
    if (repeat === void 0) {
      repeat = false;
    }
    var scheduleSubscription = scheduler.schedule(function() {
      work();
      if (repeat) {
        parentSubscription.add(this.schedule(null, delay));
      } else {
        this.unsubscribe();
      }
    }, delay);
    parentSubscription.add(scheduleSubscription);
    if (!repeat) {
      return scheduleSubscription;
    }
  }

  // node_modules/@ceramicnetwork/common/node_modules/rxjs/dist/esm5/internal/operators/observeOn.js
  function observeOn(scheduler, delay) {
    if (delay === void 0) {
      delay = 0;
    }
    return operate2(function(source, subscriber) {
      source.subscribe(createOperatorSubscriber2(subscriber, function(value) {
        return executeSchedule(subscriber, scheduler, function() {
          return subscriber.next(value);
        }, delay);
      }, function() {
        return executeSchedule(subscriber, scheduler, function() {
          return subscriber.complete();
        }, delay);
      }, function(err) {
        return executeSchedule(subscriber, scheduler, function() {
          return subscriber.error(err);
        }, delay);
      }));
    });
  }

  // node_modules/@ceramicnetwork/common/node_modules/rxjs/dist/esm5/internal/operators/subscribeOn.js
  function subscribeOn(scheduler, delay) {
    if (delay === void 0) {
      delay = 0;
    }
    return operate2(function(source, subscriber) {
      subscriber.add(scheduler.schedule(function() {
        return source.subscribe(subscriber);
      }, delay));
    });
  }

  // node_modules/@ceramicnetwork/common/node_modules/rxjs/dist/esm5/internal/scheduled/scheduleObservable.js
  function scheduleObservable(input, scheduler) {
    return innerFrom2(input).pipe(subscribeOn(scheduler), observeOn(scheduler));
  }

  // node_modules/@ceramicnetwork/common/node_modules/rxjs/dist/esm5/internal/scheduled/schedulePromise.js
  function schedulePromise(input, scheduler) {
    return innerFrom2(input).pipe(subscribeOn(scheduler), observeOn(scheduler));
  }

  // node_modules/@ceramicnetwork/common/node_modules/rxjs/dist/esm5/internal/scheduled/scheduleArray.js
  function scheduleArray(input, scheduler) {
    return new Observable2(function(subscriber) {
      var i = 0;
      return scheduler.schedule(function() {
        if (i === input.length) {
          subscriber.complete();
        } else {
          subscriber.next(input[i++]);
          if (!subscriber.closed) {
            this.schedule();
          }
        }
      });
    });
  }

  // node_modules/@ceramicnetwork/common/node_modules/rxjs/dist/esm5/internal/scheduled/scheduleIterable.js
  function scheduleIterable(input, scheduler) {
    return new Observable2(function(subscriber) {
      var iterator3;
      executeSchedule(subscriber, scheduler, function() {
        iterator3 = input[iterator2]();
        executeSchedule(subscriber, scheduler, function() {
          var _a;
          var value;
          var done;
          try {
            _a = iterator3.next(), value = _a.value, done = _a.done;
          } catch (err) {
            subscriber.error(err);
            return;
          }
          if (done) {
            subscriber.complete();
          } else {
            subscriber.next(value);
          }
        }, 0, true);
      });
      return function() {
        return isFunction2(iterator3 === null || iterator3 === void 0 ? void 0 : iterator3.return) && iterator3.return();
      };
    });
  }

  // node_modules/@ceramicnetwork/common/node_modules/rxjs/dist/esm5/internal/scheduled/scheduleAsyncIterable.js
  function scheduleAsyncIterable(input, scheduler) {
    if (!input) {
      throw new Error("Iterable cannot be null");
    }
    return new Observable2(function(subscriber) {
      executeSchedule(subscriber, scheduler, function() {
        var iterator3 = input[Symbol.asyncIterator]();
        executeSchedule(subscriber, scheduler, function() {
          iterator3.next().then(function(result) {
            if (result.done) {
              subscriber.complete();
            } else {
              subscriber.next(result.value);
            }
          });
        }, 0, true);
      });
    });
  }

  // node_modules/@ceramicnetwork/common/node_modules/rxjs/dist/esm5/internal/scheduled/scheduleReadableStreamLike.js
  function scheduleReadableStreamLike(input, scheduler) {
    return scheduleAsyncIterable(readableStreamLikeToAsyncGenerator2(input), scheduler);
  }

  // node_modules/@ceramicnetwork/common/node_modules/rxjs/dist/esm5/internal/scheduled/scheduled.js
  function scheduled(input, scheduler) {
    if (input != null) {
      if (isInteropObservable2(input)) {
        return scheduleObservable(input, scheduler);
      }
      if (isArrayLike2(input)) {
        return scheduleArray(input, scheduler);
      }
      if (isPromise2(input)) {
        return schedulePromise(input, scheduler);
      }
      if (isAsyncIterable2(input)) {
        return scheduleAsyncIterable(input, scheduler);
      }
      if (isIterable2(input)) {
        return scheduleIterable(input, scheduler);
      }
      if (isReadableStreamLike2(input)) {
        return scheduleReadableStreamLike(input, scheduler);
      }
    }
    throw createInvalidObservableTypeError2(input);
  }

  // node_modules/@ceramicnetwork/common/node_modules/rxjs/dist/esm5/internal/observable/from.js
  function from5(input, scheduler) {
    return scheduler ? scheduled(input, scheduler) : innerFrom2(input);
  }

  // node_modules/@ceramicnetwork/common/node_modules/rxjs/dist/esm5/internal/util/EmptyError.js
  var EmptyError = createErrorClass2(function(_super) {
    return function EmptyErrorImpl() {
      _super(this);
      this.name = "EmptyError";
      this.message = "no elements in sequence";
    };
  });

  // node_modules/@ceramicnetwork/common/node_modules/rxjs/dist/esm5/internal/util/isDate.js
  function isValidDate2(value) {
    return value instanceof Date && !isNaN(value);
  }

  // node_modules/@ceramicnetwork/common/node_modules/rxjs/dist/esm5/internal/operators/map.js
  function map(project, thisArg) {
    return operate2(function(source, subscriber) {
      var index = 0;
      source.subscribe(createOperatorSubscriber2(subscriber, function(value) {
        subscriber.next(project.call(thisArg, value, index++));
      }));
    });
  }

  // node_modules/@ceramicnetwork/common/node_modules/rxjs/dist/esm5/internal/util/mapOneOrManyArgs.js
  var isArray = Array.isArray;
  function callOrApply(fn, args) {
    return isArray(args) ? fn.apply(void 0, __spreadArray([], __read(args))) : fn(args);
  }
  function mapOneOrManyArgs(fn) {
    return map(function(args) {
      return callOrApply(fn, args);
    });
  }

  // node_modules/@ceramicnetwork/common/node_modules/rxjs/dist/esm5/internal/operators/mergeInternals.js
  function mergeInternals(source, subscriber, project, concurrent, onBeforeNext, expand, innerSubScheduler, additionalFinalizer) {
    var buffer2 = [];
    var active = 0;
    var index = 0;
    var isComplete = false;
    var checkComplete = function() {
      if (isComplete && !buffer2.length && !active) {
        subscriber.complete();
      }
    };
    var outerNext = function(value) {
      return active < concurrent ? doInnerSub(value) : buffer2.push(value);
    };
    var doInnerSub = function(value) {
      expand && subscriber.next(value);
      active++;
      var innerComplete = false;
      innerFrom2(project(value, index++)).subscribe(createOperatorSubscriber2(subscriber, function(innerValue) {
        onBeforeNext === null || onBeforeNext === void 0 ? void 0 : onBeforeNext(innerValue);
        if (expand) {
          outerNext(innerValue);
        } else {
          subscriber.next(innerValue);
        }
      }, function() {
        innerComplete = true;
      }, void 0, function() {
        if (innerComplete) {
          try {
            active--;
            var _loop_1 = function() {
              var bufferedValue = buffer2.shift();
              if (innerSubScheduler) {
                executeSchedule(subscriber, innerSubScheduler, function() {
                  return doInnerSub(bufferedValue);
                });
              } else {
                doInnerSub(bufferedValue);
              }
            };
            while (buffer2.length && active < concurrent) {
              _loop_1();
            }
            checkComplete();
          } catch (err) {
            subscriber.error(err);
          }
        }
      }));
    };
    source.subscribe(createOperatorSubscriber2(subscriber, outerNext, function() {
      isComplete = true;
      checkComplete();
    }));
    return function() {
      additionalFinalizer === null || additionalFinalizer === void 0 ? void 0 : additionalFinalizer();
    };
  }

  // node_modules/@ceramicnetwork/common/node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js
  function mergeMap(project, resultSelector, concurrent) {
    if (concurrent === void 0) {
      concurrent = Infinity;
    }
    if (isFunction2(resultSelector)) {
      return mergeMap(function(a, i) {
        return map(function(b, ii) {
          return resultSelector(a, b, i, ii);
        })(innerFrom2(project(a, i)));
      }, concurrent);
    } else if (typeof resultSelector === "number") {
      concurrent = resultSelector;
    }
    return operate2(function(source, subscriber) {
      return mergeInternals(source, subscriber, project, concurrent);
    });
  }

  // node_modules/@ceramicnetwork/common/node_modules/rxjs/dist/esm5/internal/operators/mergeAll.js
  function mergeAll(concurrent) {
    if (concurrent === void 0) {
      concurrent = Infinity;
    }
    return mergeMap(identity4, concurrent);
  }

  // node_modules/@ceramicnetwork/common/node_modules/rxjs/dist/esm5/internal/observable/fromEvent.js
  var nodeEventEmitterMethods = ["addListener", "removeListener"];
  var eventTargetMethods = ["addEventListener", "removeEventListener"];
  var jqueryMethods = ["on", "off"];
  function fromEvent(target, eventName, options, resultSelector) {
    if (isFunction2(options)) {
      resultSelector = options;
      options = void 0;
    }
    if (resultSelector) {
      return fromEvent(target, eventName, options).pipe(mapOneOrManyArgs(resultSelector));
    }
    var _a = __read(isEventTarget(target) ? eventTargetMethods.map(function(methodName) {
      return function(handler) {
        return target[methodName](eventName, handler, options);
      };
    }) : isNodeStyleEventEmitter(target) ? nodeEventEmitterMethods.map(toCommonHandlerRegistry(target, eventName)) : isJQueryStyleEventEmitter(target) ? jqueryMethods.map(toCommonHandlerRegistry(target, eventName)) : [], 2), add = _a[0], remove = _a[1];
    if (!add) {
      if (isArrayLike2(target)) {
        return mergeMap(function(subTarget) {
          return fromEvent(subTarget, eventName, options);
        })(innerFrom2(target));
      }
    }
    if (!add) {
      throw new TypeError("Invalid event target");
    }
    return new Observable2(function(subscriber) {
      var handler = function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        return subscriber.next(1 < args.length ? args : args[0]);
      };
      add(handler);
      return function() {
        return remove(handler);
      };
    });
  }
  function toCommonHandlerRegistry(target, eventName) {
    return function(methodName) {
      return function(handler) {
        return target[methodName](eventName, handler);
      };
    };
  }
  function isNodeStyleEventEmitter(target) {
    return isFunction2(target.addListener) && isFunction2(target.removeListener);
  }
  function isJQueryStyleEventEmitter(target) {
    return isFunction2(target.on) && isFunction2(target.off);
  }
  function isEventTarget(target) {
    return isFunction2(target.addEventListener) && isFunction2(target.removeEventListener);
  }

  // node_modules/@ceramicnetwork/common/node_modules/rxjs/dist/esm5/internal/observable/timer.js
  function timer2(dueTime, intervalOrScheduler, scheduler) {
    if (dueTime === void 0) {
      dueTime = 0;
    }
    if (scheduler === void 0) {
      scheduler = async2;
    }
    var intervalDuration = -1;
    if (intervalOrScheduler != null) {
      if (isScheduler2(intervalOrScheduler)) {
        scheduler = intervalOrScheduler;
      } else {
        intervalDuration = intervalOrScheduler;
      }
    }
    return new Observable2(function(subscriber) {
      var due = isValidDate2(dueTime) ? +dueTime - scheduler.now() : dueTime;
      if (due < 0) {
        due = 0;
      }
      var n = 0;
      return scheduler.schedule(function() {
        if (!subscriber.closed) {
          subscriber.next(n++);
          if (0 <= intervalDuration) {
            this.schedule(void 0, intervalDuration);
          } else {
            subscriber.complete();
          }
        }
      }, due);
    });
  }

  // node_modules/@ceramicnetwork/common/node_modules/rxjs/dist/esm5/internal/observable/merge.js
  function merge() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    var scheduler = popScheduler(args);
    var concurrent = popNumber(args, Infinity);
    var sources = args;
    return !sources.length ? EMPTY : sources.length === 1 ? innerFrom2(sources[0]) : mergeAll(concurrent)(from5(sources, scheduler));
  }

  // node_modules/@ceramicnetwork/common/node_modules/rxjs/dist/esm5/internal/operators/filter.js
  function filter(predicate, thisArg) {
    return operate2(function(source, subscriber) {
      var index = 0;
      source.subscribe(createOperatorSubscriber2(subscriber, function(value) {
        return predicate.call(thisArg, value, index++) && subscriber.next(value);
      }));
    });
  }

  // node_modules/@ceramicnetwork/common/node_modules/rxjs/dist/esm5/internal/operators/defaultIfEmpty.js
  function defaultIfEmpty(defaultValue) {
    return operate2(function(source, subscriber) {
      var hasValue = false;
      source.subscribe(createOperatorSubscriber2(subscriber, function(value) {
        hasValue = true;
        subscriber.next(value);
      }, function() {
        if (!hasValue) {
          subscriber.next(defaultValue);
        }
        subscriber.complete();
      }));
    });
  }

  // node_modules/@ceramicnetwork/common/node_modules/rxjs/dist/esm5/internal/operators/take.js
  function take(count) {
    return count <= 0 ? function() {
      return EMPTY;
    } : operate2(function(source, subscriber) {
      var seen = 0;
      source.subscribe(createOperatorSubscriber2(subscriber, function(value) {
        if (++seen <= count) {
          subscriber.next(value);
          if (count <= seen) {
            subscriber.complete();
          }
        }
      }));
    });
  }

  // node_modules/@ceramicnetwork/common/node_modules/rxjs/dist/esm5/internal/operators/throwIfEmpty.js
  function throwIfEmpty(errorFactory) {
    if (errorFactory === void 0) {
      errorFactory = defaultErrorFactory;
    }
    return operate2(function(source, subscriber) {
      var hasValue = false;
      source.subscribe(createOperatorSubscriber2(subscriber, function(value) {
        hasValue = true;
        subscriber.next(value);
      }, function() {
        return hasValue ? subscriber.complete() : subscriber.error(errorFactory());
      }));
    });
  }
  function defaultErrorFactory() {
    return new EmptyError();
  }

  // node_modules/@ceramicnetwork/common/node_modules/rxjs/dist/esm5/internal/operators/first.js
  function first(predicate, defaultValue) {
    var hasDefaultValue = arguments.length >= 2;
    return function(source) {
      return source.pipe(predicate ? filter(function(v, i) {
        return predicate(v, i, source);
      }) : identity4, take(1), hasDefaultValue ? defaultIfEmpty(defaultValue) : throwIfEmpty(function() {
        return new EmptyError();
      }));
    };
  }

  // node_modules/@ceramicnetwork/common/lib/stream.js
  var SignatureStatus;
  (function(SignatureStatus2) {
    SignatureStatus2[SignatureStatus2["GENESIS"] = 0] = "GENESIS";
    SignatureStatus2[SignatureStatus2["PARTIAL"] = 1] = "PARTIAL";
    SignatureStatus2[SignatureStatus2["SIGNED"] = 2] = "SIGNED";
  })(SignatureStatus || (SignatureStatus = {}));
  var CommitType;
  (function(CommitType2) {
    CommitType2[CommitType2["GENESIS"] = 0] = "GENESIS";
    CommitType2[CommitType2["SIGNED"] = 1] = "SIGNED";
    CommitType2[CommitType2["ANCHOR"] = 2] = "ANCHOR";
  })(CommitType || (CommitType = {}));
  var Stream = class extends Observable2 {
    constructor(state$, _context) {
      super((subscriber) => {
        state$.subscribe(subscriber);
      });
      this.state$ = state$;
      this._context = _context;
    }
    get id() {
      return new StreamID2(this.state$.value.type, this.state$.value.log[0].cid);
    }
    get api() {
      return this._context.api;
    }
    get content() {
      const { next, content } = this.state$.value;
      return (0, import_lodash.default)(next?.content ?? content);
    }
    get tip() {
      return this.state$.value.log[this.state$.value.log.length - 1].cid;
    }
    get commitId() {
      return CommitID2.make(this.id, this.tip);
    }
    get allCommitIds() {
      return this.state$.value.log.map(({ cid }) => CommitID2.make(this.id, cid));
    }
    get anchorCommitIds() {
      return this.state$.value.log.filter(({ type }) => type === CommitType.ANCHOR).map(({ cid }) => CommitID2.make(this.id, cid));
    }
    get state() {
      return (0, import_lodash.default)(this.state$.value);
    }
    async sync(opts = {}) {
      opts = { sync: SyncOptions.PREFER_CACHE, ...opts };
      const stream = await this.api.loadStream(this.id, opts);
      this.state$.next(stream.state);
    }
    async requestAnchor() {
      return this.api.requestAnchor(this.id);
    }
  };
  function StreamStatic() {
    return (constructor) => {
      constructor;
    };
  }

  // node_modules/@ceramicnetwork/common/lib/utils/http-utils.js
  var import_cross_fetch = __toESM(require_browser_ponyfill(), 1);

  // node_modules/@ceramicnetwork/common/lib/utils/abort-signal-utils.js
  function mergeAbortSignals(signals) {
    const controller = new AbortController();
    if (signals.length === 0) {
      throw Error("Need abort signals to create a merged abort signal");
    }
    if (signals.some((signal) => signal.aborted)) {
      controller.abort();
      return controller.signal;
    }
    merge(...signals.map((signal) => fromEvent(signal, "abort"))).pipe(first()).subscribe(() => {
      controller.abort();
    });
    return controller.signal;
  }
  var TimedAbortSignal = class {
    constructor(timeout) {
      const controller = new AbortController();
      this.signal = controller.signal;
      if (timeout <= 0) {
        controller.abort();
        return;
      }
      this._subscription = timer2(timeout).subscribe(() => {
        controller.abort();
      });
    }
    clear() {
      this._subscription?.unsubscribe();
    }
  };
  async function abortable(original, fn) {
    const controller = new AbortController();
    const onAbort = () => {
      controller.abort();
    };
    original.addEventListener("abort", onAbort);
    if (original.aborted)
      controller.abort();
    return fn(controller.signal).finally(() => {
      original.removeEventListener("abort", onAbort);
    });
  }

  // node_modules/@ceramicnetwork/common/lib/utils/http-utils.js
  var DEFAULT_FETCH_TIMEOUT = 60 * 1e3 * 3;
  var HttpMethods;
  (function(HttpMethods2) {
    HttpMethods2["GET"] = "GET";
    HttpMethods2["POST"] = "POST";
  })(HttpMethods || (HttpMethods = {}));
  async function fetchJson(url, opts = {}) {
    if (opts.body) {
      const headers = { "Content-Type": "application/json", ...opts.headers };
      Object.assign(opts, {
        body: headers["Content-Type"] == "application/json" ? JSON.stringify(opts.body) : opts.body,
        headers
      });
    }
    const timeoutLength = opts.timeout || DEFAULT_FETCH_TIMEOUT;
    const timedAbortSignal = new TimedAbortSignal(timeoutLength);
    const signal = opts.signal ? mergeAbortSignals([opts.signal, timedAbortSignal.signal]) : timedAbortSignal.signal;
    const res = await abortable(signal, (abortSignal) => {
      return (0, import_cross_fetch.default)(String(url), { ...opts, signal: abortSignal, credentials: "include" });
    }).finally(() => timedAbortSignal.clear());
    if (!res.ok) {
      const text = await res.text();
      throw new Error(`HTTP request to '${url}' failed with status '${res.statusText}': ${text}`);
    }
    return res.json();
  }

  // node_modules/@ceramicnetwork/common/lib/utils/stream-utils.js
  var import_lodash2 = __toESM(require_lodash(), 1);

  // node_modules/@ceramicnetwork/common/lib/utils/cid-utils.js
  function toCID(givenCid) {
    const cid = CID.asCID(givenCid);
    if (cid) {
      return cid;
    }
    if (typeof givenCid === "string") {
      return CID.parse(givenCid);
    }
    if (givenCid instanceof Uint8Array) {
      return CID.decode(givenCid);
    }
    throw new Error(`${givenCid} cannot be converted to a CID`);
  }

  // node_modules/@ceramicnetwork/common/lib/utils/stream-utils.js
  var TILE_TYPE_ID = 0;
  var StreamUtils = class _StreamUtils {
    static streamIdFromState(state) {
      return new StreamID2(state.type, state.log[0].cid);
    }
    static serializeCommit(commit) {
      const cloned = (0, import_lodash2.default)(commit);
      if (_StreamUtils.isSignedCommitContainer(cloned)) {
        cloned.jws.link = cloned.jws.link.toString();
        cloned.linkedBlock = toString2(cloned.linkedBlock, "base64");
        if (cloned.cacaoBlock) {
          cloned.cacaoBlock = toString2(cloned.cacaoBlock, "base64");
        }
        return cloned;
      }
      if (_StreamUtils.isSignedCommit(commit)) {
        cloned.link = cloned.link.toString();
      }
      if (_StreamUtils.isAnchorCommit(commit)) {
        cloned.proof = cloned.proof.toString();
      }
      if (cloned.id) {
        cloned.id = cloned.id.toString();
      }
      if (cloned.prev) {
        cloned.prev = cloned.prev.toString();
      }
      if (commit.header?.model) {
        cloned.header.model = toString2(commit.header.model, "base64");
      }
      return cloned;
    }
    static deserializeCommit(commit) {
      const cloned = (0, import_lodash2.default)(commit);
      if (_StreamUtils.isSignedCommitContainer(cloned)) {
        cloned.jws.link = toCID(cloned.jws.link);
        cloned.linkedBlock = fromString2(cloned.linkedBlock, "base64");
        if (cloned.cacaoBlock) {
          cloned.cacaoBlock = fromString2(cloned.cacaoBlock, "base64");
        }
        return cloned;
      }
      if (_StreamUtils.isSignedCommit(cloned)) {
        cloned.link = toCID(cloned.link);
      }
      if (_StreamUtils.isAnchorCommit(cloned)) {
        cloned.proof = toCID(cloned.proof);
      }
      if (cloned.id) {
        cloned.id = toCID(cloned.id);
      }
      if (cloned.prev) {
        cloned.prev = toCID(cloned.prev);
      }
      if (cloned.header?.model) {
        cloned.header.model = fromString2(cloned.header.model, "base64");
      }
      return cloned;
    }
    static serializeState(state) {
      const cloned = (0, import_lodash2.default)(state);
      cloned.log = cloned.log.map((entry) => ({ ...entry, cid: entry.cid.toString() }));
      if (cloned.anchorStatus != null) {
        cloned.anchorStatus = AnchorStatus[cloned.anchorStatus];
      }
      if (cloned.anchorProof != null) {
        cloned.anchorProof.txHash = cloned.anchorProof.txHash.toString();
        cloned.anchorProof.root = cloned.anchorProof.root.toString();
      }
      if (state.metadata?.model) {
        cloned.metadata.model = state.metadata.model.toString();
      }
      if (state.next?.metadata?.model) {
        cloned.next.metadata.model = state.next.metadata.model.toString();
      }
      if (state.metadata?.unique && state.type != TILE_TYPE_ID) {
        cloned.metadata.unique = toString2(cloned.metadata.unique, "base64");
      }
      cloned.doctype = StreamType2.nameByCode(cloned.type);
      return cloned;
    }
    static deserializeState(state) {
      if (!state)
        return null;
      const cloned = (0, import_lodash2.default)(state);
      if (cloned.doctype) {
        cloned.type = StreamType2.codeByName(cloned.doctype);
        delete cloned.doctype;
      }
      cloned.log = cloned.log.map((entry) => ({ ...entry, cid: toCID(entry.cid) }));
      if (cloned.anchorProof) {
        cloned.anchorProof.txHash = toCID(cloned.anchorProof.txHash);
        cloned.anchorProof.root = toCID(cloned.anchorProof.root);
      }
      if (cloned.anchorStatus) {
        cloned.anchorStatus = AnchorStatus[cloned.anchorStatus];
      }
      if (state.metadata?.model) {
        cloned.metadata.model = StreamID2.fromString(state.metadata.model);
      }
      if (state.next?.metadata?.model) {
        cloned.next.metadata.model = StreamID2.fromString(state.next.metadata.model);
      }
      if (state.metadata?.unique && state.type != TILE_TYPE_ID) {
        cloned.metadata.unique = fromString2(state.metadata.unique, "base64");
      }
      return cloned;
    }
    static statesEqual(state1, state2) {
      return JSON.stringify(_StreamUtils.serializeState(state1)) === JSON.stringify(_StreamUtils.serializeState(state2));
    }
    static isStateSupersetOf(state, base13) {
      if (state.log.length < base13.log.length) {
        return false;
      }
      for (const i in base13.log) {
        if (!state.log[i].cid.equals(base13.log[i].cid)) {
          return false;
        }
      }
      if (state.log.length === base13.log.length && state.anchorStatus != base13.anchorStatus) {
        return false;
      }
      return true;
    }
    static assertCommitLinksToState(state, commit) {
      const streamId = this.streamIdFromState(state);
      if (commit.id && !commit.id.equals(state.log[0].cid)) {
        throw new Error(`Invalid genesis CID in commit for StreamID ${streamId.toString()}. Found: ${commit.id}, expected ${state.log[0].cid}`);
      }
      const expectedPrev = state.log[state.log.length - 1].cid;
      if (!commit.prev.equals(expectedPrev)) {
        throw new Error(`Commit doesn't properly point to previous commit in log. Expected ${expectedPrev}, found 'prev' ${commit.prev}`);
      }
    }
    static async convertCommitToSignedCommitContainer(commit, ipfs) {
      if (_StreamUtils.isSignedCommit(commit)) {
        const block = await ipfs.block.get(toCID(commit.link));
        return {
          jws: commit,
          linkedBlock: block
        };
      }
      return commit;
    }
    static isSignedCommitContainer(commit) {
      return commit && commit.jws !== void 0;
    }
    static isSignedCommit(commit) {
      return commit && commit.link !== void 0;
    }
    static getCacaoCidFromCommit(commit) {
      if (_StreamUtils.isSignedCommit(commit)) {
        const decodedProtectedHeader = base64urlToJSON(commit.signatures[0].protected);
        if (decodedProtectedHeader.cap) {
          const capIPFSUri = decodedProtectedHeader.cap;
          return CID.parse(capIPFSUri.replace("ipfs://", ""));
        }
      }
      return void 0;
    }
    static isAnchorCommit(commit) {
      return commit && commit.proof !== void 0;
    }
    static isSignedCommitData(commitData) {
      return commitData && commitData.envelope !== void 0;
    }
    static isAnchorCommitData(commitData) {
      return commitData && commitData.proof !== void 0;
    }
    static commitDataToLogEntry(commitData, commitType) {
      const logEntry = {
        cid: commitData.cid,
        type: commitType
      };
      if (commitData?.capability?.p?.exp) {
        logEntry.expirationTime = Math.floor(Date.parse(commitData.capability.p.exp) / 1e3);
      }
      if (commitData.timestamp) {
        logEntry.timestamp = commitData.timestamp;
      }
      return logEntry;
    }
    static checkForCacaoExpiration(state) {
      const now = Math.floor(Date.now() / 1e3);
      for (const logEntry of state.log) {
        const timestamp = logEntry.timestamp ?? now;
        if (logEntry.expirationTime && logEntry.expirationTime < timestamp) {
          throw new Error(`CACAO expired: Commit ${logEntry.cid.toString()} of Stream ${_StreamUtils.streamIdFromState(state).toString()} has a CACAO that expired at ${logEntry.expirationTime}. Loading the stream with 'sync: SyncOptions.ALWAYS_SYNC' will restore the stream to a usable state, by discarding the invalid commits (this means losing the data from those invalid writes!)`);
        }
      }
    }
    static anchorTimestampFromState(state) {
      for (let i = state.log.length - 1; i >= 0; i--) {
        const entry = state.log[i];
        if (entry.timestamp) {
          return entry.timestamp;
        }
      }
      return null;
    }
    static validDIDString(did) {
      if (typeof did != "string") {
        return false;
      }
      if (!did.startsWith("did:")) {
        return false;
      }
      return true;
    }
  };

  // node_modules/caip/dist/index.mjs
  function _extends() {
    _extends = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends.apply(this, arguments);
  }
  var CAIP2 = {
    name: "chainId",
    regex: "[-:a-zA-Z0-9]{5,41}",
    parameters: {
      delimiter: ":",
      values: {
        0: {
          name: "namespace",
          regex: "[-a-z0-9]{3,8}"
        },
        1: {
          name: "reference",
          regex: "[-a-zA-Z0-9]{1,32}"
        }
      }
    }
  };
  var CAIP10 = {
    name: "accountId",
    regex: "[-:a-zA-Z0-9]{7,106}",
    parameters: {
      delimiter: ":",
      values: {
        0: {
          name: "namespace",
          regex: "[-a-z0-9]{3,8}"
        },
        1: {
          name: "reference",
          regex: "[-a-zA-Z0-9]{1,32}"
        },
        2: {
          name: "address",
          regex: "[a-zA-Z0-9]{1,64}"
        }
      }
    }
  };
  var AssetName$1 = {
    name: "assetName",
    regex: "[-:a-zA-Z0-9]{5,73}",
    parameters: {
      delimiter: ":",
      values: {
        0: {
          name: "namespace",
          regex: "[-a-z0-9]{3,8}"
        },
        1: {
          name: "reference",
          regex: "[-a-zA-Z0-9]{1,64}"
        }
      }
    }
  };
  var CAIP19AssetType = {
    name: "assetType",
    regex: "[-:a-zA-Z0-9]{11,115}",
    parameters: {
      delimiter: "/",
      values: {
        0: CAIP2,
        1: AssetName$1
      }
    }
  };
  var CAIP19AssetId = {
    name: "assetId",
    regex: "[-:a-zA-Z0-9]{13,148}",
    parameters: {
      delimiter: "/",
      values: {
        0: CAIP2,
        1: AssetName$1,
        2: {
          name: "tokenId",
          regex: "[-a-zA-Z0-9]{1,32}"
        }
      }
    }
  };
  var CAIP = {
    "2": CAIP2,
    "10": CAIP10,
    "19": {
      assetName: AssetName$1,
      assetType: CAIP19AssetType,
      assetId: CAIP19AssetId
    }
  };
  function splitParams(id, spec) {
    return id.split(spec.parameters.delimiter);
  }
  function getParams(id, spec) {
    var arr = splitParams(id, spec);
    var params = {};
    arr.forEach(function(value, index) {
      params[spec.parameters.values[index].name] = value;
    });
    return params;
  }
  function joinParams(params, spec) {
    return Object.values(spec.parameters.values).map(function(parameter) {
      var param = params[parameter.name];
      return typeof param === "string" ? param : joinParams(param, parameter);
    }).join(spec.parameters.delimiter);
  }
  function isValidId(id, spec) {
    if (!new RegExp(spec.regex).test(id))
      return false;
    var params = splitParams(id, spec);
    if (params.length !== Object.keys(spec.parameters.values).length)
      return false;
    var matches = params.map(function(param, index) {
      return new RegExp(spec.parameters.values[index].regex).test(param);
    }).filter(function(x) {
      return !!x;
    });
    if (matches.length !== params.length)
      return false;
    return true;
  }
  var ChainId = /* @__PURE__ */ function() {
    function ChainId2(params) {
      if (typeof params === "string") {
        params = ChainId2.parse(params);
      }
      this.namespace = params.namespace;
      this.reference = params.reference;
    }
    ChainId2.parse = function parse2(id) {
      if (!isValidId(id, this.spec)) {
        throw new Error("Invalid " + this.spec.name + " provided: " + id);
      }
      return new ChainId2(getParams(id, this.spec)).toJSON();
    };
    ChainId2.format = function format4(params) {
      return joinParams(params, this.spec);
    };
    var _proto = ChainId2.prototype;
    _proto.toString = function toString4() {
      return ChainId2.format(this.toJSON());
    };
    _proto.toJSON = function toJSON() {
      return {
        namespace: this.namespace,
        reference: this.reference
      };
    };
    return ChainId2;
  }();
  ChainId.spec = CAIP["2"];
  var AccountId = /* @__PURE__ */ function() {
    function AccountId2(params) {
      if (typeof params === "string") {
        params = AccountId2.parse(params);
      }
      this.chainId = new ChainId(params.chainId);
      this.address = params.address;
    }
    AccountId2.parse = function parse2(id) {
      if (!isValidId(id, this.spec)) {
        throw new Error("Invalid " + this.spec.name + " provided: " + id);
      }
      var _getParams = getParams(id, this.spec), namespace = _getParams.namespace, reference = _getParams.reference, address = _getParams.address;
      var chainId = new ChainId({
        namespace,
        reference
      });
      return new AccountId2({
        chainId,
        address
      }).toJSON();
    };
    AccountId2.format = function format4(params) {
      var chainId = new ChainId(params.chainId);
      var splitParams2 = _extends({}, chainId.toJSON(), {
        address: params.address
      });
      return joinParams(splitParams2, this.spec);
    };
    var _proto = AccountId2.prototype;
    _proto.toString = function toString4() {
      return AccountId2.format(this.toJSON());
    };
    _proto.toJSON = function toJSON() {
      return {
        chainId: this.chainId.toJSON(),
        address: this.address
      };
    };
    return AccountId2;
  }();
  AccountId.spec = CAIP["10"];
  var AssetName = /* @__PURE__ */ function() {
    function AssetName2(params) {
      if (typeof params === "string") {
        params = AssetName2.parse(params);
      }
      this.namespace = params.namespace;
      this.reference = params.reference;
    }
    AssetName2.parse = function parse2(id) {
      if (!isValidId(id, this.spec)) {
        throw new Error("Invalid " + this.spec.name + " provided: " + id);
      }
      return new AssetName2(getParams(id, this.spec)).toJSON();
    };
    AssetName2.format = function format4(params) {
      return joinParams(params, this.spec);
    };
    var _proto = AssetName2.prototype;
    _proto.toString = function toString4() {
      return AssetName2.format(this.toJSON());
    };
    _proto.toJSON = function toJSON() {
      return {
        namespace: this.namespace,
        reference: this.reference
      };
    };
    return AssetName2;
  }();
  AssetName.spec = CAIP["19"].assetName;
  var AssetType = /* @__PURE__ */ function() {
    function AssetType2(params) {
      if (typeof params === "string") {
        params = AssetType2.parse(params);
      }
      this.chainId = new ChainId(params.chainId);
      this.assetName = new AssetName(params.assetName);
    }
    AssetType2.parse = function parse2(id) {
      if (!isValidId(id, this.spec)) {
        throw new Error("Invalid " + this.spec.name + " provided: " + id);
      }
      return new AssetType2(getParams(id, this.spec)).toJSON();
    };
    AssetType2.format = function format4(params) {
      return joinParams(params, this.spec);
    };
    var _proto = AssetType2.prototype;
    _proto.toString = function toString4() {
      return AssetType2.format(this.toJSON());
    };
    _proto.toJSON = function toJSON() {
      return {
        chainId: this.chainId.toJSON(),
        assetName: this.assetName
      };
    };
    return AssetType2;
  }();
  AssetType.spec = CAIP["19"].assetType;
  var AssetId = /* @__PURE__ */ function() {
    function AssetId2(params) {
      if (typeof params === "string") {
        params = AssetId2.parse(params);
      }
      this.chainId = new ChainId(params.chainId);
      this.assetName = new AssetName(params.assetName);
      this.tokenId = params.tokenId;
    }
    AssetId2.parse = function parse2(id) {
      if (!isValidId(id, this.spec)) {
        throw new Error("Invalid " + this.spec.name + " provided: " + id);
      }
      return new AssetId2(getParams(id, this.spec)).toJSON();
    };
    AssetId2.format = function format4(params) {
      return joinParams(params, this.spec);
    };
    var _proto = AssetId2.prototype;
    _proto.toString = function toString4() {
      return AssetId2.format(this.toJSON());
    };
    _proto.toJSON = function toJSON() {
      return {
        chainId: this.chainId.toJSON(),
        assetName: this.assetName.toJSON(),
        tokenId: this.tokenId
      };
    };
    return AssetId2;
  }();
  AssetId.spec = CAIP["19"].assetId;

  // node_modules/@ceramicnetwork/common/lib/utils/accountid-utils.js
  function normalizeAccountId(accountId) {
    if (typeof accountId === "string" && accountId.includes("@")) {
      const [address, chainId] = accountId.split("@");
      if (!address || !chainId) {
        throw new Error(`Invalid accountId provided`);
      }
      return new AccountId({ address, chainId });
    }
    return new AccountId(accountId);
  }

  // node_modules/@ceramicnetwork/common/lib/utils/uint8array-utils.js
  function base64urlToJSON(s) {
    return JSON.parse(toString2(fromString2(s, "base64url")));
  }

  // node_modules/@ceramicnetwork/common/lib/stream-state-subject.js
  var StreamStateSubject = class extends BehaviorSubject {
    next(next) {
      const current = this.value;
      if (!StreamUtils.statesEqual(current, next)) {
        super.next(next);
      }
    }
  };

  // node_modules/@ceramicnetwork/http-client/lib/document.js
  var Document = class _Document extends Observable {
    constructor(initial, _apiUrl, syncInterval) {
      super((subscriber) => {
        const isFirstObserver = this.state$.observers.length === 0;
        if (isFirstObserver) {
          this.periodicSubscription = timer(0, syncInterval).pipe(throttle(() => this._syncState(this.id, { sync: SyncOptions.PREFER_CACHE }))).subscribe();
        }
        this.state$.subscribe(subscriber).add(() => {
          const isNoObserversLeft = this.state$.observers.length === 0;
          if (isNoObserversLeft) {
            this.periodicSubscription?.unsubscribe();
          }
        });
      });
      this.state$ = new StreamStateSubject(initial);
      this._apiUrl = new URL(_apiUrl);
    }
    get value() {
      return this.state$.value;
    }
    get state() {
      return this.state$.value;
    }
    next(state) {
      this.state$.next(state);
    }
    async _syncState(streamId, opts) {
      const state = await _Document._load(streamId, this._apiUrl, opts);
      this.state$.next(StreamUtils.deserializeState(state));
    }
    get id() {
      return new StreamID(this.state$.value.type, this.state$.value.log[0].cid);
    }
    static async createFromGenesis(apiUrl, type, genesis, opts, syncInterval) {
      const url = new URL("./streams", apiUrl);
      const { state } = await fetchJson(url, {
        method: "post",
        body: {
          type,
          genesis: StreamUtils.serializeCommit(genesis),
          opts
        }
      });
      return new _Document(StreamUtils.deserializeState(state), apiUrl, syncInterval);
    }
    static async applyCommit(apiUrl, streamId, commit, opts, syncInterval) {
      const url = new URL("./commits", apiUrl);
      const { state } = await fetchJson(url, {
        method: "post",
        body: {
          streamId: streamId.toString(),
          commit: StreamUtils.serializeCommit(commit),
          opts
        }
      });
      return new _Document(StreamUtils.deserializeState(state), apiUrl, syncInterval);
    }
    static async _load(streamId, apiUrl, opts) {
      const url = serializeObjectToSearchParams(new URL(`./streams/${streamId}`, apiUrl), opts);
      const { state } = await fetchJson(url);
      return state;
    }
    static async load(streamId, apiUrl, syncInterval, opts) {
      const state = await _Document._load(streamId, apiUrl, opts);
      return new _Document(StreamUtils.deserializeState(state), apiUrl, syncInterval);
    }
    static async loadStreamCommits(streamId, apiUrl) {
      const url = new URL(`./commits/${streamId}`, apiUrl);
      const { commits } = await fetchJson(url);
      return commits.map((r) => {
        return {
          cid: r.cid,
          value: StreamUtils.deserializeCommit(r.value)
        };
      });
    }
    complete() {
      this.state$.complete();
    }
  };

  // node_modules/fast-json-patch/module/core.mjs
  var core_exports = {};
  __export(core_exports, {
    JsonPatchError: () => JsonPatchError,
    _areEquals: () => _areEquals,
    applyOperation: () => applyOperation,
    applyPatch: () => applyPatch,
    applyReducer: () => applyReducer,
    deepClone: () => deepClone,
    getValueByPointer: () => getValueByPointer,
    validate: () => validate,
    validator: () => validator
  });

  // node_modules/fast-json-patch/module/helpers.mjs
  var __extends2 = function() {
    var extendStatics2 = function(d, b) {
      extendStatics2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p in b2)
          if (b2.hasOwnProperty(p))
            d2[p] = b2[p];
      };
      return extendStatics2(d, b);
    };
    return function(d, b) {
      extendStatics2(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
  }();
  var _hasOwnProperty = Object.prototype.hasOwnProperty;
  function hasOwnProperty(obj, key) {
    return _hasOwnProperty.call(obj, key);
  }
  function _objectKeys(obj) {
    if (Array.isArray(obj)) {
      var keys_1 = new Array(obj.length);
      for (var k = 0; k < keys_1.length; k++) {
        keys_1[k] = "" + k;
      }
      return keys_1;
    }
    if (Object.keys) {
      return Object.keys(obj);
    }
    var keys = [];
    for (var i in obj) {
      if (hasOwnProperty(obj, i)) {
        keys.push(i);
      }
    }
    return keys;
  }
  function _deepClone(obj) {
    switch (typeof obj) {
      case "object":
        return JSON.parse(JSON.stringify(obj));
      case "undefined":
        return null;
      default:
        return obj;
    }
  }
  function isInteger(str) {
    var i = 0;
    var len = str.length;
    var charCode;
    while (i < len) {
      charCode = str.charCodeAt(i);
      if (charCode >= 48 && charCode <= 57) {
        i++;
        continue;
      }
      return false;
    }
    return true;
  }
  function escapePathComponent(path) {
    if (path.indexOf("/") === -1 && path.indexOf("~") === -1)
      return path;
    return path.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  function unescapePathComponent(path) {
    return path.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  function hasUndefined(obj) {
    if (obj === void 0) {
      return true;
    }
    if (obj) {
      if (Array.isArray(obj)) {
        for (var i_1 = 0, len = obj.length; i_1 < len; i_1++) {
          if (hasUndefined(obj[i_1])) {
            return true;
          }
        }
      } else if (typeof obj === "object") {
        var objKeys = _objectKeys(obj);
        var objKeysLength = objKeys.length;
        for (var i = 0; i < objKeysLength; i++) {
          if (hasUndefined(obj[objKeys[i]])) {
            return true;
          }
        }
      }
    }
    return false;
  }
  function patchErrorMessageFormatter(message, args) {
    var messageParts = [message];
    for (var key in args) {
      var value = typeof args[key] === "object" ? JSON.stringify(args[key], null, 2) : args[key];
      if (typeof value !== "undefined") {
        messageParts.push(key + ": " + value);
      }
    }
    return messageParts.join("\n");
  }
  var PatchError = (
    /** @class */
    function(_super) {
      __extends2(PatchError2, _super);
      function PatchError2(message, name8, index, operation, tree4) {
        var _newTarget = this.constructor;
        var _this = _super.call(this, patchErrorMessageFormatter(message, { name: name8, index, operation, tree: tree4 })) || this;
        _this.name = name8;
        _this.index = index;
        _this.operation = operation;
        _this.tree = tree4;
        Object.setPrototypeOf(_this, _newTarget.prototype);
        _this.message = patchErrorMessageFormatter(message, { name: name8, index, operation, tree: tree4 });
        return _this;
      }
      return PatchError2;
    }(Error)
  );

  // node_modules/fast-json-patch/module/core.mjs
  var JsonPatchError = PatchError;
  var deepClone = _deepClone;
  var objOps = {
    add: function(obj, key, document2) {
      obj[key] = this.value;
      return { newDocument: document2 };
    },
    remove: function(obj, key, document2) {
      var removed = obj[key];
      delete obj[key];
      return { newDocument: document2, removed };
    },
    replace: function(obj, key, document2) {
      var removed = obj[key];
      obj[key] = this.value;
      return { newDocument: document2, removed };
    },
    move: function(obj, key, document2) {
      var removed = getValueByPointer(document2, this.path);
      if (removed) {
        removed = _deepClone(removed);
      }
      var originalValue = applyOperation(document2, { op: "remove", path: this.from }).removed;
      applyOperation(document2, { op: "add", path: this.path, value: originalValue });
      return { newDocument: document2, removed };
    },
    copy: function(obj, key, document2) {
      var valueToCopy = getValueByPointer(document2, this.from);
      applyOperation(document2, { op: "add", path: this.path, value: _deepClone(valueToCopy) });
      return { newDocument: document2 };
    },
    test: function(obj, key, document2) {
      return { newDocument: document2, test: _areEquals(obj[key], this.value) };
    },
    _get: function(obj, key, document2) {
      this.value = obj[key];
      return { newDocument: document2 };
    }
  };
  var arrOps = {
    add: function(arr, i, document2) {
      if (isInteger(i)) {
        arr.splice(i, 0, this.value);
      } else {
        arr[i] = this.value;
      }
      return { newDocument: document2, index: i };
    },
    remove: function(arr, i, document2) {
      var removedList = arr.splice(i, 1);
      return { newDocument: document2, removed: removedList[0] };
    },
    replace: function(arr, i, document2) {
      var removed = arr[i];
      arr[i] = this.value;
      return { newDocument: document2, removed };
    },
    move: objOps.move,
    copy: objOps.copy,
    test: objOps.test,
    _get: objOps._get
  };
  function getValueByPointer(document2, pointer) {
    if (pointer == "") {
      return document2;
    }
    var getOriginalDestination = { op: "_get", path: pointer };
    applyOperation(document2, getOriginalDestination);
    return getOriginalDestination.value;
  }
  function applyOperation(document2, operation, validateOperation, mutateDocument, banPrototypeModifications, index) {
    if (validateOperation === void 0) {
      validateOperation = false;
    }
    if (mutateDocument === void 0) {
      mutateDocument = true;
    }
    if (banPrototypeModifications === void 0) {
      banPrototypeModifications = true;
    }
    if (index === void 0) {
      index = 0;
    }
    if (validateOperation) {
      if (typeof validateOperation == "function") {
        validateOperation(operation, 0, document2, operation.path);
      } else {
        validator(operation, 0);
      }
    }
    if (operation.path === "") {
      var returnValue = { newDocument: document2 };
      if (operation.op === "add") {
        returnValue.newDocument = operation.value;
        return returnValue;
      } else if (operation.op === "replace") {
        returnValue.newDocument = operation.value;
        returnValue.removed = document2;
        return returnValue;
      } else if (operation.op === "move" || operation.op === "copy") {
        returnValue.newDocument = getValueByPointer(document2, operation.from);
        if (operation.op === "move") {
          returnValue.removed = document2;
        }
        return returnValue;
      } else if (operation.op === "test") {
        returnValue.test = _areEquals(document2, operation.value);
        if (returnValue.test === false) {
          throw new JsonPatchError("Test operation failed", "TEST_OPERATION_FAILED", index, operation, document2);
        }
        returnValue.newDocument = document2;
        return returnValue;
      } else if (operation.op === "remove") {
        returnValue.removed = document2;
        returnValue.newDocument = null;
        return returnValue;
      } else if (operation.op === "_get") {
        operation.value = document2;
        return returnValue;
      } else {
        if (validateOperation) {
          throw new JsonPatchError("Operation `op` property is not one of operations defined in RFC-6902", "OPERATION_OP_INVALID", index, operation, document2);
        } else {
          return returnValue;
        }
      }
    } else {
      if (!mutateDocument) {
        document2 = _deepClone(document2);
      }
      var path = operation.path || "";
      var keys = path.split("/");
      var obj = document2;
      var t = 1;
      var len = keys.length;
      var existingPathFragment = void 0;
      var key = void 0;
      var validateFunction = void 0;
      if (typeof validateOperation == "function") {
        validateFunction = validateOperation;
      } else {
        validateFunction = validator;
      }
      while (true) {
        key = keys[t];
        if (key && key.indexOf("~") != -1) {
          key = unescapePathComponent(key);
        }
        if (banPrototypeModifications && (key == "__proto__" || key == "prototype" && t > 0 && keys[t - 1] == "constructor")) {
          throw new TypeError("JSON-Patch: modifying `__proto__` or `constructor/prototype` prop is banned for security reasons, if this was on purpose, please set `banPrototypeModifications` flag false and pass it to this function. More info in fast-json-patch README");
        }
        if (validateOperation) {
          if (existingPathFragment === void 0) {
            if (obj[key] === void 0) {
              existingPathFragment = keys.slice(0, t).join("/");
            } else if (t == len - 1) {
              existingPathFragment = operation.path;
            }
            if (existingPathFragment !== void 0) {
              validateFunction(operation, 0, document2, existingPathFragment);
            }
          }
        }
        t++;
        if (Array.isArray(obj)) {
          if (key === "-") {
            key = obj.length;
          } else {
            if (validateOperation && !isInteger(key)) {
              throw new JsonPatchError("Expected an unsigned base-10 integer value, making the new referenced value the array element with the zero-based index", "OPERATION_PATH_ILLEGAL_ARRAY_INDEX", index, operation, document2);
            } else if (isInteger(key)) {
              key = ~~key;
            }
          }
          if (t >= len) {
            if (validateOperation && operation.op === "add" && key > obj.length) {
              throw new JsonPatchError("The specified index MUST NOT be greater than the number of elements in the array", "OPERATION_VALUE_OUT_OF_BOUNDS", index, operation, document2);
            }
            var returnValue = arrOps[operation.op].call(operation, obj, key, document2);
            if (returnValue.test === false) {
              throw new JsonPatchError("Test operation failed", "TEST_OPERATION_FAILED", index, operation, document2);
            }
            return returnValue;
          }
        } else {
          if (t >= len) {
            var returnValue = objOps[operation.op].call(operation, obj, key, document2);
            if (returnValue.test === false) {
              throw new JsonPatchError("Test operation failed", "TEST_OPERATION_FAILED", index, operation, document2);
            }
            return returnValue;
          }
        }
        obj = obj[key];
        if (validateOperation && t < len && (!obj || typeof obj !== "object")) {
          throw new JsonPatchError("Cannot perform operation at the desired path", "OPERATION_PATH_UNRESOLVABLE", index, operation, document2);
        }
      }
    }
  }
  function applyPatch(document2, patch, validateOperation, mutateDocument, banPrototypeModifications) {
    if (mutateDocument === void 0) {
      mutateDocument = true;
    }
    if (banPrototypeModifications === void 0) {
      banPrototypeModifications = true;
    }
    if (validateOperation) {
      if (!Array.isArray(patch)) {
        throw new JsonPatchError("Patch sequence must be an array", "SEQUENCE_NOT_AN_ARRAY");
      }
    }
    if (!mutateDocument) {
      document2 = _deepClone(document2);
    }
    var results = new Array(patch.length);
    for (var i = 0, length_1 = patch.length; i < length_1; i++) {
      results[i] = applyOperation(document2, patch[i], validateOperation, true, banPrototypeModifications, i);
      document2 = results[i].newDocument;
    }
    results.newDocument = document2;
    return results;
  }
  function applyReducer(document2, operation, index) {
    var operationResult = applyOperation(document2, operation);
    if (operationResult.test === false) {
      throw new JsonPatchError("Test operation failed", "TEST_OPERATION_FAILED", index, operation, document2);
    }
    return operationResult.newDocument;
  }
  function validator(operation, index, document2, existingPathFragment) {
    if (typeof operation !== "object" || operation === null || Array.isArray(operation)) {
      throw new JsonPatchError("Operation is not an object", "OPERATION_NOT_AN_OBJECT", index, operation, document2);
    } else if (!objOps[operation.op]) {
      throw new JsonPatchError("Operation `op` property is not one of operations defined in RFC-6902", "OPERATION_OP_INVALID", index, operation, document2);
    } else if (typeof operation.path !== "string") {
      throw new JsonPatchError("Operation `path` property is not a string", "OPERATION_PATH_INVALID", index, operation, document2);
    } else if (operation.path.indexOf("/") !== 0 && operation.path.length > 0) {
      throw new JsonPatchError('Operation `path` property must start with "/"', "OPERATION_PATH_INVALID", index, operation, document2);
    } else if ((operation.op === "move" || operation.op === "copy") && typeof operation.from !== "string") {
      throw new JsonPatchError("Operation `from` property is not present (applicable in `move` and `copy` operations)", "OPERATION_FROM_REQUIRED", index, operation, document2);
    } else if ((operation.op === "add" || operation.op === "replace" || operation.op === "test") && operation.value === void 0) {
      throw new JsonPatchError("Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)", "OPERATION_VALUE_REQUIRED", index, operation, document2);
    } else if ((operation.op === "add" || operation.op === "replace" || operation.op === "test") && hasUndefined(operation.value)) {
      throw new JsonPatchError("Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)", "OPERATION_VALUE_CANNOT_CONTAIN_UNDEFINED", index, operation, document2);
    } else if (document2) {
      if (operation.op == "add") {
        var pathLen = operation.path.split("/").length;
        var existingPathLen = existingPathFragment.split("/").length;
        if (pathLen !== existingPathLen + 1 && pathLen !== existingPathLen) {
          throw new JsonPatchError("Cannot perform an `add` operation at the desired path", "OPERATION_PATH_CANNOT_ADD", index, operation, document2);
        }
      } else if (operation.op === "replace" || operation.op === "remove" || operation.op === "_get") {
        if (operation.path !== existingPathFragment) {
          throw new JsonPatchError("Cannot perform the operation at a path that does not exist", "OPERATION_PATH_UNRESOLVABLE", index, operation, document2);
        }
      } else if (operation.op === "move" || operation.op === "copy") {
        var existingValue = { op: "_get", path: operation.from, value: void 0 };
        var error = validate([existingValue], document2);
        if (error && error.name === "OPERATION_PATH_UNRESOLVABLE") {
          throw new JsonPatchError("Cannot perform the operation from a path that does not exist", "OPERATION_FROM_UNRESOLVABLE", index, operation, document2);
        }
      }
    }
  }
  function validate(sequence, document2, externalValidator) {
    try {
      if (!Array.isArray(sequence)) {
        throw new JsonPatchError("Patch sequence must be an array", "SEQUENCE_NOT_AN_ARRAY");
      }
      if (document2) {
        applyPatch(_deepClone(document2), _deepClone(sequence), externalValidator || true);
      } else {
        externalValidator = externalValidator || validator;
        for (var i = 0; i < sequence.length; i++) {
          externalValidator(sequence[i], i, document2, void 0);
        }
      }
    } catch (e) {
      if (e instanceof JsonPatchError) {
        return e;
      } else {
        throw e;
      }
    }
  }
  function _areEquals(a, b) {
    if (a === b)
      return true;
    if (a && b && typeof a == "object" && typeof b == "object") {
      var arrA = Array.isArray(a), arrB = Array.isArray(b), i, length10, key;
      if (arrA && arrB) {
        length10 = a.length;
        if (length10 != b.length)
          return false;
        for (i = length10; i-- !== 0; )
          if (!_areEquals(a[i], b[i]))
            return false;
        return true;
      }
      if (arrA != arrB)
        return false;
      var keys = Object.keys(a);
      length10 = keys.length;
      if (length10 !== Object.keys(b).length)
        return false;
      for (i = length10; i-- !== 0; )
        if (!b.hasOwnProperty(keys[i]))
          return false;
      for (i = length10; i-- !== 0; ) {
        key = keys[i];
        if (!_areEquals(a[key], b[key]))
          return false;
      }
      return true;
    }
    return a !== a && b !== b;
  }

  // node_modules/fast-json-patch/module/duplex.mjs
  var duplex_exports = {};
  __export(duplex_exports, {
    compare: () => compare3,
    generate: () => generate,
    observe: () => observe,
    unobserve: () => unobserve
  });
  var beforeDict = /* @__PURE__ */ new WeakMap();
  var Mirror = (
    /** @class */
    function() {
      function Mirror2(obj) {
        this.observers = /* @__PURE__ */ new Map();
        this.obj = obj;
      }
      return Mirror2;
    }()
  );
  var ObserverInfo = (
    /** @class */
    function() {
      function ObserverInfo2(callback, observer) {
        this.callback = callback;
        this.observer = observer;
      }
      return ObserverInfo2;
    }()
  );
  function getMirror(obj) {
    return beforeDict.get(obj);
  }
  function getObserverFromMirror(mirror, callback) {
    return mirror.observers.get(callback);
  }
  function removeObserverFromMirror(mirror, observer) {
    mirror.observers.delete(observer.callback);
  }
  function unobserve(root, observer) {
    observer.unobserve();
  }
  function observe(obj, callback) {
    var patches = [];
    var observer;
    var mirror = getMirror(obj);
    if (!mirror) {
      mirror = new Mirror(obj);
      beforeDict.set(obj, mirror);
    } else {
      var observerInfo = getObserverFromMirror(mirror, callback);
      observer = observerInfo && observerInfo.observer;
    }
    if (observer) {
      return observer;
    }
    observer = {};
    mirror.value = _deepClone(obj);
    if (callback) {
      observer.callback = callback;
      observer.next = null;
      var dirtyCheck = function() {
        generate(observer);
      };
      var fastCheck = function() {
        clearTimeout(observer.next);
        observer.next = setTimeout(dirtyCheck);
      };
      if (typeof window !== "undefined") {
        window.addEventListener("mouseup", fastCheck);
        window.addEventListener("keyup", fastCheck);
        window.addEventListener("mousedown", fastCheck);
        window.addEventListener("keydown", fastCheck);
        window.addEventListener("change", fastCheck);
      }
    }
    observer.patches = patches;
    observer.object = obj;
    observer.unobserve = function() {
      generate(observer);
      clearTimeout(observer.next);
      removeObserverFromMirror(mirror, observer);
      if (typeof window !== "undefined") {
        window.removeEventListener("mouseup", fastCheck);
        window.removeEventListener("keyup", fastCheck);
        window.removeEventListener("mousedown", fastCheck);
        window.removeEventListener("keydown", fastCheck);
        window.removeEventListener("change", fastCheck);
      }
    };
    mirror.observers.set(callback, new ObserverInfo(callback, observer));
    return observer;
  }
  function generate(observer, invertible) {
    if (invertible === void 0) {
      invertible = false;
    }
    var mirror = beforeDict.get(observer.object);
    _generate(mirror.value, observer.object, observer.patches, "", invertible);
    if (observer.patches.length) {
      applyPatch(mirror.value, observer.patches);
    }
    var temp = observer.patches;
    if (temp.length > 0) {
      observer.patches = [];
      if (observer.callback) {
        observer.callback(temp);
      }
    }
    return temp;
  }
  function _generate(mirror, obj, patches, path, invertible) {
    if (obj === mirror) {
      return;
    }
    if (typeof obj.toJSON === "function") {
      obj = obj.toJSON();
    }
    var newKeys = _objectKeys(obj);
    var oldKeys = _objectKeys(mirror);
    var changed = false;
    var deleted = false;
    for (var t = oldKeys.length - 1; t >= 0; t--) {
      var key = oldKeys[t];
      var oldVal = mirror[key];
      if (hasOwnProperty(obj, key) && !(obj[key] === void 0 && oldVal !== void 0 && Array.isArray(obj) === false)) {
        var newVal = obj[key];
        if (typeof oldVal == "object" && oldVal != null && typeof newVal == "object" && newVal != null && Array.isArray(oldVal) === Array.isArray(newVal)) {
          _generate(oldVal, newVal, patches, path + "/" + escapePathComponent(key), invertible);
        } else {
          if (oldVal !== newVal) {
            changed = true;
            if (invertible) {
              patches.push({ op: "test", path: path + "/" + escapePathComponent(key), value: _deepClone(oldVal) });
            }
            patches.push({ op: "replace", path: path + "/" + escapePathComponent(key), value: _deepClone(newVal) });
          }
        }
      } else if (Array.isArray(mirror) === Array.isArray(obj)) {
        if (invertible) {
          patches.push({ op: "test", path: path + "/" + escapePathComponent(key), value: _deepClone(oldVal) });
        }
        patches.push({ op: "remove", path: path + "/" + escapePathComponent(key) });
        deleted = true;
      } else {
        if (invertible) {
          patches.push({ op: "test", path, value: mirror });
        }
        patches.push({ op: "replace", path, value: obj });
        changed = true;
      }
    }
    if (!deleted && newKeys.length == oldKeys.length) {
      return;
    }
    for (var t = 0; t < newKeys.length; t++) {
      var key = newKeys[t];
      if (!hasOwnProperty(mirror, key) && obj[key] !== void 0) {
        patches.push({ op: "add", path: path + "/" + escapePathComponent(key), value: _deepClone(obj[key]) });
      }
    }
  }
  function compare3(tree1, tree22, invertible) {
    if (invertible === void 0) {
      invertible = false;
    }
    var patches = [];
    _generate(tree1, tree22, patches, "", invertible);
    return patches;
  }

  // node_modules/fast-json-patch/index.mjs
  var fast_json_patch_default = Object.assign({}, core_exports, duplex_exports, {
    JsonPatchError: PatchError,
    deepClone: _deepClone,
    escapePathComponent,
    unescapePathComponent
  });

  // node_modules/@ceramicnetwork/stream-tile/lib/tile-document.js
  var import_lodash3 = __toESM(require_lodash(), 1);

  // node_modules/@ceramicnetwork/stream-tile/node_modules/@ipld/dag-cbor/esm/index.js
  var esm_exports3 = {};
  __export(esm_exports3, {
    code: () => code4,
    decode: () => decode21,
    encode: () => encode15,
    name: () => name4
  });

  // node_modules/@ceramicnetwork/stream-tile/node_modules/multiformats/esm/vendor/varint.js
  var encode_14 = encode13;
  var MSB4 = 128;
  var REST4 = 127;
  var MSBALL4 = ~REST4;
  var INT4 = Math.pow(2, 31);
  function encode13(num, out, offset) {
    out = out || [];
    offset = offset || 0;
    var oldOffset = offset;
    while (num >= INT4) {
      out[offset++] = num & 255 | MSB4;
      num /= 128;
    }
    while (num & MSBALL4) {
      out[offset++] = num & 255 | MSB4;
      num >>>= 7;
    }
    out[offset] = num | 0;
    encode13.bytes = offset - oldOffset + 1;
    return out;
  }
  var decode17 = read4;
  var MSB$14 = 128;
  var REST$14 = 127;
  function read4(buf2, offset) {
    var res = 0, offset = offset || 0, shift = 0, counter = offset, b, l = buf2.length;
    do {
      if (counter >= l) {
        read4.bytes = 0;
        throw new RangeError("Could not decode varint");
      }
      b = buf2[counter++];
      res += shift < 28 ? (b & REST$14) << shift : (b & REST$14) * Math.pow(2, shift);
      shift += 7;
    } while (b >= MSB$14);
    read4.bytes = counter - offset;
    return res;
  }
  var N14 = Math.pow(2, 7);
  var N24 = Math.pow(2, 14);
  var N34 = Math.pow(2, 21);
  var N44 = Math.pow(2, 28);
  var N54 = Math.pow(2, 35);
  var N64 = Math.pow(2, 42);
  var N74 = Math.pow(2, 49);
  var N84 = Math.pow(2, 56);
  var N94 = Math.pow(2, 63);
  var length4 = function(value) {
    return value < N14 ? 1 : value < N24 ? 2 : value < N34 ? 3 : value < N44 ? 4 : value < N54 ? 5 : value < N64 ? 6 : value < N74 ? 7 : value < N84 ? 8 : value < N94 ? 9 : 10;
  };
  var varint10 = {
    encode: encode_14,
    decode: decode17,
    encodingLength: length4
  };
  var _brrp_varint4 = varint10;
  var varint_default4 = _brrp_varint4;

  // node_modules/@ceramicnetwork/stream-tile/node_modules/multiformats/esm/src/varint.js
  var decode18 = (data, offset = 0) => {
    const code8 = varint_default4.decode(data, offset);
    return [
      code8,
      varint_default4.decode.bytes
    ];
  };
  var encodeTo4 = (int, target, offset = 0) => {
    varint_default4.encode(int, target, offset);
    return target;
  };
  var encodingLength4 = (int) => {
    return varint_default4.encodingLength(int);
  };

  // node_modules/@ceramicnetwork/stream-tile/node_modules/multiformats/esm/src/bytes.js
  var empty4 = new Uint8Array(0);
  var equals8 = (aa, bb) => {
    if (aa === bb)
      return true;
    if (aa.byteLength !== bb.byteLength) {
      return false;
    }
    for (let ii = 0; ii < aa.byteLength; ii++) {
      if (aa[ii] !== bb[ii]) {
        return false;
      }
    }
    return true;
  };
  var coerce4 = (o) => {
    if (o instanceof Uint8Array && o.constructor.name === "Uint8Array")
      return o;
    if (o instanceof ArrayBuffer)
      return new Uint8Array(o);
    if (ArrayBuffer.isView(o)) {
      return new Uint8Array(o.buffer, o.byteOffset, o.byteLength);
    }
    throw new Error("Unknown type, must be binary type");
  };

  // node_modules/@ceramicnetwork/stream-tile/node_modules/multiformats/esm/src/hashes/digest.js
  var create4 = (code8, digest2) => {
    const size = digest2.byteLength;
    const sizeOffset = encodingLength4(code8);
    const digestOffset = sizeOffset + encodingLength4(size);
    const bytes = new Uint8Array(digestOffset + size);
    encodeTo4(code8, bytes, 0);
    encodeTo4(size, bytes, sizeOffset);
    bytes.set(digest2, digestOffset);
    return new Digest4(code8, size, digest2, bytes);
  };
  var decode19 = (multihash) => {
    const bytes = coerce4(multihash);
    const [code8, sizeOffset] = decode18(bytes);
    const [size, digestOffset] = decode18(bytes.subarray(sizeOffset));
    const digest2 = bytes.subarray(sizeOffset + digestOffset);
    if (digest2.byteLength !== size) {
      throw new Error("Incorrect length");
    }
    return new Digest4(code8, size, digest2, bytes);
  };
  var equals9 = (a, b) => {
    if (a === b) {
      return true;
    } else {
      return a.code === b.code && a.size === b.size && equals8(a.bytes, b.bytes);
    }
  };
  var Digest4 = class {
    constructor(code8, size, digest2, bytes) {
      this.code = code8;
      this.size = size;
      this.digest = digest2;
      this.bytes = bytes;
    }
  };

  // node_modules/@ceramicnetwork/stream-tile/node_modules/multiformats/esm/vendor/base-x.js
  function base5(ALPHABET, name8) {
    if (ALPHABET.length >= 255) {
      throw new TypeError("Alphabet too long");
    }
    var BASE_MAP = new Uint8Array(256);
    for (var j = 0; j < BASE_MAP.length; j++) {
      BASE_MAP[j] = 255;
    }
    for (var i = 0; i < ALPHABET.length; i++) {
      var x = ALPHABET.charAt(i);
      var xc = x.charCodeAt(0);
      if (BASE_MAP[xc] !== 255) {
        throw new TypeError(x + " is ambiguous");
      }
      BASE_MAP[xc] = i;
    }
    var BASE = ALPHABET.length;
    var LEADER = ALPHABET.charAt(0);
    var FACTOR = Math.log(BASE) / Math.log(256);
    var iFACTOR = Math.log(256) / Math.log(BASE);
    function encode31(source) {
      if (source instanceof Uint8Array)
        ;
      else if (ArrayBuffer.isView(source)) {
        source = new Uint8Array(source.buffer, source.byteOffset, source.byteLength);
      } else if (Array.isArray(source)) {
        source = Uint8Array.from(source);
      }
      if (!(source instanceof Uint8Array)) {
        throw new TypeError("Expected Uint8Array");
      }
      if (source.length === 0) {
        return "";
      }
      var zeroes = 0;
      var length10 = 0;
      var pbegin = 0;
      var pend = source.length;
      while (pbegin !== pend && source[pbegin] === 0) {
        pbegin++;
        zeroes++;
      }
      var size = (pend - pbegin) * iFACTOR + 1 >>> 0;
      var b58 = new Uint8Array(size);
      while (pbegin !== pend) {
        var carry = source[pbegin];
        var i2 = 0;
        for (var it1 = size - 1; (carry !== 0 || i2 < length10) && it1 !== -1; it1--, i2++) {
          carry += 256 * b58[it1] >>> 0;
          b58[it1] = carry % BASE >>> 0;
          carry = carry / BASE >>> 0;
        }
        if (carry !== 0) {
          throw new Error("Non-zero carry");
        }
        length10 = i2;
        pbegin++;
      }
      var it2 = size - length10;
      while (it2 !== size && b58[it2] === 0) {
        it2++;
      }
      var str = LEADER.repeat(zeroes);
      for (; it2 < size; ++it2) {
        str += ALPHABET.charAt(b58[it2]);
      }
      return str;
    }
    function decodeUnsafe(source) {
      if (typeof source !== "string") {
        throw new TypeError("Expected String");
      }
      if (source.length === 0) {
        return new Uint8Array();
      }
      var psz = 0;
      if (source[psz] === " ") {
        return;
      }
      var zeroes = 0;
      var length10 = 0;
      while (source[psz] === LEADER) {
        zeroes++;
        psz++;
      }
      var size = (source.length - psz) * FACTOR + 1 >>> 0;
      var b256 = new Uint8Array(size);
      while (source[psz]) {
        var carry = BASE_MAP[source.charCodeAt(psz)];
        if (carry === 255) {
          return;
        }
        var i2 = 0;
        for (var it3 = size - 1; (carry !== 0 || i2 < length10) && it3 !== -1; it3--, i2++) {
          carry += BASE * b256[it3] >>> 0;
          b256[it3] = carry % 256 >>> 0;
          carry = carry / 256 >>> 0;
        }
        if (carry !== 0) {
          throw new Error("Non-zero carry");
        }
        length10 = i2;
        psz++;
      }
      if (source[psz] === " ") {
        return;
      }
      var it4 = size - length10;
      while (it4 !== size && b256[it4] === 0) {
        it4++;
      }
      var vch = new Uint8Array(zeroes + (size - it4));
      var j2 = zeroes;
      while (it4 !== size) {
        vch[j2++] = b256[it4++];
      }
      return vch;
    }
    function decode45(string2) {
      var buffer2 = decodeUnsafe(string2);
      if (buffer2) {
        return buffer2;
      }
      throw new Error(`Non-${name8} character`);
    }
    return {
      encode: encode31,
      decodeUnsafe,
      decode: decode45
    };
  }
  var src4 = base5;
  var _brrp__multiformats_scope_baseX4 = src4;
  var base_x_default4 = _brrp__multiformats_scope_baseX4;

  // node_modules/@ceramicnetwork/stream-tile/node_modules/multiformats/esm/src/bases/base.js
  var Encoder4 = class {
    constructor(name8, prefix, baseEncode) {
      this.name = name8;
      this.prefix = prefix;
      this.baseEncode = baseEncode;
    }
    encode(bytes) {
      if (bytes instanceof Uint8Array) {
        return `${this.prefix}${this.baseEncode(bytes)}`;
      } else {
        throw Error("Unknown type, must be binary type");
      }
    }
  };
  var Decoder4 = class {
    constructor(name8, prefix, baseDecode) {
      this.name = name8;
      this.prefix = prefix;
      if (prefix.codePointAt(0) === void 0) {
        throw new Error("Invalid prefix character");
      }
      this.prefixCodePoint = prefix.codePointAt(0);
      this.baseDecode = baseDecode;
    }
    decode(text) {
      if (typeof text === "string") {
        if (text.codePointAt(0) !== this.prefixCodePoint) {
          throw Error(`Unable to decode multibase string ${JSON.stringify(text)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
        }
        return this.baseDecode(text.slice(this.prefix.length));
      } else {
        throw Error("Can only multibase decode strings");
      }
    }
    or(decoder) {
      return or4(this, decoder);
    }
  };
  var ComposedDecoder4 = class {
    constructor(decoders) {
      this.decoders = decoders;
    }
    or(decoder) {
      return or4(this, decoder);
    }
    decode(input) {
      const prefix = input[0];
      const decoder = this.decoders[prefix];
      if (decoder) {
        return decoder.decode(input);
      } else {
        throw RangeError(`Unable to decode multibase string ${JSON.stringify(input)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
      }
    }
  };
  var or4 = (left, right) => new ComposedDecoder4({
    ...left.decoders || { [left.prefix]: left },
    ...right.decoders || { [right.prefix]: right }
  });
  var Codec4 = class {
    constructor(name8, prefix, baseEncode, baseDecode) {
      this.name = name8;
      this.prefix = prefix;
      this.baseEncode = baseEncode;
      this.baseDecode = baseDecode;
      this.encoder = new Encoder4(name8, prefix, baseEncode);
      this.decoder = new Decoder4(name8, prefix, baseDecode);
    }
    encode(input) {
      return this.encoder.encode(input);
    }
    decode(input) {
      return this.decoder.decode(input);
    }
  };
  var from6 = ({ name: name8, prefix, encode: encode31, decode: decode45 }) => new Codec4(name8, prefix, encode31, decode45);
  var baseX4 = ({ prefix, name: name8, alphabet: alphabet2 }) => {
    const { encode: encode31, decode: decode45 } = base_x_default4(alphabet2, name8);
    return from6({
      prefix,
      name: name8,
      encode: encode31,
      decode: (text) => coerce4(decode45(text))
    });
  };
  var decode20 = (string2, alphabet2, bitsPerChar, name8) => {
    const codes = {};
    for (let i = 0; i < alphabet2.length; ++i) {
      codes[alphabet2[i]] = i;
    }
    let end = string2.length;
    while (string2[end - 1] === "=") {
      --end;
    }
    const out = new Uint8Array(end * bitsPerChar / 8 | 0);
    let bits = 0;
    let buffer2 = 0;
    let written = 0;
    for (let i = 0; i < end; ++i) {
      const value = codes[string2[i]];
      if (value === void 0) {
        throw new SyntaxError(`Non-${name8} character`);
      }
      buffer2 = buffer2 << bitsPerChar | value;
      bits += bitsPerChar;
      if (bits >= 8) {
        bits -= 8;
        out[written++] = 255 & buffer2 >> bits;
      }
    }
    if (bits >= bitsPerChar || 255 & buffer2 << 8 - bits) {
      throw new SyntaxError("Unexpected end of data");
    }
    return out;
  };
  var encode14 = (data, alphabet2, bitsPerChar) => {
    const pad = alphabet2[alphabet2.length - 1] === "=";
    const mask = (1 << bitsPerChar) - 1;
    let out = "";
    let bits = 0;
    let buffer2 = 0;
    for (let i = 0; i < data.length; ++i) {
      buffer2 = buffer2 << 8 | data[i];
      bits += 8;
      while (bits > bitsPerChar) {
        bits -= bitsPerChar;
        out += alphabet2[mask & buffer2 >> bits];
      }
    }
    if (bits) {
      out += alphabet2[mask & buffer2 << bitsPerChar - bits];
    }
    if (pad) {
      while (out.length * bitsPerChar & 7) {
        out += "=";
      }
    }
    return out;
  };
  var rfc46484 = ({ name: name8, prefix, bitsPerChar, alphabet: alphabet2 }) => {
    return from6({
      prefix,
      name: name8,
      encode(input) {
        return encode14(input, alphabet2, bitsPerChar);
      },
      decode(input) {
        return decode20(input, alphabet2, bitsPerChar, name8);
      }
    });
  };

  // node_modules/@ceramicnetwork/stream-tile/node_modules/multiformats/esm/src/bases/base58.js
  var base58btc4 = baseX4({
    name: "base58btc",
    prefix: "z",
    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
  });
  var base58flickr4 = baseX4({
    name: "base58flickr",
    prefix: "Z",
    alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
  });

  // node_modules/@ceramicnetwork/stream-tile/node_modules/multiformats/esm/src/bases/base32.js
  var base324 = rfc46484({
    prefix: "b",
    name: "base32",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
    bitsPerChar: 5
  });
  var base32upper4 = rfc46484({
    prefix: "B",
    name: "base32upper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
    bitsPerChar: 5
  });
  var base32pad4 = rfc46484({
    prefix: "c",
    name: "base32pad",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
    bitsPerChar: 5
  });
  var base32padupper4 = rfc46484({
    prefix: "C",
    name: "base32padupper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
    bitsPerChar: 5
  });
  var base32hex4 = rfc46484({
    prefix: "v",
    name: "base32hex",
    alphabet: "0123456789abcdefghijklmnopqrstuv",
    bitsPerChar: 5
  });
  var base32hexupper4 = rfc46484({
    prefix: "V",
    name: "base32hexupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
    bitsPerChar: 5
  });
  var base32hexpad4 = rfc46484({
    prefix: "t",
    name: "base32hexpad",
    alphabet: "0123456789abcdefghijklmnopqrstuv=",
    bitsPerChar: 5
  });
  var base32hexpadupper4 = rfc46484({
    prefix: "T",
    name: "base32hexpadupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
    bitsPerChar: 5
  });
  var base32z4 = rfc46484({
    prefix: "h",
    name: "base32z",
    alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
    bitsPerChar: 5
  });

  // node_modules/@ceramicnetwork/stream-tile/node_modules/multiformats/esm/src/cid.js
  var CID4 = class _CID {
    constructor(version7, code8, multihash, bytes) {
      this.code = code8;
      this.version = version7;
      this.multihash = multihash;
      this.bytes = bytes;
      this.byteOffset = bytes.byteOffset;
      this.byteLength = bytes.byteLength;
      this.asCID = this;
      this._baseCache = /* @__PURE__ */ new Map();
      Object.defineProperties(this, {
        byteOffset: hidden3,
        byteLength: hidden3,
        code: readonly4,
        version: readonly4,
        multihash: readonly4,
        bytes: readonly4,
        _baseCache: hidden3,
        asCID: hidden3
      });
    }
    toV0() {
      switch (this.version) {
        case 0: {
          return this;
        }
        default: {
          const { code: code8, multihash } = this;
          if (code8 !== DAG_PB_CODE4) {
            throw new Error("Cannot convert a non dag-pb CID to CIDv0");
          }
          if (multihash.code !== SHA_256_CODE4) {
            throw new Error("Cannot convert non sha2-256 multihash CID to CIDv0");
          }
          return _CID.createV0(multihash);
        }
      }
    }
    toV1() {
      switch (this.version) {
        case 0: {
          const { code: code8, digest: digest2 } = this.multihash;
          const multihash = create4(code8, digest2);
          return _CID.createV1(this.code, multihash);
        }
        case 1: {
          return this;
        }
        default: {
          throw Error(`Can not convert CID version ${this.version} to version 0. This is a bug please report`);
        }
      }
    }
    equals(other) {
      return other && this.code === other.code && this.version === other.version && equals9(this.multihash, other.multihash);
    }
    toString(base13) {
      const { bytes, version: version7, _baseCache } = this;
      switch (version7) {
        case 0:
          return toStringV04(bytes, _baseCache, base13 || base58btc4.encoder);
        default:
          return toStringV14(bytes, _baseCache, base13 || base324.encoder);
      }
    }
    toJSON() {
      return {
        code: this.code,
        version: this.version,
        hash: this.multihash.bytes
      };
    }
    get [Symbol.toStringTag]() {
      return "CID";
    }
    [Symbol.for("nodejs.util.inspect.custom")]() {
      return "CID(" + this.toString() + ")";
    }
    static isCID(value) {
      deprecate3(/^0\.0/, IS_CID_DEPRECATION3);
      return !!(value && (value[cidSymbol4] || value.asCID === value));
    }
    get toBaseEncodedString() {
      throw new Error("Deprecated, use .toString()");
    }
    get codec() {
      throw new Error('"codec" property is deprecated, use integer "code" property instead');
    }
    get buffer() {
      throw new Error("Deprecated .buffer property, use .bytes to get Uint8Array instead");
    }
    get multibaseName() {
      throw new Error('"multibaseName" property is deprecated');
    }
    get prefix() {
      throw new Error('"prefix" property is deprecated');
    }
    static asCID(value) {
      if (value instanceof _CID) {
        return value;
      } else if (value != null && value.asCID === value) {
        const { version: version7, code: code8, multihash, bytes } = value;
        return new _CID(version7, code8, multihash, bytes || encodeCID4(version7, code8, multihash.bytes));
      } else if (value != null && value[cidSymbol4] === true) {
        const { version: version7, multihash, code: code8 } = value;
        const digest2 = decode19(multihash);
        return _CID.create(version7, code8, digest2);
      } else {
        return null;
      }
    }
    static create(version7, code8, digest2) {
      if (typeof code8 !== "number") {
        throw new Error("String codecs are no longer supported");
      }
      switch (version7) {
        case 0: {
          if (code8 !== DAG_PB_CODE4) {
            throw new Error(`Version 0 CID must use dag-pb (code: ${DAG_PB_CODE4}) block encoding`);
          } else {
            return new _CID(version7, code8, digest2, digest2.bytes);
          }
        }
        case 1: {
          const bytes = encodeCID4(version7, code8, digest2.bytes);
          return new _CID(version7, code8, digest2, bytes);
        }
        default: {
          throw new Error("Invalid version");
        }
      }
    }
    static createV0(digest2) {
      return _CID.create(0, DAG_PB_CODE4, digest2);
    }
    static createV1(code8, digest2) {
      return _CID.create(1, code8, digest2);
    }
    static decode(bytes) {
      const [cid, remainder] = _CID.decodeFirst(bytes);
      if (remainder.length) {
        throw new Error("Incorrect length");
      }
      return cid;
    }
    static decodeFirst(bytes) {
      const specs = _CID.inspectBytes(bytes);
      const prefixSize = specs.size - specs.multihashSize;
      const multihashBytes = coerce4(bytes.subarray(prefixSize, prefixSize + specs.multihashSize));
      if (multihashBytes.byteLength !== specs.multihashSize) {
        throw new Error("Incorrect length");
      }
      const digestBytes = multihashBytes.subarray(specs.multihashSize - specs.digestSize);
      const digest2 = new Digest4(specs.multihashCode, specs.digestSize, digestBytes, multihashBytes);
      const cid = specs.version === 0 ? _CID.createV0(digest2) : _CID.createV1(specs.codec, digest2);
      return [
        cid,
        bytes.subarray(specs.size)
      ];
    }
    static inspectBytes(initialBytes) {
      let offset = 0;
      const next = () => {
        const [i, length10] = decode18(initialBytes.subarray(offset));
        offset += length10;
        return i;
      };
      let version7 = next();
      let codec = DAG_PB_CODE4;
      if (version7 === 18) {
        version7 = 0;
        offset = 0;
      } else if (version7 === 1) {
        codec = next();
      }
      if (version7 !== 0 && version7 !== 1) {
        throw new RangeError(`Invalid CID version ${version7}`);
      }
      const prefixSize = offset;
      const multihashCode = next();
      const digestSize = next();
      const size = offset + digestSize;
      const multihashSize = size - prefixSize;
      return {
        version: version7,
        codec,
        multihashCode,
        digestSize,
        multihashSize,
        size
      };
    }
    static parse(source, base13) {
      const [prefix, bytes] = parseCIDtoBytes4(source, base13);
      const cid = _CID.decode(bytes);
      cid._baseCache.set(prefix, source);
      return cid;
    }
  };
  var parseCIDtoBytes4 = (source, base13) => {
    switch (source[0]) {
      case "Q": {
        const decoder = base13 || base58btc4;
        return [
          base58btc4.prefix,
          decoder.decode(`${base58btc4.prefix}${source}`)
        ];
      }
      case base58btc4.prefix: {
        const decoder = base13 || base58btc4;
        return [
          base58btc4.prefix,
          decoder.decode(source)
        ];
      }
      case base324.prefix: {
        const decoder = base13 || base324;
        return [
          base324.prefix,
          decoder.decode(source)
        ];
      }
      default: {
        if (base13 == null) {
          throw Error("To parse non base32 or base58btc encoded CID multibase decoder must be provided");
        }
        return [
          source[0],
          base13.decode(source)
        ];
      }
    }
  };
  var toStringV04 = (bytes, cache4, base13) => {
    const { prefix } = base13;
    if (prefix !== base58btc4.prefix) {
      throw Error(`Cannot string encode V0 in ${base13.name} encoding`);
    }
    const cid = cache4.get(prefix);
    if (cid == null) {
      const cid2 = base13.encode(bytes).slice(1);
      cache4.set(prefix, cid2);
      return cid2;
    } else {
      return cid;
    }
  };
  var toStringV14 = (bytes, cache4, base13) => {
    const { prefix } = base13;
    const cid = cache4.get(prefix);
    if (cid == null) {
      const cid2 = base13.encode(bytes);
      cache4.set(prefix, cid2);
      return cid2;
    } else {
      return cid;
    }
  };
  var DAG_PB_CODE4 = 112;
  var SHA_256_CODE4 = 18;
  var encodeCID4 = (version7, code8, multihash) => {
    const codeOffset = encodingLength4(version7);
    const hashOffset = codeOffset + encodingLength4(code8);
    const bytes = new Uint8Array(hashOffset + multihash.byteLength);
    encodeTo4(version7, bytes, 0);
    encodeTo4(code8, bytes, codeOffset);
    bytes.set(multihash, hashOffset);
    return bytes;
  };
  var cidSymbol4 = Symbol.for("@ipld/js-cid/CID");
  var readonly4 = {
    writable: false,
    configurable: false,
    enumerable: true
  };
  var hidden3 = {
    writable: false,
    enumerable: false,
    configurable: false
  };
  var version3 = "0.0.0-dev";
  var deprecate3 = (range, message) => {
    if (range.test(version3)) {
      console.warn(message);
    } else {
      throw new Error(message);
    }
  };
  var IS_CID_DEPRECATION3 = `CID.isCID(v) is deprecated and will be removed in the next major release.
Following code pattern:

if (CID.isCID(value)) {
  doSomethingWithCID(value)
}

Is replaced with:

const cid = CID.asCID(value)
if (cid) {
  // Make sure to use cid instead of value
  doSomethingWithCID(cid)
}
`;

  // node_modules/@ceramicnetwork/stream-tile/node_modules/@ipld/dag-cbor/esm/index.js
  var CID_CBOR_TAG3 = 42;
  function cidEncoder3(obj) {
    if (obj.asCID !== obj) {
      return null;
    }
    const cid = CID4.asCID(obj);
    if (!cid) {
      return null;
    }
    const bytes = new Uint8Array(cid.bytes.byteLength + 1);
    bytes.set(cid.bytes, 1);
    return [
      new Token(Type.tag, CID_CBOR_TAG3),
      new Token(Type.bytes, bytes)
    ];
  }
  function undefinedEncoder3() {
    throw new Error("`undefined` is not supported by the IPLD Data Model and cannot be encoded");
  }
  function numberEncoder3(num) {
    if (Number.isNaN(num)) {
      throw new Error("`NaN` is not supported by the IPLD Data Model and cannot be encoded");
    }
    if (num === Infinity || num === -Infinity) {
      throw new Error("`Infinity` and `-Infinity` is not supported by the IPLD Data Model and cannot be encoded");
    }
    return null;
  }
  var encodeOptions3 = {
    float64: true,
    typeEncoders: {
      Object: cidEncoder3,
      undefined: undefinedEncoder3,
      number: numberEncoder3
    }
  };
  function cidDecoder3(bytes) {
    if (bytes[0] !== 0) {
      throw new Error("Invalid CID for CBOR tag 42; expected leading 0x00");
    }
    return CID4.decode(bytes.subarray(1));
  }
  var decodeOptions3 = {
    allowIndefinite: false,
    coerceUndefinedToNull: true,
    allowNaN: false,
    allowInfinity: false,
    allowBigInt: true,
    strict: true,
    useMaps: false,
    tags: []
  };
  decodeOptions3.tags[CID_CBOR_TAG3] = cidDecoder3;
  var name4 = "dag-cbor";
  var code4 = 113;
  var encode15 = (node) => encode6(node, encodeOptions3);
  var decode21 = (data) => decode6(data, decodeOptions3);

  // node_modules/@ceramicnetwork/stream-tile/lib/tile-document.js
  var import_random = __toESM(require_random(), 1);

  // node_modules/@ceramicnetwork/stream-tile/node_modules/@ceramicnetwork/streamid/node_modules/multiformats/vendor/varint.js
  var encode_15 = encode16;
  var MSB5 = 128;
  var REST5 = 127;
  var MSBALL5 = ~REST5;
  var INT5 = Math.pow(2, 31);
  function encode16(num, out, offset) {
    out = out || [];
    offset = offset || 0;
    var oldOffset = offset;
    while (num >= INT5) {
      out[offset++] = num & 255 | MSB5;
      num /= 128;
    }
    while (num & MSBALL5) {
      out[offset++] = num & 255 | MSB5;
      num >>>= 7;
    }
    out[offset] = num | 0;
    encode16.bytes = offset - oldOffset + 1;
    return out;
  }
  var decode22 = read5;
  var MSB$15 = 128;
  var REST$15 = 127;
  function read5(buf2, offset) {
    var res = 0, offset = offset || 0, shift = 0, counter = offset, b, l = buf2.length;
    do {
      if (counter >= l) {
        read5.bytes = 0;
        throw new RangeError("Could not decode varint");
      }
      b = buf2[counter++];
      res += shift < 28 ? (b & REST$15) << shift : (b & REST$15) * Math.pow(2, shift);
      shift += 7;
    } while (b >= MSB$15);
    read5.bytes = counter - offset;
    return res;
  }
  var N15 = Math.pow(2, 7);
  var N25 = Math.pow(2, 14);
  var N35 = Math.pow(2, 21);
  var N45 = Math.pow(2, 28);
  var N55 = Math.pow(2, 35);
  var N65 = Math.pow(2, 42);
  var N75 = Math.pow(2, 49);
  var N85 = Math.pow(2, 56);
  var N95 = Math.pow(2, 63);
  var length5 = function(value) {
    return value < N15 ? 1 : value < N25 ? 2 : value < N35 ? 3 : value < N45 ? 4 : value < N55 ? 5 : value < N65 ? 6 : value < N75 ? 7 : value < N85 ? 8 : value < N95 ? 9 : 10;
  };
  var varint11 = {
    encode: encode_15,
    decode: decode22,
    encodingLength: length5
  };
  var _brrp_varint5 = varint11;
  var varint_default5 = _brrp_varint5;

  // node_modules/@ceramicnetwork/stream-tile/node_modules/@ceramicnetwork/streamid/node_modules/multiformats/src/varint.js
  var decode23 = (data, offset = 0) => {
    const code8 = varint_default5.decode(data, offset);
    return [code8, varint_default5.decode.bytes];
  };
  var encodeTo5 = (int, target, offset = 0) => {
    varint_default5.encode(int, target, offset);
    return target;
  };
  var encodingLength5 = (int) => {
    return varint_default5.encodingLength(int);
  };

  // node_modules/@ceramicnetwork/stream-tile/node_modules/@ceramicnetwork/streamid/node_modules/multiformats/src/bytes.js
  var empty5 = new Uint8Array(0);
  var equals10 = (aa, bb) => {
    if (aa === bb)
      return true;
    if (aa.byteLength !== bb.byteLength) {
      return false;
    }
    for (let ii = 0; ii < aa.byteLength; ii++) {
      if (aa[ii] !== bb[ii]) {
        return false;
      }
    }
    return true;
  };
  var coerce5 = (o) => {
    if (o instanceof Uint8Array && o.constructor.name === "Uint8Array")
      return o;
    if (o instanceof ArrayBuffer)
      return new Uint8Array(o);
    if (ArrayBuffer.isView(o)) {
      return new Uint8Array(o.buffer, o.byteOffset, o.byteLength);
    }
    throw new Error("Unknown type, must be binary type");
  };

  // node_modules/@ceramicnetwork/stream-tile/node_modules/@ceramicnetwork/streamid/node_modules/multiformats/src/hashes/digest.js
  var create5 = (code8, digest2) => {
    const size = digest2.byteLength;
    const sizeOffset = encodingLength5(code8);
    const digestOffset = sizeOffset + encodingLength5(size);
    const bytes = new Uint8Array(digestOffset + size);
    encodeTo5(code8, bytes, 0);
    encodeTo5(size, bytes, sizeOffset);
    bytes.set(digest2, digestOffset);
    return new Digest5(code8, size, digest2, bytes);
  };
  var decode24 = (multihash) => {
    const bytes = coerce5(multihash);
    const [code8, sizeOffset] = decode23(bytes);
    const [size, digestOffset] = decode23(bytes.subarray(sizeOffset));
    const digest2 = bytes.subarray(sizeOffset + digestOffset);
    if (digest2.byteLength !== size) {
      throw new Error("Incorrect length");
    }
    return new Digest5(code8, size, digest2, bytes);
  };
  var equals11 = (a, b) => {
    if (a === b) {
      return true;
    } else {
      const data = (
        /** @type {{code?:unknown, size?:unknown, bytes?:unknown}} */
        b
      );
      return a.code === data.code && a.size === data.size && data.bytes instanceof Uint8Array && equals10(a.bytes, data.bytes);
    }
  };
  var Digest5 = class {
    /**
     * Creates a multihash digest.
     *
     * @param {Code} code
     * @param {Size} size
     * @param {Uint8Array} digest
     * @param {Uint8Array} bytes
     */
    constructor(code8, size, digest2, bytes) {
      this.code = code8;
      this.size = size;
      this.digest = digest2;
      this.bytes = bytes;
    }
  };

  // node_modules/@ceramicnetwork/stream-tile/node_modules/@ceramicnetwork/streamid/node_modules/multiformats/vendor/base-x.js
  function base6(ALPHABET, name8) {
    if (ALPHABET.length >= 255) {
      throw new TypeError("Alphabet too long");
    }
    var BASE_MAP = new Uint8Array(256);
    for (var j = 0; j < BASE_MAP.length; j++) {
      BASE_MAP[j] = 255;
    }
    for (var i = 0; i < ALPHABET.length; i++) {
      var x = ALPHABET.charAt(i);
      var xc = x.charCodeAt(0);
      if (BASE_MAP[xc] !== 255) {
        throw new TypeError(x + " is ambiguous");
      }
      BASE_MAP[xc] = i;
    }
    var BASE = ALPHABET.length;
    var LEADER = ALPHABET.charAt(0);
    var FACTOR = Math.log(BASE) / Math.log(256);
    var iFACTOR = Math.log(256) / Math.log(BASE);
    function encode31(source) {
      if (source instanceof Uint8Array)
        ;
      else if (ArrayBuffer.isView(source)) {
        source = new Uint8Array(source.buffer, source.byteOffset, source.byteLength);
      } else if (Array.isArray(source)) {
        source = Uint8Array.from(source);
      }
      if (!(source instanceof Uint8Array)) {
        throw new TypeError("Expected Uint8Array");
      }
      if (source.length === 0) {
        return "";
      }
      var zeroes = 0;
      var length10 = 0;
      var pbegin = 0;
      var pend = source.length;
      while (pbegin !== pend && source[pbegin] === 0) {
        pbegin++;
        zeroes++;
      }
      var size = (pend - pbegin) * iFACTOR + 1 >>> 0;
      var b58 = new Uint8Array(size);
      while (pbegin !== pend) {
        var carry = source[pbegin];
        var i2 = 0;
        for (var it1 = size - 1; (carry !== 0 || i2 < length10) && it1 !== -1; it1--, i2++) {
          carry += 256 * b58[it1] >>> 0;
          b58[it1] = carry % BASE >>> 0;
          carry = carry / BASE >>> 0;
        }
        if (carry !== 0) {
          throw new Error("Non-zero carry");
        }
        length10 = i2;
        pbegin++;
      }
      var it2 = size - length10;
      while (it2 !== size && b58[it2] === 0) {
        it2++;
      }
      var str = LEADER.repeat(zeroes);
      for (; it2 < size; ++it2) {
        str += ALPHABET.charAt(b58[it2]);
      }
      return str;
    }
    function decodeUnsafe(source) {
      if (typeof source !== "string") {
        throw new TypeError("Expected String");
      }
      if (source.length === 0) {
        return new Uint8Array();
      }
      var psz = 0;
      if (source[psz] === " ") {
        return;
      }
      var zeroes = 0;
      var length10 = 0;
      while (source[psz] === LEADER) {
        zeroes++;
        psz++;
      }
      var size = (source.length - psz) * FACTOR + 1 >>> 0;
      var b256 = new Uint8Array(size);
      while (source[psz]) {
        var carry = BASE_MAP[source.charCodeAt(psz)];
        if (carry === 255) {
          return;
        }
        var i2 = 0;
        for (var it3 = size - 1; (carry !== 0 || i2 < length10) && it3 !== -1; it3--, i2++) {
          carry += BASE * b256[it3] >>> 0;
          b256[it3] = carry % 256 >>> 0;
          carry = carry / 256 >>> 0;
        }
        if (carry !== 0) {
          throw new Error("Non-zero carry");
        }
        length10 = i2;
        psz++;
      }
      if (source[psz] === " ") {
        return;
      }
      var it4 = size - length10;
      while (it4 !== size && b256[it4] === 0) {
        it4++;
      }
      var vch = new Uint8Array(zeroes + (size - it4));
      var j2 = zeroes;
      while (it4 !== size) {
        vch[j2++] = b256[it4++];
      }
      return vch;
    }
    function decode45(string2) {
      var buffer2 = decodeUnsafe(string2);
      if (buffer2) {
        return buffer2;
      }
      throw new Error(`Non-${name8} character`);
    }
    return {
      encode: encode31,
      decodeUnsafe,
      decode: decode45
    };
  }
  var src5 = base6;
  var _brrp__multiformats_scope_baseX5 = src5;
  var base_x_default5 = _brrp__multiformats_scope_baseX5;

  // node_modules/@ceramicnetwork/stream-tile/node_modules/@ceramicnetwork/streamid/node_modules/multiformats/src/bases/base.js
  var Encoder5 = class {
    /**
     * @param {Base} name
     * @param {Prefix} prefix
     * @param {(bytes:Uint8Array) => string} baseEncode
     */
    constructor(name8, prefix, baseEncode) {
      this.name = name8;
      this.prefix = prefix;
      this.baseEncode = baseEncode;
    }
    /**
     * @param {Uint8Array} bytes
     * @returns {API.Multibase<Prefix>}
     */
    encode(bytes) {
      if (bytes instanceof Uint8Array) {
        return `${this.prefix}${this.baseEncode(bytes)}`;
      } else {
        throw Error("Unknown type, must be binary type");
      }
    }
  };
  var Decoder5 = class {
    /**
     * @param {Base} name
     * @param {Prefix} prefix
     * @param {(text:string) => Uint8Array} baseDecode
     */
    constructor(name8, prefix, baseDecode) {
      this.name = name8;
      this.prefix = prefix;
      if (prefix.codePointAt(0) === void 0) {
        throw new Error("Invalid prefix character");
      }
      this.prefixCodePoint = /** @type {number} */
      prefix.codePointAt(0);
      this.baseDecode = baseDecode;
    }
    /**
     * @param {string} text
     */
    decode(text) {
      if (typeof text === "string") {
        if (text.codePointAt(0) !== this.prefixCodePoint) {
          throw Error(`Unable to decode multibase string ${JSON.stringify(text)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
        }
        return this.baseDecode(text.slice(this.prefix.length));
      } else {
        throw Error("Can only multibase decode strings");
      }
    }
    /**
     * @template {string} OtherPrefix
     * @param {API.UnibaseDecoder<OtherPrefix>|ComposedDecoder<OtherPrefix>} decoder
     * @returns {ComposedDecoder<Prefix|OtherPrefix>}
     */
    or(decoder) {
      return or5(this, decoder);
    }
  };
  var ComposedDecoder5 = class {
    /**
     * @param {Decoders<Prefix>} decoders
     */
    constructor(decoders) {
      this.decoders = decoders;
    }
    /**
     * @template {string} OtherPrefix
     * @param {API.UnibaseDecoder<OtherPrefix>|ComposedDecoder<OtherPrefix>} decoder
     * @returns {ComposedDecoder<Prefix|OtherPrefix>}
     */
    or(decoder) {
      return or5(this, decoder);
    }
    /**
     * @param {string} input
     * @returns {Uint8Array}
     */
    decode(input) {
      const prefix = (
        /** @type {Prefix} */
        input[0]
      );
      const decoder = this.decoders[prefix];
      if (decoder) {
        return decoder.decode(input);
      } else {
        throw RangeError(`Unable to decode multibase string ${JSON.stringify(input)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
      }
    }
  };
  var or5 = (left, right) => new ComposedDecoder5(
    /** @type {Decoders<L|R>} */
    {
      ...left.decoders || { [
        /** @type API.UnibaseDecoder<L> */
        left.prefix
      ]: left },
      ...right.decoders || { [
        /** @type API.UnibaseDecoder<R> */
        right.prefix
      ]: right }
    }
  );
  var Codec5 = class {
    /**
     * @param {Base} name
     * @param {Prefix} prefix
     * @param {(bytes:Uint8Array) => string} baseEncode
     * @param {(text:string) => Uint8Array} baseDecode
     */
    constructor(name8, prefix, baseEncode, baseDecode) {
      this.name = name8;
      this.prefix = prefix;
      this.baseEncode = baseEncode;
      this.baseDecode = baseDecode;
      this.encoder = new Encoder5(name8, prefix, baseEncode);
      this.decoder = new Decoder5(name8, prefix, baseDecode);
    }
    /**
     * @param {Uint8Array} input
     */
    encode(input) {
      return this.encoder.encode(input);
    }
    /**
     * @param {string} input
     */
    decode(input) {
      return this.decoder.decode(input);
    }
  };
  var from7 = ({ name: name8, prefix, encode: encode31, decode: decode45 }) => new Codec5(name8, prefix, encode31, decode45);
  var baseX5 = ({ prefix, name: name8, alphabet: alphabet2 }) => {
    const { encode: encode31, decode: decode45 } = base_x_default5(alphabet2, name8);
    return from7({
      prefix,
      name: name8,
      encode: encode31,
      /**
       * @param {string} text
       */
      decode: (text) => coerce5(decode45(text))
    });
  };
  var decode25 = (string2, alphabet2, bitsPerChar, name8) => {
    const codes = {};
    for (let i = 0; i < alphabet2.length; ++i) {
      codes[alphabet2[i]] = i;
    }
    let end = string2.length;
    while (string2[end - 1] === "=") {
      --end;
    }
    const out = new Uint8Array(end * bitsPerChar / 8 | 0);
    let bits = 0;
    let buffer2 = 0;
    let written = 0;
    for (let i = 0; i < end; ++i) {
      const value = codes[string2[i]];
      if (value === void 0) {
        throw new SyntaxError(`Non-${name8} character`);
      }
      buffer2 = buffer2 << bitsPerChar | value;
      bits += bitsPerChar;
      if (bits >= 8) {
        bits -= 8;
        out[written++] = 255 & buffer2 >> bits;
      }
    }
    if (bits >= bitsPerChar || 255 & buffer2 << 8 - bits) {
      throw new SyntaxError("Unexpected end of data");
    }
    return out;
  };
  var encode17 = (data, alphabet2, bitsPerChar) => {
    const pad = alphabet2[alphabet2.length - 1] === "=";
    const mask = (1 << bitsPerChar) - 1;
    let out = "";
    let bits = 0;
    let buffer2 = 0;
    for (let i = 0; i < data.length; ++i) {
      buffer2 = buffer2 << 8 | data[i];
      bits += 8;
      while (bits > bitsPerChar) {
        bits -= bitsPerChar;
        out += alphabet2[mask & buffer2 >> bits];
      }
    }
    if (bits) {
      out += alphabet2[mask & buffer2 << bitsPerChar - bits];
    }
    if (pad) {
      while (out.length * bitsPerChar & 7) {
        out += "=";
      }
    }
    return out;
  };
  var rfc46485 = ({ name: name8, prefix, bitsPerChar, alphabet: alphabet2 }) => {
    return from7({
      prefix,
      name: name8,
      encode(input) {
        return encode17(input, alphabet2, bitsPerChar);
      },
      decode(input) {
        return decode25(input, alphabet2, bitsPerChar, name8);
      }
    });
  };

  // node_modules/@ceramicnetwork/stream-tile/node_modules/@ceramicnetwork/streamid/node_modules/multiformats/src/bases/base58.js
  var base58btc5 = baseX5({
    name: "base58btc",
    prefix: "z",
    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
  });
  var base58flickr5 = baseX5({
    name: "base58flickr",
    prefix: "Z",
    alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
  });

  // node_modules/@ceramicnetwork/stream-tile/node_modules/@ceramicnetwork/streamid/node_modules/multiformats/src/bases/base32.js
  var base325 = rfc46485({
    prefix: "b",
    name: "base32",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
    bitsPerChar: 5
  });
  var base32upper5 = rfc46485({
    prefix: "B",
    name: "base32upper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
    bitsPerChar: 5
  });
  var base32pad5 = rfc46485({
    prefix: "c",
    name: "base32pad",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
    bitsPerChar: 5
  });
  var base32padupper5 = rfc46485({
    prefix: "C",
    name: "base32padupper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
    bitsPerChar: 5
  });
  var base32hex5 = rfc46485({
    prefix: "v",
    name: "base32hex",
    alphabet: "0123456789abcdefghijklmnopqrstuv",
    bitsPerChar: 5
  });
  var base32hexupper5 = rfc46485({
    prefix: "V",
    name: "base32hexupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
    bitsPerChar: 5
  });
  var base32hexpad5 = rfc46485({
    prefix: "t",
    name: "base32hexpad",
    alphabet: "0123456789abcdefghijklmnopqrstuv=",
    bitsPerChar: 5
  });
  var base32hexpadupper5 = rfc46485({
    prefix: "T",
    name: "base32hexpadupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
    bitsPerChar: 5
  });
  var base32z5 = rfc46485({
    prefix: "h",
    name: "base32z",
    alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
    bitsPerChar: 5
  });

  // node_modules/@ceramicnetwork/stream-tile/node_modules/@ceramicnetwork/streamid/node_modules/multiformats/src/cid.js
  var format2 = (link, base13) => {
    const { bytes, version: version7 } = link;
    switch (version7) {
      case 0:
        return toStringV05(
          bytes,
          baseCache2(link),
          /** @type {API.MultibaseEncoder<"z">} */
          base13 || base58btc5.encoder
        );
      default:
        return toStringV15(
          bytes,
          baseCache2(link),
          /** @type {API.MultibaseEncoder<Prefix>} */
          base13 || base325.encoder
        );
    }
  };
  var cache2 = /* @__PURE__ */ new WeakMap();
  var baseCache2 = (cid) => {
    const baseCache4 = cache2.get(cid);
    if (baseCache4 == null) {
      const baseCache5 = /* @__PURE__ */ new Map();
      cache2.set(cid, baseCache5);
      return baseCache5;
    }
    return baseCache4;
  };
  var CID5 = class _CID {
    /**
     * @param {Version} version - Version of the CID
     * @param {Format} code - Code of the codec content is encoded in, see https://github.com/multiformats/multicodec/blob/master/table.csv
     * @param {API.MultihashDigest<Alg>} multihash - (Multi)hash of the of the content.
     * @param {Uint8Array} bytes
     *
     */
    constructor(version7, code8, multihash, bytes) {
      this.code = code8;
      this.version = version7;
      this.multihash = multihash;
      this.bytes = bytes;
      this["/"] = bytes;
    }
    /**
     * Signalling `cid.asCID === cid` has been replaced with `cid['/'] === cid.bytes`
     * please either use `CID.asCID(cid)` or switch to new signalling mechanism
     *
     * @deprecated
     */
    get asCID() {
      return this;
    }
    // ArrayBufferView
    get byteOffset() {
      return this.bytes.byteOffset;
    }
    // ArrayBufferView
    get byteLength() {
      return this.bytes.byteLength;
    }
    /**
     * @returns {CID<Data, API.DAG_PB, API.SHA_256, 0>}
     */
    toV0() {
      switch (this.version) {
        case 0: {
          return (
            /** @type {CID<Data, API.DAG_PB, API.SHA_256, 0>} */
            this
          );
        }
        case 1: {
          const { code: code8, multihash } = this;
          if (code8 !== DAG_PB_CODE5) {
            throw new Error("Cannot convert a non dag-pb CID to CIDv0");
          }
          if (multihash.code !== SHA_256_CODE5) {
            throw new Error("Cannot convert non sha2-256 multihash CID to CIDv0");
          }
          return (
            /** @type {CID<Data, API.DAG_PB, API.SHA_256, 0>} */
            _CID.createV0(
              /** @type {API.MultihashDigest<API.SHA_256>} */
              multihash
            )
          );
        }
        default: {
          throw Error(
            `Can not convert CID version ${this.version} to version 0. This is a bug please report`
          );
        }
      }
    }
    /**
     * @returns {CID<Data, Format, Alg, 1>}
     */
    toV1() {
      switch (this.version) {
        case 0: {
          const { code: code8, digest: digest2 } = this.multihash;
          const multihash = create5(code8, digest2);
          return (
            /** @type {CID<Data, Format, Alg, 1>} */
            _CID.createV1(this.code, multihash)
          );
        }
        case 1: {
          return (
            /** @type {CID<Data, Format, Alg, 1>} */
            this
          );
        }
        default: {
          throw Error(
            `Can not convert CID version ${this.version} to version 1. This is a bug please report`
          );
        }
      }
    }
    /**
     * @param {unknown} other
     * @returns {other is CID<Data, Format, Alg, Version>}
     */
    equals(other) {
      return _CID.equals(this, other);
    }
    /**
     * @template {unknown} Data
     * @template {number} Format
     * @template {number} Alg
     * @template {API.Version} Version
     * @param {API.Link<Data, Format, Alg, Version>} self
     * @param {unknown} other
     * @returns {other is CID}
     */
    static equals(self2, other) {
      const unknown = (
        /** @type {{code?:unknown, version?:unknown, multihash?:unknown}} */
        other
      );
      return unknown && self2.code === unknown.code && self2.version === unknown.version && equals11(self2.multihash, unknown.multihash);
    }
    /**
     * @param {API.MultibaseEncoder<string>} [base]
     * @returns {string}
     */
    toString(base13) {
      return format2(this, base13);
    }
    toJSON() {
      return { "/": format2(this) };
    }
    link() {
      return this;
    }
    get [Symbol.toStringTag]() {
      return "CID";
    }
    // Legacy
    [Symbol.for("nodejs.util.inspect.custom")]() {
      return `CID(${this.toString()})`;
    }
    /**
     * Takes any input `value` and returns a `CID` instance if it was
     * a `CID` otherwise returns `null`. If `value` is instanceof `CID`
     * it will return value back. If `value` is not instance of this CID
     * class, but is compatible CID it will return new instance of this
     * `CID` class. Otherwise returns null.
     *
     * This allows two different incompatible versions of CID library to
     * co-exist and interop as long as binary interface is compatible.
     *
     * @template {unknown} Data
     * @template {number} Format
     * @template {number} Alg
     * @template {API.Version} Version
     * @template {unknown} U
     * @param {API.Link<Data, Format, Alg, Version>|U} input
     * @returns {CID<Data, Format, Alg, Version>|null}
     */
    static asCID(input) {
      if (input == null) {
        return null;
      }
      const value = (
        /** @type {any} */
        input
      );
      if (value instanceof _CID) {
        return value;
      } else if (value["/"] != null && value["/"] === value.bytes || value.asCID === value) {
        const { version: version7, code: code8, multihash, bytes } = value;
        return new _CID(
          version7,
          code8,
          /** @type {API.MultihashDigest<Alg>} */
          multihash,
          bytes || encodeCID5(version7, code8, multihash.bytes)
        );
      } else if (value[cidSymbol5] === true) {
        const { version: version7, multihash, code: code8 } = value;
        const digest2 = (
          /** @type {API.MultihashDigest<Alg>} */
          decode24(multihash)
        );
        return _CID.create(version7, code8, digest2);
      } else {
        return null;
      }
    }
    /**
     *
     * @template {unknown} Data
     * @template {number} Format
     * @template {number} Alg
     * @template {API.Version} Version
     * @param {Version} version - Version of the CID
     * @param {Format} code - Code of the codec content is encoded in, see https://github.com/multiformats/multicodec/blob/master/table.csv
     * @param {API.MultihashDigest<Alg>} digest - (Multi)hash of the of the content.
     * @returns {CID<Data, Format, Alg, Version>}
     */
    static create(version7, code8, digest2) {
      if (typeof code8 !== "number") {
        throw new Error("String codecs are no longer supported");
      }
      if (!(digest2.bytes instanceof Uint8Array)) {
        throw new Error("Invalid digest");
      }
      switch (version7) {
        case 0: {
          if (code8 !== DAG_PB_CODE5) {
            throw new Error(
              `Version 0 CID must use dag-pb (code: ${DAG_PB_CODE5}) block encoding`
            );
          } else {
            return new _CID(version7, code8, digest2, digest2.bytes);
          }
        }
        case 1: {
          const bytes = encodeCID5(version7, code8, digest2.bytes);
          return new _CID(version7, code8, digest2, bytes);
        }
        default: {
          throw new Error("Invalid version");
        }
      }
    }
    /**
     * Simplified version of `create` for CIDv0.
     *
     * @template {unknown} [T=unknown]
     * @param {API.MultihashDigest<typeof SHA_256_CODE>} digest - Multihash.
     * @returns {CID<T, typeof DAG_PB_CODE, typeof SHA_256_CODE, 0>}
     */
    static createV0(digest2) {
      return _CID.create(0, DAG_PB_CODE5, digest2);
    }
    /**
     * Simplified version of `create` for CIDv1.
     *
     * @template {unknown} Data
     * @template {number} Code
     * @template {number} Alg
     * @param {Code} code - Content encoding format code.
     * @param {API.MultihashDigest<Alg>} digest - Miltihash of the content.
     * @returns {CID<Data, Code, Alg, 1>}
     */
    static createV1(code8, digest2) {
      return _CID.create(1, code8, digest2);
    }
    /**
     * Decoded a CID from its binary representation. The byte array must contain
     * only the CID with no additional bytes.
     *
     * An error will be thrown if the bytes provided do not contain a valid
     * binary representation of a CID.
     *
     * @template {unknown} Data
     * @template {number} Code
     * @template {number} Alg
     * @template {API.Version} Ver
     * @param {API.ByteView<API.Link<Data, Code, Alg, Ver>>} bytes
     * @returns {CID<Data, Code, Alg, Ver>}
     */
    static decode(bytes) {
      const [cid, remainder] = _CID.decodeFirst(bytes);
      if (remainder.length) {
        throw new Error("Incorrect length");
      }
      return cid;
    }
    /**
     * Decoded a CID from its binary representation at the beginning of a byte
     * array.
     *
     * Returns an array with the first element containing the CID and the second
     * element containing the remainder of the original byte array. The remainder
     * will be a zero-length byte array if the provided bytes only contained a
     * binary CID representation.
     *
     * @template {unknown} T
     * @template {number} C
     * @template {number} A
     * @template {API.Version} V
     * @param {API.ByteView<API.Link<T, C, A, V>>} bytes
     * @returns {[CID<T, C, A, V>, Uint8Array]}
     */
    static decodeFirst(bytes) {
      const specs = _CID.inspectBytes(bytes);
      const prefixSize = specs.size - specs.multihashSize;
      const multihashBytes = coerce5(
        bytes.subarray(prefixSize, prefixSize + specs.multihashSize)
      );
      if (multihashBytes.byteLength !== specs.multihashSize) {
        throw new Error("Incorrect length");
      }
      const digestBytes = multihashBytes.subarray(
        specs.multihashSize - specs.digestSize
      );
      const digest2 = new Digest5(
        specs.multihashCode,
        specs.digestSize,
        digestBytes,
        multihashBytes
      );
      const cid = specs.version === 0 ? _CID.createV0(
        /** @type {API.MultihashDigest<API.SHA_256>} */
        digest2
      ) : _CID.createV1(specs.codec, digest2);
      return [
        /** @type {CID<T, C, A, V>} */
        cid,
        bytes.subarray(specs.size)
      ];
    }
    /**
     * Inspect the initial bytes of a CID to determine its properties.
     *
     * Involves decoding up to 4 varints. Typically this will require only 4 to 6
     * bytes but for larger multicodec code values and larger multihash digest
     * lengths these varints can be quite large. It is recommended that at least
     * 10 bytes be made available in the `initialBytes` argument for a complete
     * inspection.
     *
     * @template {unknown} T
     * @template {number} C
     * @template {number} A
     * @template {API.Version} V
     * @param {API.ByteView<API.Link<T, C, A, V>>} initialBytes
     * @returns {{ version:V, codec:C, multihashCode:A, digestSize:number, multihashSize:number, size:number }}
     */
    static inspectBytes(initialBytes) {
      let offset = 0;
      const next = () => {
        const [i, length10] = decode23(initialBytes.subarray(offset));
        offset += length10;
        return i;
      };
      let version7 = (
        /** @type {V} */
        next()
      );
      let codec = (
        /** @type {C} */
        DAG_PB_CODE5
      );
      if (
        /** @type {number} */
        version7 === 18
      ) {
        version7 = /** @type {V} */
        0;
        offset = 0;
      } else {
        codec = /** @type {C} */
        next();
      }
      if (version7 !== 0 && version7 !== 1) {
        throw new RangeError(`Invalid CID version ${version7}`);
      }
      const prefixSize = offset;
      const multihashCode = (
        /** @type {A} */
        next()
      );
      const digestSize = next();
      const size = offset + digestSize;
      const multihashSize = size - prefixSize;
      return { version: version7, codec, multihashCode, digestSize, multihashSize, size };
    }
    /**
     * Takes cid in a string representation and creates an instance. If `base`
     * decoder is not provided will use a default from the configuration. It will
     * throw an error if encoding of the CID is not compatible with supplied (or
     * a default decoder).
     *
     * @template {string} Prefix
     * @template {unknown} Data
     * @template {number} Code
     * @template {number} Alg
     * @template {API.Version} Ver
     * @param {API.ToString<API.Link<Data, Code, Alg, Ver>, Prefix>} source
     * @param {API.MultibaseDecoder<Prefix>} [base]
     * @returns {CID<Data, Code, Alg, Ver>}
     */
    static parse(source, base13) {
      const [prefix, bytes] = parseCIDtoBytes5(source, base13);
      const cid = _CID.decode(bytes);
      if (cid.version === 0 && source[0] !== "Q") {
        throw Error("Version 0 CID string must not include multibase prefix");
      }
      baseCache2(cid).set(prefix, source);
      return cid;
    }
  };
  var parseCIDtoBytes5 = (source, base13) => {
    switch (source[0]) {
      case "Q": {
        const decoder = base13 || base58btc5;
        return [
          /** @type {Prefix} */
          base58btc5.prefix,
          decoder.decode(`${base58btc5.prefix}${source}`)
        ];
      }
      case base58btc5.prefix: {
        const decoder = base13 || base58btc5;
        return [
          /** @type {Prefix} */
          base58btc5.prefix,
          decoder.decode(source)
        ];
      }
      case base325.prefix: {
        const decoder = base13 || base325;
        return [
          /** @type {Prefix} */
          base325.prefix,
          decoder.decode(source)
        ];
      }
      default: {
        if (base13 == null) {
          throw Error(
            "To parse non base32 or base58btc encoded CID multibase decoder must be provided"
          );
        }
        return [
          /** @type {Prefix} */
          source[0],
          base13.decode(source)
        ];
      }
    }
  };
  var toStringV05 = (bytes, cache4, base13) => {
    const { prefix } = base13;
    if (prefix !== base58btc5.prefix) {
      throw Error(`Cannot string encode V0 in ${base13.name} encoding`);
    }
    const cid = cache4.get(prefix);
    if (cid == null) {
      const cid2 = base13.encode(bytes).slice(1);
      cache4.set(prefix, cid2);
      return cid2;
    } else {
      return cid;
    }
  };
  var toStringV15 = (bytes, cache4, base13) => {
    const { prefix } = base13;
    const cid = cache4.get(prefix);
    if (cid == null) {
      const cid2 = base13.encode(bytes);
      cache4.set(prefix, cid2);
      return cid2;
    } else {
      return cid;
    }
  };
  var DAG_PB_CODE5 = 112;
  var SHA_256_CODE5 = 18;
  var encodeCID5 = (version7, code8, multihash) => {
    const codeOffset = encodingLength5(version7);
    const hashOffset = codeOffset + encodingLength5(code8);
    const bytes = new Uint8Array(hashOffset + multihash.byteLength);
    encodeTo5(version7, bytes, 0);
    encodeTo5(code8, bytes, codeOffset);
    bytes.set(multihash, hashOffset);
    return bytes;
  };
  var cidSymbol5 = Symbol.for("@ipld/js-cid/CID");

  // node_modules/@ceramicnetwork/stream-tile/node_modules/@ceramicnetwork/streamid/node_modules/multiformats/src/bases/base36.js
  var base362 = baseX5({
    prefix: "k",
    name: "base36",
    alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
  });
  var base36upper2 = baseX5({
    prefix: "K",
    name: "base36upper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  });

  // node_modules/@ceramicnetwork/stream-tile/node_modules/@ceramicnetwork/streamid/lib/stream-type.js
  var registry3 = {
    tile: 0,
    "caip10-link": 1,
    model: 2,
    MID: 3,
    UNLOADABLE: 4
  };
  function codeByName3(name8) {
    const index = registry3[name8];
    if (typeof index !== "undefined") {
      return index;
    } else {
      throw new Error(`No stream type registered for name ${name8}`);
    }
  }
  function nameByCode3(index) {
    const pair = Object.entries(registry3).find(([, v]) => v === index);
    if (pair) {
      return pair[0];
    } else {
      throw new Error(`No stream type registered for index ${index}`);
    }
  }
  var StreamType3 = class {
  };
  StreamType3.nameByCode = nameByCode3;
  StreamType3.codeByName = codeByName3;

  // node_modules/@ceramicnetwork/stream-tile/node_modules/@ceramicnetwork/streamid/lib/commit-id.js
  var import_varint14 = __toESM(require_varint(), 1);

  // node_modules/@ceramicnetwork/stream-tile/node_modules/@ceramicnetwork/streamid/lib/constants.js
  var STREAMID_CODEC3 = 206;

  // node_modules/@ceramicnetwork/stream-tile/node_modules/@ceramicnetwork/streamid/node_modules/multiformats/src/hashes/hasher.js
  var from8 = ({ name: name8, code: code8, encode: encode31 }) => new Hasher2(name8, code8, encode31);
  var Hasher2 = class {
    /**
     *
     * @param {Name} name
     * @param {Code} code
     * @param {(input: Uint8Array) => Await<Uint8Array>} encode
     */
    constructor(name8, code8, encode31) {
      this.name = name8;
      this.code = code8;
      this.encode = encode31;
    }
    /**
     * @param {Uint8Array} input
     * @returns {Await<Digest.Digest<Code, number>>}
     */
    digest(input) {
      if (input instanceof Uint8Array) {
        const result = this.encode(input);
        return result instanceof Uint8Array ? create5(this.code, result) : result.then((digest2) => create5(this.code, digest2));
      } else {
        throw Error("Unknown type, must be binary type");
      }
    }
  };

  // node_modules/@ceramicnetwork/stream-tile/node_modules/@ceramicnetwork/streamid/node_modules/multiformats/src/block.js
  function readonly5({ enumerable = true, configurable = false } = {}) {
    return { enumerable, configurable, writable: false };
  }
  function* linksWithin2(path, value) {
    if (value != null && typeof value === "object") {
      if (Array.isArray(value)) {
        for (const [index, element] of value.entries()) {
          const elementPath = [...path, index];
          const cid = CID5.asCID(element);
          if (cid) {
            yield [elementPath.join("/"), cid];
          } else if (typeof element === "object") {
            yield* links2(element, elementPath);
          }
        }
      } else {
        const cid = CID5.asCID(value);
        if (cid) {
          yield [path.join("/"), cid];
        } else {
          yield* links2(value, path);
        }
      }
    }
  }
  function* links2(source, base13) {
    if (source == null || source instanceof Uint8Array) {
      return;
    }
    const cid = CID5.asCID(source);
    if (cid) {
      yield [base13.join("/"), cid];
    }
    for (const [key, value] of Object.entries(source)) {
      const path = (
        /** @type {[string|number, string]} */
        [...base13, key]
      );
      yield* linksWithin2(path, value);
    }
  }
  function* treeWithin2(path, value) {
    if (Array.isArray(value)) {
      for (const [index, element] of value.entries()) {
        const elementPath = [...path, index];
        yield elementPath.join("/");
        if (typeof element === "object" && !CID5.asCID(element)) {
          yield* tree2(element, elementPath);
        }
      }
    } else {
      yield* tree2(value, path);
    }
  }
  function* tree2(source, base13) {
    if (source == null || typeof source !== "object") {
      return;
    }
    for (const [key, value] of Object.entries(source)) {
      const path = (
        /** @type {[string|number, string]} */
        [...base13, key]
      );
      yield path.join("/");
      if (value != null && !(value instanceof Uint8Array) && typeof value === "object" && !CID5.asCID(value)) {
        yield* treeWithin2(path, value);
      }
    }
  }
  function get2(source, path) {
    let node = (
      /** @type {Record<string, any>} */
      source
    );
    for (const [index, key] of path.entries()) {
      node = node[key];
      if (node == null) {
        throw new Error(`Object has no property at ${path.slice(0, index + 1).map((part) => `[${JSON.stringify(part)}]`).join("")}`);
      }
      const cid = CID5.asCID(node);
      if (cid) {
        return { value: cid, remaining: path.slice(index + 1).join("/") };
      }
    }
    return { value: node };
  }
  var Block2 = class {
    /**
     * @param {object} options
     * @param {CID<T, C, A, V>} options.cid
     * @param {API.ByteView<T>} options.bytes
     * @param {T} options.value
     */
    constructor({ cid, bytes, value }) {
      if (!cid || !bytes || typeof value === "undefined") {
        throw new Error("Missing required argument");
      }
      this.cid = cid;
      this.bytes = bytes;
      this.value = value;
      this.asBlock = this;
      Object.defineProperties(this, {
        cid: readonly5(),
        bytes: readonly5(),
        value: readonly5(),
        asBlock: readonly5()
      });
    }
    links() {
      return links2(this.value, []);
    }
    tree() {
      return tree2(this.value, []);
    }
    /**
     *
     * @param {string} [path]
     * @returns {API.BlockCursorView<unknown>}
     */
    get(path = "/") {
      return get2(this.value, path.split("/").filter(Boolean));
    }
  };
  async function encode18({ value, codec, hasher }) {
    if (typeof value === "undefined")
      throw new Error('Missing required argument "value"');
    if (!codec || !hasher)
      throw new Error("Missing required argument: codec or hasher");
    const bytes = codec.encode(value);
    const hash = await hasher.digest(bytes);
    const cid = CID5.create(
      1,
      codec.code,
      hash
    );
    return new Block2({ value, bytes, cid });
  }

  // node_modules/@ceramicnetwork/stream-tile/node_modules/@ceramicnetwork/streamid/node_modules/multiformats/src/hashes/sha2-browser.js
  var sha2 = (name8) => (
    /**
     * @param {Uint8Array} data
     */
    async (data) => new Uint8Array(await crypto.subtle.digest(name8, data))
  );
  var sha2562 = from8({
    name: "sha2-256",
    code: 18,
    encode: sha2("SHA-256")
  });
  var sha5122 = from8({
    name: "sha2-512",
    code: 19,
    encode: sha2("SHA-512")
  });

  // node_modules/@ceramicnetwork/stream-tile/node_modules/@ceramicnetwork/streamid/lib/stream-id.js
  var import_varint13 = __toESM(require_varint(), 1);

  // node_modules/@ceramicnetwork/stream-tile/node_modules/@ceramicnetwork/streamid/lib/try-catch.util.js
  function tryCatch3(fn) {
    try {
      return fn();
    } catch (e) {
      return e;
    }
  }

  // node_modules/@ceramicnetwork/stream-tile/node_modules/@ceramicnetwork/streamid/lib/reading-bytes.js
  var import_varint12 = __toESM(require_varint(), 1);
  function readVarint3(bytes) {
    const value = import_varint12.default.decode(bytes);
    const readLength = import_varint12.default.decode.bytes;
    const remainder = bytes.subarray(readLength);
    return [value, remainder, readLength];
  }
  function isCidVersion3(input) {
    return input === 0 || input === 1;
  }
  function readCid3(bytes) {
    const [cidVersion, cidVersionRemainder] = readVarint3(bytes);
    if (!isCidVersion3(cidVersion)) {
      throw new Error(`Unknown CID version ${cidVersion}`);
    }
    const [codec, codecRemainder] = readVarint3(cidVersionRemainder);
    const [, mhCodecRemainder, mhCodecLength] = readVarint3(codecRemainder);
    const [mhLength, , mhLengthLength] = readVarint3(mhCodecRemainder);
    const multihashBytes = codecRemainder.subarray(0, mhCodecLength + mhLengthLength + mhLength);
    const multihashBytesRemainder = codecRemainder.subarray(mhCodecLength + mhLengthLength + mhLength);
    return [CID5.create(cidVersion, codec, decode24(multihashBytes)), multihashBytesRemainder];
  }

  // node_modules/@ceramicnetwork/stream-tile/node_modules/@ceramicnetwork/streamid/lib/stream-ref-parsing.js
  function fromBytes7(input, title = "StreamRef") {
    const [streamCodec, streamCodecRemainder] = readVarint3(input);
    if (streamCodec !== STREAMID_CODEC3)
      throw new Error(`Invalid ${title}, does not include streamid codec`);
    const [type, streamtypeRemainder] = readVarint3(streamCodecRemainder);
    const cidResult = readCid3(streamtypeRemainder);
    const [genesis, genesisRemainder] = cidResult;
    if (genesisRemainder.length === 0) {
      return {
        kind: "stream-id",
        type,
        genesis
      };
    } else if (genesisRemainder.length === 1 && genesisRemainder[0] === 0) {
      return {
        kind: "commit-id",
        type,
        genesis,
        commit: null
      };
    } else {
      const [commit] = readCid3(genesisRemainder);
      return {
        kind: "commit-id",
        type,
        genesis,
        commit
      };
    }
  }
  var URL_PATTERN3 = /(ceramic:\/\/|\/ceramic\/)?([a-zA-Z0-9]+)(\?commit=([a-zA-Z0-9]+))?/;
  function fromString10(input, title = "StreamRef") {
    const protocolMatch = URL_PATTERN3.exec(input) || [];
    const base13 = protocolMatch[2];
    if (!base13)
      throw new Error(`Malformed ${title} string: ${input}`);
    const bytes = base362.decode(base13);
    const streamRef = fromBytes7(bytes);
    const commit = protocolMatch[4];
    if (commit) {
      return {
        kind: "commit-id",
        type: streamRef.type,
        genesis: streamRef.genesis,
        commit: parseCommit3(streamRef.genesis, commit)
      };
    }
    return streamRef;
  }
  function parseCID3(input) {
    try {
      return typeof input === "string" ? CID5.parse(input) : CID5.asCID(input);
    } catch {
      return null;
    }
  }
  function parseCommit3(genesis, commit = null) {
    if (!commit)
      return null;
    if (commit === "0")
      return null;
    const commitCID = parseCID3(commit);
    if (commitCID) {
      if (genesis.equals(commitCID)) {
        return null;
      } else {
        return commitCID;
      }
    } else {
      throw new Error("Cannot specify commit as a number except to request commit 0 (the genesis commit)");
    }
  }

  // node_modules/@ceramicnetwork/stream-tile/node_modules/@ceramicnetwork/streamid/lib/stream-id.js
  var __decorate5 = function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata5 = function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var InvalidStreamIDBytesError3 = class extends Error {
    constructor(bytes) {
      super(`Invalid StreamID bytes ${base362.encode(bytes)}: contains commit`);
    }
  };
  var InvalidStreamIDStringError3 = class extends Error {
    constructor(input) {
      super(`Invalid StreamID string ${input}: contains commit`);
    }
  };
  function fromBytes8(bytes) {
    const parsed = fromBytes7(bytes, "StreamID");
    if (parsed.kind === "stream-id") {
      return new StreamID3(parsed.type, parsed.genesis);
    }
    throw new InvalidStreamIDBytesError3(bytes);
  }
  function fromBytesNoThrow5(bytes) {
    return tryCatch3(() => fromBytes8(bytes));
  }
  function fromString11(input) {
    const parsed = fromString10(input, "StreamID");
    if (parsed.kind === "stream-id") {
      return new StreamID3(parsed.type, parsed.genesis);
    }
    throw new InvalidStreamIDStringError3(input);
  }
  function fromStringNoThrow5(input) {
    return tryCatch3(() => fromString11(input));
  }
  var TAG5 = Symbol.for("@ceramicnetwork/streamid/StreamID");
  var StreamID3 = class _StreamID {
    constructor(type, cid) {
      this._tag = TAG5;
      if (!(type || type === 0))
        throw new Error("StreamID constructor: type required");
      if (!cid)
        throw new Error("StreamID constructor: cid required");
      this._type = typeof type === "string" ? StreamType3.codeByName(type) : type;
      this._cid = typeof cid === "string" ? CID5.parse(cid) : cid;
    }
    static isInstance(instance) {
      return typeof instance === "object" && "_tag" in instance && instance._tag === TAG5;
    }
    static async fromGenesis(type, genesis) {
      const block = await encode18({ value: genesis, codec: esm_exports3, hasher: sha2562 });
      return new _StreamID(type, block.cid);
    }
    get type() {
      return this._type;
    }
    get typeName() {
      return StreamType3.nameByCode(this._type);
    }
    get cid() {
      return this._cid;
    }
    get bytes() {
      const codec = import_varint13.default.encode(STREAMID_CODEC3);
      const type = import_varint13.default.encode(this.type);
      return concat([codec, type, this.cid.bytes]);
    }
    get baseID() {
      return new _StreamID(this._type, this._cid);
    }
    equals(other) {
      if (_StreamID.isInstance(other)) {
        return this.type === other.type && this.cid.equals(other.cid);
      } else {
        return false;
      }
    }
    toString() {
      return base362.encode(this.bytes);
    }
    toUrl() {
      return `ceramic://${this.toString()}`;
    }
    [Symbol.for("nodejs.util.inspect.custom")]() {
      return `StreamID(${this.toString()})`;
    }
    [Symbol.toPrimitive]() {
      return this.toString();
    }
  };
  StreamID3.fromBytes = fromBytes8;
  StreamID3.fromBytesNoThrow = fromBytesNoThrow5;
  StreamID3.fromString = fromString11;
  StreamID3.fromStringNoThrow = fromStringNoThrow5;
  __decorate5([
    Memoize(),
    __metadata5("design:type", String),
    __metadata5("design:paramtypes", [])
  ], StreamID3.prototype, "typeName", null);
  __decorate5([
    Memoize(),
    __metadata5("design:type", Uint8Array),
    __metadata5("design:paramtypes", [])
  ], StreamID3.prototype, "bytes", null);
  __decorate5([
    Memoize(),
    __metadata5("design:type", StreamID3),
    __metadata5("design:paramtypes", [])
  ], StreamID3.prototype, "baseID", null);
  __decorate5([
    Memoize(),
    __metadata5("design:type", Function),
    __metadata5("design:paramtypes", []),
    __metadata5("design:returntype", String)
  ], StreamID3.prototype, "toString", null);
  __decorate5([
    Memoize(),
    __metadata5("design:type", Function),
    __metadata5("design:paramtypes", []),
    __metadata5("design:returntype", String)
  ], StreamID3.prototype, "toUrl", null);

  // node_modules/@ceramicnetwork/stream-tile/node_modules/@ceramicnetwork/streamid/lib/commit-id.js
  var __decorate6 = function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata6 = function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var __classPrivateFieldSet3 = function(receiver, state, value, kind, f) {
    if (kind === "m")
      throw new TypeError("Private method is not writable");
    if (kind === "a" && !f)
      throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
      throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
  };
  var __classPrivateFieldGet3 = function(receiver, state, kind, f) {
    if (kind === "a" && !f)
      throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
      throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
  };
  var _CommitID_type3;
  var _CommitID_cid3;
  var _CommitID_commit3;
  var InvalidCommitIDBytesError3 = class extends Error {
    constructor(bytes) {
      super(`Error while parsing CommitID from bytes ${base362.encode(bytes)}: no commit information provided`);
    }
  };
  var InvalidCommitIDStringError3 = class extends Error {
    constructor(input) {
      super(`Error while parsing CommitID from string ${input}: no commit information provided`);
    }
  };
  function fromBytes9(bytes) {
    const parsed = fromBytes7(bytes, "CommitID");
    if (parsed.kind === "commit-id") {
      return new CommitID3(parsed.type, parsed.genesis, parsed.commit);
    }
    throw new InvalidCommitIDBytesError3(bytes);
  }
  function fromBytesNoThrow6(bytes) {
    return tryCatch3(() => fromBytes9(bytes));
  }
  function fromString12(input) {
    const parsed = fromString10(input, "CommitID");
    if (parsed.kind === "commit-id") {
      return new CommitID3(parsed.type, parsed.genesis, parsed.commit);
    }
    throw new InvalidCommitIDStringError3(input);
  }
  function fromStringNoThrow6(input) {
    return tryCatch3(() => fromString12(input));
  }
  var TAG6 = Symbol.for("@ceramicnetwork/streamid/CommitID");
  function make3(stream, commit) {
    return new CommitID3(stream.type, stream.cid, commit);
  }
  var CommitID3 = class {
    constructor(type, cid, commit = null) {
      this._tag = TAG6;
      _CommitID_type3.set(this, void 0);
      _CommitID_cid3.set(this, void 0);
      _CommitID_commit3.set(this, void 0);
      if (!type && type !== 0)
        throw new Error("constructor: type required");
      if (!cid)
        throw new Error("constructor: cid required");
      __classPrivateFieldSet3(this, _CommitID_type3, typeof type === "string" ? StreamType3.codeByName(type) : type, "f");
      __classPrivateFieldSet3(this, _CommitID_cid3, typeof cid === "string" ? CID5.parse(cid) : cid, "f");
      __classPrivateFieldSet3(this, _CommitID_commit3, parseCommit3(__classPrivateFieldGet3(this, _CommitID_cid3, "f"), commit), "f");
    }
    static isInstance(instance) {
      return typeof instance === "object" && "_tag" in instance && instance._tag === TAG6;
    }
    get baseID() {
      return new StreamID3(__classPrivateFieldGet3(this, _CommitID_type3, "f"), __classPrivateFieldGet3(this, _CommitID_cid3, "f"));
    }
    get type() {
      return __classPrivateFieldGet3(this, _CommitID_type3, "f");
    }
    get typeName() {
      return StreamType3.nameByCode(__classPrivateFieldGet3(this, _CommitID_type3, "f"));
    }
    get cid() {
      return __classPrivateFieldGet3(this, _CommitID_cid3, "f");
    }
    get commit() {
      return __classPrivateFieldGet3(this, _CommitID_commit3, "f") || __classPrivateFieldGet3(this, _CommitID_cid3, "f");
    }
    get bytes() {
      const codec = import_varint14.default.encode(STREAMID_CODEC3);
      const type = import_varint14.default.encode(this.type);
      const commitBytes = __classPrivateFieldGet3(this, _CommitID_commit3, "f")?.bytes || new Uint8Array([0]);
      return concat([codec, type, this.cid.bytes, commitBytes]);
    }
    equals(other) {
      return this.type === other.type && this.cid.equals(other.cid) && this.commit.equals(other.commit);
    }
    toString() {
      return base362.encode(this.bytes);
    }
    toUrl() {
      return `ceramic://${this.toString()}`;
    }
    [(_CommitID_type3 = /* @__PURE__ */ new WeakMap(), _CommitID_cid3 = /* @__PURE__ */ new WeakMap(), _CommitID_commit3 = /* @__PURE__ */ new WeakMap(), Symbol.for("nodejs.util.inspect.custom"))]() {
      return `CommitID(${this.toString()})`;
    }
    [Symbol.toPrimitive]() {
      return this.toString();
    }
  };
  CommitID3.fromBytes = fromBytes9;
  CommitID3.fromBytesNoThrow = fromBytesNoThrow6;
  CommitID3.fromString = fromString12;
  CommitID3.fromStringNoThrow = fromStringNoThrow6;
  CommitID3.make = make3;
  __decorate6([
    Memoize(),
    __metadata6("design:type", StreamID3),
    __metadata6("design:paramtypes", [])
  ], CommitID3.prototype, "baseID", null);
  __decorate6([
    Memoize(),
    __metadata6("design:type", String),
    __metadata6("design:paramtypes", [])
  ], CommitID3.prototype, "typeName", null);
  __decorate6([
    Memoize(),
    __metadata6("design:type", CID5),
    __metadata6("design:paramtypes", [])
  ], CommitID3.prototype, "commit", null);
  __decorate6([
    Memoize(),
    __metadata6("design:type", Uint8Array),
    __metadata6("design:paramtypes", [])
  ], CommitID3.prototype, "bytes", null);
  __decorate6([
    Memoize(),
    __metadata6("design:type", Function),
    __metadata6("design:paramtypes", []),
    __metadata6("design:returntype", String)
  ], CommitID3.prototype, "toString", null);
  __decorate6([
    Memoize(),
    __metadata6("design:type", Function),
    __metadata6("design:paramtypes", []),
    __metadata6("design:returntype", String)
  ], CommitID3.prototype, "toUrl", null);

  // node_modules/@ceramicnetwork/stream-tile/node_modules/@ceramicnetwork/streamid/lib/stream-ref.js
  var StreamRef2;
  (function(StreamRef6) {
    function fromBytes19(input) {
      const parsed = fromBytes7(input);
      switch (parsed.kind) {
        case "commit-id":
          return new CommitID3(parsed.type, parsed.genesis, parsed.commit);
        case "stream-id":
          return new StreamID3(parsed.type, parsed.genesis);
        default:
          throw new Error(`Malformed StreamRef bytes: ${base362.encode(input)}`);
      }
    }
    StreamRef6.fromBytes = fromBytes19;
    function fromString22(input) {
      const parsed = fromString10(input);
      switch (parsed.kind) {
        case "commit-id":
          return new CommitID3(parsed.type, parsed.genesis, parsed.commit);
        case "stream-id":
          return new StreamID3(parsed.type, parsed.genesis);
        default:
          throw new Error(`Malformed StreamRef string: ${input}`);
      }
    }
    StreamRef6.fromString = fromString22;
    function from14(input) {
      if (StreamID3.isInstance(input)) {
        return input;
      }
      if (CommitID3.isInstance(input)) {
        return input;
      }
      if (input instanceof Uint8Array) {
        return fromBytes19(input);
      }
      if (typeof input === "string") {
        return fromString22(input);
      }
      throw new Error(`Can not build CommitID or StreamID from ${JSON.stringify(input)}`);
    }
    StreamRef6.from = from14;
  })(StreamRef2 || (StreamRef2 = {}));

  // node_modules/@ceramicnetwork/stream-tile/lib/tile-document.js
  var __decorate7 = function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var TileDocument_1;
  var DEFAULT_CREATE_OPTS = {
    anchor: true,
    publish: true,
    sync: SyncOptions.PREFER_CACHE
  };
  var DEFAULT_LOAD_OPTS = { sync: SyncOptions.PREFER_CACHE };
  var DEFAULT_UPDATE_OPTS = { anchor: true, publish: true };
  function headerFromMetadata(metadata, genesis) {
    if (typeof metadata?.schema === "string") {
      try {
        CommitID3.fromString(metadata.schema);
      } catch {
        throw new Error("Schema must be a CommitID");
      }
    }
    const header = {
      controllers: metadata?.controllers,
      family: metadata?.family,
      schema: metadata?.schema?.toString(),
      tags: metadata?.tags
    };
    if (genesis) {
      if (!metadata?.deterministic) {
        header["unique"] = toString2((0, import_random.randomBytes)(12), "base64");
      }
      if (metadata?.forbidControllerChange) {
        header["forbidControllerChange"] = true;
      }
    } else {
      if (metadata?.deterministic !== void 0 || metadata?.unique !== void 0) {
        throw new Error("Cannot change 'deterministic' or 'unique' properties on existing Streams");
      }
      if (metadata?.forbidControllerChange !== void 0) {
        throw new Error("Cannot change 'forbidControllerChange' property on existing Streams");
      }
    }
    Object.keys(header).forEach((key) => header[key] === void 0 && delete header[key]);
    return header;
  }
  async function getAuthenticatedDID(signer) {
    if (!signer.did)
      throw new Error(`No DID provided`);
    if (!signer.did.authenticated) {
      await signer.did.authenticate();
      if (signer.loggerProvider) {
        signer.loggerProvider.getDiagnosticsLogger().imp(`Now authenticated as DID ${signer.did.id}`);
      }
    }
    return signer.did;
  }
  async function throwReadOnlyError() {
    throw new Error("Historical stream commits cannot be modified. Load the stream without specifying a commit to make updates.");
  }
  var TileDocument = TileDocument_1 = class TileDocument2 extends Stream {
    constructor() {
      super(...arguments);
      this._isReadOnly = false;
    }
    get content() {
      return super.content;
    }
    get metadata() {
      const { next, metadata } = this.state$.value;
      return (0, import_lodash3.default)(next?.metadata ?? metadata);
    }
    get controllers() {
      return this.metadata.controllers;
    }
    static async create(ceramic, content, metadata, opts = {}) {
      opts = { ...DEFAULT_CREATE_OPTS, ...opts };
      if (!metadata?.deterministic && opts.syncTimeoutSeconds == void 0) {
        opts.syncTimeoutSeconds = 0;
      }
      const signer = opts.asDID ? { did: opts.asDID } : ceramic;
      const commit = await TileDocument_1.makeGenesis(signer, content, metadata);
      return ceramic.createStreamFromGenesis(TileDocument_1.STREAM_TYPE_ID, commit, opts);
    }
    static async createFromGenesis(ceramic, genesisCommit, opts = {}) {
      opts = { ...DEFAULT_CREATE_OPTS, ...opts };
      if (genesisCommit.header?.unique && opts.syncTimeoutSeconds == void 0) {
        opts.syncTimeoutSeconds = 0;
      }
      const commit = genesisCommit.data ? await TileDocument_1._signDagJWS(ceramic, genesisCommit) : genesisCommit;
      return ceramic.createStreamFromGenesis(TileDocument_1.STREAM_TYPE_ID, commit, opts);
    }
    static async deterministic(ceramic, metadata, opts = {}) {
      opts = { ...DEFAULT_CREATE_OPTS, ...opts };
      metadata = { ...metadata, deterministic: true };
      if (metadata.family == null && metadata.tags == null) {
        throw new Error("Family and/or tags are required when creating a deterministic tile document");
      }
      const commit = await TileDocument_1.makeGenesis(ceramic, null, metadata);
      return ceramic.createStreamFromGenesis(TileDocument_1.STREAM_TYPE_ID, commit, opts);
    }
    static async load(ceramic, streamId, opts = {}) {
      opts = { ...DEFAULT_LOAD_OPTS, ...opts };
      const streamRef = StreamRef2.from(streamId);
      if (streamRef.type != TileDocument_1.STREAM_TYPE_ID) {
        throw new Error(`StreamID ${streamRef.toString()} does not refer to a '${TileDocument_1.STREAM_TYPE_NAME}' stream, but to a ${streamRef.typeName}`);
      }
      return ceramic.loadStream(streamRef, opts);
    }
    async update(content, metadata, opts = {}) {
      opts = { ...DEFAULT_UPDATE_OPTS, ...opts };
      const signer = opts.asDID ? { did: opts.asDID } : this.api;
      const updateCommit = await this.makeCommit(signer, content, metadata);
      const updated = await this.api.applyCommit(this.id, updateCommit, opts);
      this.state$.next(updated.state);
    }
    async patch(jsonPatch, opts = {}) {
      opts = { ...DEFAULT_UPDATE_OPTS, ...opts };
      const header = headerFromMetadata(this.metadata, false);
      const rawCommit = {
        header,
        data: jsonPatch,
        prev: this.tip,
        id: this.id.cid
      };
      const commit = await TileDocument_1._signDagJWS(this.api, rawCommit);
      const updated = await this.api.applyCommit(this.id, commit, opts);
      this.state$.next(updated.state);
    }
    makeReadOnly() {
      this.update = throwReadOnlyError;
      this.patch = throwReadOnlyError;
      this.sync = throwReadOnlyError;
      this._isReadOnly = true;
    }
    get isReadOnly() {
      return this._isReadOnly;
    }
    async makeCommit(signer, newContent, newMetadata) {
      const commit = await this._makeRawCommit(newContent, newMetadata);
      return TileDocument_1._signDagJWS(signer, commit);
    }
    async _makeRawCommit(newContent, newMetadata) {
      newMetadata || (newMetadata = {});
      const header = headerFromMetadata(newMetadata, false);
      if (newContent == null) {
        newContent = this.content;
      }
      if (header.controllers) {
        if (header.controllers.length !== 1) {
          throw new Error("Exactly one controller must be specified");
        }
        if (!header.controllers[0]) {
          throw new Error("Controller cannot be updated to an undefined value.");
        }
      }
      const patch = fast_json_patch_default.compare(this.content, newContent);
      const genesisLogEntry = this.state.log[0];
      return {
        header,
        data: patch,
        prev: this.tip,
        id: genesisLogEntry.cid
      };
    }
    static async makeGenesis(signer, content, metadata) {
      metadata || (metadata = {});
      if (!metadata.controllers || metadata.controllers.length === 0) {
        if (signer.did) {
          const did = await getAuthenticatedDID(signer);
          metadata.controllers = [did.hasParent ? did.parent : did.id];
        } else {
          throw new Error("No controllers specified");
        }
      }
      if (metadata.controllers?.length !== 1) {
        throw new Error("Exactly one controller must be specified");
      }
      const header = headerFromMetadata(metadata, true);
      if (metadata?.deterministic && content) {
        throw new Error("Initial content must be null when creating a deterministic Tile document");
      }
      if (content == null) {
        const result = { header };
        encode15(result);
        return result;
      }
      const commit = { data: content, header };
      return TileDocument_1._signDagJWS(signer, commit);
    }
    static async _signDagJWS(signer, commit) {
      const did = await getAuthenticatedDID(signer);
      return did.createDagJWS(commit);
    }
  };
  TileDocument.STREAM_TYPE_NAME = "tile";
  TileDocument.STREAM_TYPE_ID = 0;
  TileDocument = TileDocument_1 = __decorate7([
    StreamStatic()
  ], TileDocument);

  // node_modules/@ceramicnetwork/stream-caip10-link/node_modules/@ceramicnetwork/streamid/lib/stream-type.js
  var registry4 = {
    tile: 0,
    "caip10-link": 1,
    model: 2,
    MID: 3,
    UNLOADABLE: 4
  };
  function codeByName4(name8) {
    const index = registry4[name8];
    if (typeof index !== "undefined") {
      return index;
    } else {
      throw new Error(`No stream type registered for name ${name8}`);
    }
  }
  function nameByCode4(index) {
    const pair = Object.entries(registry4).find(([, v]) => v === index);
    if (pair) {
      return pair[0];
    } else {
      throw new Error(`No stream type registered for index ${index}`);
    }
  }
  var StreamType4 = class {
  };
  StreamType4.nameByCode = nameByCode4;
  StreamType4.codeByName = codeByName4;

  // node_modules/@ceramicnetwork/stream-caip10-link/node_modules/@ceramicnetwork/streamid/lib/commit-id.js
  var import_varint18 = __toESM(require_varint(), 1);

  // node_modules/@ceramicnetwork/stream-caip10-link/node_modules/@ceramicnetwork/streamid/lib/constants.js
  var STREAMID_CODEC4 = 206;

  // node_modules/@ceramicnetwork/stream-caip10-link/node_modules/@ceramicnetwork/streamid/lib/stream-id.js
  var import_varint17 = __toESM(require_varint(), 1);

  // node_modules/@ceramicnetwork/stream-caip10-link/node_modules/@ipld/dag-cbor/esm/index.js
  var esm_exports4 = {};
  __export(esm_exports4, {
    code: () => code5,
    decode: () => decode30,
    encode: () => encode21,
    name: () => name5
  });

  // node_modules/@ceramicnetwork/stream-caip10-link/node_modules/@ipld/dag-cbor/node_modules/multiformats/esm/vendor/varint.js
  var encode_16 = encode19;
  var MSB6 = 128;
  var REST6 = 127;
  var MSBALL6 = ~REST6;
  var INT6 = Math.pow(2, 31);
  function encode19(num, out, offset) {
    out = out || [];
    offset = offset || 0;
    var oldOffset = offset;
    while (num >= INT6) {
      out[offset++] = num & 255 | MSB6;
      num /= 128;
    }
    while (num & MSBALL6) {
      out[offset++] = num & 255 | MSB6;
      num >>>= 7;
    }
    out[offset] = num | 0;
    encode19.bytes = offset - oldOffset + 1;
    return out;
  }
  var decode26 = read6;
  var MSB$16 = 128;
  var REST$16 = 127;
  function read6(buf2, offset) {
    var res = 0, offset = offset || 0, shift = 0, counter = offset, b, l = buf2.length;
    do {
      if (counter >= l) {
        read6.bytes = 0;
        throw new RangeError("Could not decode varint");
      }
      b = buf2[counter++];
      res += shift < 28 ? (b & REST$16) << shift : (b & REST$16) * Math.pow(2, shift);
      shift += 7;
    } while (b >= MSB$16);
    read6.bytes = counter - offset;
    return res;
  }
  var N16 = Math.pow(2, 7);
  var N26 = Math.pow(2, 14);
  var N36 = Math.pow(2, 21);
  var N46 = Math.pow(2, 28);
  var N56 = Math.pow(2, 35);
  var N66 = Math.pow(2, 42);
  var N76 = Math.pow(2, 49);
  var N86 = Math.pow(2, 56);
  var N96 = Math.pow(2, 63);
  var length6 = function(value) {
    return value < N16 ? 1 : value < N26 ? 2 : value < N36 ? 3 : value < N46 ? 4 : value < N56 ? 5 : value < N66 ? 6 : value < N76 ? 7 : value < N86 ? 8 : value < N96 ? 9 : 10;
  };
  var varint15 = {
    encode: encode_16,
    decode: decode26,
    encodingLength: length6
  };
  var _brrp_varint6 = varint15;
  var varint_default6 = _brrp_varint6;

  // node_modules/@ceramicnetwork/stream-caip10-link/node_modules/@ipld/dag-cbor/node_modules/multiformats/esm/src/varint.js
  var decode27 = (data, offset = 0) => {
    const code8 = varint_default6.decode(data, offset);
    return [
      code8,
      varint_default6.decode.bytes
    ];
  };
  var encodeTo6 = (int, target, offset = 0) => {
    varint_default6.encode(int, target, offset);
    return target;
  };
  var encodingLength6 = (int) => {
    return varint_default6.encodingLength(int);
  };

  // node_modules/@ceramicnetwork/stream-caip10-link/node_modules/@ipld/dag-cbor/node_modules/multiformats/esm/src/bytes.js
  var empty6 = new Uint8Array(0);
  var equals12 = (aa, bb) => {
    if (aa === bb)
      return true;
    if (aa.byteLength !== bb.byteLength) {
      return false;
    }
    for (let ii = 0; ii < aa.byteLength; ii++) {
      if (aa[ii] !== bb[ii]) {
        return false;
      }
    }
    return true;
  };
  var coerce6 = (o) => {
    if (o instanceof Uint8Array && o.constructor.name === "Uint8Array")
      return o;
    if (o instanceof ArrayBuffer)
      return new Uint8Array(o);
    if (ArrayBuffer.isView(o)) {
      return new Uint8Array(o.buffer, o.byteOffset, o.byteLength);
    }
    throw new Error("Unknown type, must be binary type");
  };

  // node_modules/@ceramicnetwork/stream-caip10-link/node_modules/@ipld/dag-cbor/node_modules/multiformats/esm/src/hashes/digest.js
  var create6 = (code8, digest2) => {
    const size = digest2.byteLength;
    const sizeOffset = encodingLength6(code8);
    const digestOffset = sizeOffset + encodingLength6(size);
    const bytes = new Uint8Array(digestOffset + size);
    encodeTo6(code8, bytes, 0);
    encodeTo6(size, bytes, sizeOffset);
    bytes.set(digest2, digestOffset);
    return new Digest6(code8, size, digest2, bytes);
  };
  var decode28 = (multihash) => {
    const bytes = coerce6(multihash);
    const [code8, sizeOffset] = decode27(bytes);
    const [size, digestOffset] = decode27(bytes.subarray(sizeOffset));
    const digest2 = bytes.subarray(sizeOffset + digestOffset);
    if (digest2.byteLength !== size) {
      throw new Error("Incorrect length");
    }
    return new Digest6(code8, size, digest2, bytes);
  };
  var equals13 = (a, b) => {
    if (a === b) {
      return true;
    } else {
      return a.code === b.code && a.size === b.size && equals12(a.bytes, b.bytes);
    }
  };
  var Digest6 = class {
    constructor(code8, size, digest2, bytes) {
      this.code = code8;
      this.size = size;
      this.digest = digest2;
      this.bytes = bytes;
    }
  };

  // node_modules/@ceramicnetwork/stream-caip10-link/node_modules/@ipld/dag-cbor/node_modules/multiformats/esm/vendor/base-x.js
  function base7(ALPHABET, name8) {
    if (ALPHABET.length >= 255) {
      throw new TypeError("Alphabet too long");
    }
    var BASE_MAP = new Uint8Array(256);
    for (var j = 0; j < BASE_MAP.length; j++) {
      BASE_MAP[j] = 255;
    }
    for (var i = 0; i < ALPHABET.length; i++) {
      var x = ALPHABET.charAt(i);
      var xc = x.charCodeAt(0);
      if (BASE_MAP[xc] !== 255) {
        throw new TypeError(x + " is ambiguous");
      }
      BASE_MAP[xc] = i;
    }
    var BASE = ALPHABET.length;
    var LEADER = ALPHABET.charAt(0);
    var FACTOR = Math.log(BASE) / Math.log(256);
    var iFACTOR = Math.log(256) / Math.log(BASE);
    function encode31(source) {
      if (source instanceof Uint8Array)
        ;
      else if (ArrayBuffer.isView(source)) {
        source = new Uint8Array(source.buffer, source.byteOffset, source.byteLength);
      } else if (Array.isArray(source)) {
        source = Uint8Array.from(source);
      }
      if (!(source instanceof Uint8Array)) {
        throw new TypeError("Expected Uint8Array");
      }
      if (source.length === 0) {
        return "";
      }
      var zeroes = 0;
      var length10 = 0;
      var pbegin = 0;
      var pend = source.length;
      while (pbegin !== pend && source[pbegin] === 0) {
        pbegin++;
        zeroes++;
      }
      var size = (pend - pbegin) * iFACTOR + 1 >>> 0;
      var b58 = new Uint8Array(size);
      while (pbegin !== pend) {
        var carry = source[pbegin];
        var i2 = 0;
        for (var it1 = size - 1; (carry !== 0 || i2 < length10) && it1 !== -1; it1--, i2++) {
          carry += 256 * b58[it1] >>> 0;
          b58[it1] = carry % BASE >>> 0;
          carry = carry / BASE >>> 0;
        }
        if (carry !== 0) {
          throw new Error("Non-zero carry");
        }
        length10 = i2;
        pbegin++;
      }
      var it2 = size - length10;
      while (it2 !== size && b58[it2] === 0) {
        it2++;
      }
      var str = LEADER.repeat(zeroes);
      for (; it2 < size; ++it2) {
        str += ALPHABET.charAt(b58[it2]);
      }
      return str;
    }
    function decodeUnsafe(source) {
      if (typeof source !== "string") {
        throw new TypeError("Expected String");
      }
      if (source.length === 0) {
        return new Uint8Array();
      }
      var psz = 0;
      if (source[psz] === " ") {
        return;
      }
      var zeroes = 0;
      var length10 = 0;
      while (source[psz] === LEADER) {
        zeroes++;
        psz++;
      }
      var size = (source.length - psz) * FACTOR + 1 >>> 0;
      var b256 = new Uint8Array(size);
      while (source[psz]) {
        var carry = BASE_MAP[source.charCodeAt(psz)];
        if (carry === 255) {
          return;
        }
        var i2 = 0;
        for (var it3 = size - 1; (carry !== 0 || i2 < length10) && it3 !== -1; it3--, i2++) {
          carry += BASE * b256[it3] >>> 0;
          b256[it3] = carry % 256 >>> 0;
          carry = carry / 256 >>> 0;
        }
        if (carry !== 0) {
          throw new Error("Non-zero carry");
        }
        length10 = i2;
        psz++;
      }
      if (source[psz] === " ") {
        return;
      }
      var it4 = size - length10;
      while (it4 !== size && b256[it4] === 0) {
        it4++;
      }
      var vch = new Uint8Array(zeroes + (size - it4));
      var j2 = zeroes;
      while (it4 !== size) {
        vch[j2++] = b256[it4++];
      }
      return vch;
    }
    function decode45(string2) {
      var buffer2 = decodeUnsafe(string2);
      if (buffer2) {
        return buffer2;
      }
      throw new Error(`Non-${name8} character`);
    }
    return {
      encode: encode31,
      decodeUnsafe,
      decode: decode45
    };
  }
  var src6 = base7;
  var _brrp__multiformats_scope_baseX6 = src6;
  var base_x_default6 = _brrp__multiformats_scope_baseX6;

  // node_modules/@ceramicnetwork/stream-caip10-link/node_modules/@ipld/dag-cbor/node_modules/multiformats/esm/src/bases/base.js
  var Encoder6 = class {
    constructor(name8, prefix, baseEncode) {
      this.name = name8;
      this.prefix = prefix;
      this.baseEncode = baseEncode;
    }
    encode(bytes) {
      if (bytes instanceof Uint8Array) {
        return `${this.prefix}${this.baseEncode(bytes)}`;
      } else {
        throw Error("Unknown type, must be binary type");
      }
    }
  };
  var Decoder6 = class {
    constructor(name8, prefix, baseDecode) {
      this.name = name8;
      this.prefix = prefix;
      if (prefix.codePointAt(0) === void 0) {
        throw new Error("Invalid prefix character");
      }
      this.prefixCodePoint = prefix.codePointAt(0);
      this.baseDecode = baseDecode;
    }
    decode(text) {
      if (typeof text === "string") {
        if (text.codePointAt(0) !== this.prefixCodePoint) {
          throw Error(`Unable to decode multibase string ${JSON.stringify(text)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
        }
        return this.baseDecode(text.slice(this.prefix.length));
      } else {
        throw Error("Can only multibase decode strings");
      }
    }
    or(decoder) {
      return or6(this, decoder);
    }
  };
  var ComposedDecoder6 = class {
    constructor(decoders) {
      this.decoders = decoders;
    }
    or(decoder) {
      return or6(this, decoder);
    }
    decode(input) {
      const prefix = input[0];
      const decoder = this.decoders[prefix];
      if (decoder) {
        return decoder.decode(input);
      } else {
        throw RangeError(`Unable to decode multibase string ${JSON.stringify(input)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
      }
    }
  };
  var or6 = (left, right) => new ComposedDecoder6({
    ...left.decoders || { [left.prefix]: left },
    ...right.decoders || { [right.prefix]: right }
  });
  var Codec6 = class {
    constructor(name8, prefix, baseEncode, baseDecode) {
      this.name = name8;
      this.prefix = prefix;
      this.baseEncode = baseEncode;
      this.baseDecode = baseDecode;
      this.encoder = new Encoder6(name8, prefix, baseEncode);
      this.decoder = new Decoder6(name8, prefix, baseDecode);
    }
    encode(input) {
      return this.encoder.encode(input);
    }
    decode(input) {
      return this.decoder.decode(input);
    }
  };
  var from9 = ({ name: name8, prefix, encode: encode31, decode: decode45 }) => new Codec6(name8, prefix, encode31, decode45);
  var baseX6 = ({ prefix, name: name8, alphabet: alphabet2 }) => {
    const { encode: encode31, decode: decode45 } = base_x_default6(alphabet2, name8);
    return from9({
      prefix,
      name: name8,
      encode: encode31,
      decode: (text) => coerce6(decode45(text))
    });
  };
  var decode29 = (string2, alphabet2, bitsPerChar, name8) => {
    const codes = {};
    for (let i = 0; i < alphabet2.length; ++i) {
      codes[alphabet2[i]] = i;
    }
    let end = string2.length;
    while (string2[end - 1] === "=") {
      --end;
    }
    const out = new Uint8Array(end * bitsPerChar / 8 | 0);
    let bits = 0;
    let buffer2 = 0;
    let written = 0;
    for (let i = 0; i < end; ++i) {
      const value = codes[string2[i]];
      if (value === void 0) {
        throw new SyntaxError(`Non-${name8} character`);
      }
      buffer2 = buffer2 << bitsPerChar | value;
      bits += bitsPerChar;
      if (bits >= 8) {
        bits -= 8;
        out[written++] = 255 & buffer2 >> bits;
      }
    }
    if (bits >= bitsPerChar || 255 & buffer2 << 8 - bits) {
      throw new SyntaxError("Unexpected end of data");
    }
    return out;
  };
  var encode20 = (data, alphabet2, bitsPerChar) => {
    const pad = alphabet2[alphabet2.length - 1] === "=";
    const mask = (1 << bitsPerChar) - 1;
    let out = "";
    let bits = 0;
    let buffer2 = 0;
    for (let i = 0; i < data.length; ++i) {
      buffer2 = buffer2 << 8 | data[i];
      bits += 8;
      while (bits > bitsPerChar) {
        bits -= bitsPerChar;
        out += alphabet2[mask & buffer2 >> bits];
      }
    }
    if (bits) {
      out += alphabet2[mask & buffer2 << bitsPerChar - bits];
    }
    if (pad) {
      while (out.length * bitsPerChar & 7) {
        out += "=";
      }
    }
    return out;
  };
  var rfc46486 = ({ name: name8, prefix, bitsPerChar, alphabet: alphabet2 }) => {
    return from9({
      prefix,
      name: name8,
      encode(input) {
        return encode20(input, alphabet2, bitsPerChar);
      },
      decode(input) {
        return decode29(input, alphabet2, bitsPerChar, name8);
      }
    });
  };

  // node_modules/@ceramicnetwork/stream-caip10-link/node_modules/@ipld/dag-cbor/node_modules/multiformats/esm/src/bases/base58.js
  var base58btc6 = baseX6({
    name: "base58btc",
    prefix: "z",
    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
  });
  var base58flickr6 = baseX6({
    name: "base58flickr",
    prefix: "Z",
    alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
  });

  // node_modules/@ceramicnetwork/stream-caip10-link/node_modules/@ipld/dag-cbor/node_modules/multiformats/esm/src/bases/base32.js
  var base326 = rfc46486({
    prefix: "b",
    name: "base32",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
    bitsPerChar: 5
  });
  var base32upper6 = rfc46486({
    prefix: "B",
    name: "base32upper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
    bitsPerChar: 5
  });
  var base32pad6 = rfc46486({
    prefix: "c",
    name: "base32pad",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
    bitsPerChar: 5
  });
  var base32padupper6 = rfc46486({
    prefix: "C",
    name: "base32padupper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
    bitsPerChar: 5
  });
  var base32hex6 = rfc46486({
    prefix: "v",
    name: "base32hex",
    alphabet: "0123456789abcdefghijklmnopqrstuv",
    bitsPerChar: 5
  });
  var base32hexupper6 = rfc46486({
    prefix: "V",
    name: "base32hexupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
    bitsPerChar: 5
  });
  var base32hexpad6 = rfc46486({
    prefix: "t",
    name: "base32hexpad",
    alphabet: "0123456789abcdefghijklmnopqrstuv=",
    bitsPerChar: 5
  });
  var base32hexpadupper6 = rfc46486({
    prefix: "T",
    name: "base32hexpadupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
    bitsPerChar: 5
  });
  var base32z6 = rfc46486({
    prefix: "h",
    name: "base32z",
    alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
    bitsPerChar: 5
  });

  // node_modules/@ceramicnetwork/stream-caip10-link/node_modules/@ipld/dag-cbor/node_modules/multiformats/esm/src/cid.js
  var CID6 = class _CID {
    constructor(version7, code8, multihash, bytes) {
      this.code = code8;
      this.version = version7;
      this.multihash = multihash;
      this.bytes = bytes;
      this.byteOffset = bytes.byteOffset;
      this.byteLength = bytes.byteLength;
      this.asCID = this;
      this._baseCache = /* @__PURE__ */ new Map();
      Object.defineProperties(this, {
        byteOffset: hidden4,
        byteLength: hidden4,
        code: readonly6,
        version: readonly6,
        multihash: readonly6,
        bytes: readonly6,
        _baseCache: hidden4,
        asCID: hidden4
      });
    }
    toV0() {
      switch (this.version) {
        case 0: {
          return this;
        }
        default: {
          const { code: code8, multihash } = this;
          if (code8 !== DAG_PB_CODE6) {
            throw new Error("Cannot convert a non dag-pb CID to CIDv0");
          }
          if (multihash.code !== SHA_256_CODE6) {
            throw new Error("Cannot convert non sha2-256 multihash CID to CIDv0");
          }
          return _CID.createV0(multihash);
        }
      }
    }
    toV1() {
      switch (this.version) {
        case 0: {
          const { code: code8, digest: digest2 } = this.multihash;
          const multihash = create6(code8, digest2);
          return _CID.createV1(this.code, multihash);
        }
        case 1: {
          return this;
        }
        default: {
          throw Error(`Can not convert CID version ${this.version} to version 0. This is a bug please report`);
        }
      }
    }
    equals(other) {
      return other && this.code === other.code && this.version === other.version && equals13(this.multihash, other.multihash);
    }
    toString(base13) {
      const { bytes, version: version7, _baseCache } = this;
      switch (version7) {
        case 0:
          return toStringV06(bytes, _baseCache, base13 || base58btc6.encoder);
        default:
          return toStringV16(bytes, _baseCache, base13 || base326.encoder);
      }
    }
    toJSON() {
      return {
        code: this.code,
        version: this.version,
        hash: this.multihash.bytes
      };
    }
    get [Symbol.toStringTag]() {
      return "CID";
    }
    [Symbol.for("nodejs.util.inspect.custom")]() {
      return "CID(" + this.toString() + ")";
    }
    static isCID(value) {
      deprecate4(/^0\.0/, IS_CID_DEPRECATION4);
      return !!(value && (value[cidSymbol6] || value.asCID === value));
    }
    get toBaseEncodedString() {
      throw new Error("Deprecated, use .toString()");
    }
    get codec() {
      throw new Error('"codec" property is deprecated, use integer "code" property instead');
    }
    get buffer() {
      throw new Error("Deprecated .buffer property, use .bytes to get Uint8Array instead");
    }
    get multibaseName() {
      throw new Error('"multibaseName" property is deprecated');
    }
    get prefix() {
      throw new Error('"prefix" property is deprecated');
    }
    static asCID(value) {
      if (value instanceof _CID) {
        return value;
      } else if (value != null && value.asCID === value) {
        const { version: version7, code: code8, multihash, bytes } = value;
        return new _CID(version7, code8, multihash, bytes || encodeCID6(version7, code8, multihash.bytes));
      } else if (value != null && value[cidSymbol6] === true) {
        const { version: version7, multihash, code: code8 } = value;
        const digest2 = decode28(multihash);
        return _CID.create(version7, code8, digest2);
      } else {
        return null;
      }
    }
    static create(version7, code8, digest2) {
      if (typeof code8 !== "number") {
        throw new Error("String codecs are no longer supported");
      }
      switch (version7) {
        case 0: {
          if (code8 !== DAG_PB_CODE6) {
            throw new Error(`Version 0 CID must use dag-pb (code: ${DAG_PB_CODE6}) block encoding`);
          } else {
            return new _CID(version7, code8, digest2, digest2.bytes);
          }
        }
        case 1: {
          const bytes = encodeCID6(version7, code8, digest2.bytes);
          return new _CID(version7, code8, digest2, bytes);
        }
        default: {
          throw new Error("Invalid version");
        }
      }
    }
    static createV0(digest2) {
      return _CID.create(0, DAG_PB_CODE6, digest2);
    }
    static createV1(code8, digest2) {
      return _CID.create(1, code8, digest2);
    }
    static decode(bytes) {
      const [cid, remainder] = _CID.decodeFirst(bytes);
      if (remainder.length) {
        throw new Error("Incorrect length");
      }
      return cid;
    }
    static decodeFirst(bytes) {
      const specs = _CID.inspectBytes(bytes);
      const prefixSize = specs.size - specs.multihashSize;
      const multihashBytes = coerce6(bytes.subarray(prefixSize, prefixSize + specs.multihashSize));
      if (multihashBytes.byteLength !== specs.multihashSize) {
        throw new Error("Incorrect length");
      }
      const digestBytes = multihashBytes.subarray(specs.multihashSize - specs.digestSize);
      const digest2 = new Digest6(specs.multihashCode, specs.digestSize, digestBytes, multihashBytes);
      const cid = specs.version === 0 ? _CID.createV0(digest2) : _CID.createV1(specs.codec, digest2);
      return [
        cid,
        bytes.subarray(specs.size)
      ];
    }
    static inspectBytes(initialBytes) {
      let offset = 0;
      const next = () => {
        const [i, length10] = decode27(initialBytes.subarray(offset));
        offset += length10;
        return i;
      };
      let version7 = next();
      let codec = DAG_PB_CODE6;
      if (version7 === 18) {
        version7 = 0;
        offset = 0;
      } else if (version7 === 1) {
        codec = next();
      }
      if (version7 !== 0 && version7 !== 1) {
        throw new RangeError(`Invalid CID version ${version7}`);
      }
      const prefixSize = offset;
      const multihashCode = next();
      const digestSize = next();
      const size = offset + digestSize;
      const multihashSize = size - prefixSize;
      return {
        version: version7,
        codec,
        multihashCode,
        digestSize,
        multihashSize,
        size
      };
    }
    static parse(source, base13) {
      const [prefix, bytes] = parseCIDtoBytes6(source, base13);
      const cid = _CID.decode(bytes);
      cid._baseCache.set(prefix, source);
      return cid;
    }
  };
  var parseCIDtoBytes6 = (source, base13) => {
    switch (source[0]) {
      case "Q": {
        const decoder = base13 || base58btc6;
        return [
          base58btc6.prefix,
          decoder.decode(`${base58btc6.prefix}${source}`)
        ];
      }
      case base58btc6.prefix: {
        const decoder = base13 || base58btc6;
        return [
          base58btc6.prefix,
          decoder.decode(source)
        ];
      }
      case base326.prefix: {
        const decoder = base13 || base326;
        return [
          base326.prefix,
          decoder.decode(source)
        ];
      }
      default: {
        if (base13 == null) {
          throw Error("To parse non base32 or base58btc encoded CID multibase decoder must be provided");
        }
        return [
          source[0],
          base13.decode(source)
        ];
      }
    }
  };
  var toStringV06 = (bytes, cache4, base13) => {
    const { prefix } = base13;
    if (prefix !== base58btc6.prefix) {
      throw Error(`Cannot string encode V0 in ${base13.name} encoding`);
    }
    const cid = cache4.get(prefix);
    if (cid == null) {
      const cid2 = base13.encode(bytes).slice(1);
      cache4.set(prefix, cid2);
      return cid2;
    } else {
      return cid;
    }
  };
  var toStringV16 = (bytes, cache4, base13) => {
    const { prefix } = base13;
    const cid = cache4.get(prefix);
    if (cid == null) {
      const cid2 = base13.encode(bytes);
      cache4.set(prefix, cid2);
      return cid2;
    } else {
      return cid;
    }
  };
  var DAG_PB_CODE6 = 112;
  var SHA_256_CODE6 = 18;
  var encodeCID6 = (version7, code8, multihash) => {
    const codeOffset = encodingLength6(version7);
    const hashOffset = codeOffset + encodingLength6(code8);
    const bytes = new Uint8Array(hashOffset + multihash.byteLength);
    encodeTo6(version7, bytes, 0);
    encodeTo6(code8, bytes, codeOffset);
    bytes.set(multihash, hashOffset);
    return bytes;
  };
  var cidSymbol6 = Symbol.for("@ipld/js-cid/CID");
  var readonly6 = {
    writable: false,
    configurable: false,
    enumerable: true
  };
  var hidden4 = {
    writable: false,
    enumerable: false,
    configurable: false
  };
  var version4 = "0.0.0-dev";
  var deprecate4 = (range, message) => {
    if (range.test(version4)) {
      console.warn(message);
    } else {
      throw new Error(message);
    }
  };
  var IS_CID_DEPRECATION4 = `CID.isCID(v) is deprecated and will be removed in the next major release.
Following code pattern:

if (CID.isCID(value)) {
  doSomethingWithCID(value)
}

Is replaced with:

const cid = CID.asCID(value)
if (cid) {
  // Make sure to use cid instead of value
  doSomethingWithCID(cid)
}
`;

  // node_modules/@ceramicnetwork/stream-caip10-link/node_modules/@ipld/dag-cbor/esm/index.js
  var CID_CBOR_TAG4 = 42;
  function cidEncoder4(obj) {
    if (obj.asCID !== obj) {
      return null;
    }
    const cid = CID6.asCID(obj);
    if (!cid) {
      return null;
    }
    const bytes = new Uint8Array(cid.bytes.byteLength + 1);
    bytes.set(cid.bytes, 1);
    return [
      new Token(Type.tag, CID_CBOR_TAG4),
      new Token(Type.bytes, bytes)
    ];
  }
  function undefinedEncoder4() {
    throw new Error("`undefined` is not supported by the IPLD Data Model and cannot be encoded");
  }
  function numberEncoder4(num) {
    if (Number.isNaN(num)) {
      throw new Error("`NaN` is not supported by the IPLD Data Model and cannot be encoded");
    }
    if (num === Infinity || num === -Infinity) {
      throw new Error("`Infinity` and `-Infinity` is not supported by the IPLD Data Model and cannot be encoded");
    }
    return null;
  }
  var encodeOptions4 = {
    float64: true,
    typeEncoders: {
      Object: cidEncoder4,
      undefined: undefinedEncoder4,
      number: numberEncoder4
    }
  };
  function cidDecoder4(bytes) {
    if (bytes[0] !== 0) {
      throw new Error("Invalid CID for CBOR tag 42; expected leading 0x00");
    }
    return CID6.decode(bytes.subarray(1));
  }
  var decodeOptions4 = {
    allowIndefinite: false,
    coerceUndefinedToNull: true,
    allowNaN: false,
    allowInfinity: false,
    allowBigInt: true,
    strict: true,
    useMaps: false,
    tags: []
  };
  decodeOptions4.tags[CID_CBOR_TAG4] = cidDecoder4;
  var name5 = "dag-cbor";
  var code5 = 113;
  var encode21 = (node) => encode6(node, encodeOptions4);
  var decode30 = (data) => decode6(data, decodeOptions4);

  // node_modules/@ceramicnetwork/stream-caip10-link/node_modules/@ceramicnetwork/streamid/lib/try-catch.util.js
  function tryCatch4(fn) {
    try {
      return fn();
    } catch (e) {
      return e;
    }
  }

  // node_modules/@ceramicnetwork/stream-caip10-link/node_modules/@ceramicnetwork/streamid/lib/reading-bytes.js
  var import_varint16 = __toESM(require_varint(), 1);
  function readVarint4(bytes) {
    const value = import_varint16.default.decode(bytes);
    const readLength = import_varint16.default.decode.bytes;
    const remainder = bytes.subarray(readLength);
    return [value, remainder, readLength];
  }
  function isCidVersion4(input) {
    return input === 0 || input === 1;
  }
  function readCid4(bytes) {
    const [cidVersion, cidVersionRemainder] = readVarint4(bytes);
    if (!isCidVersion4(cidVersion)) {
      throw new Error(`Unknown CID version ${cidVersion}`);
    }
    const [codec, codecRemainder] = readVarint4(cidVersionRemainder);
    const [, mhCodecRemainder, mhCodecLength] = readVarint4(codecRemainder);
    const [mhLength, , mhLengthLength] = readVarint4(mhCodecRemainder);
    const multihashBytes = codecRemainder.subarray(0, mhCodecLength + mhLengthLength + mhLength);
    const multihashBytesRemainder = codecRemainder.subarray(mhCodecLength + mhLengthLength + mhLength);
    return [CID.create(cidVersion, codec, decode3(multihashBytes)), multihashBytesRemainder];
  }

  // node_modules/@ceramicnetwork/stream-caip10-link/node_modules/@ceramicnetwork/streamid/lib/stream-ref-parsing.js
  function fromBytes10(input, title = "StreamRef") {
    const [streamCodec, streamCodecRemainder] = readVarint4(input);
    if (streamCodec !== STREAMID_CODEC4)
      throw new Error(`Invalid ${title}, does not include streamid codec`);
    const [type, streamtypeRemainder] = readVarint4(streamCodecRemainder);
    const cidResult = readCid4(streamtypeRemainder);
    const [genesis, genesisRemainder] = cidResult;
    if (genesisRemainder.length === 0) {
      return {
        kind: "stream-id",
        type,
        genesis
      };
    } else if (genesisRemainder.length === 1 && genesisRemainder[0] === 0) {
      return {
        kind: "commit-id",
        type,
        genesis,
        commit: null
      };
    } else {
      const [commit] = readCid4(genesisRemainder);
      return {
        kind: "commit-id",
        type,
        genesis,
        commit
      };
    }
  }
  var URL_PATTERN4 = /(ceramic:\/\/|\/ceramic\/)?([a-zA-Z0-9]+)(\?commit=([a-zA-Z0-9]+))?/;
  function fromString13(input, title = "StreamRef") {
    const protocolMatch = URL_PATTERN4.exec(input) || [];
    const base13 = protocolMatch[2];
    if (!base13)
      throw new Error(`Malformed ${title} string: ${input}`);
    const bytes = base36.decode(base13);
    const streamRef = fromBytes10(bytes);
    const commit = protocolMatch[4];
    if (commit) {
      return {
        kind: "commit-id",
        type: streamRef.type,
        genesis: streamRef.genesis,
        commit: parseCommit4(streamRef.genesis, commit)
      };
    }
    return streamRef;
  }
  function parseCID4(input) {
    try {
      return typeof input === "string" ? CID.parse(input) : CID.asCID(input);
    } catch {
      return null;
    }
  }
  function parseCommit4(genesis, commit = null) {
    if (!commit)
      return null;
    if (commit === "0")
      return null;
    const commitCID = parseCID4(commit);
    if (commitCID) {
      if (genesis.equals(commitCID)) {
        return null;
      } else {
        return commitCID;
      }
    } else {
      throw new Error("Cannot specify commit as a number except to request commit 0 (the genesis commit)");
    }
  }

  // node_modules/@ceramicnetwork/stream-caip10-link/node_modules/@ceramicnetwork/streamid/lib/stream-id.js
  var __decorate8 = function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata7 = function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var InvalidStreamIDBytesError4 = class extends Error {
    constructor(bytes) {
      super(`Invalid StreamID bytes ${base36.encode(bytes)}: contains commit`);
    }
  };
  var InvalidStreamIDStringError4 = class extends Error {
    constructor(input) {
      super(`Invalid StreamID string ${input}: contains commit`);
    }
  };
  function fromBytes11(bytes) {
    const parsed = fromBytes10(bytes, "StreamID");
    if (parsed.kind === "stream-id") {
      return new StreamID4(parsed.type, parsed.genesis);
    }
    throw new InvalidStreamIDBytesError4(bytes);
  }
  function fromBytesNoThrow7(bytes) {
    return tryCatch4(() => fromBytes11(bytes));
  }
  function fromString14(input) {
    const parsed = fromString13(input, "StreamID");
    if (parsed.kind === "stream-id") {
      return new StreamID4(parsed.type, parsed.genesis);
    }
    throw new InvalidStreamIDStringError4(input);
  }
  function fromStringNoThrow7(input) {
    return tryCatch4(() => fromString14(input));
  }
  var TAG7 = Symbol.for("@ceramicnetwork/streamid/StreamID");
  var StreamID4 = class _StreamID {
    constructor(type, cid) {
      this._tag = TAG7;
      if (!(type || type === 0))
        throw new Error("StreamID constructor: type required");
      if (!cid)
        throw new Error("StreamID constructor: cid required");
      this._type = typeof type === "string" ? StreamType4.codeByName(type) : type;
      this._cid = typeof cid === "string" ? CID.parse(cid) : cid;
    }
    static isInstance(instance) {
      return typeof instance === "object" && "_tag" in instance && instance._tag === TAG7;
    }
    static async fromGenesis(type, genesis) {
      const block = await encode5({ value: genesis, codec: esm_exports4, hasher: sha256 });
      return new _StreamID(type, block.cid);
    }
    get type() {
      return this._type;
    }
    get typeName() {
      return StreamType4.nameByCode(this._type);
    }
    get cid() {
      return this._cid;
    }
    get bytes() {
      const codec = import_varint17.default.encode(STREAMID_CODEC4);
      const type = import_varint17.default.encode(this.type);
      return concat([codec, type, this.cid.bytes]);
    }
    get baseID() {
      return new _StreamID(this._type, this._cid);
    }
    equals(other) {
      if (_StreamID.isInstance(other)) {
        return this.type === other.type && this.cid.equals(other.cid);
      } else {
        return false;
      }
    }
    toString() {
      return base36.encode(this.bytes);
    }
    toUrl() {
      return `ceramic://${this.toString()}`;
    }
    [Symbol.for("nodejs.util.inspect.custom")]() {
      return `StreamID(${this.toString()})`;
    }
    [Symbol.toPrimitive]() {
      return this.toString();
    }
  };
  StreamID4.fromBytes = fromBytes11;
  StreamID4.fromBytesNoThrow = fromBytesNoThrow7;
  StreamID4.fromString = fromString14;
  StreamID4.fromStringNoThrow = fromStringNoThrow7;
  __decorate8([
    Memoize(),
    __metadata7("design:type", String),
    __metadata7("design:paramtypes", [])
  ], StreamID4.prototype, "typeName", null);
  __decorate8([
    Memoize(),
    __metadata7("design:type", Uint8Array),
    __metadata7("design:paramtypes", [])
  ], StreamID4.prototype, "bytes", null);
  __decorate8([
    Memoize(),
    __metadata7("design:type", StreamID4),
    __metadata7("design:paramtypes", [])
  ], StreamID4.prototype, "baseID", null);
  __decorate8([
    Memoize(),
    __metadata7("design:type", Function),
    __metadata7("design:paramtypes", []),
    __metadata7("design:returntype", String)
  ], StreamID4.prototype, "toString", null);
  __decorate8([
    Memoize(),
    __metadata7("design:type", Function),
    __metadata7("design:paramtypes", []),
    __metadata7("design:returntype", String)
  ], StreamID4.prototype, "toUrl", null);

  // node_modules/@ceramicnetwork/stream-caip10-link/node_modules/@ceramicnetwork/streamid/lib/commit-id.js
  var __decorate9 = function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata8 = function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var __classPrivateFieldSet4 = function(receiver, state, value, kind, f) {
    if (kind === "m")
      throw new TypeError("Private method is not writable");
    if (kind === "a" && !f)
      throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
      throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
  };
  var __classPrivateFieldGet4 = function(receiver, state, kind, f) {
    if (kind === "a" && !f)
      throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
      throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
  };
  var _CommitID_type4;
  var _CommitID_cid4;
  var _CommitID_commit4;
  var InvalidCommitIDBytesError4 = class extends Error {
    constructor(bytes) {
      super(`Error while parsing CommitID from bytes ${base36.encode(bytes)}: no commit information provided`);
    }
  };
  var InvalidCommitIDStringError4 = class extends Error {
    constructor(input) {
      super(`Error while parsing CommitID from string ${input}: no commit information provided`);
    }
  };
  function fromBytes12(bytes) {
    const parsed = fromBytes10(bytes, "CommitID");
    if (parsed.kind === "commit-id") {
      return new CommitID4(parsed.type, parsed.genesis, parsed.commit);
    }
    throw new InvalidCommitIDBytesError4(bytes);
  }
  function fromBytesNoThrow8(bytes) {
    return tryCatch4(() => fromBytes12(bytes));
  }
  function fromString15(input) {
    const parsed = fromString13(input, "CommitID");
    if (parsed.kind === "commit-id") {
      return new CommitID4(parsed.type, parsed.genesis, parsed.commit);
    }
    throw new InvalidCommitIDStringError4(input);
  }
  function fromStringNoThrow8(input) {
    return tryCatch4(() => fromString15(input));
  }
  var TAG8 = Symbol.for("@ceramicnetwork/streamid/CommitID");
  function make4(stream, commit) {
    return new CommitID4(stream.type, stream.cid, commit);
  }
  var CommitID4 = class {
    constructor(type, cid, commit = null) {
      this._tag = TAG8;
      _CommitID_type4.set(this, void 0);
      _CommitID_cid4.set(this, void 0);
      _CommitID_commit4.set(this, void 0);
      if (!type && type !== 0)
        throw new Error("constructor: type required");
      if (!cid)
        throw new Error("constructor: cid required");
      __classPrivateFieldSet4(this, _CommitID_type4, typeof type === "string" ? StreamType4.codeByName(type) : type, "f");
      __classPrivateFieldSet4(this, _CommitID_cid4, typeof cid === "string" ? CID.parse(cid) : cid, "f");
      __classPrivateFieldSet4(this, _CommitID_commit4, parseCommit4(__classPrivateFieldGet4(this, _CommitID_cid4, "f"), commit), "f");
    }
    static isInstance(instance) {
      return typeof instance === "object" && "_tag" in instance && instance._tag === TAG8;
    }
    get baseID() {
      return new StreamID4(__classPrivateFieldGet4(this, _CommitID_type4, "f"), __classPrivateFieldGet4(this, _CommitID_cid4, "f"));
    }
    get type() {
      return __classPrivateFieldGet4(this, _CommitID_type4, "f");
    }
    get typeName() {
      return StreamType4.nameByCode(__classPrivateFieldGet4(this, _CommitID_type4, "f"));
    }
    get cid() {
      return __classPrivateFieldGet4(this, _CommitID_cid4, "f");
    }
    get commit() {
      return __classPrivateFieldGet4(this, _CommitID_commit4, "f") || __classPrivateFieldGet4(this, _CommitID_cid4, "f");
    }
    get bytes() {
      const codec = import_varint18.default.encode(STREAMID_CODEC4);
      const type = import_varint18.default.encode(this.type);
      const commitBytes = __classPrivateFieldGet4(this, _CommitID_commit4, "f")?.bytes || new Uint8Array([0]);
      return concat([codec, type, this.cid.bytes, commitBytes]);
    }
    equals(other) {
      return this.type === other.type && this.cid.equals(other.cid) && this.commit.equals(other.commit);
    }
    toString() {
      return base36.encode(this.bytes);
    }
    toUrl() {
      return `ceramic://${this.toString()}`;
    }
    [(_CommitID_type4 = /* @__PURE__ */ new WeakMap(), _CommitID_cid4 = /* @__PURE__ */ new WeakMap(), _CommitID_commit4 = /* @__PURE__ */ new WeakMap(), Symbol.for("nodejs.util.inspect.custom"))]() {
      return `CommitID(${this.toString()})`;
    }
    [Symbol.toPrimitive]() {
      return this.toString();
    }
  };
  CommitID4.fromBytes = fromBytes12;
  CommitID4.fromBytesNoThrow = fromBytesNoThrow8;
  CommitID4.fromString = fromString15;
  CommitID4.fromStringNoThrow = fromStringNoThrow8;
  CommitID4.make = make4;
  __decorate9([
    Memoize(),
    __metadata8("design:type", StreamID4),
    __metadata8("design:paramtypes", [])
  ], CommitID4.prototype, "baseID", null);
  __decorate9([
    Memoize(),
    __metadata8("design:type", String),
    __metadata8("design:paramtypes", [])
  ], CommitID4.prototype, "typeName", null);
  __decorate9([
    Memoize(),
    __metadata8("design:type", CID),
    __metadata8("design:paramtypes", [])
  ], CommitID4.prototype, "commit", null);
  __decorate9([
    Memoize(),
    __metadata8("design:type", Uint8Array),
    __metadata8("design:paramtypes", [])
  ], CommitID4.prototype, "bytes", null);
  __decorate9([
    Memoize(),
    __metadata8("design:type", Function),
    __metadata8("design:paramtypes", []),
    __metadata8("design:returntype", String)
  ], CommitID4.prototype, "toString", null);
  __decorate9([
    Memoize(),
    __metadata8("design:type", Function),
    __metadata8("design:paramtypes", []),
    __metadata8("design:returntype", String)
  ], CommitID4.prototype, "toUrl", null);

  // node_modules/@ceramicnetwork/stream-caip10-link/node_modules/@ceramicnetwork/streamid/lib/stream-ref.js
  var StreamRef3;
  (function(StreamRef6) {
    function fromBytes19(input) {
      const parsed = fromBytes10(input);
      switch (parsed.kind) {
        case "commit-id":
          return new CommitID4(parsed.type, parsed.genesis, parsed.commit);
        case "stream-id":
          return new StreamID4(parsed.type, parsed.genesis);
        default:
          throw new Error(`Malformed StreamRef bytes: ${base36.encode(input)}`);
      }
    }
    StreamRef6.fromBytes = fromBytes19;
    function fromString22(input) {
      const parsed = fromString13(input);
      switch (parsed.kind) {
        case "commit-id":
          return new CommitID4(parsed.type, parsed.genesis, parsed.commit);
        case "stream-id":
          return new StreamID4(parsed.type, parsed.genesis);
        default:
          throw new Error(`Malformed StreamRef string: ${input}`);
      }
    }
    StreamRef6.fromString = fromString22;
    function from14(input) {
      if (StreamID4.isInstance(input)) {
        return input;
      }
      if (CommitID4.isInstance(input)) {
        return input;
      }
      if (input instanceof Uint8Array) {
        return fromBytes19(input);
      }
      if (typeof input === "string") {
        return fromString22(input);
      }
      throw new Error(`Can not build CommitID or StreamID from ${JSON.stringify(input)}`);
    }
    StreamRef6.from = from14;
  })(StreamRef3 || (StreamRef3 = {}));

  // node_modules/did-resolver/lib/resolver.module.js
  var PCT_ENCODED = "(?:%[0-9a-fA-F]{2})";
  var ID_CHAR = `(?:[a-zA-Z0-9._-]|${PCT_ENCODED})`;
  var METHOD = "([a-z0-9]+)";
  var METHOD_ID = `((?:${ID_CHAR}*:)*(${ID_CHAR}+))`;
  var PARAM_CHAR = "[a-zA-Z0-9_.:%-]";
  var PARAM = `;${PARAM_CHAR}+=${PARAM_CHAR}*`;
  var PARAMS = `((${PARAM})*)`;
  var PATH = `(/[^#?]*)?`;
  var QUERY = `([?][^#]*)?`;
  var FRAGMENT = `(#.*)?`;
  var DID_MATCHER = new RegExp(`^did:${METHOD}:${METHOD_ID}${PARAMS}${PATH}${QUERY}${FRAGMENT}$`);
  function parse(didUrl) {
    if (didUrl === "" || !didUrl)
      return null;
    const sections = didUrl.match(DID_MATCHER);
    if (sections) {
      const parts = {
        did: `did:${sections[1]}:${sections[2]}`,
        method: sections[1],
        id: sections[2],
        didUrl
      };
      if (sections[4]) {
        const params = sections[4].slice(1).split(";");
        parts.params = {};
        for (const p of params) {
          const kv = p.split("=");
          parts.params[kv[0]] = kv[1];
        }
      }
      if (sections[6])
        parts.path = sections[6];
      if (sections[7])
        parts.query = sections[7].slice(1);
      if (sections[8])
        parts.fragment = sections[8].slice(1);
      return parts;
    }
    return null;
  }

  // node_modules/@ceramicnetwork/stream-caip10-link/lib/caip10-link.js
  var import_lodash4 = __toESM(require_lodash(), 1);
  var __decorate10 = function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var Caip10Link_1;
  var throwReadOnlyError2 = () => {
    throw new Error("Historical stream commits cannot be modified. Load the stream without specifying a commit to make updates.");
  };
  var DEFAULT_CREATE_OPTS2 = {
    anchor: false,
    publish: true,
    sync: SyncOptions.PREFER_CACHE
  };
  var DEFAULT_UPDATE_OPTS2 = { anchor: true, publish: true };
  var DEFAULT_LOAD_OPTS2 = { sync: SyncOptions.PREFER_CACHE };
  var Caip10Link = Caip10Link_1 = class Caip10Link2 extends Stream {
    constructor() {
      super(...arguments);
      this._isReadOnly = false;
    }
    get did() {
      return this.content;
    }
    get metadata() {
      const { next, metadata } = this.state$.value;
      return (0, import_lodash4.default)(next?.metadata ?? metadata);
    }
    get controllers() {
      return this.metadata.controllers;
    }
    static async fromAccount(ceramic, accountId, opts = {}) {
      opts = { ...DEFAULT_CREATE_OPTS2, ...opts };
      const normalizedAccountId = normalizeAccountId(accountId);
      const genesisCommit = Caip10Link_1.makeGenesis(normalizedAccountId);
      return Caip10Link_1.fromGenesis(ceramic, genesisCommit, opts);
    }
    static async fromGenesis(ceramic, genesisCommit, opts = {}) {
      opts = { ...DEFAULT_CREATE_OPTS2, ...opts };
      return ceramic.createStreamFromGenesis(Caip10Link_1.STREAM_TYPE_ID, genesisCommit, opts);
    }
    async setDid(did, authProvider, opts = {}) {
      opts = { ...DEFAULT_UPDATE_OPTS2, ...opts };
      const didStr = typeof did == "string" ? did.trim() : did.id;
      const parsedDid = parse(didStr);
      if (parsedDid?.did !== didStr) {
        throw new Error(`DID is not valid: '${didStr}'`);
      }
      const linkProof = await authProvider.createLink(didStr);
      return this.setDidProof(linkProof, opts);
    }
    async setDidProof(proof, opts = {}) {
      opts = { ...DEFAULT_UPDATE_OPTS2, ...opts };
      const commit = this.makeCommit(proof);
      const updated = await this.api.applyCommit(this.id, commit, opts);
      this.state$.next(updated.state);
    }
    async clearDid(authProvider, opts = {}) {
      opts = { ...DEFAULT_UPDATE_OPTS2, ...opts };
      const linkProof = await authProvider.createLink("");
      return this.setDidProof(linkProof, opts);
    }
    static async load(ceramic, streamId, opts = {}) {
      opts = { ...DEFAULT_LOAD_OPTS2, ...opts };
      const streamRef = StreamRef3.from(streamId);
      if (streamRef.type != Caip10Link_1.STREAM_TYPE_ID) {
        throw new Error(`StreamID ${streamRef.toString()} does not refer to a '${Caip10Link_1.STREAM_TYPE_NAME}' stream, but to a ${streamRef.typeName}`);
      }
      return ceramic.loadStream(streamRef, opts);
    }
    static makeGenesis(accountId) {
      if (accountId.chainId.namespace === "eip155") {
        accountId.address = accountId.address.toLowerCase();
      }
      const legacyAccountId = `${accountId.address}@${accountId.chainId.toString()}`;
      return {
        header: {
          controllers: [legacyAccountId],
          family: `caip10-${accountId.chainId.toString()}`
        }
      };
    }
    makeCommit(proof) {
      return { data: proof, prev: this.tip, id: this.id.cid };
    }
    makeReadOnly() {
      this.setDidProof = throwReadOnlyError2;
      this.setDid = throwReadOnlyError2;
      this.sync = throwReadOnlyError2;
      this._isReadOnly = true;
    }
    get isReadOnly() {
      return this._isReadOnly;
    }
  };
  Caip10Link.STREAM_TYPE_NAME = "caip10-link";
  Caip10Link.STREAM_TYPE_ID = 1;
  Caip10Link = Caip10Link_1 = __decorate10([
    StreamStatic()
  ], Caip10Link);

  // node_modules/@ceramicnetwork/stream-model/node_modules/@ceramicnetwork/streamid/lib/stream-type.js
  var registry5 = {
    tile: 0,
    "caip10-link": 1,
    model: 2,
    MID: 3,
    UNLOADABLE: 4
  };
  function codeByName5(name8) {
    const index = registry5[name8];
    if (typeof index !== "undefined") {
      return index;
    } else {
      throw new Error(`No stream type registered for name ${name8}`);
    }
  }
  function nameByCode5(index) {
    const pair = Object.entries(registry5).find(([, v]) => v === index);
    if (pair) {
      return pair[0];
    } else {
      throw new Error(`No stream type registered for index ${index}`);
    }
  }
  var StreamType5 = class {
  };
  StreamType5.nameByCode = nameByCode5;
  StreamType5.codeByName = codeByName5;

  // node_modules/@ceramicnetwork/stream-model/node_modules/@ceramicnetwork/streamid/lib/commit-id.js
  var import_varint22 = __toESM(require_varint(), 1);

  // node_modules/@ceramicnetwork/stream-model/node_modules/@ceramicnetwork/streamid/lib/constants.js
  var STREAMID_CODEC5 = 206;

  // node_modules/@ceramicnetwork/stream-model/node_modules/@ceramicnetwork/streamid/lib/stream-id.js
  var import_varint21 = __toESM(require_varint(), 1);

  // node_modules/@ceramicnetwork/stream-model/node_modules/@ipld/dag-cbor/esm/index.js
  var esm_exports5 = {};
  __export(esm_exports5, {
    code: () => code6,
    decode: () => decode35,
    encode: () => encode24,
    name: () => name6
  });

  // node_modules/@ceramicnetwork/stream-model/node_modules/@ipld/dag-cbor/node_modules/multiformats/esm/vendor/varint.js
  var encode_17 = encode22;
  var MSB7 = 128;
  var REST7 = 127;
  var MSBALL7 = ~REST7;
  var INT7 = Math.pow(2, 31);
  function encode22(num, out, offset) {
    out = out || [];
    offset = offset || 0;
    var oldOffset = offset;
    while (num >= INT7) {
      out[offset++] = num & 255 | MSB7;
      num /= 128;
    }
    while (num & MSBALL7) {
      out[offset++] = num & 255 | MSB7;
      num >>>= 7;
    }
    out[offset] = num | 0;
    encode22.bytes = offset - oldOffset + 1;
    return out;
  }
  var decode31 = read7;
  var MSB$17 = 128;
  var REST$17 = 127;
  function read7(buf2, offset) {
    var res = 0, offset = offset || 0, shift = 0, counter = offset, b, l = buf2.length;
    do {
      if (counter >= l) {
        read7.bytes = 0;
        throw new RangeError("Could not decode varint");
      }
      b = buf2[counter++];
      res += shift < 28 ? (b & REST$17) << shift : (b & REST$17) * Math.pow(2, shift);
      shift += 7;
    } while (b >= MSB$17);
    read7.bytes = counter - offset;
    return res;
  }
  var N17 = Math.pow(2, 7);
  var N27 = Math.pow(2, 14);
  var N37 = Math.pow(2, 21);
  var N47 = Math.pow(2, 28);
  var N57 = Math.pow(2, 35);
  var N67 = Math.pow(2, 42);
  var N77 = Math.pow(2, 49);
  var N87 = Math.pow(2, 56);
  var N97 = Math.pow(2, 63);
  var length7 = function(value) {
    return value < N17 ? 1 : value < N27 ? 2 : value < N37 ? 3 : value < N47 ? 4 : value < N57 ? 5 : value < N67 ? 6 : value < N77 ? 7 : value < N87 ? 8 : value < N97 ? 9 : 10;
  };
  var varint19 = {
    encode: encode_17,
    decode: decode31,
    encodingLength: length7
  };
  var _brrp_varint7 = varint19;
  var varint_default7 = _brrp_varint7;

  // node_modules/@ceramicnetwork/stream-model/node_modules/@ipld/dag-cbor/node_modules/multiformats/esm/src/varint.js
  var decode32 = (data, offset = 0) => {
    const code8 = varint_default7.decode(data, offset);
    return [
      code8,
      varint_default7.decode.bytes
    ];
  };
  var encodeTo7 = (int, target, offset = 0) => {
    varint_default7.encode(int, target, offset);
    return target;
  };
  var encodingLength7 = (int) => {
    return varint_default7.encodingLength(int);
  };

  // node_modules/@ceramicnetwork/stream-model/node_modules/@ipld/dag-cbor/node_modules/multiformats/esm/src/bytes.js
  var empty7 = new Uint8Array(0);
  var equals14 = (aa, bb) => {
    if (aa === bb)
      return true;
    if (aa.byteLength !== bb.byteLength) {
      return false;
    }
    for (let ii = 0; ii < aa.byteLength; ii++) {
      if (aa[ii] !== bb[ii]) {
        return false;
      }
    }
    return true;
  };
  var coerce7 = (o) => {
    if (o instanceof Uint8Array && o.constructor.name === "Uint8Array")
      return o;
    if (o instanceof ArrayBuffer)
      return new Uint8Array(o);
    if (ArrayBuffer.isView(o)) {
      return new Uint8Array(o.buffer, o.byteOffset, o.byteLength);
    }
    throw new Error("Unknown type, must be binary type");
  };

  // node_modules/@ceramicnetwork/stream-model/node_modules/@ipld/dag-cbor/node_modules/multiformats/esm/src/hashes/digest.js
  var create7 = (code8, digest2) => {
    const size = digest2.byteLength;
    const sizeOffset = encodingLength7(code8);
    const digestOffset = sizeOffset + encodingLength7(size);
    const bytes = new Uint8Array(digestOffset + size);
    encodeTo7(code8, bytes, 0);
    encodeTo7(size, bytes, sizeOffset);
    bytes.set(digest2, digestOffset);
    return new Digest7(code8, size, digest2, bytes);
  };
  var decode33 = (multihash) => {
    const bytes = coerce7(multihash);
    const [code8, sizeOffset] = decode32(bytes);
    const [size, digestOffset] = decode32(bytes.subarray(sizeOffset));
    const digest2 = bytes.subarray(sizeOffset + digestOffset);
    if (digest2.byteLength !== size) {
      throw new Error("Incorrect length");
    }
    return new Digest7(code8, size, digest2, bytes);
  };
  var equals15 = (a, b) => {
    if (a === b) {
      return true;
    } else {
      return a.code === b.code && a.size === b.size && equals14(a.bytes, b.bytes);
    }
  };
  var Digest7 = class {
    constructor(code8, size, digest2, bytes) {
      this.code = code8;
      this.size = size;
      this.digest = digest2;
      this.bytes = bytes;
    }
  };

  // node_modules/@ceramicnetwork/stream-model/node_modules/@ipld/dag-cbor/node_modules/multiformats/esm/vendor/base-x.js
  function base9(ALPHABET, name8) {
    if (ALPHABET.length >= 255) {
      throw new TypeError("Alphabet too long");
    }
    var BASE_MAP = new Uint8Array(256);
    for (var j = 0; j < BASE_MAP.length; j++) {
      BASE_MAP[j] = 255;
    }
    for (var i = 0; i < ALPHABET.length; i++) {
      var x = ALPHABET.charAt(i);
      var xc = x.charCodeAt(0);
      if (BASE_MAP[xc] !== 255) {
        throw new TypeError(x + " is ambiguous");
      }
      BASE_MAP[xc] = i;
    }
    var BASE = ALPHABET.length;
    var LEADER = ALPHABET.charAt(0);
    var FACTOR = Math.log(BASE) / Math.log(256);
    var iFACTOR = Math.log(256) / Math.log(BASE);
    function encode31(source) {
      if (source instanceof Uint8Array)
        ;
      else if (ArrayBuffer.isView(source)) {
        source = new Uint8Array(source.buffer, source.byteOffset, source.byteLength);
      } else if (Array.isArray(source)) {
        source = Uint8Array.from(source);
      }
      if (!(source instanceof Uint8Array)) {
        throw new TypeError("Expected Uint8Array");
      }
      if (source.length === 0) {
        return "";
      }
      var zeroes = 0;
      var length10 = 0;
      var pbegin = 0;
      var pend = source.length;
      while (pbegin !== pend && source[pbegin] === 0) {
        pbegin++;
        zeroes++;
      }
      var size = (pend - pbegin) * iFACTOR + 1 >>> 0;
      var b58 = new Uint8Array(size);
      while (pbegin !== pend) {
        var carry = source[pbegin];
        var i2 = 0;
        for (var it1 = size - 1; (carry !== 0 || i2 < length10) && it1 !== -1; it1--, i2++) {
          carry += 256 * b58[it1] >>> 0;
          b58[it1] = carry % BASE >>> 0;
          carry = carry / BASE >>> 0;
        }
        if (carry !== 0) {
          throw new Error("Non-zero carry");
        }
        length10 = i2;
        pbegin++;
      }
      var it2 = size - length10;
      while (it2 !== size && b58[it2] === 0) {
        it2++;
      }
      var str = LEADER.repeat(zeroes);
      for (; it2 < size; ++it2) {
        str += ALPHABET.charAt(b58[it2]);
      }
      return str;
    }
    function decodeUnsafe(source) {
      if (typeof source !== "string") {
        throw new TypeError("Expected String");
      }
      if (source.length === 0) {
        return new Uint8Array();
      }
      var psz = 0;
      if (source[psz] === " ") {
        return;
      }
      var zeroes = 0;
      var length10 = 0;
      while (source[psz] === LEADER) {
        zeroes++;
        psz++;
      }
      var size = (source.length - psz) * FACTOR + 1 >>> 0;
      var b256 = new Uint8Array(size);
      while (source[psz]) {
        var carry = BASE_MAP[source.charCodeAt(psz)];
        if (carry === 255) {
          return;
        }
        var i2 = 0;
        for (var it3 = size - 1; (carry !== 0 || i2 < length10) && it3 !== -1; it3--, i2++) {
          carry += BASE * b256[it3] >>> 0;
          b256[it3] = carry % 256 >>> 0;
          carry = carry / 256 >>> 0;
        }
        if (carry !== 0) {
          throw new Error("Non-zero carry");
        }
        length10 = i2;
        psz++;
      }
      if (source[psz] === " ") {
        return;
      }
      var it4 = size - length10;
      while (it4 !== size && b256[it4] === 0) {
        it4++;
      }
      var vch = new Uint8Array(zeroes + (size - it4));
      var j2 = zeroes;
      while (it4 !== size) {
        vch[j2++] = b256[it4++];
      }
      return vch;
    }
    function decode45(string2) {
      var buffer2 = decodeUnsafe(string2);
      if (buffer2) {
        return buffer2;
      }
      throw new Error(`Non-${name8} character`);
    }
    return {
      encode: encode31,
      decodeUnsafe,
      decode: decode45
    };
  }
  var src7 = base9;
  var _brrp__multiformats_scope_baseX7 = src7;
  var base_x_default7 = _brrp__multiformats_scope_baseX7;

  // node_modules/@ceramicnetwork/stream-model/node_modules/@ipld/dag-cbor/node_modules/multiformats/esm/src/bases/base.js
  var Encoder7 = class {
    constructor(name8, prefix, baseEncode) {
      this.name = name8;
      this.prefix = prefix;
      this.baseEncode = baseEncode;
    }
    encode(bytes) {
      if (bytes instanceof Uint8Array) {
        return `${this.prefix}${this.baseEncode(bytes)}`;
      } else {
        throw Error("Unknown type, must be binary type");
      }
    }
  };
  var Decoder7 = class {
    constructor(name8, prefix, baseDecode) {
      this.name = name8;
      this.prefix = prefix;
      if (prefix.codePointAt(0) === void 0) {
        throw new Error("Invalid prefix character");
      }
      this.prefixCodePoint = prefix.codePointAt(0);
      this.baseDecode = baseDecode;
    }
    decode(text) {
      if (typeof text === "string") {
        if (text.codePointAt(0) !== this.prefixCodePoint) {
          throw Error(`Unable to decode multibase string ${JSON.stringify(text)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
        }
        return this.baseDecode(text.slice(this.prefix.length));
      } else {
        throw Error("Can only multibase decode strings");
      }
    }
    or(decoder) {
      return or7(this, decoder);
    }
  };
  var ComposedDecoder7 = class {
    constructor(decoders) {
      this.decoders = decoders;
    }
    or(decoder) {
      return or7(this, decoder);
    }
    decode(input) {
      const prefix = input[0];
      const decoder = this.decoders[prefix];
      if (decoder) {
        return decoder.decode(input);
      } else {
        throw RangeError(`Unable to decode multibase string ${JSON.stringify(input)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
      }
    }
  };
  var or7 = (left, right) => new ComposedDecoder7({
    ...left.decoders || { [left.prefix]: left },
    ...right.decoders || { [right.prefix]: right }
  });
  var Codec7 = class {
    constructor(name8, prefix, baseEncode, baseDecode) {
      this.name = name8;
      this.prefix = prefix;
      this.baseEncode = baseEncode;
      this.baseDecode = baseDecode;
      this.encoder = new Encoder7(name8, prefix, baseEncode);
      this.decoder = new Decoder7(name8, prefix, baseDecode);
    }
    encode(input) {
      return this.encoder.encode(input);
    }
    decode(input) {
      return this.decoder.decode(input);
    }
  };
  var from10 = ({ name: name8, prefix, encode: encode31, decode: decode45 }) => new Codec7(name8, prefix, encode31, decode45);
  var baseX7 = ({ prefix, name: name8, alphabet: alphabet2 }) => {
    const { encode: encode31, decode: decode45 } = base_x_default7(alphabet2, name8);
    return from10({
      prefix,
      name: name8,
      encode: encode31,
      decode: (text) => coerce7(decode45(text))
    });
  };
  var decode34 = (string2, alphabet2, bitsPerChar, name8) => {
    const codes = {};
    for (let i = 0; i < alphabet2.length; ++i) {
      codes[alphabet2[i]] = i;
    }
    let end = string2.length;
    while (string2[end - 1] === "=") {
      --end;
    }
    const out = new Uint8Array(end * bitsPerChar / 8 | 0);
    let bits = 0;
    let buffer2 = 0;
    let written = 0;
    for (let i = 0; i < end; ++i) {
      const value = codes[string2[i]];
      if (value === void 0) {
        throw new SyntaxError(`Non-${name8} character`);
      }
      buffer2 = buffer2 << bitsPerChar | value;
      bits += bitsPerChar;
      if (bits >= 8) {
        bits -= 8;
        out[written++] = 255 & buffer2 >> bits;
      }
    }
    if (bits >= bitsPerChar || 255 & buffer2 << 8 - bits) {
      throw new SyntaxError("Unexpected end of data");
    }
    return out;
  };
  var encode23 = (data, alphabet2, bitsPerChar) => {
    const pad = alphabet2[alphabet2.length - 1] === "=";
    const mask = (1 << bitsPerChar) - 1;
    let out = "";
    let bits = 0;
    let buffer2 = 0;
    for (let i = 0; i < data.length; ++i) {
      buffer2 = buffer2 << 8 | data[i];
      bits += 8;
      while (bits > bitsPerChar) {
        bits -= bitsPerChar;
        out += alphabet2[mask & buffer2 >> bits];
      }
    }
    if (bits) {
      out += alphabet2[mask & buffer2 << bitsPerChar - bits];
    }
    if (pad) {
      while (out.length * bitsPerChar & 7) {
        out += "=";
      }
    }
    return out;
  };
  var rfc46487 = ({ name: name8, prefix, bitsPerChar, alphabet: alphabet2 }) => {
    return from10({
      prefix,
      name: name8,
      encode(input) {
        return encode23(input, alphabet2, bitsPerChar);
      },
      decode(input) {
        return decode34(input, alphabet2, bitsPerChar, name8);
      }
    });
  };

  // node_modules/@ceramicnetwork/stream-model/node_modules/@ipld/dag-cbor/node_modules/multiformats/esm/src/bases/base58.js
  var base58btc7 = baseX7({
    name: "base58btc",
    prefix: "z",
    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
  });
  var base58flickr7 = baseX7({
    name: "base58flickr",
    prefix: "Z",
    alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
  });

  // node_modules/@ceramicnetwork/stream-model/node_modules/@ipld/dag-cbor/node_modules/multiformats/esm/src/bases/base32.js
  var base327 = rfc46487({
    prefix: "b",
    name: "base32",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
    bitsPerChar: 5
  });
  var base32upper7 = rfc46487({
    prefix: "B",
    name: "base32upper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
    bitsPerChar: 5
  });
  var base32pad7 = rfc46487({
    prefix: "c",
    name: "base32pad",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
    bitsPerChar: 5
  });
  var base32padupper7 = rfc46487({
    prefix: "C",
    name: "base32padupper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
    bitsPerChar: 5
  });
  var base32hex7 = rfc46487({
    prefix: "v",
    name: "base32hex",
    alphabet: "0123456789abcdefghijklmnopqrstuv",
    bitsPerChar: 5
  });
  var base32hexupper7 = rfc46487({
    prefix: "V",
    name: "base32hexupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
    bitsPerChar: 5
  });
  var base32hexpad7 = rfc46487({
    prefix: "t",
    name: "base32hexpad",
    alphabet: "0123456789abcdefghijklmnopqrstuv=",
    bitsPerChar: 5
  });
  var base32hexpadupper7 = rfc46487({
    prefix: "T",
    name: "base32hexpadupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
    bitsPerChar: 5
  });
  var base32z7 = rfc46487({
    prefix: "h",
    name: "base32z",
    alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
    bitsPerChar: 5
  });

  // node_modules/@ceramicnetwork/stream-model/node_modules/@ipld/dag-cbor/node_modules/multiformats/esm/src/cid.js
  var CID7 = class _CID {
    constructor(version7, code8, multihash, bytes) {
      this.code = code8;
      this.version = version7;
      this.multihash = multihash;
      this.bytes = bytes;
      this.byteOffset = bytes.byteOffset;
      this.byteLength = bytes.byteLength;
      this.asCID = this;
      this._baseCache = /* @__PURE__ */ new Map();
      Object.defineProperties(this, {
        byteOffset: hidden5,
        byteLength: hidden5,
        code: readonly7,
        version: readonly7,
        multihash: readonly7,
        bytes: readonly7,
        _baseCache: hidden5,
        asCID: hidden5
      });
    }
    toV0() {
      switch (this.version) {
        case 0: {
          return this;
        }
        default: {
          const { code: code8, multihash } = this;
          if (code8 !== DAG_PB_CODE7) {
            throw new Error("Cannot convert a non dag-pb CID to CIDv0");
          }
          if (multihash.code !== SHA_256_CODE7) {
            throw new Error("Cannot convert non sha2-256 multihash CID to CIDv0");
          }
          return _CID.createV0(multihash);
        }
      }
    }
    toV1() {
      switch (this.version) {
        case 0: {
          const { code: code8, digest: digest2 } = this.multihash;
          const multihash = create7(code8, digest2);
          return _CID.createV1(this.code, multihash);
        }
        case 1: {
          return this;
        }
        default: {
          throw Error(`Can not convert CID version ${this.version} to version 0. This is a bug please report`);
        }
      }
    }
    equals(other) {
      return other && this.code === other.code && this.version === other.version && equals15(this.multihash, other.multihash);
    }
    toString(base13) {
      const { bytes, version: version7, _baseCache } = this;
      switch (version7) {
        case 0:
          return toStringV07(bytes, _baseCache, base13 || base58btc7.encoder);
        default:
          return toStringV17(bytes, _baseCache, base13 || base327.encoder);
      }
    }
    toJSON() {
      return {
        code: this.code,
        version: this.version,
        hash: this.multihash.bytes
      };
    }
    get [Symbol.toStringTag]() {
      return "CID";
    }
    [Symbol.for("nodejs.util.inspect.custom")]() {
      return "CID(" + this.toString() + ")";
    }
    static isCID(value) {
      deprecate5(/^0\.0/, IS_CID_DEPRECATION5);
      return !!(value && (value[cidSymbol7] || value.asCID === value));
    }
    get toBaseEncodedString() {
      throw new Error("Deprecated, use .toString()");
    }
    get codec() {
      throw new Error('"codec" property is deprecated, use integer "code" property instead');
    }
    get buffer() {
      throw new Error("Deprecated .buffer property, use .bytes to get Uint8Array instead");
    }
    get multibaseName() {
      throw new Error('"multibaseName" property is deprecated');
    }
    get prefix() {
      throw new Error('"prefix" property is deprecated');
    }
    static asCID(value) {
      if (value instanceof _CID) {
        return value;
      } else if (value != null && value.asCID === value) {
        const { version: version7, code: code8, multihash, bytes } = value;
        return new _CID(version7, code8, multihash, bytes || encodeCID7(version7, code8, multihash.bytes));
      } else if (value != null && value[cidSymbol7] === true) {
        const { version: version7, multihash, code: code8 } = value;
        const digest2 = decode33(multihash);
        return _CID.create(version7, code8, digest2);
      } else {
        return null;
      }
    }
    static create(version7, code8, digest2) {
      if (typeof code8 !== "number") {
        throw new Error("String codecs are no longer supported");
      }
      switch (version7) {
        case 0: {
          if (code8 !== DAG_PB_CODE7) {
            throw new Error(`Version 0 CID must use dag-pb (code: ${DAG_PB_CODE7}) block encoding`);
          } else {
            return new _CID(version7, code8, digest2, digest2.bytes);
          }
        }
        case 1: {
          const bytes = encodeCID7(version7, code8, digest2.bytes);
          return new _CID(version7, code8, digest2, bytes);
        }
        default: {
          throw new Error("Invalid version");
        }
      }
    }
    static createV0(digest2) {
      return _CID.create(0, DAG_PB_CODE7, digest2);
    }
    static createV1(code8, digest2) {
      return _CID.create(1, code8, digest2);
    }
    static decode(bytes) {
      const [cid, remainder] = _CID.decodeFirst(bytes);
      if (remainder.length) {
        throw new Error("Incorrect length");
      }
      return cid;
    }
    static decodeFirst(bytes) {
      const specs = _CID.inspectBytes(bytes);
      const prefixSize = specs.size - specs.multihashSize;
      const multihashBytes = coerce7(bytes.subarray(prefixSize, prefixSize + specs.multihashSize));
      if (multihashBytes.byteLength !== specs.multihashSize) {
        throw new Error("Incorrect length");
      }
      const digestBytes = multihashBytes.subarray(specs.multihashSize - specs.digestSize);
      const digest2 = new Digest7(specs.multihashCode, specs.digestSize, digestBytes, multihashBytes);
      const cid = specs.version === 0 ? _CID.createV0(digest2) : _CID.createV1(specs.codec, digest2);
      return [
        cid,
        bytes.subarray(specs.size)
      ];
    }
    static inspectBytes(initialBytes) {
      let offset = 0;
      const next = () => {
        const [i, length10] = decode32(initialBytes.subarray(offset));
        offset += length10;
        return i;
      };
      let version7 = next();
      let codec = DAG_PB_CODE7;
      if (version7 === 18) {
        version7 = 0;
        offset = 0;
      } else if (version7 === 1) {
        codec = next();
      }
      if (version7 !== 0 && version7 !== 1) {
        throw new RangeError(`Invalid CID version ${version7}`);
      }
      const prefixSize = offset;
      const multihashCode = next();
      const digestSize = next();
      const size = offset + digestSize;
      const multihashSize = size - prefixSize;
      return {
        version: version7,
        codec,
        multihashCode,
        digestSize,
        multihashSize,
        size
      };
    }
    static parse(source, base13) {
      const [prefix, bytes] = parseCIDtoBytes7(source, base13);
      const cid = _CID.decode(bytes);
      cid._baseCache.set(prefix, source);
      return cid;
    }
  };
  var parseCIDtoBytes7 = (source, base13) => {
    switch (source[0]) {
      case "Q": {
        const decoder = base13 || base58btc7;
        return [
          base58btc7.prefix,
          decoder.decode(`${base58btc7.prefix}${source}`)
        ];
      }
      case base58btc7.prefix: {
        const decoder = base13 || base58btc7;
        return [
          base58btc7.prefix,
          decoder.decode(source)
        ];
      }
      case base327.prefix: {
        const decoder = base13 || base327;
        return [
          base327.prefix,
          decoder.decode(source)
        ];
      }
      default: {
        if (base13 == null) {
          throw Error("To parse non base32 or base58btc encoded CID multibase decoder must be provided");
        }
        return [
          source[0],
          base13.decode(source)
        ];
      }
    }
  };
  var toStringV07 = (bytes, cache4, base13) => {
    const { prefix } = base13;
    if (prefix !== base58btc7.prefix) {
      throw Error(`Cannot string encode V0 in ${base13.name} encoding`);
    }
    const cid = cache4.get(prefix);
    if (cid == null) {
      const cid2 = base13.encode(bytes).slice(1);
      cache4.set(prefix, cid2);
      return cid2;
    } else {
      return cid;
    }
  };
  var toStringV17 = (bytes, cache4, base13) => {
    const { prefix } = base13;
    const cid = cache4.get(prefix);
    if (cid == null) {
      const cid2 = base13.encode(bytes);
      cache4.set(prefix, cid2);
      return cid2;
    } else {
      return cid;
    }
  };
  var DAG_PB_CODE7 = 112;
  var SHA_256_CODE7 = 18;
  var encodeCID7 = (version7, code8, multihash) => {
    const codeOffset = encodingLength7(version7);
    const hashOffset = codeOffset + encodingLength7(code8);
    const bytes = new Uint8Array(hashOffset + multihash.byteLength);
    encodeTo7(version7, bytes, 0);
    encodeTo7(code8, bytes, codeOffset);
    bytes.set(multihash, hashOffset);
    return bytes;
  };
  var cidSymbol7 = Symbol.for("@ipld/js-cid/CID");
  var readonly7 = {
    writable: false,
    configurable: false,
    enumerable: true
  };
  var hidden5 = {
    writable: false,
    enumerable: false,
    configurable: false
  };
  var version5 = "0.0.0-dev";
  var deprecate5 = (range, message) => {
    if (range.test(version5)) {
      console.warn(message);
    } else {
      throw new Error(message);
    }
  };
  var IS_CID_DEPRECATION5 = `CID.isCID(v) is deprecated and will be removed in the next major release.
Following code pattern:

if (CID.isCID(value)) {
  doSomethingWithCID(value)
}

Is replaced with:

const cid = CID.asCID(value)
if (cid) {
  // Make sure to use cid instead of value
  doSomethingWithCID(cid)
}
`;

  // node_modules/@ceramicnetwork/stream-model/node_modules/@ipld/dag-cbor/esm/index.js
  var CID_CBOR_TAG5 = 42;
  function cidEncoder5(obj) {
    if (obj.asCID !== obj) {
      return null;
    }
    const cid = CID7.asCID(obj);
    if (!cid) {
      return null;
    }
    const bytes = new Uint8Array(cid.bytes.byteLength + 1);
    bytes.set(cid.bytes, 1);
    return [
      new Token(Type.tag, CID_CBOR_TAG5),
      new Token(Type.bytes, bytes)
    ];
  }
  function undefinedEncoder5() {
    throw new Error("`undefined` is not supported by the IPLD Data Model and cannot be encoded");
  }
  function numberEncoder5(num) {
    if (Number.isNaN(num)) {
      throw new Error("`NaN` is not supported by the IPLD Data Model and cannot be encoded");
    }
    if (num === Infinity || num === -Infinity) {
      throw new Error("`Infinity` and `-Infinity` is not supported by the IPLD Data Model and cannot be encoded");
    }
    return null;
  }
  var encodeOptions5 = {
    float64: true,
    typeEncoders: {
      Object: cidEncoder5,
      undefined: undefinedEncoder5,
      number: numberEncoder5
    }
  };
  function cidDecoder5(bytes) {
    if (bytes[0] !== 0) {
      throw new Error("Invalid CID for CBOR tag 42; expected leading 0x00");
    }
    return CID7.decode(bytes.subarray(1));
  }
  var decodeOptions5 = {
    allowIndefinite: false,
    coerceUndefinedToNull: true,
    allowNaN: false,
    allowInfinity: false,
    allowBigInt: true,
    strict: true,
    useMaps: false,
    tags: []
  };
  decodeOptions5.tags[CID_CBOR_TAG5] = cidDecoder5;
  var name6 = "dag-cbor";
  var code6 = 113;
  var encode24 = (node) => encode6(node, encodeOptions5);
  var decode35 = (data) => decode6(data, decodeOptions5);

  // node_modules/@ceramicnetwork/stream-model/node_modules/@ceramicnetwork/streamid/lib/try-catch.util.js
  function tryCatch5(fn) {
    try {
      return fn();
    } catch (e) {
      return e;
    }
  }

  // node_modules/@ceramicnetwork/stream-model/node_modules/@ceramicnetwork/streamid/lib/reading-bytes.js
  var import_varint20 = __toESM(require_varint(), 1);
  function readVarint5(bytes) {
    const value = import_varint20.default.decode(bytes);
    const readLength = import_varint20.default.decode.bytes;
    const remainder = bytes.subarray(readLength);
    return [value, remainder, readLength];
  }
  function isCidVersion5(input) {
    return input === 0 || input === 1;
  }
  function readCid5(bytes) {
    const [cidVersion, cidVersionRemainder] = readVarint5(bytes);
    if (!isCidVersion5(cidVersion)) {
      throw new Error(`Unknown CID version ${cidVersion}`);
    }
    const [codec, codecRemainder] = readVarint5(cidVersionRemainder);
    const [, mhCodecRemainder, mhCodecLength] = readVarint5(codecRemainder);
    const [mhLength, , mhLengthLength] = readVarint5(mhCodecRemainder);
    const multihashBytes = codecRemainder.subarray(0, mhCodecLength + mhLengthLength + mhLength);
    const multihashBytesRemainder = codecRemainder.subarray(mhCodecLength + mhLengthLength + mhLength);
    return [CID.create(cidVersion, codec, decode3(multihashBytes)), multihashBytesRemainder];
  }

  // node_modules/@ceramicnetwork/stream-model/node_modules/@ceramicnetwork/streamid/lib/stream-ref-parsing.js
  function fromBytes13(input, title = "StreamRef") {
    const [streamCodec, streamCodecRemainder] = readVarint5(input);
    if (streamCodec !== STREAMID_CODEC5)
      throw new Error(`Invalid ${title}, does not include streamid codec`);
    const [type, streamtypeRemainder] = readVarint5(streamCodecRemainder);
    const cidResult = readCid5(streamtypeRemainder);
    const [genesis, genesisRemainder] = cidResult;
    if (genesisRemainder.length === 0) {
      return {
        kind: "stream-id",
        type,
        genesis
      };
    } else if (genesisRemainder.length === 1 && genesisRemainder[0] === 0) {
      return {
        kind: "commit-id",
        type,
        genesis,
        commit: null
      };
    } else {
      const [commit] = readCid5(genesisRemainder);
      return {
        kind: "commit-id",
        type,
        genesis,
        commit
      };
    }
  }
  var URL_PATTERN5 = /(ceramic:\/\/|\/ceramic\/)?([a-zA-Z0-9]+)(\?commit=([a-zA-Z0-9]+))?/;
  function fromString16(input, title = "StreamRef") {
    const protocolMatch = URL_PATTERN5.exec(input) || [];
    const base13 = protocolMatch[2];
    if (!base13)
      throw new Error(`Malformed ${title} string: ${input}`);
    const bytes = base36.decode(base13);
    const streamRef = fromBytes13(bytes);
    const commit = protocolMatch[4];
    if (commit) {
      return {
        kind: "commit-id",
        type: streamRef.type,
        genesis: streamRef.genesis,
        commit: parseCommit5(streamRef.genesis, commit)
      };
    }
    return streamRef;
  }
  function parseCID5(input) {
    try {
      return typeof input === "string" ? CID.parse(input) : CID.asCID(input);
    } catch {
      return null;
    }
  }
  function parseCommit5(genesis, commit = null) {
    if (!commit)
      return null;
    if (commit === "0")
      return null;
    const commitCID = parseCID5(commit);
    if (commitCID) {
      if (genesis.equals(commitCID)) {
        return null;
      } else {
        return commitCID;
      }
    } else {
      throw new Error("Cannot specify commit as a number except to request commit 0 (the genesis commit)");
    }
  }

  // node_modules/@ceramicnetwork/stream-model/node_modules/@ceramicnetwork/streamid/lib/stream-id.js
  var __decorate11 = function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata9 = function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var InvalidStreamIDBytesError5 = class extends Error {
    constructor(bytes) {
      super(`Invalid StreamID bytes ${base36.encode(bytes)}: contains commit`);
    }
  };
  var InvalidStreamIDStringError5 = class extends Error {
    constructor(input) {
      super(`Invalid StreamID string ${input}: contains commit`);
    }
  };
  function fromBytes14(bytes) {
    const parsed = fromBytes13(bytes, "StreamID");
    if (parsed.kind === "stream-id") {
      return new StreamID5(parsed.type, parsed.genesis);
    }
    throw new InvalidStreamIDBytesError5(bytes);
  }
  function fromBytesNoThrow9(bytes) {
    return tryCatch5(() => fromBytes14(bytes));
  }
  function fromString17(input) {
    const parsed = fromString16(input, "StreamID");
    if (parsed.kind === "stream-id") {
      return new StreamID5(parsed.type, parsed.genesis);
    }
    throw new InvalidStreamIDStringError5(input);
  }
  function fromStringNoThrow9(input) {
    return tryCatch5(() => fromString17(input));
  }
  var TAG9 = Symbol.for("@ceramicnetwork/streamid/StreamID");
  var StreamID5 = class _StreamID {
    constructor(type, cid) {
      this._tag = TAG9;
      if (!(type || type === 0))
        throw new Error("StreamID constructor: type required");
      if (!cid)
        throw new Error("StreamID constructor: cid required");
      this._type = typeof type === "string" ? StreamType5.codeByName(type) : type;
      this._cid = typeof cid === "string" ? CID.parse(cid) : cid;
    }
    static isInstance(instance) {
      return typeof instance === "object" && "_tag" in instance && instance._tag === TAG9;
    }
    static async fromGenesis(type, genesis) {
      const block = await encode5({ value: genesis, codec: esm_exports5, hasher: sha256 });
      return new _StreamID(type, block.cid);
    }
    get type() {
      return this._type;
    }
    get typeName() {
      return StreamType5.nameByCode(this._type);
    }
    get cid() {
      return this._cid;
    }
    get bytes() {
      const codec = import_varint21.default.encode(STREAMID_CODEC5);
      const type = import_varint21.default.encode(this.type);
      return concat([codec, type, this.cid.bytes]);
    }
    get baseID() {
      return new _StreamID(this._type, this._cid);
    }
    equals(other) {
      if (_StreamID.isInstance(other)) {
        return this.type === other.type && this.cid.equals(other.cid);
      } else {
        return false;
      }
    }
    toString() {
      return base36.encode(this.bytes);
    }
    toUrl() {
      return `ceramic://${this.toString()}`;
    }
    [Symbol.for("nodejs.util.inspect.custom")]() {
      return `StreamID(${this.toString()})`;
    }
    [Symbol.toPrimitive]() {
      return this.toString();
    }
  };
  StreamID5.fromBytes = fromBytes14;
  StreamID5.fromBytesNoThrow = fromBytesNoThrow9;
  StreamID5.fromString = fromString17;
  StreamID5.fromStringNoThrow = fromStringNoThrow9;
  __decorate11([
    Memoize(),
    __metadata9("design:type", String),
    __metadata9("design:paramtypes", [])
  ], StreamID5.prototype, "typeName", null);
  __decorate11([
    Memoize(),
    __metadata9("design:type", Uint8Array),
    __metadata9("design:paramtypes", [])
  ], StreamID5.prototype, "bytes", null);
  __decorate11([
    Memoize(),
    __metadata9("design:type", StreamID5),
    __metadata9("design:paramtypes", [])
  ], StreamID5.prototype, "baseID", null);
  __decorate11([
    Memoize(),
    __metadata9("design:type", Function),
    __metadata9("design:paramtypes", []),
    __metadata9("design:returntype", String)
  ], StreamID5.prototype, "toString", null);
  __decorate11([
    Memoize(),
    __metadata9("design:type", Function),
    __metadata9("design:paramtypes", []),
    __metadata9("design:returntype", String)
  ], StreamID5.prototype, "toUrl", null);

  // node_modules/@ceramicnetwork/stream-model/node_modules/@ceramicnetwork/streamid/lib/commit-id.js
  var __decorate12 = function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata10 = function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var __classPrivateFieldSet5 = function(receiver, state, value, kind, f) {
    if (kind === "m")
      throw new TypeError("Private method is not writable");
    if (kind === "a" && !f)
      throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
      throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
  };
  var __classPrivateFieldGet5 = function(receiver, state, kind, f) {
    if (kind === "a" && !f)
      throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
      throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
  };
  var _CommitID_type5;
  var _CommitID_cid5;
  var _CommitID_commit5;
  var InvalidCommitIDBytesError5 = class extends Error {
    constructor(bytes) {
      super(`Error while parsing CommitID from bytes ${base36.encode(bytes)}: no commit information provided`);
    }
  };
  var InvalidCommitIDStringError5 = class extends Error {
    constructor(input) {
      super(`Error while parsing CommitID from string ${input}: no commit information provided`);
    }
  };
  function fromBytes15(bytes) {
    const parsed = fromBytes13(bytes, "CommitID");
    if (parsed.kind === "commit-id") {
      return new CommitID5(parsed.type, parsed.genesis, parsed.commit);
    }
    throw new InvalidCommitIDBytesError5(bytes);
  }
  function fromBytesNoThrow10(bytes) {
    return tryCatch5(() => fromBytes15(bytes));
  }
  function fromString18(input) {
    const parsed = fromString16(input, "CommitID");
    if (parsed.kind === "commit-id") {
      return new CommitID5(parsed.type, parsed.genesis, parsed.commit);
    }
    throw new InvalidCommitIDStringError5(input);
  }
  function fromStringNoThrow10(input) {
    return tryCatch5(() => fromString18(input));
  }
  var TAG10 = Symbol.for("@ceramicnetwork/streamid/CommitID");
  function make5(stream, commit) {
    return new CommitID5(stream.type, stream.cid, commit);
  }
  var CommitID5 = class {
    constructor(type, cid, commit = null) {
      this._tag = TAG10;
      _CommitID_type5.set(this, void 0);
      _CommitID_cid5.set(this, void 0);
      _CommitID_commit5.set(this, void 0);
      if (!type && type !== 0)
        throw new Error("constructor: type required");
      if (!cid)
        throw new Error("constructor: cid required");
      __classPrivateFieldSet5(this, _CommitID_type5, typeof type === "string" ? StreamType5.codeByName(type) : type, "f");
      __classPrivateFieldSet5(this, _CommitID_cid5, typeof cid === "string" ? CID.parse(cid) : cid, "f");
      __classPrivateFieldSet5(this, _CommitID_commit5, parseCommit5(__classPrivateFieldGet5(this, _CommitID_cid5, "f"), commit), "f");
    }
    static isInstance(instance) {
      return typeof instance === "object" && "_tag" in instance && instance._tag === TAG10;
    }
    get baseID() {
      return new StreamID5(__classPrivateFieldGet5(this, _CommitID_type5, "f"), __classPrivateFieldGet5(this, _CommitID_cid5, "f"));
    }
    get type() {
      return __classPrivateFieldGet5(this, _CommitID_type5, "f");
    }
    get typeName() {
      return StreamType5.nameByCode(__classPrivateFieldGet5(this, _CommitID_type5, "f"));
    }
    get cid() {
      return __classPrivateFieldGet5(this, _CommitID_cid5, "f");
    }
    get commit() {
      return __classPrivateFieldGet5(this, _CommitID_commit5, "f") || __classPrivateFieldGet5(this, _CommitID_cid5, "f");
    }
    get bytes() {
      const codec = import_varint22.default.encode(STREAMID_CODEC5);
      const type = import_varint22.default.encode(this.type);
      const commitBytes = __classPrivateFieldGet5(this, _CommitID_commit5, "f")?.bytes || new Uint8Array([0]);
      return concat([codec, type, this.cid.bytes, commitBytes]);
    }
    equals(other) {
      return this.type === other.type && this.cid.equals(other.cid) && this.commit.equals(other.commit);
    }
    toString() {
      return base36.encode(this.bytes);
    }
    toUrl() {
      return `ceramic://${this.toString()}`;
    }
    [(_CommitID_type5 = /* @__PURE__ */ new WeakMap(), _CommitID_cid5 = /* @__PURE__ */ new WeakMap(), _CommitID_commit5 = /* @__PURE__ */ new WeakMap(), Symbol.for("nodejs.util.inspect.custom"))]() {
      return `CommitID(${this.toString()})`;
    }
    [Symbol.toPrimitive]() {
      return this.toString();
    }
  };
  CommitID5.fromBytes = fromBytes15;
  CommitID5.fromBytesNoThrow = fromBytesNoThrow10;
  CommitID5.fromString = fromString18;
  CommitID5.fromStringNoThrow = fromStringNoThrow10;
  CommitID5.make = make5;
  __decorate12([
    Memoize(),
    __metadata10("design:type", StreamID5),
    __metadata10("design:paramtypes", [])
  ], CommitID5.prototype, "baseID", null);
  __decorate12([
    Memoize(),
    __metadata10("design:type", String),
    __metadata10("design:paramtypes", [])
  ], CommitID5.prototype, "typeName", null);
  __decorate12([
    Memoize(),
    __metadata10("design:type", CID),
    __metadata10("design:paramtypes", [])
  ], CommitID5.prototype, "commit", null);
  __decorate12([
    Memoize(),
    __metadata10("design:type", Uint8Array),
    __metadata10("design:paramtypes", [])
  ], CommitID5.prototype, "bytes", null);
  __decorate12([
    Memoize(),
    __metadata10("design:type", Function),
    __metadata10("design:paramtypes", []),
    __metadata10("design:returntype", String)
  ], CommitID5.prototype, "toString", null);
  __decorate12([
    Memoize(),
    __metadata10("design:type", Function),
    __metadata10("design:paramtypes", []),
    __metadata10("design:returntype", String)
  ], CommitID5.prototype, "toUrl", null);

  // node_modules/@ceramicnetwork/stream-model/node_modules/@ceramicnetwork/streamid/lib/stream-ref.js
  var StreamRef4;
  (function(StreamRef6) {
    function fromBytes19(input) {
      const parsed = fromBytes13(input);
      switch (parsed.kind) {
        case "commit-id":
          return new CommitID5(parsed.type, parsed.genesis, parsed.commit);
        case "stream-id":
          return new StreamID5(parsed.type, parsed.genesis);
        default:
          throw new Error(`Malformed StreamRef bytes: ${base36.encode(input)}`);
      }
    }
    StreamRef6.fromBytes = fromBytes19;
    function fromString22(input) {
      const parsed = fromString16(input);
      switch (parsed.kind) {
        case "commit-id":
          return new CommitID5(parsed.type, parsed.genesis, parsed.commit);
        case "stream-id":
          return new StreamID5(parsed.type, parsed.genesis);
        default:
          throw new Error(`Malformed StreamRef string: ${input}`);
      }
    }
    StreamRef6.fromString = fromString22;
    function from14(input) {
      if (StreamID5.isInstance(input)) {
        return input;
      }
      if (CommitID5.isInstance(input)) {
        return input;
      }
      if (input instanceof Uint8Array) {
        return fromBytes19(input);
      }
      if (typeof input === "string") {
        return fromString22(input);
      }
      throw new Error(`Can not build CommitID or StreamID from ${JSON.stringify(input)}`);
    }
    StreamRef6.from = from14;
  })(StreamRef4 || (StreamRef4 = {}));

  // node_modules/@ceramicnetwork/stream-model/lib/model.js
  var __decorate13 = function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var Model_1;
  var MODEL_VERSION_REGEXP = /^[0-9]+\.[0-9]+$/;
  function parseModelVersion(version7) {
    if (!MODEL_VERSION_REGEXP.test(version7)) {
      throw new Error(`Unsupported version format: ${version7}`);
    }
    const [major, minor] = version7.split(".").map((part) => parseInt(part, 10));
    return [major, minor];
  }
  var DEFAULT_LOAD_OPTS3 = { sync: SyncOptions.PREFER_CACHE };
  async function _ensureAuthenticated(signer) {
    if (signer.did == null) {
      throw new Error("No DID provided");
    }
    if (!signer.did.authenticated) {
      await signer.did.authenticate();
      if (signer.loggerProvider) {
        signer.loggerProvider.getDiagnosticsLogger().imp(`Now authenticated as DID ${signer.did.id}`);
      }
    }
  }
  async function throwReadOnlyError3() {
    throw new Error("Historical stream commits cannot be modified. Load the stream without specifying a commit to make updates.");
  }
  var Model = Model_1 = class Model2 extends Stream {
    constructor() {
      super(...arguments);
      this._isReadOnly = false;
    }
    get content() {
      return super.content;
    }
    get metadata() {
      return { controller: this.state$.value.metadata.controllers[0], model: Model_1.MODEL };
    }
    static async create(ceramic, content, metadata) {
      Model_1.assertComplete(content);
      Model_1.assertVersionValid(content, "minor");
      Model_1.assertRelationsValid(content);
      const opts = {
        publish: true,
        anchor: true,
        sync: SyncOptions.NEVER_SYNC
      };
      const commit = await Model_1._makeGenesis(ceramic, content, metadata);
      const model = await ceramic.createStreamFromGenesis(Model_1.STREAM_TYPE_ID, commit, opts);
      return model;
    }
    static assertComplete(content, streamId) {
      if (!content.name) {
        if (streamId) {
          throw new Error(`Model with StreamID ${streamId.toString()} is missing a 'name' field`);
        } else {
          throw new Error(`Model is missing a 'name' field`);
        }
      }
      if (!content.version) {
        if (streamId) {
          throw new Error(`Model ${content.name} (${streamId.toString()}) is missing a 'version' field`);
        } else {
          throw new Error(`Model ${content.name} is missing a 'version' field`);
        }
      }
      if (!content.schema) {
        if (streamId) {
          throw new Error(`Model ${content.name} (${streamId.toString()}) is missing a 'schema' field`);
        } else {
          throw new Error(`Model ${content.name} is missing a 'schema' field`);
        }
      }
      if (!content.accountRelation) {
        if (streamId) {
          throw new Error(`Model ${content.name} (${streamId.toString()}) is missing a 'accountRelation' field`);
        } else {
          throw new Error(`Model ${content.name} is missing a 'accountRelation' field`);
        }
      }
    }
    static assertVersionValid(content, satisfies = "minor") {
      const [expectedMajor, expectedMinor] = parseModelVersion(Model_1.VERSION);
      const [major, minor] = parseModelVersion(content.version);
      if (major > expectedMajor || satisfies === "minor" && major === expectedMajor && minor > expectedMinor) {
        throw new Error(`Unsupported version ${content.version} for model ${content.name}, the maximum version supported by the Ceramic node is ${Model_1.VERSION}. Please update your Ceramic node to a newer version supporting at least version ${content.version} of the Model definition.`);
      }
    }
    static assertRelationsValid(content) {
      if (!content.relations) {
        return;
      }
      for (const [fieldName, relationDefinition] of Object.entries(content.relations)) {
        switch (relationDefinition.type) {
          case "account":
            continue;
          case "document":
            try {
              StreamID5.fromString(relationDefinition.model);
            } catch (err) {
              throw new Error(`Relation on field ${fieldName} has invalid model: ${err.toString()}`);
            }
            continue;
          default:
            throw new Error(`Relation on field ${fieldName} has unexpected type ${relationDefinition.type}`);
        }
      }
    }
    static async load(ceramic, streamId, opts = {}) {
      opts = { ...DEFAULT_LOAD_OPTS3, ...opts };
      const streamRef = StreamRef4.from(streamId);
      if (streamRef.type != Model_1.STREAM_TYPE_ID) {
        throw new Error(`StreamID ${streamRef.toString()} does not refer to a '${Model_1.STREAM_TYPE_NAME}' stream, but to a ${streamRef.typeName}`);
      }
      const model = await ceramic.loadStream(streamRef, opts);
      return model;
    }
    static async _makeGenesis(signer, content, metadata) {
      const commit = await this._makeRawGenesis(signer, content, metadata);
      return Model_1._signDagJWS(signer, commit);
    }
    static async _makeRawGenesis(signer, content, metadata) {
      if (content == null) {
        throw new Error(`Genesis content cannot be null`);
      }
      if (!metadata || !metadata.controller) {
        if (signer.did) {
          await _ensureAuthenticated(signer);
          metadata = { controller: signer.did.hasParent ? signer.did.parent : signer.did.id };
        } else {
          throw new Error("No controller specified");
        }
      }
      const header = {
        controllers: [metadata.controller],
        model: Model_1.MODEL.bytes,
        sep: "model"
      };
      return { data: content, header };
    }
    makeReadOnly() {
      this.sync = throwReadOnlyError3;
      this._isReadOnly = true;
    }
    get isReadOnly() {
      return this._isReadOnly;
    }
    static async _signDagJWS(signer, commit) {
      await _ensureAuthenticated(signer);
      return signer.did.createDagJWS(commit);
    }
  };
  Model.STREAM_TYPE_NAME = "model";
  Model.STREAM_TYPE_ID = 2;
  Model.MODEL = function() {
    const data = encode24("model-v1");
    const multihash = identity2.digest(data);
    const digest2 = create(code6, multihash.bytes);
    const cid = CID.createV1(code6, digest2);
    return new StreamID5("UNLOADABLE", cid);
  }();
  Model.VERSION = "1.0";
  Model = Model_1 = __decorate13([
    StreamStatic()
  ], Model);

  // node_modules/@ceramicnetwork/stream-model-instance/node_modules/@ipld/dag-cbor/esm/index.js
  var esm_exports6 = {};
  __export(esm_exports6, {
    code: () => code7,
    decode: () => decode40,
    encode: () => encode27,
    name: () => name7
  });

  // node_modules/@ceramicnetwork/stream-model-instance/node_modules/multiformats/esm/vendor/varint.js
  var encode_18 = encode25;
  var MSB8 = 128;
  var REST8 = 127;
  var MSBALL8 = ~REST8;
  var INT8 = Math.pow(2, 31);
  function encode25(num, out, offset) {
    out = out || [];
    offset = offset || 0;
    var oldOffset = offset;
    while (num >= INT8) {
      out[offset++] = num & 255 | MSB8;
      num /= 128;
    }
    while (num & MSBALL8) {
      out[offset++] = num & 255 | MSB8;
      num >>>= 7;
    }
    out[offset] = num | 0;
    encode25.bytes = offset - oldOffset + 1;
    return out;
  }
  var decode36 = read8;
  var MSB$18 = 128;
  var REST$18 = 127;
  function read8(buf2, offset) {
    var res = 0, offset = offset || 0, shift = 0, counter = offset, b, l = buf2.length;
    do {
      if (counter >= l) {
        read8.bytes = 0;
        throw new RangeError("Could not decode varint");
      }
      b = buf2[counter++];
      res += shift < 28 ? (b & REST$18) << shift : (b & REST$18) * Math.pow(2, shift);
      shift += 7;
    } while (b >= MSB$18);
    read8.bytes = counter - offset;
    return res;
  }
  var N18 = Math.pow(2, 7);
  var N28 = Math.pow(2, 14);
  var N38 = Math.pow(2, 21);
  var N48 = Math.pow(2, 28);
  var N58 = Math.pow(2, 35);
  var N68 = Math.pow(2, 42);
  var N78 = Math.pow(2, 49);
  var N88 = Math.pow(2, 56);
  var N98 = Math.pow(2, 63);
  var length8 = function(value) {
    return value < N18 ? 1 : value < N28 ? 2 : value < N38 ? 3 : value < N48 ? 4 : value < N58 ? 5 : value < N68 ? 6 : value < N78 ? 7 : value < N88 ? 8 : value < N98 ? 9 : 10;
  };
  var varint23 = {
    encode: encode_18,
    decode: decode36,
    encodingLength: length8
  };
  var _brrp_varint8 = varint23;
  var varint_default8 = _brrp_varint8;

  // node_modules/@ceramicnetwork/stream-model-instance/node_modules/multiformats/esm/src/varint.js
  var decode37 = (data, offset = 0) => {
    const code8 = varint_default8.decode(data, offset);
    return [
      code8,
      varint_default8.decode.bytes
    ];
  };
  var encodeTo8 = (int, target, offset = 0) => {
    varint_default8.encode(int, target, offset);
    return target;
  };
  var encodingLength8 = (int) => {
    return varint_default8.encodingLength(int);
  };

  // node_modules/@ceramicnetwork/stream-model-instance/node_modules/multiformats/esm/src/bytes.js
  var empty8 = new Uint8Array(0);
  var equals16 = (aa, bb) => {
    if (aa === bb)
      return true;
    if (aa.byteLength !== bb.byteLength) {
      return false;
    }
    for (let ii = 0; ii < aa.byteLength; ii++) {
      if (aa[ii] !== bb[ii]) {
        return false;
      }
    }
    return true;
  };
  var coerce8 = (o) => {
    if (o instanceof Uint8Array && o.constructor.name === "Uint8Array")
      return o;
    if (o instanceof ArrayBuffer)
      return new Uint8Array(o);
    if (ArrayBuffer.isView(o)) {
      return new Uint8Array(o.buffer, o.byteOffset, o.byteLength);
    }
    throw new Error("Unknown type, must be binary type");
  };

  // node_modules/@ceramicnetwork/stream-model-instance/node_modules/multiformats/esm/src/hashes/digest.js
  var create8 = (code8, digest2) => {
    const size = digest2.byteLength;
    const sizeOffset = encodingLength8(code8);
    const digestOffset = sizeOffset + encodingLength8(size);
    const bytes = new Uint8Array(digestOffset + size);
    encodeTo8(code8, bytes, 0);
    encodeTo8(size, bytes, sizeOffset);
    bytes.set(digest2, digestOffset);
    return new Digest8(code8, size, digest2, bytes);
  };
  var decode38 = (multihash) => {
    const bytes = coerce8(multihash);
    const [code8, sizeOffset] = decode37(bytes);
    const [size, digestOffset] = decode37(bytes.subarray(sizeOffset));
    const digest2 = bytes.subarray(sizeOffset + digestOffset);
    if (digest2.byteLength !== size) {
      throw new Error("Incorrect length");
    }
    return new Digest8(code8, size, digest2, bytes);
  };
  var equals17 = (a, b) => {
    if (a === b) {
      return true;
    } else {
      return a.code === b.code && a.size === b.size && equals16(a.bytes, b.bytes);
    }
  };
  var Digest8 = class {
    constructor(code8, size, digest2, bytes) {
      this.code = code8;
      this.size = size;
      this.digest = digest2;
      this.bytes = bytes;
    }
  };

  // node_modules/@ceramicnetwork/stream-model-instance/node_modules/multiformats/esm/vendor/base-x.js
  function base11(ALPHABET, name8) {
    if (ALPHABET.length >= 255) {
      throw new TypeError("Alphabet too long");
    }
    var BASE_MAP = new Uint8Array(256);
    for (var j = 0; j < BASE_MAP.length; j++) {
      BASE_MAP[j] = 255;
    }
    for (var i = 0; i < ALPHABET.length; i++) {
      var x = ALPHABET.charAt(i);
      var xc = x.charCodeAt(0);
      if (BASE_MAP[xc] !== 255) {
        throw new TypeError(x + " is ambiguous");
      }
      BASE_MAP[xc] = i;
    }
    var BASE = ALPHABET.length;
    var LEADER = ALPHABET.charAt(0);
    var FACTOR = Math.log(BASE) / Math.log(256);
    var iFACTOR = Math.log(256) / Math.log(BASE);
    function encode31(source) {
      if (source instanceof Uint8Array)
        ;
      else if (ArrayBuffer.isView(source)) {
        source = new Uint8Array(source.buffer, source.byteOffset, source.byteLength);
      } else if (Array.isArray(source)) {
        source = Uint8Array.from(source);
      }
      if (!(source instanceof Uint8Array)) {
        throw new TypeError("Expected Uint8Array");
      }
      if (source.length === 0) {
        return "";
      }
      var zeroes = 0;
      var length10 = 0;
      var pbegin = 0;
      var pend = source.length;
      while (pbegin !== pend && source[pbegin] === 0) {
        pbegin++;
        zeroes++;
      }
      var size = (pend - pbegin) * iFACTOR + 1 >>> 0;
      var b58 = new Uint8Array(size);
      while (pbegin !== pend) {
        var carry = source[pbegin];
        var i2 = 0;
        for (var it1 = size - 1; (carry !== 0 || i2 < length10) && it1 !== -1; it1--, i2++) {
          carry += 256 * b58[it1] >>> 0;
          b58[it1] = carry % BASE >>> 0;
          carry = carry / BASE >>> 0;
        }
        if (carry !== 0) {
          throw new Error("Non-zero carry");
        }
        length10 = i2;
        pbegin++;
      }
      var it2 = size - length10;
      while (it2 !== size && b58[it2] === 0) {
        it2++;
      }
      var str = LEADER.repeat(zeroes);
      for (; it2 < size; ++it2) {
        str += ALPHABET.charAt(b58[it2]);
      }
      return str;
    }
    function decodeUnsafe(source) {
      if (typeof source !== "string") {
        throw new TypeError("Expected String");
      }
      if (source.length === 0) {
        return new Uint8Array();
      }
      var psz = 0;
      if (source[psz] === " ") {
        return;
      }
      var zeroes = 0;
      var length10 = 0;
      while (source[psz] === LEADER) {
        zeroes++;
        psz++;
      }
      var size = (source.length - psz) * FACTOR + 1 >>> 0;
      var b256 = new Uint8Array(size);
      while (source[psz]) {
        var carry = BASE_MAP[source.charCodeAt(psz)];
        if (carry === 255) {
          return;
        }
        var i2 = 0;
        for (var it3 = size - 1; (carry !== 0 || i2 < length10) && it3 !== -1; it3--, i2++) {
          carry += BASE * b256[it3] >>> 0;
          b256[it3] = carry % 256 >>> 0;
          carry = carry / 256 >>> 0;
        }
        if (carry !== 0) {
          throw new Error("Non-zero carry");
        }
        length10 = i2;
        psz++;
      }
      if (source[psz] === " ") {
        return;
      }
      var it4 = size - length10;
      while (it4 !== size && b256[it4] === 0) {
        it4++;
      }
      var vch = new Uint8Array(zeroes + (size - it4));
      var j2 = zeroes;
      while (it4 !== size) {
        vch[j2++] = b256[it4++];
      }
      return vch;
    }
    function decode45(string2) {
      var buffer2 = decodeUnsafe(string2);
      if (buffer2) {
        return buffer2;
      }
      throw new Error(`Non-${name8} character`);
    }
    return {
      encode: encode31,
      decodeUnsafe,
      decode: decode45
    };
  }
  var src8 = base11;
  var _brrp__multiformats_scope_baseX8 = src8;
  var base_x_default8 = _brrp__multiformats_scope_baseX8;

  // node_modules/@ceramicnetwork/stream-model-instance/node_modules/multiformats/esm/src/bases/base.js
  var Encoder8 = class {
    constructor(name8, prefix, baseEncode) {
      this.name = name8;
      this.prefix = prefix;
      this.baseEncode = baseEncode;
    }
    encode(bytes) {
      if (bytes instanceof Uint8Array) {
        return `${this.prefix}${this.baseEncode(bytes)}`;
      } else {
        throw Error("Unknown type, must be binary type");
      }
    }
  };
  var Decoder8 = class {
    constructor(name8, prefix, baseDecode) {
      this.name = name8;
      this.prefix = prefix;
      if (prefix.codePointAt(0) === void 0) {
        throw new Error("Invalid prefix character");
      }
      this.prefixCodePoint = prefix.codePointAt(0);
      this.baseDecode = baseDecode;
    }
    decode(text) {
      if (typeof text === "string") {
        if (text.codePointAt(0) !== this.prefixCodePoint) {
          throw Error(`Unable to decode multibase string ${JSON.stringify(text)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
        }
        return this.baseDecode(text.slice(this.prefix.length));
      } else {
        throw Error("Can only multibase decode strings");
      }
    }
    or(decoder) {
      return or8(this, decoder);
    }
  };
  var ComposedDecoder8 = class {
    constructor(decoders) {
      this.decoders = decoders;
    }
    or(decoder) {
      return or8(this, decoder);
    }
    decode(input) {
      const prefix = input[0];
      const decoder = this.decoders[prefix];
      if (decoder) {
        return decoder.decode(input);
      } else {
        throw RangeError(`Unable to decode multibase string ${JSON.stringify(input)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
      }
    }
  };
  var or8 = (left, right) => new ComposedDecoder8({
    ...left.decoders || { [left.prefix]: left },
    ...right.decoders || { [right.prefix]: right }
  });
  var Codec8 = class {
    constructor(name8, prefix, baseEncode, baseDecode) {
      this.name = name8;
      this.prefix = prefix;
      this.baseEncode = baseEncode;
      this.baseDecode = baseDecode;
      this.encoder = new Encoder8(name8, prefix, baseEncode);
      this.decoder = new Decoder8(name8, prefix, baseDecode);
    }
    encode(input) {
      return this.encoder.encode(input);
    }
    decode(input) {
      return this.decoder.decode(input);
    }
  };
  var from11 = ({ name: name8, prefix, encode: encode31, decode: decode45 }) => new Codec8(name8, prefix, encode31, decode45);
  var baseX8 = ({ prefix, name: name8, alphabet: alphabet2 }) => {
    const { encode: encode31, decode: decode45 } = base_x_default8(alphabet2, name8);
    return from11({
      prefix,
      name: name8,
      encode: encode31,
      decode: (text) => coerce8(decode45(text))
    });
  };
  var decode39 = (string2, alphabet2, bitsPerChar, name8) => {
    const codes = {};
    for (let i = 0; i < alphabet2.length; ++i) {
      codes[alphabet2[i]] = i;
    }
    let end = string2.length;
    while (string2[end - 1] === "=") {
      --end;
    }
    const out = new Uint8Array(end * bitsPerChar / 8 | 0);
    let bits = 0;
    let buffer2 = 0;
    let written = 0;
    for (let i = 0; i < end; ++i) {
      const value = codes[string2[i]];
      if (value === void 0) {
        throw new SyntaxError(`Non-${name8} character`);
      }
      buffer2 = buffer2 << bitsPerChar | value;
      bits += bitsPerChar;
      if (bits >= 8) {
        bits -= 8;
        out[written++] = 255 & buffer2 >> bits;
      }
    }
    if (bits >= bitsPerChar || 255 & buffer2 << 8 - bits) {
      throw new SyntaxError("Unexpected end of data");
    }
    return out;
  };
  var encode26 = (data, alphabet2, bitsPerChar) => {
    const pad = alphabet2[alphabet2.length - 1] === "=";
    const mask = (1 << bitsPerChar) - 1;
    let out = "";
    let bits = 0;
    let buffer2 = 0;
    for (let i = 0; i < data.length; ++i) {
      buffer2 = buffer2 << 8 | data[i];
      bits += 8;
      while (bits > bitsPerChar) {
        bits -= bitsPerChar;
        out += alphabet2[mask & buffer2 >> bits];
      }
    }
    if (bits) {
      out += alphabet2[mask & buffer2 << bitsPerChar - bits];
    }
    if (pad) {
      while (out.length * bitsPerChar & 7) {
        out += "=";
      }
    }
    return out;
  };
  var rfc46488 = ({ name: name8, prefix, bitsPerChar, alphabet: alphabet2 }) => {
    return from11({
      prefix,
      name: name8,
      encode(input) {
        return encode26(input, alphabet2, bitsPerChar);
      },
      decode(input) {
        return decode39(input, alphabet2, bitsPerChar, name8);
      }
    });
  };

  // node_modules/@ceramicnetwork/stream-model-instance/node_modules/multiformats/esm/src/bases/base58.js
  var base58btc8 = baseX8({
    name: "base58btc",
    prefix: "z",
    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
  });
  var base58flickr8 = baseX8({
    name: "base58flickr",
    prefix: "Z",
    alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
  });

  // node_modules/@ceramicnetwork/stream-model-instance/node_modules/multiformats/esm/src/bases/base32.js
  var base328 = rfc46488({
    prefix: "b",
    name: "base32",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
    bitsPerChar: 5
  });
  var base32upper8 = rfc46488({
    prefix: "B",
    name: "base32upper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
    bitsPerChar: 5
  });
  var base32pad8 = rfc46488({
    prefix: "c",
    name: "base32pad",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
    bitsPerChar: 5
  });
  var base32padupper8 = rfc46488({
    prefix: "C",
    name: "base32padupper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
    bitsPerChar: 5
  });
  var base32hex8 = rfc46488({
    prefix: "v",
    name: "base32hex",
    alphabet: "0123456789abcdefghijklmnopqrstuv",
    bitsPerChar: 5
  });
  var base32hexupper8 = rfc46488({
    prefix: "V",
    name: "base32hexupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
    bitsPerChar: 5
  });
  var base32hexpad8 = rfc46488({
    prefix: "t",
    name: "base32hexpad",
    alphabet: "0123456789abcdefghijklmnopqrstuv=",
    bitsPerChar: 5
  });
  var base32hexpadupper8 = rfc46488({
    prefix: "T",
    name: "base32hexpadupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
    bitsPerChar: 5
  });
  var base32z8 = rfc46488({
    prefix: "h",
    name: "base32z",
    alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
    bitsPerChar: 5
  });

  // node_modules/@ceramicnetwork/stream-model-instance/node_modules/multiformats/esm/src/cid.js
  var CID8 = class _CID {
    constructor(version7, code8, multihash, bytes) {
      this.code = code8;
      this.version = version7;
      this.multihash = multihash;
      this.bytes = bytes;
      this.byteOffset = bytes.byteOffset;
      this.byteLength = bytes.byteLength;
      this.asCID = this;
      this._baseCache = /* @__PURE__ */ new Map();
      Object.defineProperties(this, {
        byteOffset: hidden6,
        byteLength: hidden6,
        code: readonly8,
        version: readonly8,
        multihash: readonly8,
        bytes: readonly8,
        _baseCache: hidden6,
        asCID: hidden6
      });
    }
    toV0() {
      switch (this.version) {
        case 0: {
          return this;
        }
        default: {
          const { code: code8, multihash } = this;
          if (code8 !== DAG_PB_CODE8) {
            throw new Error("Cannot convert a non dag-pb CID to CIDv0");
          }
          if (multihash.code !== SHA_256_CODE8) {
            throw new Error("Cannot convert non sha2-256 multihash CID to CIDv0");
          }
          return _CID.createV0(multihash);
        }
      }
    }
    toV1() {
      switch (this.version) {
        case 0: {
          const { code: code8, digest: digest2 } = this.multihash;
          const multihash = create8(code8, digest2);
          return _CID.createV1(this.code, multihash);
        }
        case 1: {
          return this;
        }
        default: {
          throw Error(`Can not convert CID version ${this.version} to version 0. This is a bug please report`);
        }
      }
    }
    equals(other) {
      return other && this.code === other.code && this.version === other.version && equals17(this.multihash, other.multihash);
    }
    toString(base13) {
      const { bytes, version: version7, _baseCache } = this;
      switch (version7) {
        case 0:
          return toStringV08(bytes, _baseCache, base13 || base58btc8.encoder);
        default:
          return toStringV18(bytes, _baseCache, base13 || base328.encoder);
      }
    }
    toJSON() {
      return {
        code: this.code,
        version: this.version,
        hash: this.multihash.bytes
      };
    }
    get [Symbol.toStringTag]() {
      return "CID";
    }
    [Symbol.for("nodejs.util.inspect.custom")]() {
      return "CID(" + this.toString() + ")";
    }
    static isCID(value) {
      deprecate6(/^0\.0/, IS_CID_DEPRECATION6);
      return !!(value && (value[cidSymbol8] || value.asCID === value));
    }
    get toBaseEncodedString() {
      throw new Error("Deprecated, use .toString()");
    }
    get codec() {
      throw new Error('"codec" property is deprecated, use integer "code" property instead');
    }
    get buffer() {
      throw new Error("Deprecated .buffer property, use .bytes to get Uint8Array instead");
    }
    get multibaseName() {
      throw new Error('"multibaseName" property is deprecated');
    }
    get prefix() {
      throw new Error('"prefix" property is deprecated');
    }
    static asCID(value) {
      if (value instanceof _CID) {
        return value;
      } else if (value != null && value.asCID === value) {
        const { version: version7, code: code8, multihash, bytes } = value;
        return new _CID(version7, code8, multihash, bytes || encodeCID8(version7, code8, multihash.bytes));
      } else if (value != null && value[cidSymbol8] === true) {
        const { version: version7, multihash, code: code8 } = value;
        const digest2 = decode38(multihash);
        return _CID.create(version7, code8, digest2);
      } else {
        return null;
      }
    }
    static create(version7, code8, digest2) {
      if (typeof code8 !== "number") {
        throw new Error("String codecs are no longer supported");
      }
      switch (version7) {
        case 0: {
          if (code8 !== DAG_PB_CODE8) {
            throw new Error(`Version 0 CID must use dag-pb (code: ${DAG_PB_CODE8}) block encoding`);
          } else {
            return new _CID(version7, code8, digest2, digest2.bytes);
          }
        }
        case 1: {
          const bytes = encodeCID8(version7, code8, digest2.bytes);
          return new _CID(version7, code8, digest2, bytes);
        }
        default: {
          throw new Error("Invalid version");
        }
      }
    }
    static createV0(digest2) {
      return _CID.create(0, DAG_PB_CODE8, digest2);
    }
    static createV1(code8, digest2) {
      return _CID.create(1, code8, digest2);
    }
    static decode(bytes) {
      const [cid, remainder] = _CID.decodeFirst(bytes);
      if (remainder.length) {
        throw new Error("Incorrect length");
      }
      return cid;
    }
    static decodeFirst(bytes) {
      const specs = _CID.inspectBytes(bytes);
      const prefixSize = specs.size - specs.multihashSize;
      const multihashBytes = coerce8(bytes.subarray(prefixSize, prefixSize + specs.multihashSize));
      if (multihashBytes.byteLength !== specs.multihashSize) {
        throw new Error("Incorrect length");
      }
      const digestBytes = multihashBytes.subarray(specs.multihashSize - specs.digestSize);
      const digest2 = new Digest8(specs.multihashCode, specs.digestSize, digestBytes, multihashBytes);
      const cid = specs.version === 0 ? _CID.createV0(digest2) : _CID.createV1(specs.codec, digest2);
      return [
        cid,
        bytes.subarray(specs.size)
      ];
    }
    static inspectBytes(initialBytes) {
      let offset = 0;
      const next = () => {
        const [i, length10] = decode37(initialBytes.subarray(offset));
        offset += length10;
        return i;
      };
      let version7 = next();
      let codec = DAG_PB_CODE8;
      if (version7 === 18) {
        version7 = 0;
        offset = 0;
      } else if (version7 === 1) {
        codec = next();
      }
      if (version7 !== 0 && version7 !== 1) {
        throw new RangeError(`Invalid CID version ${version7}`);
      }
      const prefixSize = offset;
      const multihashCode = next();
      const digestSize = next();
      const size = offset + digestSize;
      const multihashSize = size - prefixSize;
      return {
        version: version7,
        codec,
        multihashCode,
        digestSize,
        multihashSize,
        size
      };
    }
    static parse(source, base13) {
      const [prefix, bytes] = parseCIDtoBytes8(source, base13);
      const cid = _CID.decode(bytes);
      cid._baseCache.set(prefix, source);
      return cid;
    }
  };
  var parseCIDtoBytes8 = (source, base13) => {
    switch (source[0]) {
      case "Q": {
        const decoder = base13 || base58btc8;
        return [
          base58btc8.prefix,
          decoder.decode(`${base58btc8.prefix}${source}`)
        ];
      }
      case base58btc8.prefix: {
        const decoder = base13 || base58btc8;
        return [
          base58btc8.prefix,
          decoder.decode(source)
        ];
      }
      case base328.prefix: {
        const decoder = base13 || base328;
        return [
          base328.prefix,
          decoder.decode(source)
        ];
      }
      default: {
        if (base13 == null) {
          throw Error("To parse non base32 or base58btc encoded CID multibase decoder must be provided");
        }
        return [
          source[0],
          base13.decode(source)
        ];
      }
    }
  };
  var toStringV08 = (bytes, cache4, base13) => {
    const { prefix } = base13;
    if (prefix !== base58btc8.prefix) {
      throw Error(`Cannot string encode V0 in ${base13.name} encoding`);
    }
    const cid = cache4.get(prefix);
    if (cid == null) {
      const cid2 = base13.encode(bytes).slice(1);
      cache4.set(prefix, cid2);
      return cid2;
    } else {
      return cid;
    }
  };
  var toStringV18 = (bytes, cache4, base13) => {
    const { prefix } = base13;
    const cid = cache4.get(prefix);
    if (cid == null) {
      const cid2 = base13.encode(bytes);
      cache4.set(prefix, cid2);
      return cid2;
    } else {
      return cid;
    }
  };
  var DAG_PB_CODE8 = 112;
  var SHA_256_CODE8 = 18;
  var encodeCID8 = (version7, code8, multihash) => {
    const codeOffset = encodingLength8(version7);
    const hashOffset = codeOffset + encodingLength8(code8);
    const bytes = new Uint8Array(hashOffset + multihash.byteLength);
    encodeTo8(version7, bytes, 0);
    encodeTo8(code8, bytes, codeOffset);
    bytes.set(multihash, hashOffset);
    return bytes;
  };
  var cidSymbol8 = Symbol.for("@ipld/js-cid/CID");
  var readonly8 = {
    writable: false,
    configurable: false,
    enumerable: true
  };
  var hidden6 = {
    writable: false,
    enumerable: false,
    configurable: false
  };
  var version6 = "0.0.0-dev";
  var deprecate6 = (range, message) => {
    if (range.test(version6)) {
      console.warn(message);
    } else {
      throw new Error(message);
    }
  };
  var IS_CID_DEPRECATION6 = `CID.isCID(v) is deprecated and will be removed in the next major release.
Following code pattern:

if (CID.isCID(value)) {
  doSomethingWithCID(value)
}

Is replaced with:

const cid = CID.asCID(value)
if (cid) {
  // Make sure to use cid instead of value
  doSomethingWithCID(cid)
}
`;

  // node_modules/@ceramicnetwork/stream-model-instance/node_modules/@ipld/dag-cbor/esm/index.js
  var CID_CBOR_TAG6 = 42;
  function cidEncoder6(obj) {
    if (obj.asCID !== obj) {
      return null;
    }
    const cid = CID8.asCID(obj);
    if (!cid) {
      return null;
    }
    const bytes = new Uint8Array(cid.bytes.byteLength + 1);
    bytes.set(cid.bytes, 1);
    return [
      new Token(Type.tag, CID_CBOR_TAG6),
      new Token(Type.bytes, bytes)
    ];
  }
  function undefinedEncoder6() {
    throw new Error("`undefined` is not supported by the IPLD Data Model and cannot be encoded");
  }
  function numberEncoder6(num) {
    if (Number.isNaN(num)) {
      throw new Error("`NaN` is not supported by the IPLD Data Model and cannot be encoded");
    }
    if (num === Infinity || num === -Infinity) {
      throw new Error("`Infinity` and `-Infinity` is not supported by the IPLD Data Model and cannot be encoded");
    }
    return null;
  }
  var encodeOptions6 = {
    float64: true,
    typeEncoders: {
      Object: cidEncoder6,
      undefined: undefinedEncoder6,
      number: numberEncoder6
    }
  };
  function cidDecoder6(bytes) {
    if (bytes[0] !== 0) {
      throw new Error("Invalid CID for CBOR tag 42; expected leading 0x00");
    }
    return CID8.decode(bytes.subarray(1));
  }
  var decodeOptions6 = {
    allowIndefinite: false,
    coerceUndefinedToNull: true,
    allowNaN: false,
    allowInfinity: false,
    allowBigInt: true,
    strict: true,
    useMaps: false,
    tags: []
  };
  decodeOptions6.tags[CID_CBOR_TAG6] = cidDecoder6;
  var name7 = "dag-cbor";
  var code7 = 113;
  var encode27 = (node) => encode6(node, encodeOptions6);
  var decode40 = (data) => decode6(data, decodeOptions6);

  // node_modules/@ceramicnetwork/stream-model-instance/lib/model-instance-document.js
  var import_random2 = __toESM(require_random(), 1);
  var import_object_sizeof = __toESM(require_indexv2(), 1);

  // node_modules/@ceramicnetwork/stream-model-instance/node_modules/@ceramicnetwork/streamid/node_modules/multiformats/vendor/varint.js
  var encode_19 = encode28;
  var MSB9 = 128;
  var REST9 = 127;
  var MSBALL9 = ~REST9;
  var INT9 = Math.pow(2, 31);
  function encode28(num, out, offset) {
    out = out || [];
    offset = offset || 0;
    var oldOffset = offset;
    while (num >= INT9) {
      out[offset++] = num & 255 | MSB9;
      num /= 128;
    }
    while (num & MSBALL9) {
      out[offset++] = num & 255 | MSB9;
      num >>>= 7;
    }
    out[offset] = num | 0;
    encode28.bytes = offset - oldOffset + 1;
    return out;
  }
  var decode41 = read9;
  var MSB$19 = 128;
  var REST$19 = 127;
  function read9(buf2, offset) {
    var res = 0, offset = offset || 0, shift = 0, counter = offset, b, l = buf2.length;
    do {
      if (counter >= l) {
        read9.bytes = 0;
        throw new RangeError("Could not decode varint");
      }
      b = buf2[counter++];
      res += shift < 28 ? (b & REST$19) << shift : (b & REST$19) * Math.pow(2, shift);
      shift += 7;
    } while (b >= MSB$19);
    read9.bytes = counter - offset;
    return res;
  }
  var N19 = Math.pow(2, 7);
  var N29 = Math.pow(2, 14);
  var N39 = Math.pow(2, 21);
  var N49 = Math.pow(2, 28);
  var N59 = Math.pow(2, 35);
  var N69 = Math.pow(2, 42);
  var N79 = Math.pow(2, 49);
  var N89 = Math.pow(2, 56);
  var N99 = Math.pow(2, 63);
  var length9 = function(value) {
    return value < N19 ? 1 : value < N29 ? 2 : value < N39 ? 3 : value < N49 ? 4 : value < N59 ? 5 : value < N69 ? 6 : value < N79 ? 7 : value < N89 ? 8 : value < N99 ? 9 : 10;
  };
  var varint24 = {
    encode: encode_19,
    decode: decode41,
    encodingLength: length9
  };
  var _brrp_varint9 = varint24;
  var varint_default9 = _brrp_varint9;

  // node_modules/@ceramicnetwork/stream-model-instance/node_modules/@ceramicnetwork/streamid/node_modules/multiformats/src/varint.js
  var decode42 = (data, offset = 0) => {
    const code8 = varint_default9.decode(data, offset);
    return [code8, varint_default9.decode.bytes];
  };
  var encodeTo9 = (int, target, offset = 0) => {
    varint_default9.encode(int, target, offset);
    return target;
  };
  var encodingLength9 = (int) => {
    return varint_default9.encodingLength(int);
  };

  // node_modules/@ceramicnetwork/stream-model-instance/node_modules/@ceramicnetwork/streamid/node_modules/multiformats/src/bytes.js
  var empty9 = new Uint8Array(0);
  var equals18 = (aa, bb) => {
    if (aa === bb)
      return true;
    if (aa.byteLength !== bb.byteLength) {
      return false;
    }
    for (let ii = 0; ii < aa.byteLength; ii++) {
      if (aa[ii] !== bb[ii]) {
        return false;
      }
    }
    return true;
  };
  var coerce9 = (o) => {
    if (o instanceof Uint8Array && o.constructor.name === "Uint8Array")
      return o;
    if (o instanceof ArrayBuffer)
      return new Uint8Array(o);
    if (ArrayBuffer.isView(o)) {
      return new Uint8Array(o.buffer, o.byteOffset, o.byteLength);
    }
    throw new Error("Unknown type, must be binary type");
  };

  // node_modules/@ceramicnetwork/stream-model-instance/node_modules/@ceramicnetwork/streamid/node_modules/multiformats/src/hashes/digest.js
  var create9 = (code8, digest2) => {
    const size = digest2.byteLength;
    const sizeOffset = encodingLength9(code8);
    const digestOffset = sizeOffset + encodingLength9(size);
    const bytes = new Uint8Array(digestOffset + size);
    encodeTo9(code8, bytes, 0);
    encodeTo9(size, bytes, sizeOffset);
    bytes.set(digest2, digestOffset);
    return new Digest9(code8, size, digest2, bytes);
  };
  var decode43 = (multihash) => {
    const bytes = coerce9(multihash);
    const [code8, sizeOffset] = decode42(bytes);
    const [size, digestOffset] = decode42(bytes.subarray(sizeOffset));
    const digest2 = bytes.subarray(sizeOffset + digestOffset);
    if (digest2.byteLength !== size) {
      throw new Error("Incorrect length");
    }
    return new Digest9(code8, size, digest2, bytes);
  };
  var equals19 = (a, b) => {
    if (a === b) {
      return true;
    } else {
      const data = (
        /** @type {{code?:unknown, size?:unknown, bytes?:unknown}} */
        b
      );
      return a.code === data.code && a.size === data.size && data.bytes instanceof Uint8Array && equals18(a.bytes, data.bytes);
    }
  };
  var Digest9 = class {
    /**
     * Creates a multihash digest.
     *
     * @param {Code} code
     * @param {Size} size
     * @param {Uint8Array} digest
     * @param {Uint8Array} bytes
     */
    constructor(code8, size, digest2, bytes) {
      this.code = code8;
      this.size = size;
      this.digest = digest2;
      this.bytes = bytes;
    }
  };

  // node_modules/@ceramicnetwork/stream-model-instance/node_modules/@ceramicnetwork/streamid/node_modules/multiformats/vendor/base-x.js
  function base12(ALPHABET, name8) {
    if (ALPHABET.length >= 255) {
      throw new TypeError("Alphabet too long");
    }
    var BASE_MAP = new Uint8Array(256);
    for (var j = 0; j < BASE_MAP.length; j++) {
      BASE_MAP[j] = 255;
    }
    for (var i = 0; i < ALPHABET.length; i++) {
      var x = ALPHABET.charAt(i);
      var xc = x.charCodeAt(0);
      if (BASE_MAP[xc] !== 255) {
        throw new TypeError(x + " is ambiguous");
      }
      BASE_MAP[xc] = i;
    }
    var BASE = ALPHABET.length;
    var LEADER = ALPHABET.charAt(0);
    var FACTOR = Math.log(BASE) / Math.log(256);
    var iFACTOR = Math.log(256) / Math.log(BASE);
    function encode31(source) {
      if (source instanceof Uint8Array)
        ;
      else if (ArrayBuffer.isView(source)) {
        source = new Uint8Array(source.buffer, source.byteOffset, source.byteLength);
      } else if (Array.isArray(source)) {
        source = Uint8Array.from(source);
      }
      if (!(source instanceof Uint8Array)) {
        throw new TypeError("Expected Uint8Array");
      }
      if (source.length === 0) {
        return "";
      }
      var zeroes = 0;
      var length10 = 0;
      var pbegin = 0;
      var pend = source.length;
      while (pbegin !== pend && source[pbegin] === 0) {
        pbegin++;
        zeroes++;
      }
      var size = (pend - pbegin) * iFACTOR + 1 >>> 0;
      var b58 = new Uint8Array(size);
      while (pbegin !== pend) {
        var carry = source[pbegin];
        var i2 = 0;
        for (var it1 = size - 1; (carry !== 0 || i2 < length10) && it1 !== -1; it1--, i2++) {
          carry += 256 * b58[it1] >>> 0;
          b58[it1] = carry % BASE >>> 0;
          carry = carry / BASE >>> 0;
        }
        if (carry !== 0) {
          throw new Error("Non-zero carry");
        }
        length10 = i2;
        pbegin++;
      }
      var it2 = size - length10;
      while (it2 !== size && b58[it2] === 0) {
        it2++;
      }
      var str = LEADER.repeat(zeroes);
      for (; it2 < size; ++it2) {
        str += ALPHABET.charAt(b58[it2]);
      }
      return str;
    }
    function decodeUnsafe(source) {
      if (typeof source !== "string") {
        throw new TypeError("Expected String");
      }
      if (source.length === 0) {
        return new Uint8Array();
      }
      var psz = 0;
      if (source[psz] === " ") {
        return;
      }
      var zeroes = 0;
      var length10 = 0;
      while (source[psz] === LEADER) {
        zeroes++;
        psz++;
      }
      var size = (source.length - psz) * FACTOR + 1 >>> 0;
      var b256 = new Uint8Array(size);
      while (source[psz]) {
        var carry = BASE_MAP[source.charCodeAt(psz)];
        if (carry === 255) {
          return;
        }
        var i2 = 0;
        for (var it3 = size - 1; (carry !== 0 || i2 < length10) && it3 !== -1; it3--, i2++) {
          carry += BASE * b256[it3] >>> 0;
          b256[it3] = carry % 256 >>> 0;
          carry = carry / 256 >>> 0;
        }
        if (carry !== 0) {
          throw new Error("Non-zero carry");
        }
        length10 = i2;
        psz++;
      }
      if (source[psz] === " ") {
        return;
      }
      var it4 = size - length10;
      while (it4 !== size && b256[it4] === 0) {
        it4++;
      }
      var vch = new Uint8Array(zeroes + (size - it4));
      var j2 = zeroes;
      while (it4 !== size) {
        vch[j2++] = b256[it4++];
      }
      return vch;
    }
    function decode45(string2) {
      var buffer2 = decodeUnsafe(string2);
      if (buffer2) {
        return buffer2;
      }
      throw new Error(`Non-${name8} character`);
    }
    return {
      encode: encode31,
      decodeUnsafe,
      decode: decode45
    };
  }
  var src9 = base12;
  var _brrp__multiformats_scope_baseX9 = src9;
  var base_x_default9 = _brrp__multiformats_scope_baseX9;

  // node_modules/@ceramicnetwork/stream-model-instance/node_modules/@ceramicnetwork/streamid/node_modules/multiformats/src/bases/base.js
  var Encoder9 = class {
    /**
     * @param {Base} name
     * @param {Prefix} prefix
     * @param {(bytes:Uint8Array) => string} baseEncode
     */
    constructor(name8, prefix, baseEncode) {
      this.name = name8;
      this.prefix = prefix;
      this.baseEncode = baseEncode;
    }
    /**
     * @param {Uint8Array} bytes
     * @returns {API.Multibase<Prefix>}
     */
    encode(bytes) {
      if (bytes instanceof Uint8Array) {
        return `${this.prefix}${this.baseEncode(bytes)}`;
      } else {
        throw Error("Unknown type, must be binary type");
      }
    }
  };
  var Decoder9 = class {
    /**
     * @param {Base} name
     * @param {Prefix} prefix
     * @param {(text:string) => Uint8Array} baseDecode
     */
    constructor(name8, prefix, baseDecode) {
      this.name = name8;
      this.prefix = prefix;
      if (prefix.codePointAt(0) === void 0) {
        throw new Error("Invalid prefix character");
      }
      this.prefixCodePoint = /** @type {number} */
      prefix.codePointAt(0);
      this.baseDecode = baseDecode;
    }
    /**
     * @param {string} text
     */
    decode(text) {
      if (typeof text === "string") {
        if (text.codePointAt(0) !== this.prefixCodePoint) {
          throw Error(`Unable to decode multibase string ${JSON.stringify(text)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
        }
        return this.baseDecode(text.slice(this.prefix.length));
      } else {
        throw Error("Can only multibase decode strings");
      }
    }
    /**
     * @template {string} OtherPrefix
     * @param {API.UnibaseDecoder<OtherPrefix>|ComposedDecoder<OtherPrefix>} decoder
     * @returns {ComposedDecoder<Prefix|OtherPrefix>}
     */
    or(decoder) {
      return or9(this, decoder);
    }
  };
  var ComposedDecoder9 = class {
    /**
     * @param {Decoders<Prefix>} decoders
     */
    constructor(decoders) {
      this.decoders = decoders;
    }
    /**
     * @template {string} OtherPrefix
     * @param {API.UnibaseDecoder<OtherPrefix>|ComposedDecoder<OtherPrefix>} decoder
     * @returns {ComposedDecoder<Prefix|OtherPrefix>}
     */
    or(decoder) {
      return or9(this, decoder);
    }
    /**
     * @param {string} input
     * @returns {Uint8Array}
     */
    decode(input) {
      const prefix = (
        /** @type {Prefix} */
        input[0]
      );
      const decoder = this.decoders[prefix];
      if (decoder) {
        return decoder.decode(input);
      } else {
        throw RangeError(`Unable to decode multibase string ${JSON.stringify(input)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
      }
    }
  };
  var or9 = (left, right) => new ComposedDecoder9(
    /** @type {Decoders<L|R>} */
    {
      ...left.decoders || { [
        /** @type API.UnibaseDecoder<L> */
        left.prefix
      ]: left },
      ...right.decoders || { [
        /** @type API.UnibaseDecoder<R> */
        right.prefix
      ]: right }
    }
  );
  var Codec9 = class {
    /**
     * @param {Base} name
     * @param {Prefix} prefix
     * @param {(bytes:Uint8Array) => string} baseEncode
     * @param {(text:string) => Uint8Array} baseDecode
     */
    constructor(name8, prefix, baseEncode, baseDecode) {
      this.name = name8;
      this.prefix = prefix;
      this.baseEncode = baseEncode;
      this.baseDecode = baseDecode;
      this.encoder = new Encoder9(name8, prefix, baseEncode);
      this.decoder = new Decoder9(name8, prefix, baseDecode);
    }
    /**
     * @param {Uint8Array} input
     */
    encode(input) {
      return this.encoder.encode(input);
    }
    /**
     * @param {string} input
     */
    decode(input) {
      return this.decoder.decode(input);
    }
  };
  var from12 = ({ name: name8, prefix, encode: encode31, decode: decode45 }) => new Codec9(name8, prefix, encode31, decode45);
  var baseX9 = ({ prefix, name: name8, alphabet: alphabet2 }) => {
    const { encode: encode31, decode: decode45 } = base_x_default9(alphabet2, name8);
    return from12({
      prefix,
      name: name8,
      encode: encode31,
      /**
       * @param {string} text
       */
      decode: (text) => coerce9(decode45(text))
    });
  };
  var decode44 = (string2, alphabet2, bitsPerChar, name8) => {
    const codes = {};
    for (let i = 0; i < alphabet2.length; ++i) {
      codes[alphabet2[i]] = i;
    }
    let end = string2.length;
    while (string2[end - 1] === "=") {
      --end;
    }
    const out = new Uint8Array(end * bitsPerChar / 8 | 0);
    let bits = 0;
    let buffer2 = 0;
    let written = 0;
    for (let i = 0; i < end; ++i) {
      const value = codes[string2[i]];
      if (value === void 0) {
        throw new SyntaxError(`Non-${name8} character`);
      }
      buffer2 = buffer2 << bitsPerChar | value;
      bits += bitsPerChar;
      if (bits >= 8) {
        bits -= 8;
        out[written++] = 255 & buffer2 >> bits;
      }
    }
    if (bits >= bitsPerChar || 255 & buffer2 << 8 - bits) {
      throw new SyntaxError("Unexpected end of data");
    }
    return out;
  };
  var encode29 = (data, alphabet2, bitsPerChar) => {
    const pad = alphabet2[alphabet2.length - 1] === "=";
    const mask = (1 << bitsPerChar) - 1;
    let out = "";
    let bits = 0;
    let buffer2 = 0;
    for (let i = 0; i < data.length; ++i) {
      buffer2 = buffer2 << 8 | data[i];
      bits += 8;
      while (bits > bitsPerChar) {
        bits -= bitsPerChar;
        out += alphabet2[mask & buffer2 >> bits];
      }
    }
    if (bits) {
      out += alphabet2[mask & buffer2 << bitsPerChar - bits];
    }
    if (pad) {
      while (out.length * bitsPerChar & 7) {
        out += "=";
      }
    }
    return out;
  };
  var rfc46489 = ({ name: name8, prefix, bitsPerChar, alphabet: alphabet2 }) => {
    return from12({
      prefix,
      name: name8,
      encode(input) {
        return encode29(input, alphabet2, bitsPerChar);
      },
      decode(input) {
        return decode44(input, alphabet2, bitsPerChar, name8);
      }
    });
  };

  // node_modules/@ceramicnetwork/stream-model-instance/node_modules/@ceramicnetwork/streamid/node_modules/multiformats/src/bases/base58.js
  var base58btc9 = baseX9({
    name: "base58btc",
    prefix: "z",
    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
  });
  var base58flickr9 = baseX9({
    name: "base58flickr",
    prefix: "Z",
    alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
  });

  // node_modules/@ceramicnetwork/stream-model-instance/node_modules/@ceramicnetwork/streamid/node_modules/multiformats/src/bases/base32.js
  var base329 = rfc46489({
    prefix: "b",
    name: "base32",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
    bitsPerChar: 5
  });
  var base32upper9 = rfc46489({
    prefix: "B",
    name: "base32upper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
    bitsPerChar: 5
  });
  var base32pad9 = rfc46489({
    prefix: "c",
    name: "base32pad",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
    bitsPerChar: 5
  });
  var base32padupper9 = rfc46489({
    prefix: "C",
    name: "base32padupper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
    bitsPerChar: 5
  });
  var base32hex9 = rfc46489({
    prefix: "v",
    name: "base32hex",
    alphabet: "0123456789abcdefghijklmnopqrstuv",
    bitsPerChar: 5
  });
  var base32hexupper9 = rfc46489({
    prefix: "V",
    name: "base32hexupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
    bitsPerChar: 5
  });
  var base32hexpad9 = rfc46489({
    prefix: "t",
    name: "base32hexpad",
    alphabet: "0123456789abcdefghijklmnopqrstuv=",
    bitsPerChar: 5
  });
  var base32hexpadupper9 = rfc46489({
    prefix: "T",
    name: "base32hexpadupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
    bitsPerChar: 5
  });
  var base32z9 = rfc46489({
    prefix: "h",
    name: "base32z",
    alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
    bitsPerChar: 5
  });

  // node_modules/@ceramicnetwork/stream-model-instance/node_modules/@ceramicnetwork/streamid/node_modules/multiformats/src/cid.js
  var format3 = (link, base13) => {
    const { bytes, version: version7 } = link;
    switch (version7) {
      case 0:
        return toStringV09(
          bytes,
          baseCache3(link),
          /** @type {API.MultibaseEncoder<"z">} */
          base13 || base58btc9.encoder
        );
      default:
        return toStringV19(
          bytes,
          baseCache3(link),
          /** @type {API.MultibaseEncoder<Prefix>} */
          base13 || base329.encoder
        );
    }
  };
  var cache3 = /* @__PURE__ */ new WeakMap();
  var baseCache3 = (cid) => {
    const baseCache4 = cache3.get(cid);
    if (baseCache4 == null) {
      const baseCache5 = /* @__PURE__ */ new Map();
      cache3.set(cid, baseCache5);
      return baseCache5;
    }
    return baseCache4;
  };
  var CID9 = class _CID {
    /**
     * @param {Version} version - Version of the CID
     * @param {Format} code - Code of the codec content is encoded in, see https://github.com/multiformats/multicodec/blob/master/table.csv
     * @param {API.MultihashDigest<Alg>} multihash - (Multi)hash of the of the content.
     * @param {Uint8Array} bytes
     *
     */
    constructor(version7, code8, multihash, bytes) {
      this.code = code8;
      this.version = version7;
      this.multihash = multihash;
      this.bytes = bytes;
      this["/"] = bytes;
    }
    /**
     * Signalling `cid.asCID === cid` has been replaced with `cid['/'] === cid.bytes`
     * please either use `CID.asCID(cid)` or switch to new signalling mechanism
     *
     * @deprecated
     */
    get asCID() {
      return this;
    }
    // ArrayBufferView
    get byteOffset() {
      return this.bytes.byteOffset;
    }
    // ArrayBufferView
    get byteLength() {
      return this.bytes.byteLength;
    }
    /**
     * @returns {CID<Data, API.DAG_PB, API.SHA_256, 0>}
     */
    toV0() {
      switch (this.version) {
        case 0: {
          return (
            /** @type {CID<Data, API.DAG_PB, API.SHA_256, 0>} */
            this
          );
        }
        case 1: {
          const { code: code8, multihash } = this;
          if (code8 !== DAG_PB_CODE9) {
            throw new Error("Cannot convert a non dag-pb CID to CIDv0");
          }
          if (multihash.code !== SHA_256_CODE9) {
            throw new Error("Cannot convert non sha2-256 multihash CID to CIDv0");
          }
          return (
            /** @type {CID<Data, API.DAG_PB, API.SHA_256, 0>} */
            _CID.createV0(
              /** @type {API.MultihashDigest<API.SHA_256>} */
              multihash
            )
          );
        }
        default: {
          throw Error(
            `Can not convert CID version ${this.version} to version 0. This is a bug please report`
          );
        }
      }
    }
    /**
     * @returns {CID<Data, Format, Alg, 1>}
     */
    toV1() {
      switch (this.version) {
        case 0: {
          const { code: code8, digest: digest2 } = this.multihash;
          const multihash = create9(code8, digest2);
          return (
            /** @type {CID<Data, Format, Alg, 1>} */
            _CID.createV1(this.code, multihash)
          );
        }
        case 1: {
          return (
            /** @type {CID<Data, Format, Alg, 1>} */
            this
          );
        }
        default: {
          throw Error(
            `Can not convert CID version ${this.version} to version 1. This is a bug please report`
          );
        }
      }
    }
    /**
     * @param {unknown} other
     * @returns {other is CID<Data, Format, Alg, Version>}
     */
    equals(other) {
      return _CID.equals(this, other);
    }
    /**
     * @template {unknown} Data
     * @template {number} Format
     * @template {number} Alg
     * @template {API.Version} Version
     * @param {API.Link<Data, Format, Alg, Version>} self
     * @param {unknown} other
     * @returns {other is CID}
     */
    static equals(self2, other) {
      const unknown = (
        /** @type {{code?:unknown, version?:unknown, multihash?:unknown}} */
        other
      );
      return unknown && self2.code === unknown.code && self2.version === unknown.version && equals19(self2.multihash, unknown.multihash);
    }
    /**
     * @param {API.MultibaseEncoder<string>} [base]
     * @returns {string}
     */
    toString(base13) {
      return format3(this, base13);
    }
    toJSON() {
      return { "/": format3(this) };
    }
    link() {
      return this;
    }
    get [Symbol.toStringTag]() {
      return "CID";
    }
    // Legacy
    [Symbol.for("nodejs.util.inspect.custom")]() {
      return `CID(${this.toString()})`;
    }
    /**
     * Takes any input `value` and returns a `CID` instance if it was
     * a `CID` otherwise returns `null`. If `value` is instanceof `CID`
     * it will return value back. If `value` is not instance of this CID
     * class, but is compatible CID it will return new instance of this
     * `CID` class. Otherwise returns null.
     *
     * This allows two different incompatible versions of CID library to
     * co-exist and interop as long as binary interface is compatible.
     *
     * @template {unknown} Data
     * @template {number} Format
     * @template {number} Alg
     * @template {API.Version} Version
     * @template {unknown} U
     * @param {API.Link<Data, Format, Alg, Version>|U} input
     * @returns {CID<Data, Format, Alg, Version>|null}
     */
    static asCID(input) {
      if (input == null) {
        return null;
      }
      const value = (
        /** @type {any} */
        input
      );
      if (value instanceof _CID) {
        return value;
      } else if (value["/"] != null && value["/"] === value.bytes || value.asCID === value) {
        const { version: version7, code: code8, multihash, bytes } = value;
        return new _CID(
          version7,
          code8,
          /** @type {API.MultihashDigest<Alg>} */
          multihash,
          bytes || encodeCID9(version7, code8, multihash.bytes)
        );
      } else if (value[cidSymbol9] === true) {
        const { version: version7, multihash, code: code8 } = value;
        const digest2 = (
          /** @type {API.MultihashDigest<Alg>} */
          decode43(multihash)
        );
        return _CID.create(version7, code8, digest2);
      } else {
        return null;
      }
    }
    /**
     *
     * @template {unknown} Data
     * @template {number} Format
     * @template {number} Alg
     * @template {API.Version} Version
     * @param {Version} version - Version of the CID
     * @param {Format} code - Code of the codec content is encoded in, see https://github.com/multiformats/multicodec/blob/master/table.csv
     * @param {API.MultihashDigest<Alg>} digest - (Multi)hash of the of the content.
     * @returns {CID<Data, Format, Alg, Version>}
     */
    static create(version7, code8, digest2) {
      if (typeof code8 !== "number") {
        throw new Error("String codecs are no longer supported");
      }
      if (!(digest2.bytes instanceof Uint8Array)) {
        throw new Error("Invalid digest");
      }
      switch (version7) {
        case 0: {
          if (code8 !== DAG_PB_CODE9) {
            throw new Error(
              `Version 0 CID must use dag-pb (code: ${DAG_PB_CODE9}) block encoding`
            );
          } else {
            return new _CID(version7, code8, digest2, digest2.bytes);
          }
        }
        case 1: {
          const bytes = encodeCID9(version7, code8, digest2.bytes);
          return new _CID(version7, code8, digest2, bytes);
        }
        default: {
          throw new Error("Invalid version");
        }
      }
    }
    /**
     * Simplified version of `create` for CIDv0.
     *
     * @template {unknown} [T=unknown]
     * @param {API.MultihashDigest<typeof SHA_256_CODE>} digest - Multihash.
     * @returns {CID<T, typeof DAG_PB_CODE, typeof SHA_256_CODE, 0>}
     */
    static createV0(digest2) {
      return _CID.create(0, DAG_PB_CODE9, digest2);
    }
    /**
     * Simplified version of `create` for CIDv1.
     *
     * @template {unknown} Data
     * @template {number} Code
     * @template {number} Alg
     * @param {Code} code - Content encoding format code.
     * @param {API.MultihashDigest<Alg>} digest - Miltihash of the content.
     * @returns {CID<Data, Code, Alg, 1>}
     */
    static createV1(code8, digest2) {
      return _CID.create(1, code8, digest2);
    }
    /**
     * Decoded a CID from its binary representation. The byte array must contain
     * only the CID with no additional bytes.
     *
     * An error will be thrown if the bytes provided do not contain a valid
     * binary representation of a CID.
     *
     * @template {unknown} Data
     * @template {number} Code
     * @template {number} Alg
     * @template {API.Version} Ver
     * @param {API.ByteView<API.Link<Data, Code, Alg, Ver>>} bytes
     * @returns {CID<Data, Code, Alg, Ver>}
     */
    static decode(bytes) {
      const [cid, remainder] = _CID.decodeFirst(bytes);
      if (remainder.length) {
        throw new Error("Incorrect length");
      }
      return cid;
    }
    /**
     * Decoded a CID from its binary representation at the beginning of a byte
     * array.
     *
     * Returns an array with the first element containing the CID and the second
     * element containing the remainder of the original byte array. The remainder
     * will be a zero-length byte array if the provided bytes only contained a
     * binary CID representation.
     *
     * @template {unknown} T
     * @template {number} C
     * @template {number} A
     * @template {API.Version} V
     * @param {API.ByteView<API.Link<T, C, A, V>>} bytes
     * @returns {[CID<T, C, A, V>, Uint8Array]}
     */
    static decodeFirst(bytes) {
      const specs = _CID.inspectBytes(bytes);
      const prefixSize = specs.size - specs.multihashSize;
      const multihashBytes = coerce9(
        bytes.subarray(prefixSize, prefixSize + specs.multihashSize)
      );
      if (multihashBytes.byteLength !== specs.multihashSize) {
        throw new Error("Incorrect length");
      }
      const digestBytes = multihashBytes.subarray(
        specs.multihashSize - specs.digestSize
      );
      const digest2 = new Digest9(
        specs.multihashCode,
        specs.digestSize,
        digestBytes,
        multihashBytes
      );
      const cid = specs.version === 0 ? _CID.createV0(
        /** @type {API.MultihashDigest<API.SHA_256>} */
        digest2
      ) : _CID.createV1(specs.codec, digest2);
      return [
        /** @type {CID<T, C, A, V>} */
        cid,
        bytes.subarray(specs.size)
      ];
    }
    /**
     * Inspect the initial bytes of a CID to determine its properties.
     *
     * Involves decoding up to 4 varints. Typically this will require only 4 to 6
     * bytes but for larger multicodec code values and larger multihash digest
     * lengths these varints can be quite large. It is recommended that at least
     * 10 bytes be made available in the `initialBytes` argument for a complete
     * inspection.
     *
     * @template {unknown} T
     * @template {number} C
     * @template {number} A
     * @template {API.Version} V
     * @param {API.ByteView<API.Link<T, C, A, V>>} initialBytes
     * @returns {{ version:V, codec:C, multihashCode:A, digestSize:number, multihashSize:number, size:number }}
     */
    static inspectBytes(initialBytes) {
      let offset = 0;
      const next = () => {
        const [i, length10] = decode42(initialBytes.subarray(offset));
        offset += length10;
        return i;
      };
      let version7 = (
        /** @type {V} */
        next()
      );
      let codec = (
        /** @type {C} */
        DAG_PB_CODE9
      );
      if (
        /** @type {number} */
        version7 === 18
      ) {
        version7 = /** @type {V} */
        0;
        offset = 0;
      } else {
        codec = /** @type {C} */
        next();
      }
      if (version7 !== 0 && version7 !== 1) {
        throw new RangeError(`Invalid CID version ${version7}`);
      }
      const prefixSize = offset;
      const multihashCode = (
        /** @type {A} */
        next()
      );
      const digestSize = next();
      const size = offset + digestSize;
      const multihashSize = size - prefixSize;
      return { version: version7, codec, multihashCode, digestSize, multihashSize, size };
    }
    /**
     * Takes cid in a string representation and creates an instance. If `base`
     * decoder is not provided will use a default from the configuration. It will
     * throw an error if encoding of the CID is not compatible with supplied (or
     * a default decoder).
     *
     * @template {string} Prefix
     * @template {unknown} Data
     * @template {number} Code
     * @template {number} Alg
     * @template {API.Version} Ver
     * @param {API.ToString<API.Link<Data, Code, Alg, Ver>, Prefix>} source
     * @param {API.MultibaseDecoder<Prefix>} [base]
     * @returns {CID<Data, Code, Alg, Ver>}
     */
    static parse(source, base13) {
      const [prefix, bytes] = parseCIDtoBytes9(source, base13);
      const cid = _CID.decode(bytes);
      if (cid.version === 0 && source[0] !== "Q") {
        throw Error("Version 0 CID string must not include multibase prefix");
      }
      baseCache3(cid).set(prefix, source);
      return cid;
    }
  };
  var parseCIDtoBytes9 = (source, base13) => {
    switch (source[0]) {
      case "Q": {
        const decoder = base13 || base58btc9;
        return [
          /** @type {Prefix} */
          base58btc9.prefix,
          decoder.decode(`${base58btc9.prefix}${source}`)
        ];
      }
      case base58btc9.prefix: {
        const decoder = base13 || base58btc9;
        return [
          /** @type {Prefix} */
          base58btc9.prefix,
          decoder.decode(source)
        ];
      }
      case base329.prefix: {
        const decoder = base13 || base329;
        return [
          /** @type {Prefix} */
          base329.prefix,
          decoder.decode(source)
        ];
      }
      default: {
        if (base13 == null) {
          throw Error(
            "To parse non base32 or base58btc encoded CID multibase decoder must be provided"
          );
        }
        return [
          /** @type {Prefix} */
          source[0],
          base13.decode(source)
        ];
      }
    }
  };
  var toStringV09 = (bytes, cache4, base13) => {
    const { prefix } = base13;
    if (prefix !== base58btc9.prefix) {
      throw Error(`Cannot string encode V0 in ${base13.name} encoding`);
    }
    const cid = cache4.get(prefix);
    if (cid == null) {
      const cid2 = base13.encode(bytes).slice(1);
      cache4.set(prefix, cid2);
      return cid2;
    } else {
      return cid;
    }
  };
  var toStringV19 = (bytes, cache4, base13) => {
    const { prefix } = base13;
    const cid = cache4.get(prefix);
    if (cid == null) {
      const cid2 = base13.encode(bytes);
      cache4.set(prefix, cid2);
      return cid2;
    } else {
      return cid;
    }
  };
  var DAG_PB_CODE9 = 112;
  var SHA_256_CODE9 = 18;
  var encodeCID9 = (version7, code8, multihash) => {
    const codeOffset = encodingLength9(version7);
    const hashOffset = codeOffset + encodingLength9(code8);
    const bytes = new Uint8Array(hashOffset + multihash.byteLength);
    encodeTo9(version7, bytes, 0);
    encodeTo9(code8, bytes, codeOffset);
    bytes.set(multihash, hashOffset);
    return bytes;
  };
  var cidSymbol9 = Symbol.for("@ipld/js-cid/CID");

  // node_modules/@ceramicnetwork/stream-model-instance/node_modules/@ceramicnetwork/streamid/node_modules/multiformats/src/bases/base36.js
  var base363 = baseX9({
    prefix: "k",
    name: "base36",
    alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
  });
  var base36upper3 = baseX9({
    prefix: "K",
    name: "base36upper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  });

  // node_modules/@ceramicnetwork/stream-model-instance/node_modules/@ceramicnetwork/streamid/lib/stream-type.js
  var registry6 = {
    tile: 0,
    "caip10-link": 1,
    model: 2,
    MID: 3,
    UNLOADABLE: 4
  };
  function codeByName6(name8) {
    const index = registry6[name8];
    if (typeof index !== "undefined") {
      return index;
    } else {
      throw new Error(`No stream type registered for name ${name8}`);
    }
  }
  function nameByCode6(index) {
    const pair = Object.entries(registry6).find(([, v]) => v === index);
    if (pair) {
      return pair[0];
    } else {
      throw new Error(`No stream type registered for index ${index}`);
    }
  }
  var StreamType6 = class {
  };
  StreamType6.nameByCode = nameByCode6;
  StreamType6.codeByName = codeByName6;

  // node_modules/@ceramicnetwork/stream-model-instance/node_modules/@ceramicnetwork/streamid/lib/commit-id.js
  var import_varint27 = __toESM(require_varint(), 1);

  // node_modules/@ceramicnetwork/stream-model-instance/node_modules/@ceramicnetwork/streamid/lib/constants.js
  var STREAMID_CODEC6 = 206;

  // node_modules/@ceramicnetwork/stream-model-instance/node_modules/@ceramicnetwork/streamid/node_modules/multiformats/src/hashes/hasher.js
  var from13 = ({ name: name8, code: code8, encode: encode31 }) => new Hasher3(name8, code8, encode31);
  var Hasher3 = class {
    /**
     *
     * @param {Name} name
     * @param {Code} code
     * @param {(input: Uint8Array) => Await<Uint8Array>} encode
     */
    constructor(name8, code8, encode31) {
      this.name = name8;
      this.code = code8;
      this.encode = encode31;
    }
    /**
     * @param {Uint8Array} input
     * @returns {Await<Digest.Digest<Code, number>>}
     */
    digest(input) {
      if (input instanceof Uint8Array) {
        const result = this.encode(input);
        return result instanceof Uint8Array ? create9(this.code, result) : result.then((digest2) => create9(this.code, digest2));
      } else {
        throw Error("Unknown type, must be binary type");
      }
    }
  };

  // node_modules/@ceramicnetwork/stream-model-instance/node_modules/@ceramicnetwork/streamid/node_modules/multiformats/src/block.js
  function readonly9({ enumerable = true, configurable = false } = {}) {
    return { enumerable, configurable, writable: false };
  }
  function* linksWithin3(path, value) {
    if (value != null && typeof value === "object") {
      if (Array.isArray(value)) {
        for (const [index, element] of value.entries()) {
          const elementPath = [...path, index];
          const cid = CID9.asCID(element);
          if (cid) {
            yield [elementPath.join("/"), cid];
          } else if (typeof element === "object") {
            yield* links3(element, elementPath);
          }
        }
      } else {
        const cid = CID9.asCID(value);
        if (cid) {
          yield [path.join("/"), cid];
        } else {
          yield* links3(value, path);
        }
      }
    }
  }
  function* links3(source, base13) {
    if (source == null || source instanceof Uint8Array) {
      return;
    }
    const cid = CID9.asCID(source);
    if (cid) {
      yield [base13.join("/"), cid];
    }
    for (const [key, value] of Object.entries(source)) {
      const path = (
        /** @type {[string|number, string]} */
        [...base13, key]
      );
      yield* linksWithin3(path, value);
    }
  }
  function* treeWithin3(path, value) {
    if (Array.isArray(value)) {
      for (const [index, element] of value.entries()) {
        const elementPath = [...path, index];
        yield elementPath.join("/");
        if (typeof element === "object" && !CID9.asCID(element)) {
          yield* tree3(element, elementPath);
        }
      }
    } else {
      yield* tree3(value, path);
    }
  }
  function* tree3(source, base13) {
    if (source == null || typeof source !== "object") {
      return;
    }
    for (const [key, value] of Object.entries(source)) {
      const path = (
        /** @type {[string|number, string]} */
        [...base13, key]
      );
      yield path.join("/");
      if (value != null && !(value instanceof Uint8Array) && typeof value === "object" && !CID9.asCID(value)) {
        yield* treeWithin3(path, value);
      }
    }
  }
  function get3(source, path) {
    let node = (
      /** @type {Record<string, any>} */
      source
    );
    for (const [index, key] of path.entries()) {
      node = node[key];
      if (node == null) {
        throw new Error(`Object has no property at ${path.slice(0, index + 1).map((part) => `[${JSON.stringify(part)}]`).join("")}`);
      }
      const cid = CID9.asCID(node);
      if (cid) {
        return { value: cid, remaining: path.slice(index + 1).join("/") };
      }
    }
    return { value: node };
  }
  var Block3 = class {
    /**
     * @param {object} options
     * @param {CID<T, C, A, V>} options.cid
     * @param {API.ByteView<T>} options.bytes
     * @param {T} options.value
     */
    constructor({ cid, bytes, value }) {
      if (!cid || !bytes || typeof value === "undefined") {
        throw new Error("Missing required argument");
      }
      this.cid = cid;
      this.bytes = bytes;
      this.value = value;
      this.asBlock = this;
      Object.defineProperties(this, {
        cid: readonly9(),
        bytes: readonly9(),
        value: readonly9(),
        asBlock: readonly9()
      });
    }
    links() {
      return links3(this.value, []);
    }
    tree() {
      return tree3(this.value, []);
    }
    /**
     *
     * @param {string} [path]
     * @returns {API.BlockCursorView<unknown>}
     */
    get(path = "/") {
      return get3(this.value, path.split("/").filter(Boolean));
    }
  };
  async function encode30({ value, codec, hasher }) {
    if (typeof value === "undefined")
      throw new Error('Missing required argument "value"');
    if (!codec || !hasher)
      throw new Error("Missing required argument: codec or hasher");
    const bytes = codec.encode(value);
    const hash = await hasher.digest(bytes);
    const cid = CID9.create(
      1,
      codec.code,
      hash
    );
    return new Block3({ value, bytes, cid });
  }

  // node_modules/@ceramicnetwork/stream-model-instance/node_modules/@ceramicnetwork/streamid/node_modules/multiformats/src/hashes/sha2-browser.js
  var sha3 = (name8) => (
    /**
     * @param {Uint8Array} data
     */
    async (data) => new Uint8Array(await crypto.subtle.digest(name8, data))
  );
  var sha2563 = from13({
    name: "sha2-256",
    code: 18,
    encode: sha3("SHA-256")
  });
  var sha5123 = from13({
    name: "sha2-512",
    code: 19,
    encode: sha3("SHA-512")
  });

  // node_modules/@ceramicnetwork/stream-model-instance/node_modules/@ceramicnetwork/streamid/lib/stream-id.js
  var import_varint26 = __toESM(require_varint(), 1);

  // node_modules/@ceramicnetwork/stream-model-instance/node_modules/@ceramicnetwork/streamid/lib/try-catch.util.js
  function tryCatch6(fn) {
    try {
      return fn();
    } catch (e) {
      return e;
    }
  }

  // node_modules/@ceramicnetwork/stream-model-instance/node_modules/@ceramicnetwork/streamid/lib/reading-bytes.js
  var import_varint25 = __toESM(require_varint(), 1);
  function readVarint6(bytes) {
    const value = import_varint25.default.decode(bytes);
    const readLength = import_varint25.default.decode.bytes;
    const remainder = bytes.subarray(readLength);
    return [value, remainder, readLength];
  }
  function isCidVersion6(input) {
    return input === 0 || input === 1;
  }
  function readCid6(bytes) {
    const [cidVersion, cidVersionRemainder] = readVarint6(bytes);
    if (!isCidVersion6(cidVersion)) {
      throw new Error(`Unknown CID version ${cidVersion}`);
    }
    const [codec, codecRemainder] = readVarint6(cidVersionRemainder);
    const [, mhCodecRemainder, mhCodecLength] = readVarint6(codecRemainder);
    const [mhLength, , mhLengthLength] = readVarint6(mhCodecRemainder);
    const multihashBytes = codecRemainder.subarray(0, mhCodecLength + mhLengthLength + mhLength);
    const multihashBytesRemainder = codecRemainder.subarray(mhCodecLength + mhLengthLength + mhLength);
    return [CID9.create(cidVersion, codec, decode43(multihashBytes)), multihashBytesRemainder];
  }

  // node_modules/@ceramicnetwork/stream-model-instance/node_modules/@ceramicnetwork/streamid/lib/stream-ref-parsing.js
  function fromBytes16(input, title = "StreamRef") {
    const [streamCodec, streamCodecRemainder] = readVarint6(input);
    if (streamCodec !== STREAMID_CODEC6)
      throw new Error(`Invalid ${title}, does not include streamid codec`);
    const [type, streamtypeRemainder] = readVarint6(streamCodecRemainder);
    const cidResult = readCid6(streamtypeRemainder);
    const [genesis, genesisRemainder] = cidResult;
    if (genesisRemainder.length === 0) {
      return {
        kind: "stream-id",
        type,
        genesis
      };
    } else if (genesisRemainder.length === 1 && genesisRemainder[0] === 0) {
      return {
        kind: "commit-id",
        type,
        genesis,
        commit: null
      };
    } else {
      const [commit] = readCid6(genesisRemainder);
      return {
        kind: "commit-id",
        type,
        genesis,
        commit
      };
    }
  }
  var URL_PATTERN6 = /(ceramic:\/\/|\/ceramic\/)?([a-zA-Z0-9]+)(\?commit=([a-zA-Z0-9]+))?/;
  function fromString19(input, title = "StreamRef") {
    const protocolMatch = URL_PATTERN6.exec(input) || [];
    const base13 = protocolMatch[2];
    if (!base13)
      throw new Error(`Malformed ${title} string: ${input}`);
    const bytes = base363.decode(base13);
    const streamRef = fromBytes16(bytes);
    const commit = protocolMatch[4];
    if (commit) {
      return {
        kind: "commit-id",
        type: streamRef.type,
        genesis: streamRef.genesis,
        commit: parseCommit6(streamRef.genesis, commit)
      };
    }
    return streamRef;
  }
  function parseCID6(input) {
    try {
      return typeof input === "string" ? CID9.parse(input) : CID9.asCID(input);
    } catch {
      return null;
    }
  }
  function parseCommit6(genesis, commit = null) {
    if (!commit)
      return null;
    if (commit === "0")
      return null;
    const commitCID = parseCID6(commit);
    if (commitCID) {
      if (genesis.equals(commitCID)) {
        return null;
      } else {
        return commitCID;
      }
    } else {
      throw new Error("Cannot specify commit as a number except to request commit 0 (the genesis commit)");
    }
  }

  // node_modules/@ceramicnetwork/stream-model-instance/node_modules/@ceramicnetwork/streamid/lib/stream-id.js
  var __decorate14 = function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata11 = function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var InvalidStreamIDBytesError6 = class extends Error {
    constructor(bytes) {
      super(`Invalid StreamID bytes ${base363.encode(bytes)}: contains commit`);
    }
  };
  var InvalidStreamIDStringError6 = class extends Error {
    constructor(input) {
      super(`Invalid StreamID string ${input}: contains commit`);
    }
  };
  function fromBytes17(bytes) {
    const parsed = fromBytes16(bytes, "StreamID");
    if (parsed.kind === "stream-id") {
      return new StreamID6(parsed.type, parsed.genesis);
    }
    throw new InvalidStreamIDBytesError6(bytes);
  }
  function fromBytesNoThrow11(bytes) {
    return tryCatch6(() => fromBytes17(bytes));
  }
  function fromString20(input) {
    const parsed = fromString19(input, "StreamID");
    if (parsed.kind === "stream-id") {
      return new StreamID6(parsed.type, parsed.genesis);
    }
    throw new InvalidStreamIDStringError6(input);
  }
  function fromStringNoThrow11(input) {
    return tryCatch6(() => fromString20(input));
  }
  var TAG11 = Symbol.for("@ceramicnetwork/streamid/StreamID");
  var StreamID6 = class _StreamID {
    constructor(type, cid) {
      this._tag = TAG11;
      if (!(type || type === 0))
        throw new Error("StreamID constructor: type required");
      if (!cid)
        throw new Error("StreamID constructor: cid required");
      this._type = typeof type === "string" ? StreamType6.codeByName(type) : type;
      this._cid = typeof cid === "string" ? CID9.parse(cid) : cid;
    }
    static isInstance(instance) {
      return typeof instance === "object" && "_tag" in instance && instance._tag === TAG11;
    }
    static async fromGenesis(type, genesis) {
      const block = await encode30({ value: genesis, codec: esm_exports6, hasher: sha2563 });
      return new _StreamID(type, block.cid);
    }
    get type() {
      return this._type;
    }
    get typeName() {
      return StreamType6.nameByCode(this._type);
    }
    get cid() {
      return this._cid;
    }
    get bytes() {
      const codec = import_varint26.default.encode(STREAMID_CODEC6);
      const type = import_varint26.default.encode(this.type);
      return concat([codec, type, this.cid.bytes]);
    }
    get baseID() {
      return new _StreamID(this._type, this._cid);
    }
    equals(other) {
      if (_StreamID.isInstance(other)) {
        return this.type === other.type && this.cid.equals(other.cid);
      } else {
        return false;
      }
    }
    toString() {
      return base363.encode(this.bytes);
    }
    toUrl() {
      return `ceramic://${this.toString()}`;
    }
    [Symbol.for("nodejs.util.inspect.custom")]() {
      return `StreamID(${this.toString()})`;
    }
    [Symbol.toPrimitive]() {
      return this.toString();
    }
  };
  StreamID6.fromBytes = fromBytes17;
  StreamID6.fromBytesNoThrow = fromBytesNoThrow11;
  StreamID6.fromString = fromString20;
  StreamID6.fromStringNoThrow = fromStringNoThrow11;
  __decorate14([
    Memoize(),
    __metadata11("design:type", String),
    __metadata11("design:paramtypes", [])
  ], StreamID6.prototype, "typeName", null);
  __decorate14([
    Memoize(),
    __metadata11("design:type", Uint8Array),
    __metadata11("design:paramtypes", [])
  ], StreamID6.prototype, "bytes", null);
  __decorate14([
    Memoize(),
    __metadata11("design:type", StreamID6),
    __metadata11("design:paramtypes", [])
  ], StreamID6.prototype, "baseID", null);
  __decorate14([
    Memoize(),
    __metadata11("design:type", Function),
    __metadata11("design:paramtypes", []),
    __metadata11("design:returntype", String)
  ], StreamID6.prototype, "toString", null);
  __decorate14([
    Memoize(),
    __metadata11("design:type", Function),
    __metadata11("design:paramtypes", []),
    __metadata11("design:returntype", String)
  ], StreamID6.prototype, "toUrl", null);

  // node_modules/@ceramicnetwork/stream-model-instance/node_modules/@ceramicnetwork/streamid/lib/commit-id.js
  var __decorate15 = function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata12 = function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var __classPrivateFieldSet6 = function(receiver, state, value, kind, f) {
    if (kind === "m")
      throw new TypeError("Private method is not writable");
    if (kind === "a" && !f)
      throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
      throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
  };
  var __classPrivateFieldGet6 = function(receiver, state, kind, f) {
    if (kind === "a" && !f)
      throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
      throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
  };
  var _CommitID_type6;
  var _CommitID_cid6;
  var _CommitID_commit6;
  var InvalidCommitIDBytesError6 = class extends Error {
    constructor(bytes) {
      super(`Error while parsing CommitID from bytes ${base363.encode(bytes)}: no commit information provided`);
    }
  };
  var InvalidCommitIDStringError6 = class extends Error {
    constructor(input) {
      super(`Error while parsing CommitID from string ${input}: no commit information provided`);
    }
  };
  function fromBytes18(bytes) {
    const parsed = fromBytes16(bytes, "CommitID");
    if (parsed.kind === "commit-id") {
      return new CommitID6(parsed.type, parsed.genesis, parsed.commit);
    }
    throw new InvalidCommitIDBytesError6(bytes);
  }
  function fromBytesNoThrow12(bytes) {
    return tryCatch6(() => fromBytes18(bytes));
  }
  function fromString21(input) {
    const parsed = fromString19(input, "CommitID");
    if (parsed.kind === "commit-id") {
      return new CommitID6(parsed.type, parsed.genesis, parsed.commit);
    }
    throw new InvalidCommitIDStringError6(input);
  }
  function fromStringNoThrow12(input) {
    return tryCatch6(() => fromString21(input));
  }
  var TAG12 = Symbol.for("@ceramicnetwork/streamid/CommitID");
  function make6(stream, commit) {
    return new CommitID6(stream.type, stream.cid, commit);
  }
  var CommitID6 = class {
    constructor(type, cid, commit = null) {
      this._tag = TAG12;
      _CommitID_type6.set(this, void 0);
      _CommitID_cid6.set(this, void 0);
      _CommitID_commit6.set(this, void 0);
      if (!type && type !== 0)
        throw new Error("constructor: type required");
      if (!cid)
        throw new Error("constructor: cid required");
      __classPrivateFieldSet6(this, _CommitID_type6, typeof type === "string" ? StreamType6.codeByName(type) : type, "f");
      __classPrivateFieldSet6(this, _CommitID_cid6, typeof cid === "string" ? CID9.parse(cid) : cid, "f");
      __classPrivateFieldSet6(this, _CommitID_commit6, parseCommit6(__classPrivateFieldGet6(this, _CommitID_cid6, "f"), commit), "f");
    }
    static isInstance(instance) {
      return typeof instance === "object" && "_tag" in instance && instance._tag === TAG12;
    }
    get baseID() {
      return new StreamID6(__classPrivateFieldGet6(this, _CommitID_type6, "f"), __classPrivateFieldGet6(this, _CommitID_cid6, "f"));
    }
    get type() {
      return __classPrivateFieldGet6(this, _CommitID_type6, "f");
    }
    get typeName() {
      return StreamType6.nameByCode(__classPrivateFieldGet6(this, _CommitID_type6, "f"));
    }
    get cid() {
      return __classPrivateFieldGet6(this, _CommitID_cid6, "f");
    }
    get commit() {
      return __classPrivateFieldGet6(this, _CommitID_commit6, "f") || __classPrivateFieldGet6(this, _CommitID_cid6, "f");
    }
    get bytes() {
      const codec = import_varint27.default.encode(STREAMID_CODEC6);
      const type = import_varint27.default.encode(this.type);
      const commitBytes = __classPrivateFieldGet6(this, _CommitID_commit6, "f")?.bytes || new Uint8Array([0]);
      return concat([codec, type, this.cid.bytes, commitBytes]);
    }
    equals(other) {
      return this.type === other.type && this.cid.equals(other.cid) && this.commit.equals(other.commit);
    }
    toString() {
      return base363.encode(this.bytes);
    }
    toUrl() {
      return `ceramic://${this.toString()}`;
    }
    [(_CommitID_type6 = /* @__PURE__ */ new WeakMap(), _CommitID_cid6 = /* @__PURE__ */ new WeakMap(), _CommitID_commit6 = /* @__PURE__ */ new WeakMap(), Symbol.for("nodejs.util.inspect.custom"))]() {
      return `CommitID(${this.toString()})`;
    }
    [Symbol.toPrimitive]() {
      return this.toString();
    }
  };
  CommitID6.fromBytes = fromBytes18;
  CommitID6.fromBytesNoThrow = fromBytesNoThrow12;
  CommitID6.fromString = fromString21;
  CommitID6.fromStringNoThrow = fromStringNoThrow12;
  CommitID6.make = make6;
  __decorate15([
    Memoize(),
    __metadata12("design:type", StreamID6),
    __metadata12("design:paramtypes", [])
  ], CommitID6.prototype, "baseID", null);
  __decorate15([
    Memoize(),
    __metadata12("design:type", String),
    __metadata12("design:paramtypes", [])
  ], CommitID6.prototype, "typeName", null);
  __decorate15([
    Memoize(),
    __metadata12("design:type", CID9),
    __metadata12("design:paramtypes", [])
  ], CommitID6.prototype, "commit", null);
  __decorate15([
    Memoize(),
    __metadata12("design:type", Uint8Array),
    __metadata12("design:paramtypes", [])
  ], CommitID6.prototype, "bytes", null);
  __decorate15([
    Memoize(),
    __metadata12("design:type", Function),
    __metadata12("design:paramtypes", []),
    __metadata12("design:returntype", String)
  ], CommitID6.prototype, "toString", null);
  __decorate15([
    Memoize(),
    __metadata12("design:type", Function),
    __metadata12("design:paramtypes", []),
    __metadata12("design:returntype", String)
  ], CommitID6.prototype, "toUrl", null);

  // node_modules/@ceramicnetwork/stream-model-instance/node_modules/@ceramicnetwork/streamid/lib/stream-ref.js
  var StreamRef5;
  (function(StreamRef6) {
    function fromBytes19(input) {
      const parsed = fromBytes16(input);
      switch (parsed.kind) {
        case "commit-id":
          return new CommitID6(parsed.type, parsed.genesis, parsed.commit);
        case "stream-id":
          return new StreamID6(parsed.type, parsed.genesis);
        default:
          throw new Error(`Malformed StreamRef bytes: ${base363.encode(input)}`);
      }
    }
    StreamRef6.fromBytes = fromBytes19;
    function fromString22(input) {
      const parsed = fromString19(input);
      switch (parsed.kind) {
        case "commit-id":
          return new CommitID6(parsed.type, parsed.genesis, parsed.commit);
        case "stream-id":
          return new StreamID6(parsed.type, parsed.genesis);
        default:
          throw new Error(`Malformed StreamRef string: ${input}`);
      }
    }
    StreamRef6.fromString = fromString22;
    function from14(input) {
      if (StreamID6.isInstance(input)) {
        return input;
      }
      if (CommitID6.isInstance(input)) {
        return input;
      }
      if (input instanceof Uint8Array) {
        return fromBytes19(input);
      }
      if (typeof input === "string") {
        return fromString22(input);
      }
      throw new Error(`Can not build CommitID or StreamID from ${JSON.stringify(input)}`);
    }
    StreamRef6.from = from14;
  })(StreamRef5 || (StreamRef5 = {}));

  // node_modules/@ceramicnetwork/stream-model-instance/lib/model-instance-document.js
  var __decorate16 = function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var ModelInstanceDocument_1;
  var DEFAULT_CREATE_OPTS3 = {
    anchor: true,
    publish: true,
    sync: SyncOptions.NEVER_SYNC,
    syncTimeoutSeconds: 0
  };
  var DEFAULT_DETERMINISTIC_OPTS = {
    anchor: false,
    publish: false,
    sync: SyncOptions.PREFER_CACHE
  };
  var DEFAULT_LOAD_OPTS4 = { sync: SyncOptions.PREFER_CACHE };
  var DEFAULT_UPDATE_OPTS3 = { anchor: true, publish: true };
  async function _ensureAuthenticated2(signer) {
    if (signer.did == null) {
      throw new Error("No DID provided");
    }
    if (!signer.did.authenticated) {
      await signer.did.authenticate();
      if (signer.loggerProvider) {
        signer.loggerProvider.getDiagnosticsLogger().imp(`Now authenticated as DID ${signer.did.id}`);
      }
    }
  }
  async function throwReadOnlyError4() {
    throw new Error("Historical stream commits cannot be modified. Load the stream without specifying a commit to make updates.");
  }
  var ModelInstanceDocument = ModelInstanceDocument_1 = class ModelInstanceDocument2 extends Stream {
    constructor() {
      super(...arguments);
      this._isReadOnly = false;
    }
    get content() {
      return super.content;
    }
    get metadata() {
      const metadata = this.state$.value.metadata;
      return { controller: metadata.controllers[0], model: metadata.model };
    }
    static async create(ceramic, content, metadata, opts = {}) {
      opts = { ...DEFAULT_CREATE_OPTS3, ...opts };
      const signer = opts.asDID ? { did: opts.asDID } : ceramic;
      const commit = await ModelInstanceDocument_1._makeGenesis(signer, content, metadata);
      return ceramic.createStreamFromGenesis(ModelInstanceDocument_1.STREAM_TYPE_ID, commit, opts);
    }
    static async single(ceramic, metadata, opts = {}) {
      opts = { ...DEFAULT_DETERMINISTIC_OPTS, ...opts };
      const signer = opts.asDID ? { did: opts.asDID } : ceramic;
      metadata = { ...metadata, deterministic: true };
      const commit = await ModelInstanceDocument_1._makeGenesis(signer, null, metadata);
      return ceramic.createStreamFromGenesis(ModelInstanceDocument_1.STREAM_TYPE_ID, commit, opts);
    }
    static async load(ceramic, streamId, opts = {}) {
      opts = { ...DEFAULT_LOAD_OPTS4, ...opts };
      const streamRef = StreamRef5.from(streamId);
      if (streamRef.type != ModelInstanceDocument_1.STREAM_TYPE_ID) {
        throw new Error(`StreamID ${streamRef.toString()} does not refer to a '${ModelInstanceDocument_1.STREAM_TYPE_NAME}' stream, but to a ${streamRef.typeName}`);
      }
      return ceramic.loadStream(streamRef, opts);
    }
    async replace(content, opts = {}) {
      opts = { ...DEFAULT_UPDATE_OPTS3, ...opts };
      validateContentLength(content);
      const signer = opts.asDID ? { did: opts.asDID } : this.api;
      const updateCommit = await this._makeCommit(signer, content);
      const updated = await this.api.applyCommit(this.id, updateCommit, opts);
      this.state$.next(updated.state);
    }
    async patch(jsonPatch, opts = {}) {
      opts = { ...DEFAULT_UPDATE_OPTS3, ...opts };
      jsonPatch.forEach((patch) => {
        switch (patch.op) {
          case "add": {
            validateContentLength(patch.value);
            break;
          }
          case "replace": {
            validateContentLength(patch.value);
            break;
          }
          default: {
            break;
          }
        }
      });
      const rawCommit = {
        data: jsonPatch,
        prev: this.tip,
        id: this.id.cid
      };
      const commit = await ModelInstanceDocument_1._signDagJWS(this.api, rawCommit);
      const updated = await this.api.applyCommit(this.id, commit, opts);
      this.state$.next(updated.state);
    }
    makeReadOnly() {
      this.replace = throwReadOnlyError4;
      this.patch = throwReadOnlyError4;
      this.sync = throwReadOnlyError4;
      this._isReadOnly = true;
    }
    get isReadOnly() {
      return this._isReadOnly;
    }
    _makeCommit(signer, newContent) {
      const commit = this._makeRawCommit(newContent);
      return ModelInstanceDocument_1._signDagJWS(signer, commit);
    }
    _makeRawCommit(newContent) {
      const patch = fast_json_patch_default.compare(this.content, newContent || {});
      return {
        data: patch,
        prev: this.tip,
        id: this.state.log[0].cid
      };
    }
    static async _makeGenesis(signer, content, metadata) {
      const commit = await this._makeRawGenesis(signer, content, metadata);
      if (metadata.deterministic) {
        encode27(commit);
        return commit;
      } else {
        return ModelInstanceDocument_1._signDagJWS(signer, commit);
      }
    }
    static async _makeRawGenesis(signer, content, metadata) {
      if (!metadata.model) {
        throw new Error(`Must specify a 'model' when creating a ModelInstanceDocument`);
      }
      validateContentLength(content);
      let controller = metadata.controller;
      if (!controller) {
        if (signer.did) {
          await _ensureAuthenticated2(signer);
          controller = signer.did.hasParent ? signer.did.parent : signer.did.id;
        } else {
          throw new Error("No controller specified");
        }
      }
      const header = {
        controllers: [controller],
        model: metadata.model.bytes,
        sep: "model"
      };
      if (!metadata.deterministic) {
        header.unique = (0, import_random2.randomBytes)(12);
      }
      return { data: content, header };
    }
    static async _signDagJWS(signer, commit) {
      await _ensureAuthenticated2(signer);
      return signer.did.createDagJWS(commit);
    }
  };
  ModelInstanceDocument.STREAM_TYPE_NAME = "MID";
  ModelInstanceDocument.STREAM_TYPE_ID = 3;
  ModelInstanceDocument.MAX_DOCUMENT_SIZE = 16e6;
  ModelInstanceDocument = ModelInstanceDocument_1 = __decorate16([
    StreamStatic()
  ], ModelInstanceDocument);
  function validateContentLength(content) {
    if (content) {
      const contentLength = (0, import_object_sizeof.default)(content);
      if (contentLength > ModelInstanceDocument.MAX_DOCUMENT_SIZE) {
        throw new Error(`Content has length of ${contentLength}B which exceeds maximum size of ${ModelInstanceDocument.MAX_DOCUMENT_SIZE}B`);
      }
    }
  }

  // node_modules/@ceramicnetwork/http-client/lib/remote-index-api.js
  var RemoteIndexApi = class {
    constructor(apiUrl) {
      this._fetchJson = fetchJson;
      this._collectionURL = new URL("./collection", apiUrl);
      this._countURL = new URL("./collection/count", apiUrl);
    }
    async count(query) {
      const response = await this._fetchJson(this._countURL, {
        method: "POST",
        body: serializeObjectForHttpPost(query)
      });
      return response.count;
    }
    async query(query) {
      const response = await this._fetchJson(this._collectionURL, {
        method: "POST",
        body: serializeObjectForHttpPost(query)
      });
      const edges = response.edges.map((e) => {
        return {
          cursor: e.cursor,
          node: StreamUtils.deserializeState(e.node)
        };
      });
      return {
        edges,
        pageInfo: response.pageInfo
      };
    }
  };

  // node_modules/@ceramicnetwork/http-client/lib/remote-pin-api.js
  var RemotePinApi = class {
    constructor(_apiUrl, _getDidFn) {
      this._apiUrl = _apiUrl;
      this._getDidFn = _getDidFn;
      this._fetchJson = fetchJson;
      this.getCodePath = "./admin/getCode";
    }
    async buildJWS(actingDid, code8, url) {
      if (!actingDid)
        throw new MissingDIDError();
      const jws = await actingDid.createJWS({
        code: code8,
        requestPath: url.pathname
      });
      return `${jws.signatures[0].protected}.${jws.payload}.${jws.signatures[0].signature}`;
    }
    getCodeUrl() {
      return new URL(this.getCodePath, this._apiUrl);
    }
    getBaseUrl() {
      return new URL(`./admin/pins`, this._apiUrl);
    }
    async generateCode() {
      return (await this._fetchJson(this.getCodeUrl())).code;
    }
    async add(streamId, force) {
      const args = {};
      if (force) {
        args.force = true;
      }
      const code8 = await this.generateCode();
      const url = new URL(`./admin/pins/${streamId}`, this._apiUrl);
      await this._fetchJson(url, {
        headers: {
          Authorization: `Basic ${await this.buildJWS(this._getDidFn(), code8, this.getBaseUrl())}`
        },
        method: "post",
        body: args
      });
    }
    async rm(streamId, opts) {
      const code8 = await this.generateCode();
      const url = new URL(`./admin/pins/${streamId}`, this._apiUrl);
      await this._fetchJson(url, {
        headers: {
          Authorization: `Basic ${await this.buildJWS(this._getDidFn(), code8, this.getBaseUrl())}`
        },
        method: "delete",
        body: { opts }
      });
    }
    async ls(streamId) {
      let url = new URL("./admin/pins", this._apiUrl);
      if (streamId) {
        url = new URL(`./admin/pins/${streamId.toString()}`, this._apiUrl);
      }
      const code8 = await this.generateCode();
      const result = await this._fetchJson(url, {
        headers: {
          Authorization: `Basic ${await this.buildJWS(this._getDidFn(), code8, this.getBaseUrl())}`
        }
      });
      const { pinnedStreamIds } = result;
      return {
        [Symbol.asyncIterator]() {
          let index = 0;
          return {
            next() {
              if (index === pinnedStreamIds.length) {
                return Promise.resolve({ value: null, done: true });
              }
              return Promise.resolve({ value: pinnedStreamIds[index++], done: false });
            }
          };
        }
      };
    }
  };

  // node_modules/@ceramicnetwork/http-client/lib/remote-admin-api.js
  var RemoteAdminApi = class {
    constructor(_apiUrl, _getDidFn) {
      this._apiUrl = _apiUrl;
      this._getDidFn = _getDidFn;
      this._fetchJson = fetchJson;
      this.modelsPath = "./admin/models";
      this.getCodePath = "./admin/getCode";
      this.nodeStatusPath = "./admin/status";
      this._pinApi = new RemotePinApi(this._apiUrl, this._getDidFn);
    }
    getCodeUrl() {
      return new URL(this.getCodePath, this._apiUrl);
    }
    getModelsUrl() {
      return new URL(this.modelsPath, this._apiUrl);
    }
    getStatusUrl() {
      return new URL(this.nodeStatusPath, this._apiUrl);
    }
    async buildJWS(actingDid, code8, requestPath, body) {
      if (!actingDid)
        throw new MissingDIDError();
      const jws = await actingDid.createJWS({
        code: code8,
        requestPath,
        requestBody: body
      });
      return `${jws.signatures[0].protected}.${jws.payload}.${jws.signatures[0].signature}`;
    }
    async generateCode() {
      return (await this._fetchJson(this.getCodeUrl())).code;
    }
    async nodeStatus() {
      const code8 = await this.generateCode();
      return this._fetchJson(this.getStatusUrl(), {
        headers: {
          Authorization: `Basic ${await this.buildJWS(this._getDidFn(), code8, this.getStatusUrl().pathname)}`
        }
      });
    }
    async startIndexingModels(modelsIDs) {
      const code8 = await this.generateCode();
      const body = modelIDsAsRequestBody(modelsIDs);
      await this._fetchJson(this.getModelsUrl(), {
        method: "post",
        body: {
          jws: await this.buildJWS(this._getDidFn(), code8, this.getModelsUrl().pathname, body)
        }
      });
    }
    async getIndexedModels() {
      const code8 = await this.generateCode();
      const response = await this._fetchJson(this.getModelsUrl(), {
        headers: {
          Authorization: `Basic ${await this.buildJWS(this._getDidFn(), code8, this.getModelsUrl().pathname)}`
        }
      });
      return response.models.map((modelStreamIDString) => {
        return StreamID.fromString(modelStreamIDString);
      });
    }
    async stopIndexingModels(modelsIDs) {
      const code8 = await this.generateCode();
      const body = modelIDsAsRequestBody(modelsIDs);
      await this._fetchJson(this.getModelsUrl(), {
        method: "delete",
        body: {
          jws: await this.buildJWS(this._getDidFn(), code8, this.getModelsUrl().pathname, body)
        }
      });
    }
    get pin() {
      return this._pinApi;
    }
  };
  function modelIDsAsRequestBody(modelIDs) {
    return modelIDs ? { models: modelIDs.map((streamID2) => streamID2.toString()) } : void 0;
  }

  // node_modules/@ceramicnetwork/http-client/lib/ceramic-http-client.js
  var API_PATH = "/api/v0/";
  var CERAMIC_HOST = "http://localhost:7007";
  var DEFAULT_CLIENT_CONFIG = {
    syncInterval: 5e3
  };
  var DEFAULT_APPLY_COMMIT_OPTS = { anchor: true, publish: true, sync: SyncOptions.PREFER_CACHE };
  var DEFAULT_CREATE_FROM_GENESIS_OPTS = {
    anchor: true,
    publish: true,
    sync: SyncOptions.PREFER_CACHE
  };
  var DEFAULT_LOAD_OPTS5 = { sync: SyncOptions.PREFER_CACHE };
  var CeramicClient = class {
    constructor(apiHost = CERAMIC_HOST, config3 = {}) {
      this._config = { ...DEFAULT_CLIENT_CONFIG, ...config3 };
      this._apiUrl = new URL(API_PATH, apiHost);
      this.context = { api: this };
      this.index = new RemoteIndexApi(this._apiUrl);
      const getDidFn = (() => {
        return this.did;
      }).bind(this);
      this.admin = new RemoteAdminApi(this._apiUrl, getDidFn);
      this._streamConstructors = {
        [Caip10Link.STREAM_TYPE_ID]: Caip10Link,
        [Model.STREAM_TYPE_ID]: Model,
        [ModelInstanceDocument.STREAM_TYPE_ID]: ModelInstanceDocument,
        [TileDocument.STREAM_TYPE_ID]: TileDocument
      };
    }
    get did() {
      return this.context.did;
    }
    set did(did) {
      this.context.did = did;
    }
    async createStreamFromGenesis(type, genesis, opts = {}) {
      opts = { ...DEFAULT_CREATE_FROM_GENESIS_OPTS, ...opts };
      const stream = await Document.createFromGenesis(this._apiUrl, type, genesis, opts, this._config.syncInterval);
      return this.buildStreamFromDocument(stream);
    }
    async loadStream(streamId, opts = {}) {
      opts = { ...DEFAULT_LOAD_OPTS5, ...opts };
      const streamRef = StreamRef.from(streamId);
      const stream = await Document.load(streamRef, this._apiUrl, this._config.syncInterval, opts);
      return this.buildStreamFromDocument(stream);
    }
    async multiQuery(queries, timeout) {
      const queriesJSON = queries.map((q) => {
        return {
          ...q,
          streamId: typeof q.streamId === "string" ? q.streamId : q.streamId.toString()
        };
      });
      const url = new URL("./multiqueries", this._apiUrl);
      const results = await fetchJson(url, {
        method: "post",
        body: {
          queries: queriesJSON,
          ...{ timeout }
        }
      });
      return Object.entries(results).reduce((acc, e) => {
        const [k, v] = e;
        const state = StreamUtils.deserializeState(v);
        const stream = new Document(state, this._apiUrl, this._config.syncInterval);
        acc[k] = this.buildStreamFromDocument(stream);
        return acc;
      }, {});
    }
    loadStreamCommits(streamId) {
      const effectiveStreamId = typeStreamID(streamId);
      return Document.loadStreamCommits(effectiveStreamId, this._apiUrl);
    }
    async applyCommit(streamId, commit, opts = {}) {
      opts = { ...DEFAULT_APPLY_COMMIT_OPTS, ...opts };
      const effectiveStreamId = typeStreamID(streamId);
      const document2 = await Document.applyCommit(this._apiUrl, effectiveStreamId, commit, opts, this._config.syncInterval);
      return this.buildStreamFromDocument(document2);
    }
    async requestAnchor(streamId, opts = {}) {
      opts = { ...DEFAULT_LOAD_OPTS5, ...opts };
      const { anchorStatus } = await fetchJson(`${this._apiUrl}/streams/${streamId.toString()}/anchor`, {
        method: "post",
        body: {
          opts
        }
      });
      return anchorStatus;
    }
    addStreamHandler(streamHandler) {
      this._streamConstructors[streamHandler.name] = streamHandler.stream_constructor;
    }
    buildStreamFromState(state) {
      const stream$ = new Document(state, this._apiUrl, this._config.syncInterval);
      return this.buildStreamFromDocument(stream$);
    }
    buildStreamFromDocument(stream) {
      const type = stream.state.type;
      const streamConstructor = this._streamConstructors[type];
      if (!streamConstructor)
        throw new Error(`Failed to find constructor for stream ${type}`);
      return new streamConstructor(stream, this.context);
    }
    async setDID(did) {
      this.context.did = did;
    }
    async getSupportedChains() {
      if (this._supportedChains) {
        return this._supportedChains;
      }
      const { supportedChains } = await fetchJson(this._apiUrl + "/node/chains");
      this._supportedChains = supportedChains;
      return supportedChains;
    }
    async close() {
    }
  };

  // lit_actions/authorizePaymentFull.js
  var go = async () => {
    const client = new CeramicClient("http://18.141.190.4:7007");
    const directory = await TileDocument.load(client, "kjzl6cwe1jw149n2kupgcy4c8delsbvcwi5u3gjs8mg2n2ev3nqaect16chqi1y");
    if (!directory.content.documents.includes(streamID)) {
      console.log("stream ID not found");
      return;
    }
    const stream = await TileDocument.load(client, streamID);
    if (stream.content.price != amount) {
      console.log("data price does not coincide");
      return;
    }
    if (stream.content.dataOwner.toLowerCase() != dataOwner.toLowerCase()) {
      console.log("data owner does not match");
      return;
    }
    if ("0x" + stream.content.dataId != dataID) {
      console.log("invalid dataID:");
      return;
    }
    let foobar = ethers.utils.solidityKeccak256(
      ["uint256", "bytes32", "address"],
      [amount, dataID, dataOwner]
    );
    const toSign = ethers.utils.arrayify(foobar);
    const sigShare = await Lit.Actions.signEcdsa({ toSign, publicKey, sigName });
  };
  go();
})();
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

fast-json-patch/module/helpers.mjs:
  (*!
   * https://github.com/Starcounter-Jack/JSON-Patch
   * (c) 2017-2022 Joachim Wester
   * MIT licensed
   *)

fast-json-patch/module/duplex.mjs:
  (*!
   * https://github.com/Starcounter-Jack/JSON-Patch
   * (c) 2017-2021 Joachim Wester
   * MIT license
   *)
*/

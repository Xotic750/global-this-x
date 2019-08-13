import attempt from 'attempt-x';
var ObjectCtr = {}.constructor;
var objectPrototype = ObjectCtr.prototype;
var defineProperty = ObjectCtr.defineProperty;

var getGlobalThisFallback = function getGlobalThisFallback() {
  /* eslint-disable-next-line no-restricted-globals */
  if (typeof self !== 'undefined') {
    /* eslint-disable-next-line no-restricted-globals */
    return self;
  }

  if (typeof window !== 'undefined') {
    return window;
  }

  if (typeof global !== 'undefined') {
    return global;
  }
  /* eslint-disable-next-line no-void */


  return void 0;
};

var returnThis = function returnThis() {
  /* eslint-disable-next-line babel/no-invalid-this */
  return this;
};

var getGlobalThis = function getGlobalThis() {
  var res = attempt(defineProperty, '$$globalThis$$', {
    get: returnThis,
    configurable: true
  });
  /* eslint-disable-next-line no-restricted-properties,no-underscore-dangle */

  if (res.threw && attempt(objectPrototype.__defineGetter__, '$$globalThis$$', returnThis).threw) {
    return getGlobalThisFallback();
  } // noinspection JSUnresolvedVariable


  var $globalThis = typeof $$globalThis$$ === 'undefined' ? getGlobalThisFallback() : $$globalThis$$;
  /* eslint-disable-line no-undef */

  delete objectPrototype.$$globalThis$$;
  return $globalThis;
};
/**
 * The global "this" value.
 *
 * @type {!object|undefined}
 */


var $globalThis = getGlobalThis();
export default $globalThis;

//# sourceMappingURL=global-this-x.esm.js.map
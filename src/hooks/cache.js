const CacheMap = require('@feathers-plus/cache');
const { cache } = require('feathers-hooks-common');

const MAX_CALLS = 2;
const MAX_AGE = 1000 * 60 * 5;
const MODELS_ID = '_id';
const defaultMakeCacheKey = (key) => key.toHexString ? key.toHexString() : key;

module.exports = {
  createCacheHook(options = { max: MAX_CALLS, maxAge: MAX_AGE }, _id = MODELS_ID, makeCacheKey = defaultMakeCacheKey) {
    let cacheMap = new CacheMap(options);
    return cache(cacheMap, _id, { makeCacheKey });
  }
};
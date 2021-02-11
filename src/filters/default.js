function register(env) {
  env.addFilter("default", handler);
}

/**
 * Not exactly correct.
 * @param {*} input 
 * @param {*} default_value 
 * @param {*} truthy 
 */
function handler(input, default_value, truthy) {

  return typeof input !== 'undefined' ? (truthy && !input ? default_value : input) : default_value;
  
}
  

module.exports = {
  handler,
  register
};

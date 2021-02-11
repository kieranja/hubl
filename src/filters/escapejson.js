function register(env) {
  env.addFilter("escapejson", handler);
}

function handler(input) {
  return JSON.parse(input);
}
  

module.exports = {
  handler,
  register
};

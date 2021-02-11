function register(env) {
  env.addFilter("tojson", handler);
}

function handler(input) {
  return JSON.parse(input);
}
  

module.exports = {
  handler,
  register
};

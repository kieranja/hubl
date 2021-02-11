function register(env) {
  env.addFilter("count", handler);
}

function handler(input) {
  return input.length;
}
  

module.exports = {
  handler,
  register
};

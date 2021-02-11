function register(env) {
  env.addFilter("attr", handler);
}

function handler(input, name) {
  return input[name];
}
  

module.exports = {
  handler,
  register
};

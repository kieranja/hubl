function register(env) {
  env.addFilter("multiply", handler);
}

function handler(input, multiplier) {
  return input * multiplier;
}
  

module.exports = {
  handler,
  register
};

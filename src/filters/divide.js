function register(env) {
  env.addFilter("divide", handler);
}

function handler(input, divisor) {
  return parseFloat(input / divisor);
}
  

module.exports = {
  handler,
  register
};

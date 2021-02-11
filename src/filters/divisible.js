function register(env) {
  env.addFilter("divisible", handler);
}

function handler(input, divisor) {


}
  

module.exports = {
  handler,
  register
};

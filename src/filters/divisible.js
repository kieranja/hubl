function register(env) {
  env.addFilter("divisible", handler);
}

function handler(input, divisor) {


}
  

export {
  handler,
  register as default
};

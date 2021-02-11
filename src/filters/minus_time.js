function register(env) {
  env.addFilter("minus_time", handler);
}

function handler(input, diff, unit) {


}
  

export {
  handler,
  register as default
};

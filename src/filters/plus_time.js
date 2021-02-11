function register(env) {
  env.addFilter("plus_time", handler);
}

function handler(input, diff, unit) {


}
  

export {
  handler,
  register as default
};

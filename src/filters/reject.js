function register(env) {
  env.addFilter("reject", handler);
}

function handler(input, exp_test) {


}
  

export {
  handler,
  register as default
};

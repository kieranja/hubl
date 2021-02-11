function register(env) {
  env.addFilter("ipaddr", handler);
}

function handler(input, function_attr) {


}
  

export {
  handler,
  register as default
};

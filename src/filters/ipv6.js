function register(env) {
  env.addFilter("ipv6", handler);
}

function handler(input, function_attr) {


}
  

export {
  handler,
  register as default
};

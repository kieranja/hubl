function register(env) {
  env.addFilter("ipv4", handler);
}

function handler(input, function_attr) {

}
  

export {
  handler,
  register as default
};

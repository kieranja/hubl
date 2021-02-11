function register(env) {
  env.addFilter("int", handler);
}

function handler(input, default_attr) {
  return parseInt(input) || default_attr;
}
  

export {
  handler,
  register as default
};

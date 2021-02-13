function register(env) {
  env.addFilter("float", handler);
}

function handler(input) {
  return parseFloat(input);
}
  

export {
  handler,
  register as default
};

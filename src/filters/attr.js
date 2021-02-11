function register(env) {
  env.addFilter("attr", handler);
}

function handler(input, name) {
  return input[name];
}
  

export {
  handler,
  register as default
};

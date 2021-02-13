function register(env) {
  env.addFilter("lower", handler);
}

function handler(input) {
  return input.toLowerCase();
}
  

export {
  handler,
  register as default
};

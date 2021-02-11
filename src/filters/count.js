function register(env) {
  env.addFilter("count", handler);
}

function handler(input) {
  return input.length;
}
  

export {
  handler,
  register as default
};

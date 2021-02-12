function register(env) {
  env.addFilter("root", handler);
}

function handler(input) {
  return Math.sqrt(input);
}
  

export {
  handler,
  register as default
};

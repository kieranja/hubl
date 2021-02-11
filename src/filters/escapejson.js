function register(env) {
  env.addFilter("escapejson", handler);
}

function handler(input) {
  return JSON.parse(input);
}
  

export {
  handler,
  register as default
};

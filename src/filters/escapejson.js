function register(env) {
  env.addFilter("escapejson", handler);
}

function handler(input) {
  return JSON.stringify(input);
}
  

export {
  handler,
  register as default
};

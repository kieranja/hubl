function register(env) {
  env.addFilter("tojson", handler);
}

function handler(input) {
  return JSON.parse(input);
}
  

export {
  handler,
  register as default
};

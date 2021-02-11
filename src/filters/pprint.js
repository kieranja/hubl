function register(env) {
  env.addFilter("pprint", handler);
}

function handler(input) {
  return JSON.stringify(input);
}
  

export {
  handler,
  register as default
};

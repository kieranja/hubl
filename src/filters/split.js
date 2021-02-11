function register(env) {
  env.addFilter("split", handler);
}

function handler(input, separator, limit) {
  return input.split(input, separator);
}
  

export {
  handler,
  register as default
};

function register(env) {
  env.addFilter("add", handler);
}

function handler(input, addend) {
  return input + addend;
}
  

export {
  handler,
  register as default
};

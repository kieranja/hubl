function register(env) {
  env.addFilter("cut", handler);
}

function handler(input, to_remove) {
  return input.replace(to_remove);
}
  

export {
  handler,
  register as default
};

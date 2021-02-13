function register(env) {
  env.addFilter("upper", handler);
}

function handler(input) {
  return input.toUpperCase();
}
  

export {
  handler,
  register as default
};

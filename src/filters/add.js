function register(env) {
  env.addFilter("add", handler);
}

function handler(input, addend) {
  return input + addend;
}
  

module.exports = {
  handler,
  register
};

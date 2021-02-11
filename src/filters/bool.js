function register(env) {
  env.addFilter("bool", handler);
}

function handler(input) {
  return input.toLowerCase() == 'true' ? true : false;
}
  

module.exports = {
  handler,
  register
};

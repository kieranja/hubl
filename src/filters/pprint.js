function register(env) {
  env.addFilter("pprint", handler);
}

function handler(input) {
  return JSON.stringify(input);
}
  

module.exports = {
  handler,
  register
};

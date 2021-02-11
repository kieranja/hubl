function register(env) {
  env.addFilter("escape_jinjava", handler);
}

function handler(input) {


}
  

module.exports = {
  handler,
  register
};

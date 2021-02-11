function register(env) {
  env.addFilter("log", handler);
}

function handler(input, base) {


}
  

module.exports = {
  handler,
  register
};

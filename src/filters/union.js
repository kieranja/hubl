function register(env) {
  env.addFilter("union", handler);
}

function handler(input, list) {


}
  

module.exports = {
  handler,
  register
};

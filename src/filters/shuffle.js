function register(env) {
  env.addFilter("shuffle", handler);
}

function handler(input) {


}
  

module.exports = {
  handler,
  register
};

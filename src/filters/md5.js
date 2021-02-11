function register(env) {
  env.addFilter("md5", handler);
}

function handler(input) {


}
  

module.exports = {
  handler,
  register
};

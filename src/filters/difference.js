function register(env) {
  env.addFilter("difference", handler);
}

function handler(input, list) {


}
  

module.exports = {
  handler,
  register
};

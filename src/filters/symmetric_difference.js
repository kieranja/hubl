function register(env) {
  env.addFilter("symmetric_difference", handler);
}

function handler(input, list) {


}
  

module.exports = {
  handler,
  register
};

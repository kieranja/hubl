function register(env) {
  env.addFilter("plus_time", handler);
}

function handler(input, diff, unit) {


}
  

module.exports = {
  handler,
  register
};

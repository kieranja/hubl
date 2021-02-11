function register(env) {
  env.addFilter("date", handler);
}

function handler(input) {


}
  

module.exports = {
  handler,
  register
};

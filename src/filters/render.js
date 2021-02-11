function register(env) {
  env.addFilter("render", handler);
}

function handler(input) {


}
  

module.exports = {
  handler,
  register
};

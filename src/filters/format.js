function register(env) {
  env.addFilter("format", handler);
}

function handler(input, args) {


}
  

module.exports = {
  handler,
  register
};

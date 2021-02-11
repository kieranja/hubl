function register(env) {
  env.addFilter("fromjson", handler);
}

function handler(input) {


}
  

module.exports = {
  handler,
  register
};

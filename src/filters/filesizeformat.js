function register(env) {
  env.addFilter("filesizeformat", handler);
}

function handler(input, binary) {


}
  

module.exports = {
  handler,
  register
};

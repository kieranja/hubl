function register(env) {
  env.addFilter("root", handler);
}

function handler(input, root) {


}
  

module.exports = {
  handler,
  register
};

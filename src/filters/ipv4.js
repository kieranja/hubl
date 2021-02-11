function register(env) {
  env.addFilter("ipv4", handler);
}

function handler(input, function_attr) {


}
  

module.exports = {
  handler,
  register
};

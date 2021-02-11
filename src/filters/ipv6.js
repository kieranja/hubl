function register(env) {
  env.addFilter("ipv6", handler);
}

function handler(input, function_attr) {


}
  

module.exports = {
  handler,
  register
};

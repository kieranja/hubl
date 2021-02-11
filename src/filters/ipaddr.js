function register(env) {
  env.addFilter("ipaddr", handler);
}

function handler(input, function_attr) {


}
  

module.exports = {
  handler,
  register
};

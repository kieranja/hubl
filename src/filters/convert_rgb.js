function register(env) {
  env.addFilter("convert_rgb", handler);
}

function handler(input) {


}
  

module.exports = {
  handler,
  register
};

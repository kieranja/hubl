function register(env) {
  env.addFilter("intersect", handler);
}

function handler(input, list) {


}
  

module.exports = {
  handler,
  register
};

function register(env) {
  env.addFilter("fromyaml", handler);
}

function handler(input) {


}
  

module.exports = {
  handler,
  register
};

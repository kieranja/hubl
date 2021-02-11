function register(env) {
  env.addFilter("toyaml", handler);
}

function handler(input) {


}
  

module.exports = {
  handler,
  register
};

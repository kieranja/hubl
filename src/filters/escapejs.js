function register(env) {
  env.addFilter("escapejs", handler);
}

function handler(input) {


}
  

module.exports = {
  handler,
  register
};

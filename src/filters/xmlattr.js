function register(env) {
  env.addFilter("xmlattr", handler);
}

function handler(input, autospace) {


}
  

module.exports = {
  handler,
  register
};

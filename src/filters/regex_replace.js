function register(env) {
  env.addFilter("regex_replace", handler);
}

function handler(input, regex, new_attr) {


}
  

module.exports = {
  handler,
  register
};

function register(env) {
  env.addFilter("wordwrap", handler);
}

function handler(input, width, break_long_words) {


}
  

module.exports = {
  handler,
  register
};

function register(env) {
  env.addFilter("wordwrap", handler);
}

function handler(input, width, break_long_words) {


}
  

export {
  handler,
  register as default
};

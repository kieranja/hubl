function register(env) {
  env.addFilter("sort", handler);
}

function handler(input, reverse, case_sensitive, attribute) {


}
  

export {
  handler,
  register as default
};

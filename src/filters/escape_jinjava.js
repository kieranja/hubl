function register(env) {
  env.addFilter("escape_jinjava", handler);
}

function handler(input) {


}
  

export {
  handler,
  register as default
};

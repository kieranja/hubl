function register(env) {
  env.addFilter("union", handler);
}

function handler(input, list) {


}
  

export {
  handler,
  register as default
};

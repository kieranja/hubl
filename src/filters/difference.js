function register(env) {
  env.addFilter("difference", handler);
}

function handler(input, list) {

}
  

export {
  handler,
  register as default
};

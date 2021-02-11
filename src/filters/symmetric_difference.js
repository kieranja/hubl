function register(env) {
  env.addFilter("symmetric_difference", handler);
}

function handler(input, list) {


}
  

export {
  handler,
  register as default
};

function register(env) {
  env.addFilter("d", handler);
}

function handler(input) {


}
  

export {
  handler,
  register as default
};

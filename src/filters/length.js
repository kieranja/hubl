function register(env) {
  env.addFilter("length", handler);
}

function handler(input) {


}
  

export {
  handler,
  register as default
};

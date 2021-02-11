function register(env) {
  env.addFilter("e", handler);
}

function handler(input) {


}
  

export {
  handler,
  register as default
};

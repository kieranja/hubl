function register(env) {
  env.addFilter("shuffle", handler);
}

function handler(input) {


}
  

export {
  handler,
  register as default
};

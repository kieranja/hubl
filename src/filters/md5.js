function register(env) {
  env.addFilter("md5", handler);
}

function handler(input) {


}
  

export {
  handler,
  register as default
};

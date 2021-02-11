function register(env) {
  env.addFilter("fromjson", handler);
}

function handler(input) {


}
  

export {
  handler,
  register as default
};

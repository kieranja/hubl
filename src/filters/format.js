function register(env) {
  env.addFilter("format", handler);
}

function handler(input, args) {


}
  

export {
  handler,
  register as default
};

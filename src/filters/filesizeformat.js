function register(env) {
  env.addFilter("filesizeformat", handler);
}

function handler(input, binary) {


}
  

export {
  handler,
  register as default
};

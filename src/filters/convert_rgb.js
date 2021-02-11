function register(env) {
  env.addFilter("convert_rgb", handler);
}

function handler(input) {


}
  

export {
  handler,
  register as default
};

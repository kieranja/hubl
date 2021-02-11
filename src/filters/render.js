function register(env) {
  env.addFilter("render", handler);
}

function handler(input) {


}
  

export {
  handler,
  register as default
};

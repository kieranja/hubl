function register(env) {
  env.addFilter("root", handler);
}

function handler(input, root) {


}
  

export {
  handler,
  register as default
};

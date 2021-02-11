function register(env) {
  env.addFilter("log", handler);
}

function handler(input, base) {


}
  

export {
  handler,
  register as default
};

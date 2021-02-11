function register(env) {
  env.addFilter("date", handler);
}

function handler(input) {


}
  

export {
  handler,
  register as default
};

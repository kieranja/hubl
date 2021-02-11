function register(env) {
  env.addFilter("toyaml", handler);
}

function handler(input) {


}
  

export {
  handler,
  register as default
};

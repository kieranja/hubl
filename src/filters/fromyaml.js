function register(env) {
  env.addFilter("fromyaml", handler);
}

function handler(input) {


}
  

export {
  handler,
  register as default
};

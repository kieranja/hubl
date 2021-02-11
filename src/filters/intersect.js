function register(env) {
  env.addFilter("intersect", handler);
}

function handler(input, list) {


}
  

export {
  handler,
  register as default
};

function register(env) {
  env.addFilter("xmlattr", handler);
}

function handler(input, autospace) {


}
  

export {
  handler,
  register as default
};

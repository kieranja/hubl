function register(env) {
  env.addFilter("escapejs", handler);
}

function handler(input) {

}
  

export {
  handler,
  register as default
};

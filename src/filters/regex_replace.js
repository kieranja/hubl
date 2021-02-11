function register(env) {
  env.addFilter("regex_replace", handler);
}

function handler(input, regex, new_attr) {


}
  

export {
  handler,
  register as default
};

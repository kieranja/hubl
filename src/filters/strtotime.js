function register(env) {
  env.addFilter("strtotime", handler);
}

function handler(input, datetimeFormat) {


}
  

export {
  handler,
  register as default
};

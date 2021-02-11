function register(env) {
  env.addFilter("datetimeformat", handler);
}

function handler(input, format, timezone, locale) {


}
  

export {
  handler,
  register as default
};

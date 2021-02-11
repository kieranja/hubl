function register(env) {
  env.addFilter("format_currency", handler);
}

function handler(input, locale, currency_code, use_default_decimal_digits) {


}
  

export {
  handler,
  register as default
};

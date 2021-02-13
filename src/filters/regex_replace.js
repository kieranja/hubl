function register(env) {
  env.addFilter("regex_replace", handler);
}

function handler(input, regex, replacement) {
  const regexp = new RegExp(regex, 'g');
  return input.replace(regexp, replacement);
}
  

export {
  handler,
  register as default
};

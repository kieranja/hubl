function register(env) {
  env.addFilter("fromjson", handler);
}

function handler(input) {
  console.log(input)
  return JSON.parse(input);
}
  

export {
  handler,
  register as default
};

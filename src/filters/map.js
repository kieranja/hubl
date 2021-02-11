function register(env) {
  env.addFilter("map", (input, attribute, add) => handler(input, attribute, add, env));
}

function handler(input, attribute, add, env) {
  const fn = env.getFilter(attribute);
  return input.map(fn);
}

export {
  handler,
  register as default
};

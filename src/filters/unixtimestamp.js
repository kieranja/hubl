function register(env) {
  env.addFilter("unixtimestamp", handler);
}

function handler(input) {
  return Math.floor(new Date().getTime()/1000);
}
  

export {
  handler,
  register as default
};

function register(env) {
  env.addFilter("random", handler);
}

function handler(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
  

export {
  handler,
  register as default
};

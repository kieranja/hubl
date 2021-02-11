function register(env) {
  env.addFilter("truncatehtml", handler);
}

function handler(input, length, end, breakword) {
  
}
  

export {
  handler,
  register as default
};

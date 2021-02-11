function register(env) {
  env.addFilter("truncatehtml", handler);
}

function handler(input, length, end, breakword) {
  
}
  

module.exports = {
  handler,
  register
};

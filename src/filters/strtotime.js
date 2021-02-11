function register(env) {
  env.addFilter("strtotime", handler);
}

function handler(input, datetimeFormat) {


}
  

module.exports = {
  handler,
  register
};

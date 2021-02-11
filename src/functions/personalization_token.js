function register(env) {
  env.addGlobal("personalization_token", handler);
}
    
function handler(expression, default_attr) {


}
  
    
module.exports = {
  handler,
  register
};
  
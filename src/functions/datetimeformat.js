function register(env) {
  env.addGlobal("datetimeformat", handler);
}
    
function handler(var_attr, format, timezone) {


}
  
    
module.exports = {
  handler,
  register
};
  
function register(env) {
  env.addGlobal("set_response_code", handler);
}
    
function handler(code) {


}
  
    
module.exports = {
  handler,
  register
};
  
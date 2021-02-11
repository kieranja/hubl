function register(env) {
  env.addGlobal("strtotime", handler);
}
    
function handler(param1, param2 ) {


}
  
    
module.exports = {
  handler,
  register
};
  
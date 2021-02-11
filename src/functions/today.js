function register(env) {
  env.addGlobal("today", handler);
}
    
function handler(timezone) {


}
  
    
module.exports = {
  handler,
  register
};
  
function register(env) {
  env.addGlobal("to_local_time", handler);
}
    
function handler(date) {


}
  
    
module.exports = {
  handler,
  register
};
  
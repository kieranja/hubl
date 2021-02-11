function register(env) {
  env.addGlobal("truncate", handler);
}
    
function handler(s, length, end) {


}
  
    
module.exports = {
  handler,
  register
};
  
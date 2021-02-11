function register(env) {
  env.addGlobal("range", handler);
}
    
function handler(start, end, step) {


}
  
    
module.exports = {
  handler,
  register
};
  
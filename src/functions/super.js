function register(env) {
  env.addGlobal("super", handler);
}
    
function handler() {


}
  
    
module.exports = {
  handler,
  register
};
  
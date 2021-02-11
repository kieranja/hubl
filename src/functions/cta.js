function register(env) {
  env.addGlobal("cta", handler);
}
    
function handler(guid, align_opt) {


}
  
    
module.exports = {
  handler,
  register
};
  
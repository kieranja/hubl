function register(env) {
  env.addGlobal("content_by_id", handler);
}
    
function handler(id) {


}
  
    
module.exports = {
  handler,
  register
};
  
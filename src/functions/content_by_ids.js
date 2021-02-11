function register(env) {
  env.addGlobal("content_by_ids", handler);
}
    
function handler(ids) {


}
  
    
module.exports = {
  handler,
  register
};
  
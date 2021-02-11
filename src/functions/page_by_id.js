function register(env) {
  env.addGlobal("page_by_id", handler);
}
    
function handler(page_id) {


}
  
    
module.exports = {
  handler,
  register
};
  
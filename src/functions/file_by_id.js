function register(env) {
  env.addGlobal("file_by_id", handler);
}
    
function handler(file_id) {


}
  
    
module.exports = {
  handler,
  register
};
  
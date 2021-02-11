function register(env) {
  env.addGlobal("module_asset_url", handler);
}
    
function handler(name) {


}
  
    
module.exports = {
  handler,
  register
};
  
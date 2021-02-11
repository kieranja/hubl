function register(env) {
  env.addGlobal("get_asset_url", handler);
}
    
function handler(path) {


}
  
    
module.exports = {
  handler,
  register
};
  
function register(env) {
  env.addGlobal("get_asset_url", handler);
}
    
function handler(path) {
  return path;
}
  
    
export {
  handler,
  register as default
};
  
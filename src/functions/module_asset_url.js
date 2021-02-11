function register(env) {
  env.addGlobal("module_asset_url", handler);
}
    
function handler(name) {
  return `https://cdn2.hubspot.net/hubfs/6178146/${ name }`;
}
  
    
export {
  handler,
  register as default
};
  
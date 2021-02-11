function register(env) {
  env.addGlobal("script_embed", handler);
}
    
function handler(type, src, title, options, description) {


}
  
    
export {
  handler,
  register as default
};
  
function register(env) {
  env.addGlobal("script_embed", handler);
}
    
function handler(type, src, title, options, description) {


}
  
    
module.exports = {
  handler,
  register
};
  
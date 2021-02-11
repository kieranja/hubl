function register(env) {
  env.addGlobal("today", handler);
}
    
function handler(timezone) {


}
  
    
export {
  handler,
  register as default
};
  
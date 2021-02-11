function register(env) {
  env.addGlobal("to_local_time", handler);
}
    
function handler(date) {


}
  
    
export {
  handler,
  register as default
};
  
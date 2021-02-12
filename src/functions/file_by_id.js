function register(env) {
  env.addGlobal("file_by_id", handler);
}
    
function handler(file_id) {

  return {};
}
  
    
export {
  handler,
  register as default
};
  
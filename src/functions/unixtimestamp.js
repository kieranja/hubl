function register(env) {
  env.addGlobal("unixtimestamp", handler);
}
    
function handler(var_attr) {
  return Math.floor(new Date().getTime() / 1000);
}
  
    
export {
  handler,
  register as default
};
  
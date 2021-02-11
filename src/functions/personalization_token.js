function register(env) {
  env.addGlobal("personalization_token", handler);
}
    
function handler(expression, default_attr) {
  return default_attr;
}
  
    
export {
  handler,
  register as default
};
  
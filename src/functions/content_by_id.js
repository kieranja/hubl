function register(env) {
  env.addGlobal("content_by_id", handler);
}
    
function handler(id) {
  return {
    title: 'Content title'
  }

}
  
    
export {
  handler,
  register as default
};
  
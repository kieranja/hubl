function register(env) {
  env.addGlobal("content_by_ids", handler);
}
    
function handler(ids) {

  return [
    {title: 'page title'}
  ]
}
  
    
export {
  handler,
  register as default
};
  
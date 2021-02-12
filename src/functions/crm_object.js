function register(env) {
  env.addGlobal("crm_object", handler);
}
    
function handler(object_type, query_or_object_instance_id, properties, formatting) {
  return 'crm_object not implemented yet';
}
  
    
export {
  handler,
  register as default
};
  
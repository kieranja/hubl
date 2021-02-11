function register(env) {
  env.addGlobal("crm_object", handler);
}
    
function handler(object_type, query_or_object_instance_id, properties, formatting) {


}
  
    
export {
  handler,
  register as default
};
  
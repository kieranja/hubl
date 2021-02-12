function register(env) {
  env.addGlobal("crm_objects", handler);
}
    
function handler(object_type, query_or_list_of_object_ids, properties, formatting) {

  return ["not implemented yet"];
}
  
    
export {
  handler,
  register as default
};
  
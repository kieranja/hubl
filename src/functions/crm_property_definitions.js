function register(env) {
  env.addGlobal("crm_property_definitions", handler);
}
    
function handler(object_type, property_name) {


}
  
    
export {
  handler,
  register as default
};
  
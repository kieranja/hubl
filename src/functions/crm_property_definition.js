function register(env) {
  env.addGlobal("crm_property_definition", handler);
}
    
function handler(object_type, property_name) {


}
  
    
module.exports = {
  handler,
  register
};
  
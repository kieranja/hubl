function register(env) {
  env.addGlobal("crm_associations", handler);
}
    
function handler(id, association_category, association_definition_id, query, properties, formatting) {


}
  
    
module.exports = {
  handler,
  register
};
  
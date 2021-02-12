function register(env) {
  env.addGlobal("crm_associations", handler);
}
    
function handler(id, association_category, association_definition_id, query, properties, formatting) {

  return {"has_more":"true", "offset":3, "total": 203, "results": [{"firstname": "Aimee", "id": "905", "email": "abanks@company.com"}]};
}
  
    
export {
  handler,
  register as default
};
  
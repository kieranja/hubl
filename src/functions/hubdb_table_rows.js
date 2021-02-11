function register(env) {
  env.addGlobal("hubdb_table_rows", handler);
}
    
function handler(table_id, query) {


}
  
    
export {
  handler,
  register as default
};
  
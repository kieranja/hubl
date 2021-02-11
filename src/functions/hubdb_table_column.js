function register(env) {
  env.addGlobal("hubdb_table_column", handler);
}
    
function handler(table_id, column) {


}
  
    
export {
  handler,
  register as default
};
  
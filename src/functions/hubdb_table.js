function register(env) {
  env.addGlobal("hubdb_table", handler);
}
    
function handler(table_id) {


}
  
    
export {
  handler,
  register as default
};
  
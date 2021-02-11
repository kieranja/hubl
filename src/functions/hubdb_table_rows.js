function register(env) {
  env.addGlobal("hubdb_table_rows", handler);
}
    
function handler(table_id, query) {


}
  
    
module.exports = {
  handler,
  register
};
  
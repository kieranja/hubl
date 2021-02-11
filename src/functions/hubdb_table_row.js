function register(env) {
  env.addGlobal("hubdb_table_row", handler);
}
    
function handler(table_id, row_id) {


}
  
    
module.exports = {
  handler,
  register
};
  
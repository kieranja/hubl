function register(env) {
  env.addGlobal("hubdb_table", handler);
}
    
function handler(table_id) {


}
  
    
module.exports = {
  handler,
  register
};
  
function register(env) {
  console.log(env.getHubDB());
  env.addGlobal("hubdb_table_rows", (table_id, query) => handler(env, table_id, query));
}
    
function handler(env, table_id, query) {
  const res = env.getHubDB().find(table_id, query);

  return res;
}
  
    
export {
  handler,
  register as default
};
  
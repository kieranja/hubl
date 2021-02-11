function register(env) {
  env.addGlobal("topic_cluster_by_content_id", handler);
}
    
function handler(content_id) {


}
  
    
export {
  handler,
  register as default
};
  
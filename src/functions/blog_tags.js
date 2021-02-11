function register(env) {
  env.addGlobal("blog_tags", handler);
}
    
function handler(selected_blog, limit) {


}
  
    
module.exports = {
  handler,
  register
};
  
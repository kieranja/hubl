function register(env) {
  env.addGlobal("blog_topics", handler);
}
    
function handler(selected_blog, limit) {


}
  
    
module.exports = {
  handler,
  register
};
  
function register(env) {
  env.addGlobal("blog_author_url", handler);
}
    
function handler(selected_blog, author_slug) {


}
  
    
module.exports = {
  handler,
  register
};
  
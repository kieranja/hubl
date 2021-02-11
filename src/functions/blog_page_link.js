function register(env) {
  env.addGlobal("blog_page_link", handler);
}
    
function handler(page) {


}
  
    
export {
  handler,
  register as default
};
  
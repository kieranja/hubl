function register(env) {
  env.addGlobal("blog_page_link", handler);
}
    
function handler(page) {
  return `http://designers.hubspot.com/blog/page/${page}`;
}
  
    
export {
  handler,
  register as default
};
  
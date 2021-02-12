function register(env) {
  env.addGlobal("blog_tag_url", handler);
}
    
function handler(selected_blog, tag_slug) {

  return `http://blog.hubspot.com/marketing/tag/inbound-marketing`;
}
  
    
export {
  handler,
  register as default
};
  
function register(env) {
  env.addGlobal("blog_post_archive_url", handler);
}
    
function handler(selected_blog, year, month, day) {

  return `http://blog.hubspot.com/marketing/archive/${year}/${ month }/${ day }`;
}
  
    
export {
  handler,
  register as default
};
  
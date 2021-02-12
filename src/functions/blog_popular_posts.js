function register(env) {
  env.addGlobal("blog_popular_posts", handler);
}
    
function handler(selected_blog, limit, tag_slug, time_frame) {

  return [{
    name: 'Title 1'
  }, {name: 'Title 2'}]

}
  
    
export {
  handler,
  register as default
};
  
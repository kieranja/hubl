function register(env) {
  env.addGlobal("blog_recent_topic_posts", handler);
}
    
function handler(selected_blog, topic_slug, limit) {
  return [{title: 'title 1'}]
}
  
    
export {
  handler,
  register as default
};
  
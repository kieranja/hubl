function register(env) {
  env.addGlobal("require_css", ( url, render_options ) => handler(env, url, render_options));
}
    
function handler(env, url, render_options) {
    return env.addStylesheet(url, render_options);
}
  
    
export {
  handler,
  register as default
};
  
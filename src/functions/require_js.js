import Nunjucks from 'nunjucks';

function register(env) {
  env.addGlobal("require_js", (url, render_options) => handler(env, url, render_options));
}


function handler(env, url, render_options) {
  return env.addScript(url, render_options);
}
  
export {
  handler,
  register as default
};
  
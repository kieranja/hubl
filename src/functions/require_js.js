import Nunjucks from 'nunjucks';

function register(env) {
  env.addGlobal("require_js", (url, render_options) => handler(env, url, render_options));
}


function handler(env, url, render_options) {
  const existing = env.getGlobal("standard_footer_includes");
  env.addGlobal(
    "standard_footer_includes", 
    new Nunjucks.runtime.SafeString(existing + `\n<script src="${ url }"></script>`)
  );

}
  
export {
  handler,
  register as default
};
  
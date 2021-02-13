import Nunjucks from 'nunjucks';
function register(env) {
  env.addFilter("tojson", handler);
}

function handler(input) {
  return new Nunjucks.runtime.SafeString(JSON.stringify(input));
}
  

export {
  handler,
  register as default
};

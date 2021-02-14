function register(env) {
  env.addGlobal("locale_name", handler);
}
    
function handler(language_code, target_language_code) {
  const languageNames = new Intl.DisplayNames([target_language_code], {type: 'language'});
  return languageNames.of(language_code);;
}
  
    
export {
  handler,
  register as default
};
  
function register(env) {
  env.addGlobal("truncate", handler);
}
    
function handler(s, length, killwords, end = '...') {

  if (s.length <= length) {
    return s;
  }

  if (killwords) {
    return s.substr(0, length) + end;
  }

  return s.substr(0, s.lastIndexOf(' ', length)) + end;
}
  
    
export {
  handler,
  register as default
};
  
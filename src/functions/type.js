function register(env) {
  env.addGlobal("type", handler);
}
    
function handler(input) {

  let types = {
    'string' : 'str',
    'boolean': 'bool',
    'array': 'array',
    'number': 'int',
  }
  return types[typeof input];
}
  
    
export {
  handler,
  register as default
};
  
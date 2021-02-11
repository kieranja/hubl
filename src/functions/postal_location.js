function register(env) {
  env.addGlobal("postal_location", handler);
}
    
function handler(postal_code, country_code) {
  return {
    latitude: 42.3647,
    longitude: -71.1042
  }
}
  
    
export {
  handler,
  register as default
};
  
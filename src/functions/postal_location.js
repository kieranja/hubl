function register(env) {
  env.addGlobal("postal_location", handler);
}
    
function handler(postal_code, country_code) {


}
  
    
module.exports = {
  handler,
  register
};
  
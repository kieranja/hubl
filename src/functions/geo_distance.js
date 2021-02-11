function register(env) {
  env.addGlobal("geo_distance", handler);
}
    
function handler(point1, point2_lat, point2_long, units) {


}
  
    
export {
  handler,
  register as default
};
  
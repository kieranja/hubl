function register(env) {
  env.addFilter("geo_distance", handler);
}

function handler(input, point1, point2_lat, point2_long, units) {


}
  

module.exports = {
  handler,
  register
};

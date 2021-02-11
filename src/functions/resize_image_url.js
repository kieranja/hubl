function register(env) {
  env.addGlobal("resize_image_url", handler);
}
    
function handler(url, width, height, length, upscale, upsize) {


}
  
    
module.exports = {
  handler,
  register
};
  
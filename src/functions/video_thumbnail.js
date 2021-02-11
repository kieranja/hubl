function register(env) {
  env.addGlobal("video_thumbnail", handler);
}
    
function handler(request) {


}
  
    
module.exports = {
  handler,
  register
};
  
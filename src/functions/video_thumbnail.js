function register(env) {
  env.addGlobal("video_thumbnail", handler);
}
    
function handler(request) {


}
  
    
export {
  handler,
  register as default
};
  
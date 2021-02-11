function register(env) {
  env.addGlobal("video_metadata_by_player_id", handler);
}
    
function handler(request) {


}
  
    
export {
  handler,
  register as default
};
  
function register(env) {
  env.addGlobal("color_variant", handler);
}
    
function handler(base_color, brightness_offset) {


}
  
    
export {
  handler,
  register as default
};
  
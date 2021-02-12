function register(env) {
  env.addGlobal("color_variant", handler);
}
    
function handler(base_color, brightness_offset) {
  return '#' + base_color.replace(/^#/, '').replace(/../g, color => ('0'+Math.min(255, Math.max(0, parseInt(color, 16) + brightness_offset)).toString(16)).substr(-2));
}
  
    
export {
  handler,
  register as default
};
  
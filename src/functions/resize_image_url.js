function register(env) {
  env.addGlobal("resize_image_url", handler);
}
    
function handler(url, width, height, length, upscale, upsize) {
  return `${ url }?length=${ length }&name=img.jpg`;
}
  
    
export {
  handler,
  register as default
};
  
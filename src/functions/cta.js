function register(env) {
  env.addGlobal("cta", handler);
}
    
function handler(guid, align_opt) {

  const lazyId = Math.random()
      .toString(36)
      .substr(0, 9);

  return `<a id="cta_button_${id}" class="cta_button button" href="#" style="" cta_dest_link="#" title="">CTA example</a>`;

}

export {
  handler,
  register as default
};
  
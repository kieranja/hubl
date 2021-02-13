function register(env) {
  env.addGlobal("cta", (guid, align_opt) => handler(env, guid, align_opt));
}
    
function handler(env, guid, align_opt) {
  return env.getCTAManager().render(guid, align_opt);
}

export {
  handler,
  register as default
};
  
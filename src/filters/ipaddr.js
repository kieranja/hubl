function register(env) {
  env.addFilter("ipaddr", handler);
}

function handler(input, function_attr) {
  // Thanks to https://ipregex.com/
  let ipReg = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  return new RegExp(ipReg).test(input);
}
  

export {
  handler,
  register as default
};

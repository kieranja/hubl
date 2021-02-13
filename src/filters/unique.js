function register(env) {
  env.addFilter("unique", handler);
}

function handler(input, attr) {

  console.log(typeof input[0])
  // array of objects?
  if (typeof input[0] === 'object') {
    var filtered = {};
    var newPlaces = input.filter(function(entry) {
        if (filtered[attr]) {
            return false;
        }
        filtered[attr] = true;
        return true;
    });

    
    return filtered;
  }

  // otherwise unique string

  return [... new Set(input)];
}
  

export {
  handler,
  register as default
};

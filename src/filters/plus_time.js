import { add } from 'date-fns';

function register(env) {
  env.addFilter("plus_time", handler);
}

function handler(input, diff, unit) {
  return add(input, {[unit]: diff} );
}
  

export {
  handler,
  register as default
};

import { sub } from 'date-fns';

function register(env) {
  env.addFilter("minus_time", handler);
}

function handler(input, diff, unit) {
  return sub(input, {[unit]: diff} );
}
  

export {
  handler,
  register as default
};

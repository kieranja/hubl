import { parseISO,getUnixTime } from 'date-fns';

function register(env) {
  env.addFilter("unixtimestamp", handler);
}

function handler(input) {
  return getUnixTime(parseISO(input));
}
  

export {
  handler,
  register as default
};

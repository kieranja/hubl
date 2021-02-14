
import { intervalToDuration, parseISO } from 'date-fns';

function register(env) {
  env.addFilter("between_times", handler);
}

// TODO: implement unit
function handler(input, end, unit) {
  const res = intervalToDuration({ start: input, end: end}, unit);

  if (!res[unit]) {
    throw Error("Unit not implemented yet.")
  }

  return res[unit];

}
  

export {
  handler,
  register as default
};

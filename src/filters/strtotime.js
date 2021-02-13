import { parseISO, parse, format } from 'date-fns';
import strftime from 'strftime'
function register(env) {
  env.addFilter("strtotime", handler);
}

function handler(input, datetimeFormat) {
  console.log('iso', parseISO(input).getTime());
  return format(parseISO(input), datetimeFormat.replace('Z', 'z'));

}
  

export {
  handler,
  register as default
};

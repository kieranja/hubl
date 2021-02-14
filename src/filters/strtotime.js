import { parseISO, parse, format } from 'date-fns';
import strftime from 'strftime'
function register(env) {
  env.addFilter("strtotime", handler);
}

function handler(input, datetimeFormat) {

  // // need to sort this out to handle java modifiers, we dont really need to do this.
  // const check = strftime(input, datetimeFormat);

  // if (!check) {
  //   return Error('Invalid datetimeFormat');
  // }

  //                                            ????
  // i think this should handle most formats. \__o__/
  return parseISO(input);
}
  

export {
  handler,
  register as default
};

import { parseISO, format } from 'date-fns';
import strftime from 'strftime';
function register(env) {
  env.addGlobal("datetimeformat", handler);
}
    
function handler(var_attr, new_format, timezone = null) {
  

  let strftimeUTC = strftime.timezone(0);

  const parsedDate = parseISO(var_attr);

  return strftimeUTC(new_format, parsedDate);
}
  
    
export {
  handler,
  register as default
};
  
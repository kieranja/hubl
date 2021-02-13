import { addDays, formatISO } from 'date-fns'
function register(env) {
  env.addGlobal("today", handler);
}
// TODO: handle timezone, extract to a shared lib and make sure format is correct!
function handler(timezone) {
  function today() {
    this.datetime = new Date();
  }

  today.prototype.plusDays = function(num) {
    return addDays(this.datetime, num);
  }

  today.prototype.toString = function() {
    return formatISO(this.datetime);
  }

  
  return new today();
}
  
    
export {
  handler,
  register as default
};
  
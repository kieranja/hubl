import { isString, isObject, isArray, TemplateError } from 'nunjucks/src/lib';

function register(env) {
  env.addFilter("list", handler);
}

function handler(input) {

  return list(input);

}
  

function list(val) {
 
  if (isArray(val)) {
    return val;
  }

  if (!isNaN(val)) {
    return [val];
  }

  if (isString(val)) {
    return val.split('');
  }

  if (isObject(val)) {
    return Object.entries(val || {}).map(([key, val])  => ({ key, value }));
  }


  throw new TemplateError('list filter: type not iterable');
  
}

export {
  handler,
  register as default
};

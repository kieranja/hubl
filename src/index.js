import Tags from './tags/index.js';
import Functions from './functions/index.js';
import Filters from './filters/index.js';


export default function(env, config) {
  Tags(env, config);
  Functions(env, config);
  Filters(env, config);
  return env;
}
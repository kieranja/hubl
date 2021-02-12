// Example.
import Nunjucks from 'nunjucks';

import hubl, { renderModuleString, renderPageString } from '../src/index.js';


const output = renderModuleString(
  'Hello {{ ["HEY", "HEY2","HEY3"]|map("lower") }}', 
  { username: 'James' }
);
console.log(output);

const output2 = renderModuleString(
  'Hello {{ blog_topics() }}', 
  { username: 'James' }
);


const output3 = renderModuleString(
  `Hello {% text %}

  {% text %}
  sshshsh`, 
  { username: 'James' }
);


const output4 = renderModuleString(
  `Hello 
  {% dnd_area "cool", className="hey" %}
    heydsfdsdsfdsfdsfdsffsffdfsfdsfdsdsfd
  {% end_dnd_area %}
  sshshsh`, 
  { username: 'James' }
);

const module2 = renderModuleString(
  `Hello 
  {% dnd_module path="fixture/module.html", offset=2 %}

  sshshsh`, 
  { username: 'James' }
);
console.log(module2);


console.log(renderPageString(`Hello 
 
  
  {{ require_js("index.js", "footer")}}

  {{ standard_footer_includes }}

  {{ "this is the way" | truncate(7) }}
  {{ type("this is the way") }}
  sshshsh` 
));

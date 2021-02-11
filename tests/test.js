// Example.
import Nunjucks from 'nunjucks';

import hubl, { renderPage } from '../src/index.js';

// Autoescape disabled - this is fine as we're not using this in prod.
const env = new Nunjucks.Environment(new Nunjucks.FileSystemLoader('./'));

hubl(env, {

});



const output = env.renderString(
  'Hello {{ ["HEY", "HEY2","HEY3"]|map("lower") }}', 
  { username: 'James' }
);
console.log(output);

const output2 = env.renderString(
  'Hello {{ blog_topics() }}', 
  { username: 'James' }
);


const output3 = env.renderString(
  `Hello {% text %}

  {% text %}
  sshshsh`, 
  { username: 'James' }
);


const output4 = env.renderString(
  `Hello 
  {% dnd_area "cool", className="hey" %}
    heydsfdsdsfdsfdsfdsffsffdfsfdsfdsdsfd
  {% end_dnd_area %}
  sshshsh`, 
  { username: 'James' }
);

const module2 = env.renderString(
  `Hello 
  {% dnd_module path="fixture/module.html", offset=2 %}

  sshshsh`, 
  { username: 'James' }
);
console.log(module2);


console.log(renderPage(env,
  `Hello 
 
  
  {{ require_js("index.js", "footer")}}

  {{ standard_footer_includes }}

  {{ "this is the way" | truncate(7) }}
  {{ type("this is the way") }}
  sshshsh` 
));

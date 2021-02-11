// Example.
const nunjucks = require('nunjucks');

const hubl = require('./');

// Autoescape disabled - this is fine as we're not using this in prod.
const env = new nunjucks.Environment(new nunjucks.FileSystemLoader('./'));

hubl.configure(nunjucks, env, {

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
  {% dnd_module path="module.html", offset=2 %}

  sshshsh`, 
  { username: 'James' }
);
console.log(module2);
// Example.
const nunjucks = require('nunjucks');

const hubl = require('./');

// Autoescape disabled - this is fine as we're not using this in prod.
const env = new nunjucks.Environment();

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
console.log(output3);
const nunjucks = require('nunjucks');
const glob = require('glob');
const path = require('path');


// Autoescape disabled - this is fine as we're not using this in prod.
const env = new nunjucks.Environment();

// Load tags
glob.sync( './filters/*.js' ).forEach( function( file ) {
  const req = require( path.resolve( file ) );
  req.register(env);
});

glob.sync( './functions/*.js' ).forEach( function( file ) {
  const req = require( path.resolve( file ) );
  req.register(env);
});

glob.sync( './tags/*.js' ).forEach( function( file ) {
  const req = require( path.resolve( file ) );
  req.register(env);
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

  body hwat
  
  {% text %}
  sshshsh`, 
  { username: 'James' }
);
console.log(output3);
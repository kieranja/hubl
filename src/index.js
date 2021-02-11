'use strict';

const glob = require('glob');
const path = require('path');

module.exports.configure = function(Nunjucks, env, config) {

  // Load tags
  glob.sync( path.join(__dirname, './filters/*.js') ).forEach( function( file ) {
    const req = require( path.resolve( file ) );
    req.register(env, config);
  });

  glob.sync( path.join(__dirname, './functions/*.js') ).forEach( function( file ) {
    const req = require( path.resolve( file ) );
    req.register(env, config);
  });

  glob.sync( path.join(__dirname, './tags/*.js') ).forEach( function( file ) {
    const req = require( path.resolve( file ) );
    req.register(env, config);
  });


}
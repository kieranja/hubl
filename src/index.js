'use strict';

const glob = require('glob');
const path = require('path');

module.exports.configure = function(Nunjucks, env, config) {

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


}
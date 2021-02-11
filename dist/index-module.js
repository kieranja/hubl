import glob from 'glob';
import path from 'path';

function commonjsRequire (target) {
	throw new Error('Could not dynamically require "' + target + '". Please configure the dynamicRequireTargets option of @rollup/plugin-commonjs appropriately for this require call to behave properly.');
}

var configure = function(Nunjucks, env, config) {

  // Load tags
  glob.sync( path.join(__dirname, './filters/*.js') ).forEach( function( file ) {
    const req = commonjsRequire( path.resolve( file ) );
    req.register(env, config);
  });

  glob.sync( path.join(__dirname, './functions/*.js') ).forEach( function( file ) {
    const req = commonjsRequire( path.resolve( file ) );
    req.register(env, config);
  });

  glob.sync( path.join(__dirname, './tags/*.js') ).forEach( function( file ) {
    const req = commonjsRequire( path.resolve( file ) );
    req.register(env, config);
  });


};

var src = {
	configure: configure
};

export default src;
export { configure };

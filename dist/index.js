'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var glob = require('glob');
var path = require('path');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var glob__default = /*#__PURE__*/_interopDefaultLegacy(glob);
var path__default = /*#__PURE__*/_interopDefaultLegacy(path);

function commonjsRequire (target) {
	throw new Error('Could not dynamically require "' + target + '". Please configure the dynamicRequireTargets option of @rollup/plugin-commonjs appropriately for this require call to behave properly.');
}

var configure = function(Nunjucks, env, config) {

  // Load tags
  glob__default['default'].sync( path__default['default'].join(__dirname, './filters/*.js') ).forEach( function( file ) {
    const req = commonjsRequire( path__default['default'].resolve( file ) );
    req.register(env, config);
  });

  glob__default['default'].sync( path__default['default'].join(__dirname, './functions/*.js') ).forEach( function( file ) {
    const req = commonjsRequire( path__default['default'].resolve( file ) );
    req.register(env, config);
  });

  glob__default['default'].sync( path__default['default'].join(__dirname, './tags/*.js') ).forEach( function( file ) {
    const req = commonjsRequire( path__default['default'].resolve( file ) );
    req.register(env, config);
  });


};

var src = {
	configure: configure
};

exports.configure = configure;
exports.default = src;

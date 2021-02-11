const glob = require('glob');
const path = require('path');
const fs = require('fs')
let str = `

`;

const location = "./src/filters/";

let invoke_str = ``;
glob.sync( path.join(__dirname, location, '*.js') ).forEach( function( file ) {
  const filename = path.basename(file, path.extname(file));
  if (filename == 'index') {
    return;
  }
  // const req = require( path.resolve( file ) );


str += `import ${filename}_filter from './${filename}.js';
`;

  invoke_str+= `
  ${filename}_filter.register(env, config);`;

});


const end_str = `${ str }
export default function configure(env, config) {
  ${ invoke_str }
};`


fs.writeFileSync(path.join(__dirname, location, 'index.js'), end_str, "binary");
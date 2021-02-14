const bent = require('bent');
const fs = require('fs').promises;
const path = require('path');
const docPath = "https://api.hubspot.com/cos-rendering/v1/hubldoc";

const getJSON = bent('json');


const nunjucksFilters = [
  'abs', 
  'batch',
  'capatalize'
];

(async () => {


  let existingFilters = await getSupportedFiltersInNunjucks();
  let existingTags = await getSupportedTagsInNunjucks();
  let obj = await getJSON(docPath);
  const { filters, functions, tags } = obj;

  await buildFilters(filters, existingFilters);
  await buildFunctions(functions);
  await buildTags(tags, existingTags);
  


})().catch( res => {
  console.log('Error occured', res);
})



async function buildFilters(filters, existingFilters) {

  for (const filterTagName in filters) {

    const { name, desc ,aliasOf, deprecated, params } = filters[filterTagName];
    if (deprecated) {
      continue;
    }

    if (existingFilters.includes(name)) {
      continue;
    }

    params.unshift({ name: 'input' });
    //"name":"other","type":"object","desc":"Another object to compare against","defaultValue":"","required":true}

    
    const code = `function register(env) {
  env.addFilter("${ filterTagName }", handler);
}

${ createBody(filterTagName, params) }

module.exports = {
  handler,
  register
};
`;

    await fs.writeFile(path.join(__dirname, 'src/filters', filterTagName + '.js'), code, "binary");
  }
}



async function buildFunctions(functions) {

  for (const fnName in functions) {
    const { name, desc , aliasOf, deprecated, params } = functions[fnName];
    if (deprecated) {
      continue;
    }
    
    let parsedParams = params.map( param => param.name.replace(/ /g, "_"));
    parsedParams = replaceReservedVariables(parsedParams);
    parsedParams = parsedParams.join(', ');

    const code = `function register(env) {
  env.addGlobal("${ fnName }", handler);
}
    
${ createBody(fnName, params) }
    
module.exports = {
  handler,
  register
};
  `;

    await fs.writeFile(path.join(__dirname, 'src/functions', fnName + '.js'), code, "binary");
  }
}


async function buildTags(tags, existingTags) {

  for (const tagName in tags) {
    const { name, desc , aliasOf, deprecated, params } = tags[tagName];
    if (deprecated) {
      continue;
    }

    if (existingTags.includes(name)) {
      continue;
    }

    let parsedParams = params.map( param => param.name.replace(/ /g, "_"));
    parsedParams = parsedParams.map( param => param.replace(/^default$/, "default_attr"));
    parsedParams = parsedParams.join(', ');

    const code = `function register(env) {
  env.addExtension("${ tagName }", new handler(env));
}
${createTagBody(tagName)}
`
    await fs.writeFile(path.join(__dirname, 'src/tags', tagName + '.js'), code, "binary");
  }
}

async function getSupportedFiltersInNunjucks() {
  const url = 'https://raw.githubusercontent.com/mozilla/nunjucks/f91f1c3fd14fde683e71a61563e46b547c9160e4/nunjucks/src/filters.js';
  const getBuffer = await bent('string');

  const data = await getBuffer(url);
  
  const supportedMatches = data.matchAll(/function\s+([^\(]+)/g);
 
  const supported = [];
  for (const match of supportedMatches) {
    supported.push(match[1]);
  }
  supported.push('abs');

  return supported;
}

async function getSupportedTagsInNunjucks() {
  const url = 'https://raw.githubusercontent.com/mozilla/nunjucks/f91f1c3fd14fde683e71a61563e46b547c9160e4/nunjucks/src/parser.js';
  const getBuffer = await bent('string');

  const data = await getBuffer(url);
  
  const supportedMatches = data.matchAll(/case '([^']+)'/g);
 
  const supported = [];
  for (const match of supportedMatches) {
    supported.push(match[1]);
  }
  
  return supported;
}

function replaceReservedVariables(arr) {
  const reserved = ['function', 'var', 'let', 'const', 'default', 'new'];
  return arr.map(item => {
    if (reserved.includes(item)) {
      return item + '_attr';
    }
    return item;
  })
}

function createBody(fnName, params) {
  params = params.map( param => param.name.replace(/ /g, "_"));
  params = replaceReservedVariables(params);
  params = params.join(', ');
  return `function handler(${params}) {


}
  `;
}


function createTagBody(tagName) {
  const lowerCaseName = tagName.toLowerCase();

  return `const Nunjucks = require('nunjucks');
function handler(env) {
  this.tags = ['${ lowerCaseName }'];

  this.parse = function (parser, nodes, lexer) {
      var tok = parser.nextToken();

      var args = parser.parseSignature(null, true);
      parser.advanceAfterBlockEnd(tok.value);
      //var body = parser.parseUntilBlocks('end_${ lowerCaseName }');
      let body = null;
      //parser.advanceAfterBlockEnd();
      return new nodes.CallExtension(this, 'run', args, [body]);

  };

  this.run = function(environment) {
    console.log(environment);
      let str = JSON.stringify(environment.ctx);
      return new Nunjucks.runtime.SafeString(str);
  }
}

module.exports = {
  handler,
  register
}
  
`;
}
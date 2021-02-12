import bent from 'bent';
// const fs = require('fs').promises;
import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
const fsPromises = fs.promises;


const docPath = "https://api.hubspot.com/cos-rendering/v1/hubldoc";

const getJSON = bent('json');

const __dirname = dirname(fileURLToPath(import.meta.url));


(async () => {
  let existingFilters = await getSupportedFiltersInNunjucks();
  let existingTags = await getSupportedTagsInNunjucks();
  let obj = await getJSON(docPath);
  const { filters, functions, tags } = obj;

  await buildTests(tags, 'tags');

})().catch( res => {
  console.log('Error occured', res);
})


async function buildTests(funcs, type) {

  for (const fnName in funcs) {

    const { name, desc ,aliasOf, deprecated, params, inputs, snippets } = funcs[fnName];

    if (deprecated) {
      continue;
    }

    if (snippets.length > 1) {
      console.log(funcs[fnName])
    } else {
      continue;
    }

    const totalParams = params.length;
    const optionalParams = params.find(item => item.required === false);
    const requiredParams = params.length - optionalParams;

    const testCases = snippets.length + totalParams + inputs.length;

  let tests = `
import { renderString } from '../../src/index';
describe(\`${ desc }\`, () => {`;

    // If twe have helpful snippets
    if (snippets.length) {
      for (let i=0;i< snippets.length;i++) {
        let { desc, code, output } = snippets[i];
        desc = !desc ? 'unnamed case ' + i  : desc;

        let outputCode = '';
        // Do we have an output?
        if (output) {
          outputCode = `expect(html).toBe(\`${ output }\`);`
        }

        tests +=`
  it(\`${ desc }\`, () => {
      const html = renderString(\`${ code }\`);
      ${ outputCode }
  });`;

      }
    }


    // mostly only one input. This is for filters.
    if (!snippets.length && inputs.length) {
      const testData = getRandomTestDataBasedOnType(inputs[0].type);
      tests +=`
      it("${ inputs[0].name }", () => {
          const html = renderString("{{ ${ testData } |${ name }  ");
      });`;
    }


    tests += `
});`



    await fsPromises.writeFile(path.join(__dirname, 'tests', type,  fnName + '.test.js'), tests, "binary");

    params.unshift({ name: 'input' });
    //"name":"other","type":"object","desc":"Another object to compare against","defaultValue":"","required":true}
    
    
//     const code = `



// `;

//     await fs.writeFile(path.join(__dirname, 'src/filters', filterTagName + '.js'), code, "binary");
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


function getRandomTestDataBasedOnType(type) {
  type = type.toLowerCase();

  switch(type) {
    case 'string':
      return "'a random string'";
    case 'number':
      return "42";
    case 'boolean':
      return "true";
    case 'object':
      return "{item: 'hey', item2: 'hey2'}";
    case 'list':
    case 'array':
      return "['item1', 'item2']";
    default:
      throw new Error('help');
  }
}
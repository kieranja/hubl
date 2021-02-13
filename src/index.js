;
import Nunjucks from 'nunjucks';
import HublEnvironment from './lib/hub_environment.js';


export function renderModule(env, content, fields) {
  return env.renderString(content, fields);
}


function setupStandardVariables(env) {
  // Standard globals.
  env.addGlobal("standard_footer_includes", "");
  env.addGlobal("standard_header_includes", "");
}



// Copy nunjuck
var hublenv;

// Setup a single instance.
export function configure(pageManager, hubDBManager, ctaManager, menuManager) {
  const env = new Nunjucks.Environment(new Nunjucks.FileSystemLoader('./'));
  hublenv = new HublEnvironment(env, pageManager, hubDBManager, ctaManager, menuManager);
}

/**
 * Useful for rendering simple strings.
 * @param {*} content 
 * @param {*} ctx 
 */
export function renderString(content, ctx = {}) {
  if (!hublenv) {
    configure();
  }

  return hublenv.renderModuleString(content, ctx);  
}

/**
 * Render in a module context. This still needs access to manager instances as lots of methods
 * require data from a datasource such as crm_*, hubdb_* and menu*
 * @param {*} content 
 * @param {*} ctx 
 */
export function renderModuleString(content, ctx = {}) {
  if (!hublenv) {
    configure();
  }

  // TODO: add module.id etc
  return hublenv.renderModuleString(content, ctx);  
}

/**
 * Render in a page context. This requires a page to be set, it must've been setup initially.
 * @param string path
 * @param {*} content 
 * @param {*} ctx 
 */
export function renderPageString(page, content, ctx = {}) {
  if (!hublenv) {
    configure();
  }

  const pageManager = hublenv.getPageManager();
  pageManager.setActivePageByPath(page);
  // Render string, but throw in the page variables.
  return hublenv.renderPageString(content, {...ctx, ...pageManager.getThemeGlobals()});
};


export const Environment = HublEnvironment;


export default function(config) {
  const env = new Nunjucks.Environment(new Nunjucks.FileSystemLoader('./'));
  const hublenv = new HublEnvironment(env);
  return hublenv;
}
import Nunjucks from 'nunjucks';
import CtaManager from './lib/cta_manager.js';
import HubDbManager from './lib/hubdb_manager.js';
import HublEnvironment from './lib/hub_environment.js';
import MenuManager from './lib/menu_manager.js';
import PageManager from './lib/page_manager.js';




// Copy nunjuck
var hublenv;

// Setup a single instance.
export function configure(config) {
  let { pageManager, hubDBManager, ctaManager, menuManager, templatePath } = config || {};
  const isNode = typeof process === 'object' && process + '' === '[object process]';

  let fs;
  // In nodeJS.
  if (isNode) { 
    fs = new Nunjucks.FileSystemLoader(templatePath ? templatePath : './');
  } else {
    fs = new Nunjucks.WebLoader(templatePath ? templatePath : './'); 
  }
  
  const env = new Nunjucks.Environment(fs);
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

  return hublenv.renderString(content, ctx);  
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

export {
  HubDbManager,
  MenuManager,
  CtaManager,
  PageManager
}


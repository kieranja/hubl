import Tags from './tags/index.js';
import Functions from './functions/index.js';
import Filters from './filters/index.js';
import Nunjucks from 'nunjucks';


/**
 * Setup page context.
 * @param {*} env 
 */
// export function renderPage(env, content, page = {}) {
//   const pageDefaults = getPageDefaults();
//   page = { ...pageDefaults, globals: { ...pageDefaults.globals, ...page.globals }};

//   env.addGlobal("standard_footer_includes", '');
//   env.addGlobal("styleheets", []);

//   return env.renderString(content, page);
// }


export function renderModule(env, content, fields) {
  return env.renderString(content, fields);
}


function setupStandardVariables(env) {
  // Standard globals.
  env.addGlobal("standard_footer_includes", "");
}


export class HublEnvironment {
  constructor(env, pageManager, hubdbManager, ctaManager, menuManager) {
    this.nunjucksEnv = env;


    
    // Store things like standard_page_includes.
    this.globalStorage = {};

    this.hubdbManager = hubdbManager;
    this.ctaManager = ctaManager;
    this.menuManager = menuManager;
    this.pageManager = pageManager;
    
    this.setupExtensions({});
  }

  getHubDB() {
    return this.hubdbManager;
  }

  getCTAManager() {
    return this.ctaManager;
  }
  getMenuManager() {
    return this.menuManager;
  }

  getPageManager() {
    return this.pageManager;
  }
  /**
   * Parse a HubL snippet in the context of a module.
   * @param {*} string 
   * @param {*} variables 
   */
  renderModuleString(string, variables = {}) {
    return this.fixQuotes(this.nunjucksEnv.renderString(string, variables));
  }

  renderModule(string, variables = {}) {
    return this.fixQuotes(this.nunjucksEnv.render(file, variables));
  }

  /**
   * Render HubL snippet in context of a page.
   */
  renderPageString(string, variables = {}) {
    return this.fixQuotes(this.nunjucksEnv.renderString(string, variables));
  }

  /**
   * Allow Nujucks to be extended.
   */
  getNunjucksEnv() {
    return this.nunjucksEnv;
  }

  /**
   * To match hubl
   */
  fixQuotes(input) {
    return input.replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&amp;/g, "&");
  }

  /**
   * Register everything.
   */
  setupExtensions(config) {
    Tags(this, config);
    Functions(this, config);
    Filters(this, config);
  }

  addExtension(str, handler) {
    return this.nunjucksEnv.addExtension(str, handler);
  }
  addGlobal(str, handler) {
    return this.nunjucksEnv.addGlobal(str, handler);
  }
  addFilter(str, handler) {
    return this.nunjucksEnv.addFilter(str, handler);
  }
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
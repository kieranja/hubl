import Tags from '../tags/index.js';
import Functions from '../functions/index.js';
import Filters from '../filters/index.js'
/**
 * 
 */
export default class HublEnvironment {
  constructor(env, pageManager, hubdbManager, ctaManager, menuManager) {
    this.nunjucksEnv = env;

    // Store things like standard_page_includes.
    this.globalStorage = {};

    this.hubdbManager = hubdbManager;
    this.ctaManager = ctaManager;
    this.menuManager = menuManager;
    this.pageManager = pageManager;

    this.stylesheets = [];
    this.scripts = [];
    
    this.setupExtensions({});

    this.globalVariables = {
      // Add some replacement tokens. This is a little cheeky hack.
      standard_footer_includes: '!!STANDARD_FOOTER_NCLUDES!!',
      standard_header_includes: '!!STANDARD_HEADER_INCLUDES!!'
    };
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

  addStylesheet(href, attributes) {
    // open to XSS, but we're allowing this as it's user controlled. TODO: escape
    const attrs = attributes ? Object.entries(attributes).map((key, val) => `${key}="${ val }"`) : [];
    this.stylesheets.push(`<link rel="stylesheet" href="${ href }" ${ attrs.join(' ') } />`);
  }
  addScript(src, attributes) {
    // open to XSS, but we're allowing this as it's user controlled. TODO: escape
    const attrs = attributes ? Object.entries(attributes).map((key, val) => `${key}="${ val }"`) : [];
    this.stylesheets.push(`<script src="${ src }" ${ attrs.join(' ') } />`); 
  }

  /**
   * Parse a HubL snippet in the context of a module.
   * @param {*} string 
   * @param {*} variables 
   */
  renderModuleString(string, variables = {}) {
    return this.fixQuotes(this.nunjucksEnv.renderString(string, { 
      ...this.globalVariables, 
      ...variables 
    }));
  }

  renderModule(string, variables = {}) {
    return this.fixQuotes(this.nunjucksEnv.render(file, {
      ...this.globalVariables,
      ...variables
    }));
  }

  /**
   * Render HubL snippet in context of a page.
   */
  renderPageString(string, variables = {}) {
    return this.fixQuotes(this.nunjucksEnv.renderString(string, {
      ...this.globalVariables,
      ...variables
    }));
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

    input = input.replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&amp;/g, "&");
    input = input.replace('!!STANDARD_FOOTER_INCLUDES!!', this.buildStandardFooterIncludes());
    input = input.replace('!!STANDARD_HEADER_INCLUDES!!', this.buildStandardHeaderIncludes());
    return input;
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

  buildStandardHeaderIncludes() {
    
    const module_css = '';
    return `
${ this.stylesheets.join("\n") }
${ module_css }
    `
  }

  buildStandardFooterIncludes() {
    const module_js = '';
    return `
      ${ module_js }
    `;
  }
}
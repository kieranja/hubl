import Tags from './tags/index.js';
import Functions from './functions/index.js';
import Filters from './filters/index.js';
import Nunjucks from 'nunjucks';


function getPageDefaults() {
  return {
      account: {},
      company_domain: '',
      contact: {},
      content: {
        absolute_url: '',
        archived: false,
        author_email: '',
        author_name: '',
        author_username: '',

        campaign: '',
        campaign_name: '',
        created: '',
        meta_description: '', 
        name: '',
        publish_date: '',
        publish_date_localized: '',
        template_path: '',
        updated: '',
      },
      content_id: 1,
      favicon_link:1,
      hub_id: 1,
  }
}

/**
 * Setup page context.
 * @param {*} env 
 */
export function renderPage(env, content, page = {}) {
  const pageDefaults = getPageDefaults();
  page = { ...pageDefaults, globals: { ...pageDefaults.globals, ...page.globals }};

  env.addGlobal("standard_footer_includes", '');
  env.addGlobal("styleheets", []);

  return env.renderString(content, page);
}


export function renderModule(env, content, fields) {
  return env.renderString(content, fields);
}



function setupStandardVariables(env) {
  // Standard globals.
  env.addGlobal("standard_footer_includes", "")

}


export class HublEnvironment {
  constructor(env) {
    this.nunjucksEnv = env;

    this.page = getPageDefaults();

    this.setupExtensions({});
    // Store things like standard_page_includes.
    this.globalStorage = {};
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
    variables = { ...getPageDefaults(), ...variables };
    return this.fixQuotes(this.nunjucksEnv.render(string, variables));
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
    return input.replace(/&quot;/g, '"').replace(/&#39;/g, "'");
  }

  /**
   * Register everything.
   */
  setupExtensions(config) {
    Tags(this.nunjucksEnv, config);
    Functions(this.nunjucksEnv, config);
    Filters(this.nunjucksEnv, config);
  }
}


// Copy nunjuck
var hublenv;

// Setup a single instance.
function configure() {
  const env = new Nunjucks.Environment(new Nunjucks.FileSystemLoader('./'));
  hublenv = new HublEnvironment(env);
}

export function renderString(content, ctx = {}) {
  if (!hublenv) {
    configure();
  }

  return hublenv.renderModuleString(content, ctx);  
}

export function renderModuleString(content, ctx = {}) {
  if (!hublenv) {
    configure();
  }

  return hublenv.renderModuleString(content, ctx);  
}

export function renderPageString(content, ctx = {}) {
  if (!hublenv) {
    configure();
  }

  return hublenv.renderPageString(content, ctx);
};


export const Environment = HublEnvironment;


export default function(config) {
  const env = new Nunjucks.Environment(new Nunjucks.FileSystemLoader('./'));
  const hublenv = new HublEnvironment(env);
  return hublenv;
}
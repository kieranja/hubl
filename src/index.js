import Tags from './tags/index.js';
import Functions from './functions/index.js';
import Filters from './filters/index.js';


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


function setupStandardVariables(env) {

  // Standard globals.
  env.addGlobal("standard_footer_includes", "")

}


export default function(env, config) {


  Tags(env, config);
  Functions(env, config);
  Filters(env, config);
  return env;
}
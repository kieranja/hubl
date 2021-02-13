export default class CtaManager {
  constructor(ctas) {
    this.ctas = ctas;
    this.ctasById = [];
    this.init();
  }

  init() {
    for (const cta of this.ctas) {
      this.ctasById[cta.id] = cta;
    }
  }

  getAll() {
    return this.ctas;
  }

  getById(id) {
    return this.ctasById(id);
  }

  render(id) {

    const { portal_id, button_text, ...rest}  = this.ctasById[id];

    return `<!--HubSpot Call-to-Action Code -->
      <span class="hs-cta-wrapper" id="hs-cta-wrapper-${ id }">
        <span class="hs-cta-node hs-cta-${ id }" id="hs-cta-${ id }">
          <!--[if lte IE 8]><div id="hs-cta-ie-element"></div><![endif]-->
          
          <a href="https://cta-redirect.hubspot.com/cta/redirect/${ portal_id }/${ id }" >
            <img class="hs-cta-img" id="hs-cta-img-${ id }" style="border-width:0px;" src="https://no-cache.hubspot.com/cta/default/${ portal_id }/${ id }.png"  alt="${ button_text }"/>
          </a>
        </span>
        <script charset="utf-8" src="https://js.hscta.net/cta/current.js"></script>
        <script type="text/javascript">
          hbspt.cta.load(${ portal_id }, '${ id }', {}); 
        </script>
      </span>
      <!-- end HubSpot Call-to-Action Code -->`;
  }
}
import CtaManager from '../../src/lib/cta_manager.js';
import HubDbManager from '../../src/lib/hubdb_manager.js';

const d = new Date();
const ctaManager = new CtaManager([
  { id: 'ccd39b7c-ae18-4c4e-98ee-547069bfbc5b', button_text: 'READ MORE', portal_id: '1234' }
]);


describe(`CTA Manager`, () => {

  it(`It renders HTML`, () => {
    const html = ctaManager.render('ccd39b7c-ae18-4c4e-98ee-547069bfbc5b');

    expect(html).toContain('READ MORE');
  });


});
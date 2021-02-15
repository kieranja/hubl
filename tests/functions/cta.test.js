
import { configure, renderString } from '../../src/index';
import CtaManager from '../../src/lib/cta_manager';
import json from '../fixture/ctas.json';
describe(`Renders a call to action embed tag`, () => {

  beforeEach(() => {
    const ctaManager = new CtaManager(json)
    configure({ctaManager});
  })
  it(`unnamed case 0`, () => {
      const html = renderString(`{{ cta('ccd39b7c-ae18-4c4e-98ee-547069bfbc5b') }}`);
      
  });
  it(`unnamed case 1`, () => {
      const html = renderString(`{{ cta('ccd39b7c-ae18-4c4e-98ee-547069bfbc5b', 'justifycenter') }}`);
      
  });
});
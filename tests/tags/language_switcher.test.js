
import { renderString } from '../../src/index';
describe(`Language switcher`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{% language_switcher "language_switcher" %}`);
      
  });
  it(`unnamed case 1`, () => {
      const html = renderString(`{% language_switcher  "language_switcher" display_mode="hybrid" %}
`);
      
  });
});
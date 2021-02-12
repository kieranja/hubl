
import { renderString } from '../../src/index';
describe(`Formats a date object`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{{ content.updated|datetimeformat('%B %e, %Y') }}`);
      
  });
  it(`unnamed case 1`, () => {
      const html = renderString(`{{ content.updated|datetimeformat('%B %e, %Y') }}
      {{ content.publish_date|datetimeformat('%B %e, %Y %l %p') }} 
      {{ content.publish_date|datetimeformat('%B %e, %Y %l %p', 'America/Los_Angeles') }}`);
      
  });
});
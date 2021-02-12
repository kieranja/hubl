
import { renderString } from '../../src/index';
describe(`Formats a date object`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{% content.updated|datetimeformat('%B %e, %Y') %}`);
      
  });
  it(`unnamed case 1`, () => {
      const html = renderString(`{% content.updated|datetimeformat('%a %A %w %d %e %b %B %m %y %Y %H %I %k %l %p %M %S %f %z %Z %j %U %W %c %x %X %%') %}`);
      
  });
});
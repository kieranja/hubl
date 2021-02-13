
import { renderString } from '../../src/index';
describe(`Gets the UNIX timestamp value (in milliseconds) of a date object`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{{ "2018-07-14T14:31:30+0530"|unixtimestamp }}`);
      expect(html).toBe('1531558890'); 
  });
});
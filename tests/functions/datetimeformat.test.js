
import { renderString } from '../../src/index';
describe(`formats a date to a string`, () => {

  it('formats specified date correctly', () => {
    const html = renderString(`{{ datetimeformat("2020-01-01 00:00:00", '%B %e, %Y') }}`);
    expect(html).toBe('January  1, 2020');
  });

});
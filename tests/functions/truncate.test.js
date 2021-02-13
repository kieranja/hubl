
import { renderString } from '../../src/index';
describe(`truncates a given string to a specified length`, () => {

  it(`unnamed case 0`, () => {
    const html = renderString(`{{ truncate("string to truncate at a certain length", 19, false, '...') }}`);
    expect(html).toBe(`string to truncate...`);
  });
});

import { renderString } from '../../src/index';
describe(`Return the absolute value of the argument.`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{% set my_number = -53 %}{{ my_number|abs }}`);
     
    expect(html).toBe("53");
  });
});
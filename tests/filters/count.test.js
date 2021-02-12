
import { renderString } from '../../src/index';
describe(`count`, () => {
  it('can count', () => {
     const html = renderString(`{% set items = [1,2] %}{{ items|count }}`);
    expect(html).toBe('2');
  })
 
});
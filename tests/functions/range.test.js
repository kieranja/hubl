
import { renderString } from '../../src/index';
describe(`Return a list containing an arithmetic progression of integers. With one parameter, range will return a list from 0 up to (but not including) the value. With two parameters, the range will start at the first value and increment by 1 up to (but not including) the second value. The third parameter specifies the step increment. All values can be negative. Impossible ranges will return an empty list. Ranges can generate a maximum of 1000 values.`, () => {

  // We need to fix range.
  it('Works with one param', () => {
    const html = renderString('{{ range(11) | pprint }}');
    expect(html).toBe('[0,1,2,3,4,5,6,7,8,9,10]');
  })
  it('Works with two params', () => {
    const html = renderString('{{ range(5,11) | pprint }}');
    expect(html).toBe('[5,6,7,8,9,10]');
  });

  it('Works incrementing up by 2', () => {
    const html = renderString('{{ range(0,12, 2) | pprint }}');
    expect(html).toBe('[0,2,4,6,8,10]');
  })
});
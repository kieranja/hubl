
import { renderString } from '../../src/index';
describe(`gets the unix timestamp milliseconds value of a datetime`, () => {
  it('returns correct timestamp', () => {
    const html = renderString('{{ unixtimestamp() }}');
    expect(parseInt(html)).toEqual(Math.floor(new Date().getTime()/1000));
  })
});
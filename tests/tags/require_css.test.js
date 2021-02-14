
import { renderString } from '../../src/index';
describe(`Enqueue an inline stylesheet`, () => {
  it('works', () => {
    renderString('{% require_css %} <style>.test { }</style> {% end_require_css %}')
  })
});

import { renderString } from '../../src/index';
describe(`Enqueue an inline script`, () => {

  it ('works', () => {
    renderString('{% require_js %} <style>.test { }</style> {% end_require_js %}')
  });
});
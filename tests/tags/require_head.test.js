
import { renderString } from '../../src/index';
describe(`Enqueue a head element`, () => {
  it('works', () => {
    renderString('{% require_head %} {% end_require_head %}')
  })
});
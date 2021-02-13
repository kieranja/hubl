
import { renderString } from '../../src/index';
describe(`Type`, () => {
  it('returns correct type', () => {
    const html = renderString('{{ type("hey") }}');
    expect(html).toBe("str");
  })
});
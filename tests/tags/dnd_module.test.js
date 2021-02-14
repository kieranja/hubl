
import { renderString } from '../../src/index';
describe(`Creates a wrapped module inside a drag-and-drop area.`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{% dnd_module
  path="tests/fixture/Test Module",
  offset=0,
  width=8,
  test="hey12345"
%}`);

    expect(html).toContain('hey12345')
      
  });
});
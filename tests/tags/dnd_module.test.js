
import { renderString } from '../../src/index';
describe(`Creates a wrapped module inside a drag-and-drop area.`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{% dnd_module
  path="@hubspot/rich_text",
  offset=0,
  width=8,
%}`);
      
  });
});
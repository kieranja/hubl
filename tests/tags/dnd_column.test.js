
import { renderString } from '../../src/index';
describe(`A column inside a drag-and-drop area. Columns can only be children of a section or a row tag.`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{% dnd_column
  offset=0,
  width=12,
  background_color={
    r: 255,
    g: 0,
    b: 0,
    a: 1
  },
  margin={
    'top': 20,
    'bottom': 200
  }
%}

{% end_dnd_column %}`);
      
  });
});
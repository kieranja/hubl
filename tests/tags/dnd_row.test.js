
import { renderString } from '../../src/index';
describe(`A row inside a drag-and-drop area. Rows can only be children of columns.`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{% dnd_row
  background_color={
    r: 123,
    g: 123,
    b: 123,
    a: 1.0
  },
  margin={
    'top': 20,
    'bottom': 200
  },
  padding={
    'top': 20,
    'bottom': 200,
    'left': 20,
    'right': 20
  }
%}

{% end_dnd_row %}`);
      
  });
});
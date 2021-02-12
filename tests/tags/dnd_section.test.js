
import { renderString } from '../../src/index';
describe(`A top-level row inside a drag-and-drop area. Sections can only be children of a drag-and-drop area tag.`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{% dnd_section
  background_image={
    'backgroundPosition': 'MIDDLE_CENTER',
    'backgroundSize': 'cover',
    'imageUrl': 'https://example.com/path/to/image.jpg'
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
  },
  max_width=1200,
  vertical_alignment='MIDDLE'
%}

{% end_dnd_section %}`);
      
  });
});
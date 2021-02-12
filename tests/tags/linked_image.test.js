
import { renderString } from '../../src/index';
describe(`Insert a linked image from File Manager.`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{% linked_image "linked_image" %}`);
      
  });
  it(`unnamed case 1`, () => {
      const html = renderString(`{% linked_image "my_linked_image" label="My Linked Image", align="left", alt="Click the button", height=240, hspace="3", link="", src="http://mycdn.com/images/my-image.png", style="border: 1px solid red;", width=400, loading="lazy" %}`);
      
  });
});
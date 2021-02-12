
import { renderString } from '../../src/index';
describe(`A rich text area that can be edited inline inside modules`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{% inline_rich_text "inline_rich_text" field="my_text_field" %}`);
      
  });
  it(`unnamed case 1`, () => {
      const html = renderString(`{% inline_rich_text "inline_rich_text" field="my_text_field" html="<p>My rich text default content</p>" %}`);
      
  });
});
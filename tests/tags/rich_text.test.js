
import { renderString } from '../../src/index';
describe(`A block of text and content that can be styled with the editor.`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{% rich_text "rich_text" %}`);
      
  });
  it(`unnamed case 1`, () => {
      const html = renderString(`{% rich_text "left_column", label="Enter HTML here", html='<div>My rich text default content</div>' %}`);
      
  });
  it(`unnamed case 2`, () => {
      const html = renderString(`{% widget_block rich_text, "right_column", overrideable=True, label="Right Column" %}
{% widget_attribute "html" %}
<h2>Something Powerful</h2>
<p>Some paragraph content...</p>
{% end_widget_attribute %}
{% end_widget_block %}`);
      
  });
});

import { renderString } from '../../src/index';

// TODO: add assertions
describe(`Loads a css file to be output in the head`, () => {
  it(`unnamed case 0`, () => {

    const html_before = renderString(`{{ standard_header_includes }}`);

    const html_after = renderString(`{{ require_css('/test.css') }} {{ standard_header_includes }}`);

      
  });
  it(`works with attribures`, () => {
      const html = renderString(`{{ require_css('/test.css', { async: true }) }} {{ standard_header_includes }}`);
  });

  it(`works with standard_header at top`, () => {
    const html = renderString(`{{ standard_header_includes }} {{ require_css('/test.css', { async: true }) }} `);
  });
});
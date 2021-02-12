
import { renderString } from '../../src/index';
describe(`Return a truncated copy of the string. The length is specified with the first parameter which defaults to 255. If the second parameter is true the filter will cut the text at length. Otherwise it will discard the last word. If the text was in fact truncated it will append an ellipsis sign ("..."). If you want a different ellipsis sign than "..." you can specify it using the third parameter.`, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{{ "I only want to show the first sentence. Not the second."|truncate(40) }} `);
      expect(html).toBe(`I only want to show the first sentence.`);
  });
  it(`unnamed case 1`, () => {
      const html = renderString(`{{ "I only want to show the first sentence. Not the second."|truncate(35, True, '..') }}`);
      expect(html).toBe(`I only want to show the first sente..`);
  });
});
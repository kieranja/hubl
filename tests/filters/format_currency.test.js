
import { renderString } from '../../src/index';
describe(`Formats a given number as a currency based on the locale and currency code passed in as a parameter. `, () => {
  it(`unnamed case 0`, () => {
      const html = renderString(`{{ price|format_currency }}`);
      
  });
  it(`unnamed case 1`, () => {
      const html = renderString(`{{ price|format_currency("fr-FR") }}`);
      
  });
  it(`unnamed case 2`, () => {
      const html = renderString(`{{ price|format_currency("en-US") }}`);
      
  });
  it(`unnamed case 3`, () => {
      const html = renderString(`{{ price|format_currency("en-US", "USD") }}`);
      
  });
  it(`unnamed case 4`, () => {
      const html = renderString(`{{ price|format_currency("fr-FR", "USD") }}`);
      
  });
  it(`unnamed case 5`, () => {
      const html = renderString(`{{ price|format_currency("jp-JP", "JPY", "true") }}`);
      
  });
});
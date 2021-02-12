
import { renderString } from '../../src/index';
describe(`Converts a color given as a hex string into a comma-separated list of RGB values.`, () => {

  it('converts short hex codes', () => {
    
    const html = renderString(`{% set my_color = "#fff" %}{{ my_color|convert_rgb }}`);

    expect(html).toBe('255,255,255');

  });

  it('converts standard hex codes', () => {
    
    const html = renderString(`{% set my_color = "#ffffff" %}{{ my_color|convert_rgb }}`);

    expect(html).toBe('255,255,255');

  });

  it('converts more than white', () => {
    
    const html = renderString(`{% set my_color = "#000" %}{{ my_color|convert_rgb }}`);

    expect(html).toBe('0,0,0');

  });  
});
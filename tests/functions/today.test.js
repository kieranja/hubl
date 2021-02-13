
import { renderString } from '../../src/index';
describe(`return datetime of beginning of the day`, () => {

  it('renders correct time', () => {

    const html = renderString("{{ today() }}");


  });


  it('plusDays', () => {

    const html = renderString("{{ today().plusDays(1) }}");


  });
});
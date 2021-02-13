
import { renderString } from '../../src/index';
describe(`Escapes strings so that they can be used as JSON values`, () => {
  it(`unnamed case 0`, () => {
    const html = renderString(`{{'<script>"/>'|escapejson}}`);
    expect(html).toBe('\"&lt;script&gt;\\\"/&gt;\"');
  });
});
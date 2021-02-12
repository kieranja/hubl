
import { renderString } from '../../src/index';
describe(`If the value is undefined it will return the passed default value, otherwise the value of the variable`, () => {
  it(`This will output the value of my_variable if the variable was defined, otherwise 'my_variable is not defined'`, () => {
      const html = renderString(`{{ my_variable|default('my_variable is not defined') }}`);
      
  });
  it(`If you want to use default with variables that evaluate to false you have to set the second parameter to true`, () => {
      const html = renderString(`{{ ''|default('the string was empty', true) }}`);
      
  });
});
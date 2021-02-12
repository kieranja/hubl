
import { renderString } from '../../src/index';
describe(`Applies a filter on a sequence of objects or looks up an attribute.`, () => {

  // TODO: Need to support this.
  // it(`The basic usage is mapping on an attribute. Imagine you have a list of users but you are only interested in a list of usernames`, () => {
  //     const html = renderString(`Users on this page: {% set users = [{"username": "test"}] %} {{ users|map(attribute='username')|join(', ') }}`);
      
  // });


  it(`Alternatively you can let it invoke a filter by passing the name of the filter and the arguments afterwards. A good example would be applying a text conversion filter on a sequence`, () => {
      const html = renderString(`{% set seq = ['item1', 'item2', 'item3'] %} 
      {{ seq|map('upper')|join(',') }}`);

    expect(html).toContain('ITEM1,ITEM2,ITEM3');
      
  });
});
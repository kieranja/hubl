
import { renderString } from '../../src/index';
describe(`Group a sequence of objects by a common attribute.`, () => {
  it(`If you have a list of dicts or objects that represent persons with gender, first_name and last_name attributes and you want to group all users by genders you can do something like this`, () => {
      const html = renderString(`<ul>
    {% for group in contents|groupby('blog_post_author') %}
        <li>{{ group.grouper }}<ul>
            {% for content in group.list %}
                <li>{{ content.name }}</li>
            {% endfor %}</ul></li>
     {% endfor %}
</ul>`);
      
  });
});
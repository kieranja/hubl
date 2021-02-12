
import { renderString } from '../../src/index';
describe(`In some cases it can be useful to pass a macro to another macro. For this purpose you can use the special call block.`, () => {
  it(`This is a simple dialog rendered by using a macro and a call block`, () => {
      const html = renderString(` {% macro render_dialog(title, class='dialog') %}
  <div class="{{ class }}">
      <h2>{{ title }}</h2>
      <div class="contents">
          {{ caller() }}
      </div>
  </div>
 {% endmacro %}

 {% call render_dialog('Hello World') %}
     This is a simple dialog rendered by using a macro and
     a call block.
 {% endcall %}`);
      
  });
  it(`Its also possible to pass arguments back to the call block. This makes it useful as replacement for loops. Generally speaking a call block works exactly like an macro, just that it doesnt have a name. Here an example of how a call block can be used with arguments`, () => {
      const html = renderString(` {% macro dump_users(users) %}
   <ul>
     {% for user in users %}
       <li><p>{{ user.username|e }}</p>{{ caller(user) }}</li>
     {%- endfor %}
   </ul>
 {% endmacro %}

 {% call(user) dump_users(list_of_user) %}
  <dl>
       <dl>Realname</dl>
       <dd>{{ user.realname|e }}</dd>
       <dl>Description</dl>
       <dd>{{ user.description }}</dd>
  </dl>
 {% endcall %}`);
      
  });
});
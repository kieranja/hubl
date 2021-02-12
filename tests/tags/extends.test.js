
import { renderString } from '../../src/index';
describe(`Template inheritance allows you to build a base skeleton template that contains all the common elements of your site and defines blocks that child templates can override.`, () => {
  it(`This template, which well call base.html, defines a simple HTML skeleton document that you might use for a simple two-column page. Its the job of child templates to fill the empty blocks with content.

In this example, the {% block %} tags define four blocks that child templates can fill in. All the block tag does is tell the template engine that a child template may override those placeholders in the template.`, () => {
      const html = renderString(`<!DOCTYPE html>
<html lang="en">
<head>
    {% block head %}
    <link rel="stylesheet" href="style.css" />
    <title>{% block title %}{% endblock %} - My Webpage</title>
    {% endblock %}
</head>
<body>
    <div id="content">{% block content %}{% endblock %}</div>
    <div id="footer">
        {% block footer %}
        &copy; Copyright 2008 by <a href="http://domain.invalid/">you</a>.
        {% endblock %}
    </div>
</body>
</html>`);
      
  });
  it(`The {% extends %} tag is the key here. It tells the template engine that this template extends another template. When the template system evaluates this template, it first locates the parent. The extends tag should be the first tag in the template. Everything before it is printed out normally and may cause confusion.`, () => {
      const html = renderString(`{% extends "custom/page/web_page_basic/my_template.html" %}
{% block title %}Index{% endblock %}
{% block head %}
    {{ super() }}
    <style type="text/css">
        .important { color: #336699; }
    </style>
{% endblock %}
{% block content %}
    <h1>Index</h1>
    <p class="important">
      Welcome to my awesome homepage.
    </p>
{% endblock %}`);
      
  });
});
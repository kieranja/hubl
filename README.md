IMPORTANT: this is a WIP

# hubl
Implementation of HubL using Nunjucks

It's important to note that a fair few of the HUBL tags pull data from the Hubspot CRM/CMS. These methods have been implemented as stubs.




See src/test.js for example.


## Why? 
I want to be able to test my modules and templates using Jest.

## How to use

You'll need to decide if you're running this in the context of node or browser. If you're using Storybook it'll likely run in-browser. However, if you're using webpack it'll run on node (this impacts how included templates are discovered/included)

1. npm install hubl
2. decide how you want to populate test data using the manager instances.

If you want to render a whole page template, these require a fair bit more bootstrapping. 
```
const pageManager = new PageManager([pages go here]);
const hubdbManager = new HubDBManager({ hubdb tables})
const menuManager = new HubDBManager([ menus ])

// singleton version
configure(pageManager, hubdbManager, menuManager, ctaManager);

const hublTemplateCode = '{{ something | count }}';
renderPageString('/', hublTemplateCode, { ... variables ... })

```
Modules on the other hand, you can just ignore all the configure stuff as long as you don't use any methods like menu()

```
renderModuleString('{{ module.variable }}, { variable: 1 });

```

```
{{ theme.* }} is set on all.
```








## todo:

1. support hubl in scss
2. integrate all key filters
3. integrate all functions
4. integrate all tags
5. allow hooks for any methods which use data from hubspot - allowing data to be populated from the API (build a static version of the site), nots sure this is possible yet though.
6. support space seperated params for filters - currently you need to use commas.
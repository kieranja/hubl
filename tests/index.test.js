import { renderString, configure, renderPageString } from "../src";
import CtaManager from "../src/lib/cta_manager";
import HubDbManager from "../src/lib/hubdb_manager";
import PageManager from "../src/lib/page_manager";

import pagesJSON from './fixture/pages.json';

const d= new Date();
const hubDBManager = new HubDbManager({
  1: {
    metadata: {
      id: 1,
      name: 'tablename',
      columns: ['title'],
      created_at: new Date(),
      published_at: new Date(),
      updated_at: new Date(),
      row_count: 2
    },
    rows: [
      {
        hs_id: 123,
        hs_path: null,
        hs_child_table: '',
        hs_name: 'title',
        hs_created_at: d,
        title: 'TITLE 1',
        count: 101
      },
      {
        hs_id: 124,
        hs_path: null,
        hs_child_table: '',
        hs_name: 'title',
        hs_created_at: d,
        column_name: '',
        title: 'TITLE 2',
        count: 50
      }
    ]
  
  }
  
});
const ctaManager = new CtaManager([
  { id: 'ccd39b7c-ae18-4c4e-98ee-547069bfbc5b', button_text: 'READ MORE', portal_id: '1234' }
]);

const pageManager = new PageManager(pagesJSON);

describe('Hub DB integration works', () => {
  it('hubdb integration', () => {
    configure({pageManager, hubDBManager, ctaManager});
    const html = renderString(`
{% for row in hubdb_table_rows(1, "count__gt=1") %}
  the value for row {{ row.hs_id }} is {{ row.title }}
{% endfor %}
    `);

    expect(html).toContain('the value for row 123 is TITLE 1');
    expect(html).toContain('the value for row 124 is TITLE 2')
  });

  it('cta renders ', () => {
    configure({pageManager, hubDBManager, ctaManager});
    const html = renderString(`{{ cta('ccd39b7c-ae18-4c4e-98ee-547069bfbc5b') }}`);

    expect(html).toContain('ccd39b7c-ae18-4c4e-98ee-547069bfbc5b');
  });



  it('Page is correctly configured', () => {
    configure({pageManager, hubDBManager, ctaManager});
    const html = renderPageString('/', `{{ content.id }}`);

    expect(html).toContain('1');
  });

  it('Page is correctly for subpages', () => {
    configure({pageManager, hubDBManager, ctaManager});
    const html = renderPageString('/test', `{{ content.id }}`);

    expect(html).toContain('2');
  });
});


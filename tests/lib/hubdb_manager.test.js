import HubDbManager from '../../src/lib/hubdb_manager.js';

const d = new Date();
const hubdb = new HubDbManager({
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


describe(`Hubdb`, () => {

  it(`It works`, () => {
    const single = hubdb.find('1', '?limit=10&orderBy=column&title__eq=TITLE 1');

    expect(single[0]).toMatchObject({
      hs_id: 123,
      hs_path: null,
      hs_child_table: '',
      hs_name: 'title',
      hs_created_at: d,
      title: 'TITLE 1',
      count: 101
    });

    expect(single).toHaveLength(1);
  });


  it(`Contains`, () => {
    const single = hubdb.find('1', '?limit=10&orderBy=column&title__contains=TITLE');

    expect(single).toMatchObject([
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
        title: 'TITLE 2',
        count: 50
      }
    ]);

    expect(single).toHaveLength(2);
  });


  it(`Greater than`, () => {
    const single = hubdb.find('1', '?limit=10&orderBy=column&count__gt=100');
    expect(single).toMatchObject([
      {
        hs_id: 123,
        hs_path: null,
        hs_child_table: '',
        hs_name: 'title',
        hs_created_at: d,
        title: 'TITLE 1',
        count: 101
      }
    ]);

    expect(single).toHaveLength(1);
  });


  it(`Greater than or equal`, () => {
    const single = hubdb.find('1', '?limit=10&orderBy=column&count__gte=101');

    expect(single).toMatchObject([
      {
        hs_id: 123,
        hs_path: null,
        hs_child_table: '',
        hs_name: 'title',
        hs_created_at: d,
        title: 'TITLE 1',
        count: 101
      }
    ]);


    expect(single).toHaveLength(1);
  });

  it(`Equals without operator`, () => {
    const single = hubdb.find('1', '?limit=10&orderBy=column&title=TITLE 1');

    expect(single).toMatchObject([
      {
        hs_id: 123,
        hs_path: null,
        hs_child_table: '',
        hs_name: 'title',
        hs_created_at: d,
        title: 'TITLE 1',
        count: 101
      }
    ]);

    expect(single).toHaveLength(1);
  });
});
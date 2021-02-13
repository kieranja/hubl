const OPERATORS = {
  'eq': (a, b) => a == b,
  'ne': (a,b) => a != b,
  'contains': (a, b) => a.includes(b),
  'lt': (a, b) => a < b,
  'lte': (a,b) => a <= b,
  'gt': (a,b) => a > b,
  'gte': (a,b) => a >= b,
  'is_null': (a) => a === null,
  'not_null': (a) => a !== null,
};

const SORT_LIMIT = {
  'orderBy': (data, val) => {
    return [...data].sort();
  },
  'limit': (data, val) => {
    return [...data].slice(op)
  }
}


export default class HubDbManager {
  constructor(data) {
    this.data = data;
  }

  init() {
    // for (const cta of this.ctas) {
      // this.data[cta.id] = cta;
    // }
  }
  getAll() {
    return this.data;
  }

  getById(id) {
    return this.ctasById(id);
  }

  /**
   * Query table.
   * @param {*} tableId 
   * @param {*} query 
   */
  find(tableId, query) {
      const parts = this.parseQuery(query);

      let data = { ...this.data[tableId] };

      for (const [key, value] of Object.entries(parts)) {
      
        // Limit or sort
        if (SORT_LIMIT[key]) {
          continue;
        }

        let items = key.split('__');

        if (items && items[1]) {
          const field = items[0];
          data.rows = data.rows.filter( item => OPERATORS[items[1]]( item[field], value) );
        } else {
          data.rows = data.rows.filter( item => OPERATORS['eq']( item[key], value) );
        }
    }
    return data.rows;
  }

  parseQuery(queryString) {
    var query = {};
    var pairs = (queryString[0] === '?' ? queryString.substr(1) : queryString).split('&');
    for (var i = 0; i < pairs.length; i++) {
        var pair = pairs[i].split('=');
        query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
    }
    return query;
  }
  
}
function register(env) {
  env.addFilter("groupby", handler);
}

function handler(input, group_by_key) {
  let groups = [];
  for (const [key, val] of Object.entries(input)) {
    const index = groups.findIndex( g => g.grouper === val[group_by_key] );

    if (groups[index]) {
      groups[index].list.push(val);
    } else {
      groups.push({
        grouper: val[group_by_key],
        list: [val]
      });
    }
    
  }

  return groups;
}
  

export {
  handler,
  register as default
};

function register(env) {
  env.addFilter("rejectattr", (attribute_name, exp_test, val) => handler(env, attribute_name, exp_test, val));
}

function handler(env, input, attribute_name, exp_test = 'truthy', val = null) {

  return input.filter(item => {
    const test = env.getNunjucksEnv().getTest(exp_test);

    return input.filter(item => {
      return test.call(this, item, val) === false;
    });

  })
}
  

export {
  handler,
  register as default
};

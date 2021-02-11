function register(env) {
  env.addExtension("member_register", new handler(env));
}
const Nunjucks = require('nunjucks');
function handler(env) {
  this.tags = ['member_register'];

  this.parse = function (parser, nodes, lexer) {
      var tok = parser.nextToken();

      var args = parser.parseSignature(null, true);
      parser.advanceAfterBlockEnd(tok.value);
      //var body = parser.parseUntilBlocks('end_member_register');
      let body = null;
      //parser.advanceAfterBlockEnd();
      return new nodes.CallExtension(this, 'run', args, [body]);

  };

  this.run = function(environment) {
    console.log(environment);
      let str = JSON.stringify(environment.ctx);
      return new Nunjucks.runtime.SafeString(str);
  }
}

module.exports = {
  handler,
  register
}
  


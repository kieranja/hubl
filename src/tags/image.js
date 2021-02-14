function register(env) {
  env.addExtension("image", new handler(env));
}
import Nunjucks from 'nunjucks';
function handler(env) {
  this.tags = ['image'];

  this.parse = function (parser, nodes, lexer) {
      var tok = parser.nextToken();

      var args = parser.parseSignature(null, true);
      parser.advanceAfterBlockEnd(tok.value);
      //var body = parser.parseUntilBlocks('end_image');
      let body = null;
      //parser.advanceAfterBlockEnd();
      return new nodes.CallExtension(this, 'run', args, [body]);

  };

  this.run = function(environment) {
    
      let str = JSON.stringify(environment.ctx);
      return new Nunjucks.runtime.SafeString(str);
  }
}

export {
  handler,
  register as default
}
  


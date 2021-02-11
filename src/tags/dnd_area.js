function register(env) {
  env.addExtension("dnd_area", new handler(env));
}
import Nunjucks from 'nunjucks';
function handler(env) {
  this.tags = ['dnd_area'];

  this.parse = function (parser, nodes, lexer) {
      var tok = parser.nextToken();

      var args = parser.parseSignature(null, true);
      parser.advanceAfterBlockEnd(tok.value);
      var body = parser.parseUntilBlocks('end_dnd_area');
      parser.advanceAfterBlockEnd();
      return new nodes.CallExtension(this, 'run', args, [body]);

  };

  this.run = function(context, body, args) {
    return new Nunjucks.runtime.SafeString(`<div class="container-fluid ${ args.className || '' }">
        <div class="row-wrapper">
            <div class="row-fluid">
                <div class="span12 widget-span widget-type-cell " style="" data-widget-type="cell" data-x="0" data-w="12">
                ${body}
                </div>
            </div>
        </div>  
    </div>
    `);
  }
}

export {
  handler,
  register as default
}
  


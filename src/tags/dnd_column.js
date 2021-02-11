function register(env) {
  env.addExtension("dnd_column", new handler(env));
}
import Nunjucks from 'nunjucks';
function handler(env) {
  this.tags = ['dnd_column'];

  this.parse = function (parser, nodes, lexer) {
      var tok = parser.nextToken();

      var args = parser.parseSignature(null, true);
      parser.advanceAfterBlockEnd(tok.value);
      var body = parser.parseUntilBlocks('end_dnd_column');
      parser.advanceAfterBlockEnd();
      return new nodes.CallExtension(this, 'run', args, [body]);

  };

  this.run = function(context, body, args) {
    return new Nunjucks.runtime.SafeString(`
    <div class="span12 widget-span widget-type-cell unique_name-column-1-margin unique_name-column-1-background-color unique_name-column-1-vertical-alignment dnd-column" style="" data-widget-type="cell" data-x="0" data-w="12">
      ${ body }
    </div>
    <!--end widget-span -->
    `);
  }
}

export {
  handler,
  register as default
}
  


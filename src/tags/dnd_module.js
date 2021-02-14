function register(env) {
  env.addExtension("dnd_module", new handler(env));
}
import Nunjucks from 'nunjucks';
function handler(env) {
  this.tags = ['dnd_module'];

  this.parse = function (parser, nodes, lexer) {
      var tok = parser.nextToken();

      var args = parser.parseSignature(null, true);
      parser.advanceAfterBlockEnd(tok.value);
      // var body = parser.parseUntilBlocks('end_dnd_module');
      // parser.advanceAfterBlockEnd();
      return new nodes.CallExtension(this, 'run', args, [null]);

  };

  this.run = function(context, args) {

    const { path, width = 12, offset = 0 } = args;

    const content = env.renderModule(path + '.module/module.html', args);

    return new Nunjucks.runtime.SafeString(`
    <div class="span${width} widget-span widget-type-custom_widget" style="" data-widget-type="custom_widget" data-x="${ offset }" data-w="${ width }">
      <div id="hs_cos_wrapper_main-module-1" class="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module" style="" data-hs-cos-general-type="widget" data-hs-cos-type="module" >
          <span id="hs_cos_wrapper_module-1_" class="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_rich_text" style="" data-hs-cos-general-type="widget" data-hs-cos-type="rich_text">
              ${content}
          </span>
      </div>
    </div>  
    `);
  }
}

export {
  handler,
  register as default
}
  


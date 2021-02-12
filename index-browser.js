var hubl = (function (exports, Nunjucks) {
  'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var Nunjucks__default = /*#__PURE__*/_interopDefaultLegacy(Nunjucks);

  function register(env) {
    env.addExtension("blog_comments", new handler(env));
  }
  function handler(env) {
    this.tags = ['blog_comments'];

    this.parse = function (parser, nodes, lexer) {
        var tok = parser.nextToken();

        var args = parser.parseSignature(null, true);
        parser.advanceAfterBlockEnd(tok.value);
        //var body = parser.parseUntilBlocks('end_blog_comments');
        let body = null;
        //parser.advanceAfterBlockEnd();
        return new nodes.CallExtension(this, 'run', args, [body]);

    };

    this.run = function(environment) {
      console.log(environment);
        let str = JSON.stringify(environment.ctx);
        return new Nunjucks__default['default'].runtime.SafeString(str);
    };
  }

  function register$1(env) {
    env.addExtension("blog_social_sharing", new handler$1(env));
  }
  function handler$1(env) {
    this.tags = ['blog_social_sharing'];

    this.parse = function (parser, nodes, lexer) {
        var tok = parser.nextToken();

        var args = parser.parseSignature(null, true);
        parser.advanceAfterBlockEnd(tok.value);
        //var body = parser.parseUntilBlocks('end_blog_social_sharing');
        let body = null;
        //parser.advanceAfterBlockEnd();
        return new nodes.CallExtension(this, 'run', args, [body]);

    };

    this.run = function(environment) {
      console.log(environment);
        let str = JSON.stringify(environment.ctx);
        return new Nunjucks__default['default'].runtime.SafeString(str);
    };
  }

  function register$2(env) {
    env.addExtension("blog_subscribe", new handler$2(env));
  }
  function handler$2(env) {
    this.tags = ['blog_subscribe'];

    this.parse = function (parser, nodes, lexer) {
        var tok = parser.nextToken();

        var args = parser.parseSignature(null, true);
        parser.advanceAfterBlockEnd(tok.value);
        //var body = parser.parseUntilBlocks('end_blog_subscribe');
        let body = null;
        //parser.advanceAfterBlockEnd();
        return new nodes.CallExtension(this, 'run', args, [body]);

    };

    this.run = function(environment) {
      console.log(environment);
        let str = JSON.stringify(environment.ctx);
        return new Nunjucks__default['default'].runtime.SafeString(str);
    };
  }

  function register$3(env) {
    env.addExtension("boolean", new handler$3(env));
  }
  function handler$3(env) {
    this.tags = ['boolean'];

    this.parse = function (parser, nodes, lexer) {
        var tok = parser.nextToken();

        var args = parser.parseSignature(null, true);
        parser.advanceAfterBlockEnd(tok.value);
        //var body = parser.parseUntilBlocks('end_boolean');
        let body = null;
        //parser.advanceAfterBlockEnd();
        return new nodes.CallExtension(this, 'run', args, [body]);

    };

    this.run = function(environment) {
      console.log(environment);
        let str = JSON.stringify(environment.ctx);
        return new Nunjucks__default['default'].runtime.SafeString(str);
    };
  }

  function register$4(env) {
    env.addExtension("choice", new handler$4(env));
  }
  function handler$4(env) {
    this.tags = ['choice'];

    this.parse = function (parser, nodes, lexer) {
        var tok = parser.nextToken();

        var args = parser.parseSignature(null, true);
        parser.advanceAfterBlockEnd(tok.value);
        //var body = parser.parseUntilBlocks('end_choice');
        let body = null;
        //parser.advanceAfterBlockEnd();
        return new nodes.CallExtension(this, 'run', args, [body]);

    };

    this.run = function(environment) {
      console.log(environment);
        let str = JSON.stringify(environment.ctx);
        return new Nunjucks__default['default'].runtime.SafeString(str);
    };
  }

  function register$5(env) {
    env.addExtension("color", new handler$5(env));
  }
  function handler$5(env) {
    this.tags = ['color'];

    this.parse = function (parser, nodes, lexer) {
        var tok = parser.nextToken();

        var args = parser.parseSignature(null, true);
        parser.advanceAfterBlockEnd(tok.value);
        //var body = parser.parseUntilBlocks('end_color');
        let body = null;
        //parser.advanceAfterBlockEnd();
        return new nodes.CallExtension(this, 'run', args, [body]);

    };

    this.run = function(environment) {
      console.log(environment);
        let str = JSON.stringify(environment.ctx);
        return new Nunjucks__default['default'].runtime.SafeString(str);
    };
  }

  function register$6(env) {
    env.addExtension("content_attribute", new handler$6(env));
  }
  function handler$6(env) {
    this.tags = ['content_attribute'];

    this.parse = function (parser, nodes, lexer) {
        var tok = parser.nextToken();

        var args = parser.parseSignature(null, true);
        parser.advanceAfterBlockEnd(tok.value);
        //var body = parser.parseUntilBlocks('end_content_attribute');
        let body = null;
        //parser.advanceAfterBlockEnd();
        return new nodes.CallExtension(this, 'run', args, [body]);

    };

    this.run = function(environment) {
      console.log(environment);
        let str = JSON.stringify(environment.ctx);
        return new Nunjucks__default['default'].runtime.SafeString(str);
    };
  }

  function register$7(env) {
    env.addExtension("cta", new handler$7(env));
  }
  function handler$7(env) {
    this.tags = ['cta'];

    this.parse = function (parser, nodes, lexer) {
        var tok = parser.nextToken();

        var args = parser.parseSignature(null, true);
        parser.advanceAfterBlockEnd(tok.value);
        //var body = parser.parseUntilBlocks('end_cta');
        let body = null;
        //parser.advanceAfterBlockEnd();
        return new nodes.CallExtension(this, 'run', args, [body]);

    };

    this.run = function(environment) {
      console.log(environment);
        let str = JSON.stringify(environment.ctx);
        return new Nunjucks__default['default'].runtime.SafeString(str);
    };
  }

  function register$8(env) {
    env.addExtension("custom_widget", new handler$8(env));
  }
  function handler$8(env) {
    this.tags = ['custom_widget'];

    this.parse = function (parser, nodes, lexer) {
        var tok = parser.nextToken();

        var args = parser.parseSignature(null, true);
        parser.advanceAfterBlockEnd(tok.value);
        //var body = parser.parseUntilBlocks('end_custom_widget');
        let body = null;
        //parser.advanceAfterBlockEnd();
        return new nodes.CallExtension(this, 'run', args, [body]);

    };

    this.run = function(environment) {
      console.log(environment);
        let str = JSON.stringify(environment.ctx);
        return new Nunjucks__default['default'].runtime.SafeString(str);
    };
  }

  function register$9(env) {
    env.addExtension("cycle", new handler$9(env));
  }
  function handler$9(env) {
    this.tags = ['cycle'];

    this.parse = function (parser, nodes, lexer) {
        var tok = parser.nextToken();

        var args = parser.parseSignature(null, true);
        parser.advanceAfterBlockEnd(tok.value);
        //var body = parser.parseUntilBlocks('end_cycle');
        let body = null;
        //parser.advanceAfterBlockEnd();
        return new nodes.CallExtension(this, 'run', args, [body]);

    };

    this.run = function(environment) {
      console.log(environment);
        let str = JSON.stringify(environment.ctx);
        return new Nunjucks__default['default'].runtime.SafeString(str);
    };
  }

  function register$a(env) {
    env.addExtension("dnd_area", new handler$a(env));
  }
  function handler$a(env) {
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
      return new Nunjucks__default['default'].runtime.SafeString(`<div class="container-fluid ${ args.className || '' }">
        <div class="row-wrapper">
            <div class="row-fluid">
                <div class="span12 widget-span widget-type-cell " style="" data-widget-type="cell" data-x="0" data-w="12">
                ${body}
                </div>
            </div>
        </div>  
    </div>
    `);
    };
  }

  function register$b(env) {
    env.addExtension("dnd_column", new handler$b(env));
  }
  function handler$b(env) {
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
      return new Nunjucks__default['default'].runtime.SafeString(`
    <div class="span12 widget-span widget-type-cell unique_name-column-1-margin unique_name-column-1-background-color unique_name-column-1-vertical-alignment dnd-column" style="" data-widget-type="cell" data-x="0" data-w="12">
      ${ body }
    </div>
    <!--end widget-span -->
    `);
    };
  }

  function register$c(env) {
    env.addExtension("dnd_module", new handler$c(env));
  }
  function handler$c(env) {
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

      const { path, width = 12, offset=0 } = args;

      const content = env.render(path);
      return new Nunjucks__default['default'].runtime.SafeString(`
    <div class="span${width} widget-span widget-type-custom_widget" style="" data-widget-type="custom_widget" data-x="${ offset }" data-w="${ width }">
      <div id="hs_cos_wrapper_main-module-1" class="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module" style="" data-hs-cos-general-type="widget" data-hs-cos-type="module" >
          <span id="hs_cos_wrapper_module-1_" class="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_rich_text" style="" data-hs-cos-general-type="widget" data-hs-cos-type="rich_text">
              ${content}
          </span>
      </div>
    </div>  
    `);
    };
  }

  function register$d(env) {
    env.addExtension("dnd_row", new handler$d(env));
  }
  function handler$d(env) {
    this.tags = ['dnd_row'];

    this.parse = function (parser, nodes, lexer) {
        var tok = parser.nextToken();

        var args = parser.parseSignature(null, true);
        parser.advanceAfterBlockEnd(tok.value);
        //var body = parser.parseUntilBlocks('end_dnd_row');
        let body = null;
        //parser.advanceAfterBlockEnd();
        return new nodes.CallExtension(this, 'run', args, [body]);

    };

    this.run = function(environment) {
      console.log(environment);
        let str = JSON.stringify(environment.ctx);
        return new Nunjucks__default['default'].runtime.SafeString(str);
    };
  }

  function register$e(env) {
    env.addExtension("dnd_section", new handler$e(env));
  }
  function handler$e(env) {
    this.tags = ['dnd_section'];

    this.parse = function (parser, nodes, lexer) {
        var tok = parser.nextToken();

        var args = parser.parseSignature(null, true);
        parser.advanceAfterBlockEnd(tok.value);
        //var body = parser.parseUntilBlocks('end_dnd_section');
        let body = null;
        //parser.advanceAfterBlockEnd();
        return new nodes.CallExtension(this, 'run', args, [body]);

    };

    this.run = function(environment) {
      console.log(environment);
        let str = JSON.stringify(environment.ctx);
        return new Nunjucks__default['default'].runtime.SafeString(str);
    };
  }

  function register$f(env) {
    env.addExtension("do", new handler$f(env));
  }
  function handler$f(env) {
    this.tags = ['do'];

    this.parse = function (parser, nodes, lexer) {
        var tok = parser.nextToken();

        var args = parser.parseSignature(null, true);
        parser.advanceAfterBlockEnd(tok.value);
        //var body = parser.parseUntilBlocks('end_do');
        let body = null;
        //parser.advanceAfterBlockEnd();
        return new nodes.CallExtension(this, 'run', args, [body]);

    };

    this.run = function(environment) {
      console.log(environment);
        let str = JSON.stringify(environment.ctx);
        return new Nunjucks__default['default'].runtime.SafeString(str);
    };
  }

  function register$g(env) {
    env.addExtension("email_each", new handler$g(env));
  }
  function handler$g(env) {
    this.tags = ['email_each'];

    this.parse = function (parser, nodes, lexer) {
        var tok = parser.nextToken();

        var args = parser.parseSignature(null, true);
        parser.advanceAfterBlockEnd(tok.value);
        //var body = parser.parseUntilBlocks('end_email_each');
        let body = null;
        //parser.advanceAfterBlockEnd();
        return new nodes.CallExtension(this, 'run', args, [body]);

    };

    this.run = function(environment) {
      console.log(environment);
        let str = JSON.stringify(environment.ctx);
        return new Nunjucks__default['default'].runtime.SafeString(str);
    };
  }

  function register$h(env) {
    env.addExtension("email_flex_area", new handler$h(env));
  }
  function handler$h(env) {
    this.tags = ['email_flex_area'];

    this.parse = function (parser, nodes, lexer) {
        var tok = parser.nextToken();

        var args = parser.parseSignature(null, true);
        parser.advanceAfterBlockEnd(tok.value);
        //var body = parser.parseUntilBlocks('end_email_flex_area');
        let body = null;
        //parser.advanceAfterBlockEnd();
        return new nodes.CallExtension(this, 'run', args, [body]);

    };

    this.run = function(environment) {
      console.log(environment);
        let str = JSON.stringify(environment.ctx);
        return new Nunjucks__default['default'].runtime.SafeString(str);
    };
  }

  function register$i(env) {
    env.addExtension("email_simple_subscription", new handler$i(env));
  }
  function handler$i(env) {
    this.tags = ['email_simple_subscription'];

    this.parse = function (parser, nodes, lexer) {
        var tok = parser.nextToken();

        var args = parser.parseSignature(null, true);
        parser.advanceAfterBlockEnd(tok.value);
        //var body = parser.parseUntilBlocks('end_email_simple_subscription');
        let body = null;
        //parser.advanceAfterBlockEnd();
        return new nodes.CallExtension(this, 'run', args, [body]);

    };

    this.run = function(environment) {
      console.log(environment);
        let str = JSON.stringify(environment.ctx);
        return new Nunjucks__default['default'].runtime.SafeString(str);
    };
  }

  function register$j(env) {
    env.addExtension("email_subscriptions_confirmation", new handler$j(env));
  }
  function handler$j(env) {
    this.tags = ['email_subscriptions_confirmation'];

    this.parse = function (parser, nodes, lexer) {
        var tok = parser.nextToken();

        var args = parser.parseSignature(null, true);
        parser.advanceAfterBlockEnd(tok.value);
        //var body = parser.parseUntilBlocks('end_email_subscriptions_confirmation');
        let body = null;
        //parser.advanceAfterBlockEnd();
        return new nodes.CallExtension(this, 'run', args, [body]);

    };

    this.run = function(environment) {
      console.log(environment);
        let str = JSON.stringify(environment.ctx);
        return new Nunjucks__default['default'].runtime.SafeString(str);
    };
  }

  function register$k(env) {
    env.addExtension("email_subscriptions", new handler$k(env));
  }
  function handler$k(env) {
    this.tags = ['email_subscriptions'];

    this.parse = function (parser, nodes, lexer) {
        var tok = parser.nextToken();

        var args = parser.parseSignature(null, true);
        parser.advanceAfterBlockEnd(tok.value);
        //var body = parser.parseUntilBlocks('end_email_subscriptions');
        let body = null;
        //parser.advanceAfterBlockEnd();
        return new nodes.CallExtension(this, 'run', args, [body]);

    };

    this.run = function(environment) {
      console.log(environment);
        let str = JSON.stringify(environment.ctx);
        return new Nunjucks__default['default'].runtime.SafeString(str);
    };
  }

  function register$l(env) {
    env.addExtension("flip", new handler$l(env));
  }
  function handler$l(env) {
    this.tags = ['flip'];

    this.parse = function (parser, nodes, lexer) {
        var tok = parser.nextToken();

        var args = parser.parseSignature(null, true);
        parser.advanceAfterBlockEnd(tok.value);
        //var body = parser.parseUntilBlocks('end_flip');
        let body = null;
        //parser.advanceAfterBlockEnd();
        return new nodes.CallExtension(this, 'run', args, [body]);

    };

    this.run = function(environment) {
      console.log(environment);
        let str = JSON.stringify(environment.ctx);
        return new Nunjucks__default['default'].runtime.SafeString(str);
    };
  }

  function register$m(env) {
    env.addExtension("form", new handler$m(env));
  }
  function handler$m(env) {
    this.tags = ['form'];

    this.parse = function (parser, nodes, lexer) {
        var tok = parser.nextToken();

        var args = parser.parseSignature(null, true);
        parser.advanceAfterBlockEnd(tok.value);
        //var body = parser.parseUntilBlocks('end_form');
        let body = null;
        //parser.advanceAfterBlockEnd();
        return new nodes.CallExtension(this, 'run', args, [body]);

    };

    this.run = function(environment) {
      console.log(environment);
        let str = JSON.stringify(environment.ctx);
        return new Nunjucks__default['default'].runtime.SafeString(str);
    };
  }

  function register$n(env) {
    env.addExtension("gallery", new handler$n(env));
  }
  function handler$n(env) {
    this.tags = ['gallery'];

    this.parse = function (parser, nodes, lexer) {
        var tok = parser.nextToken();

        var args = parser.parseSignature(null, true);
        parser.advanceAfterBlockEnd(tok.value);
        //var body = parser.parseUntilBlocks('end_gallery');
        let body = null;
        //parser.advanceAfterBlockEnd();
        return new nodes.CallExtension(this, 'run', args, [body]);

    };

    this.run = function(environment) {
      console.log(environment);
        let str = JSON.stringify(environment.ctx);
        return new Nunjucks__default['default'].runtime.SafeString(str);
    };
  }

  function register$o(env) {
    env.addExtension("global_module", new handler$o(env));
  }
  function handler$o(env) {
    this.tags = ['global_module'];

    this.parse = function (parser, nodes, lexer) {
        var tok = parser.nextToken();

        var args = parser.parseSignature(null, true);
        parser.advanceAfterBlockEnd(tok.value);
        //var body = parser.parseUntilBlocks('end_global_module');
        let body = null;
        //parser.advanceAfterBlockEnd();
        return new nodes.CallExtension(this, 'run', args, [body]);

    };

    this.run = function(environment) {
      console.log(environment);
        let str = JSON.stringify(environment.ctx);
        return new Nunjucks__default['default'].runtime.SafeString(str);
    };
  }

  function register$p(env) {
    env.addExtension("global_widget", new handler$p(env));
  }
  function handler$p(env) {
    this.tags = ['global_widget'];

    this.parse = function (parser, nodes, lexer) {
        var tok = parser.nextToken();

        var args = parser.parseSignature(null, true);
        parser.advanceAfterBlockEnd(tok.value);
        //var body = parser.parseUntilBlocks('end_global_widget');
        let body = null;
        //parser.advanceAfterBlockEnd();
        return new nodes.CallExtension(this, 'run', args, [body]);

    };

    this.run = function(environment) {
      console.log(environment);
        let str = JSON.stringify(environment.ctx);
        return new Nunjucks__default['default'].runtime.SafeString(str);
    };
  }

  function register$q(env) {
    env.addExtension("google_search", new handler$q(env));
  }
  function handler$q(env) {
    this.tags = ['google_search'];

    this.parse = function (parser, nodes, lexer) {
        var tok = parser.nextToken();

        var args = parser.parseSignature(null, true);
        parser.advanceAfterBlockEnd(tok.value);
        //var body = parser.parseUntilBlocks('end_google_search');
        let body = null;
        //parser.advanceAfterBlockEnd();
        return new nodes.CallExtension(this, 'run', args, [body]);

    };

    this.run = function(environment) {
      console.log(environment);
        let str = JSON.stringify(environment.ctx);
        return new Nunjucks__default['default'].runtime.SafeString(str);
    };
  }

  function register$r(env) {
    env.addExtension("header", new handler$r(env));
  }
  function handler$r(env) {
    this.tags = ['header'];

    this.parse = function (parser, nodes, lexer) {
        var tok = parser.nextToken();

        var args = parser.parseSignature(null, true);
        parser.advanceAfterBlockEnd(tok.value);
        //var body = parser.parseUntilBlocks('end_header');
        let body = null;
        //parser.advanceAfterBlockEnd();
        return new nodes.CallExtension(this, 'run', args, [body]);

    };

    this.run = function(environment) {
      console.log(environment);
        let str = JSON.stringify(environment.ctx);
        return new Nunjucks__default['default'].runtime.SafeString(str);
    };
  }

  function register$s(env) {
    env.addExtension("icon", new handler$s(env));
  }
  function handler$s(env) {
    this.tags = ['icon'];

    this.parse = function (parser, nodes, lexer) {
        var tok = parser.nextToken();

        var args = parser.parseSignature(null, true);
        parser.advanceAfterBlockEnd(tok.value);
        //var body = parser.parseUntilBlocks('end_icon');
        let body = null;
        //parser.advanceAfterBlockEnd();
        return new nodes.CallExtension(this, 'run', args, [body]);

    };

    this.run = function(environment) {
      console.log(environment);
        let str = JSON.stringify(environment.ctx);
        return new Nunjucks__default['default'].runtime.SafeString(str);
    };
  }

  function register$t(env) {
    env.addExtension("image_slider", new handler$t(env));
  }
  function handler$t(env) {
    this.tags = ['image_slider'];

    this.parse = function (parser, nodes, lexer) {
        var tok = parser.nextToken();

        var args = parser.parseSignature(null, true);
        parser.advanceAfterBlockEnd(tok.value);
        //var body = parser.parseUntilBlocks('end_image_slider');
        let body = null;
        //parser.advanceAfterBlockEnd();
        return new nodes.CallExtension(this, 'run', args, [body]);

    };

    this.run = function(environment) {
      console.log(environment);
        let str = JSON.stringify(environment.ctx);
        return new Nunjucks__default['default'].runtime.SafeString(str);
    };
  }

  function register$u(env) {
    env.addExtension("image_src", new handler$u(env));
  }
  function handler$u(env) {
    this.tags = ['image_src'];

    this.parse = function (parser, nodes, lexer) {
        var tok = parser.nextToken();

        var args = parser.parseSignature(null, true);
        parser.advanceAfterBlockEnd(tok.value);
        //var body = parser.parseUntilBlocks('end_image_src');
        let body = null;
        //parser.advanceAfterBlockEnd();
        return new nodes.CallExtension(this, 'run', args, [body]);

    };

    this.run = function(environment) {
      console.log(environment);
        let str = JSON.stringify(environment.ctx);
        return new Nunjucks__default['default'].runtime.SafeString(str);
    };
  }

  function register$v(env) {
    env.addExtension("image", new handler$v(env));
  }
  function handler$v(env) {
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
      console.log(environment);
        let str = JSON.stringify(environment.ctx);
        return new Nunjucks__default['default'].runtime.SafeString(str);
    };
  }

  function register$w(env) {
    env.addExtension("include_dnd_partial", new handler$w(env));
  }
  function handler$w(env) {
    this.tags = ['include_dnd_partial'];

    this.parse = function (parser, nodes, lexer) {
        var tok = parser.nextToken();

        var args = parser.parseSignature(null, true);
        parser.advanceAfterBlockEnd(tok.value);
        //var body = parser.parseUntilBlocks('end_include_dnd_partial');
        let body = null;
        //parser.advanceAfterBlockEnd();
        return new nodes.CallExtension(this, 'run', args, [body]);

    };

    this.run = function(environment) {
      console.log(environment);
        let str = JSON.stringify(environment.ctx);
        return new Nunjucks__default['default'].runtime.SafeString(str);
    };
  }

  function register$x(env) {
    env.addExtension("inline_rich_text", new handler$x(env));
  }
  function handler$x(env) {
    this.tags = ['inline_rich_text'];

    this.parse = function (parser, nodes, lexer) {
        var tok = parser.nextToken();

        var args = parser.parseSignature(null, true);
        parser.advanceAfterBlockEnd(tok.value);
        //var body = parser.parseUntilBlocks('end_inline_rich_text');
        let body = null;
        //parser.advanceAfterBlockEnd();
        return new nodes.CallExtension(this, 'run', args, [body]);

    };

    this.run = function(environment) {
      console.log(environment);
        let str = JSON.stringify(environment.ctx);
        return new Nunjucks__default['default'].runtime.SafeString(str);
    };
  }

  function register$y(env) {
    env.addExtension("inline_text", new handler$y(env));
  }
  function handler$y(env) {
    this.tags = ['inline_text'];

    this.parse = function (parser, nodes, lexer) {
        var tok = parser.nextToken();

        var args = parser.parseSignature(null, true);
        parser.advanceAfterBlockEnd(tok.value);
        //var body = parser.parseUntilBlocks('end_inline_text');
        let body = null;
        //parser.advanceAfterBlockEnd();
        return new nodes.CallExtension(this, 'run', args, [body]);

    };

    this.run = function(environment) {
      console.log(environment);
        let str = JSON.stringify(environment.ctx);
        return new Nunjucks__default['default'].runtime.SafeString(str);
    };
  }

  function register$z(env) {
    env.addExtension("language_switcher", new handler$z(env));
  }
  function handler$z(env) {
    this.tags = ['language_switcher'];

    this.parse = function (parser, nodes, lexer) {
        var tok = parser.nextToken();

        var args = parser.parseSignature(null, true);
        parser.advanceAfterBlockEnd(tok.value);
        //var body = parser.parseUntilBlocks('end_language_switcher');
        let body = null;
        //parser.advanceAfterBlockEnd();
        return new nodes.CallExtension(this, 'run', args, [body]);

    };

    this.run = function(environment) {
      console.log(environment);
        let str = JSON.stringify(environment.ctx);
        return new Nunjucks__default['default'].runtime.SafeString(str);
    };
  }

  function register$A(env) {
    env.addExtension("linked_image", new handler$A(env));
  }
  function handler$A(env) {
    this.tags = ['linked_image'];

    this.parse = function (parser, nodes, lexer) {
        var tok = parser.nextToken();

        var args = parser.parseSignature(null, true);
        parser.advanceAfterBlockEnd(tok.value);
        //var body = parser.parseUntilBlocks('end_linked_image');
        let body = null;
        //parser.advanceAfterBlockEnd();
        return new nodes.CallExtension(this, 'run', args, [body]);

    };

    this.run = function(environment) {
      console.log(environment);
        let str = JSON.stringify(environment.ctx);
        return new Nunjucks__default['default'].runtime.SafeString(str);
    };
  }

  function register$B(env) {
    env.addExtension("logo", new handler$B(env));
  }
  function handler$B(env) {
    this.tags = ['logo'];

    this.parse = function (parser, nodes, lexer) {
        var tok = parser.nextToken();

        var args = parser.parseSignature(null, true);
        parser.advanceAfterBlockEnd(tok.value);
        //var body = parser.parseUntilBlocks('end_logo');
        let body = null;
        //parser.advanceAfterBlockEnd();
        return new nodes.CallExtension(this, 'run', args, [body]);

    };

    this.run = function(environment) {
      console.log(environment);
        let str = JSON.stringify(environment.ctx);
        return new Nunjucks__default['default'].runtime.SafeString(str);
    };
  }

  function register$C(env) {
    env.addExtension("member_login", new handler$C(env));
  }
  function handler$C(env) {
    this.tags = ['member_login'];

    this.parse = function (parser, nodes, lexer) {
        var tok = parser.nextToken();

        var args = parser.parseSignature(null, true);
        parser.advanceAfterBlockEnd(tok.value);
        //var body = parser.parseUntilBlocks('end_member_login');
        let body = null;
        //parser.advanceAfterBlockEnd();
        return new nodes.CallExtension(this, 'run', args, [body]);

    };

    this.run = function(environment) {
      console.log(environment);
        let str = JSON.stringify(environment.ctx);
        return new Nunjucks__default['default'].runtime.SafeString(str);
    };
  }

  function register$D(env) {
    env.addExtension("member_register", new handler$D(env));
  }
  function handler$D(env) {
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
        return new Nunjucks__default['default'].runtime.SafeString(str);
    };
  }

  function register$E(env) {
    env.addExtension("menu", new handler$E(env));
  }
  function handler$E(env) {
    this.tags = ['menu'];

    this.parse = function (parser, nodes, lexer) {
        var tok = parser.nextToken();

        var args = parser.parseSignature(null, true);
        parser.advanceAfterBlockEnd(tok.value);
        //var body = parser.parseUntilBlocks('end_menu');
        let body = null;
        //parser.advanceAfterBlockEnd();
        return new nodes.CallExtension(this, 'run', args, [body]);

    };

    this.run = function(environment) {
      console.log(environment);
        let str = JSON.stringify(environment.ctx);
        return new Nunjucks__default['default'].runtime.SafeString(str);
    };
  }

  function register$F(env) {
    env.addExtension("module_attribute", new handler$F(env));
  }
  function handler$F(env) {
    this.tags = ['module_attribute'];

    this.parse = function (parser, nodes, lexer) {
        var tok = parser.nextToken();

        var args = parser.parseSignature(null, true);
        parser.advanceAfterBlockEnd(tok.value);
        //var body = parser.parseUntilBlocks('end_module_attribute');
        let body = null;
        //parser.advanceAfterBlockEnd();
        return new nodes.CallExtension(this, 'run', args, [body]);

    };

    this.run = function(environment) {
      console.log(environment);
        let str = JSON.stringify(environment.ctx);
        return new Nunjucks__default['default'].runtime.SafeString(str);
    };
  }

  function register$G(env) {
    env.addExtension("module", new handler$G(env));
  }
  function handler$G(env) {
    this.tags = ['module'];

    this.parse = function (parser, nodes, lexer) {
        var tok = parser.nextToken();

        var args = parser.parseSignature(null, true);
        parser.advanceAfterBlockEnd(tok.value);
        //var body = parser.parseUntilBlocks('end_module');
        let body = null;
        //parser.advanceAfterBlockEnd();
        return new nodes.CallExtension(this, 'run', args, [body]);

    };

    this.run = function(environment) {
      console.log(environment);
        let str = JSON.stringify(environment.ctx);
        return new Nunjucks__default['default'].runtime.SafeString(str);
    };
  }

  function register$H(env) {
    env.addExtension("page_footer", new handler$H(env));
  }
  function handler$H(env) {
    this.tags = ['page_footer'];

    this.parse = function (parser, nodes, lexer) {
        var tok = parser.nextToken();

        var args = parser.parseSignature(null, true);
        parser.advanceAfterBlockEnd(tok.value);
        //var body = parser.parseUntilBlocks('end_page_footer');
        let body = null;
        //parser.advanceAfterBlockEnd();
        return new nodes.CallExtension(this, 'run', args, [body]);

    };

    this.run = function(environment) {
      console.log(environment);
        let str = JSON.stringify(environment.ctx);
        return new Nunjucks__default['default'].runtime.SafeString(str);
    };
  }

  function register$I(env) {
    env.addExtension("password_prompt", new handler$I(env));
  }
  function handler$I(env) {
    this.tags = ['password_prompt'];

    this.parse = function (parser, nodes, lexer) {
        var tok = parser.nextToken();

        var args = parser.parseSignature(null, true);
        parser.advanceAfterBlockEnd(tok.value);
        //var body = parser.parseUntilBlocks('end_password_prompt');
        let body = null;
        //parser.advanceAfterBlockEnd();
        return new nodes.CallExtension(this, 'run', args, [body]);

    };

    this.run = function(environment) {
      console.log(environment);
        let str = JSON.stringify(environment.ctx);
        return new Nunjucks__default['default'].runtime.SafeString(str);
    };
  }

  function register$J(env) {
    env.addExtension("password_reset_request", new handler$J(env));
  }
  function handler$J(env) {
    this.tags = ['password_reset_request'];

    this.parse = function (parser, nodes, lexer) {
        var tok = parser.nextToken();

        var args = parser.parseSignature(null, true);
        parser.advanceAfterBlockEnd(tok.value);
        //var body = parser.parseUntilBlocks('end_password_reset_request');
        let body = null;
        //parser.advanceAfterBlockEnd();
        return new nodes.CallExtension(this, 'run', args, [body]);

    };

    this.run = function(environment) {
      console.log(environment);
        let str = JSON.stringify(environment.ctx);
        return new Nunjucks__default['default'].runtime.SafeString(str);
    };
  }

  function register$K(env) {
    env.addExtension("password_reset", new handler$K(env));
  }
  function handler$K(env) {
    this.tags = ['password_reset'];

    this.parse = function (parser, nodes, lexer) {
        var tok = parser.nextToken();

        var args = parser.parseSignature(null, true);
        parser.advanceAfterBlockEnd(tok.value);
        //var body = parser.parseUntilBlocks('end_password_reset');
        let body = null;
        //parser.advanceAfterBlockEnd();
        return new nodes.CallExtension(this, 'run', args, [body]);

    };

    this.run = function(environment) {
      console.log(environment);
        let str = JSON.stringify(environment.ctx);
        return new Nunjucks__default['default'].runtime.SafeString(str);
    };
  }

  function register$L(env) {
    env.addExtension("post_filter", new handler$L(env));
  }
  function handler$L(env) {
    this.tags = ['post_filter'];

    this.parse = function (parser, nodes, lexer) {
        var tok = parser.nextToken();

        var args = parser.parseSignature(null, true);
        parser.advanceAfterBlockEnd(tok.value);
        //var body = parser.parseUntilBlocks('end_post_filter');
        let body = null;
        //parser.advanceAfterBlockEnd();
        return new nodes.CallExtension(this, 'run', args, [body]);

    };

    this.run = function(environment) {
      console.log(environment);
        let str = JSON.stringify(environment.ctx);
        return new Nunjucks__default['default'].runtime.SafeString(str);
    };
  }

  function register$M(env) {
    env.addExtension("post_listing", new handler$M(env));
  }
  function handler$M(env) {
    this.tags = ['post_listing'];

    this.parse = function (parser, nodes, lexer) {
        var tok = parser.nextToken();

        var args = parser.parseSignature(null, true);
        parser.advanceAfterBlockEnd(tok.value);
        //var body = parser.parseUntilBlocks('end_post_listing');
        let body = null;
        //parser.advanceAfterBlockEnd();
        return new nodes.CallExtension(this, 'run', args, [body]);

    };

    this.run = function(environment) {
      console.log(environment);
        let str = JSON.stringify(environment.ctx);
        return new Nunjucks__default['default'].runtime.SafeString(str);
    };
  }

  function register$N(env) {
    env.addExtension("print", new handler$N(env));
  }
  function handler$N(env) {
    this.tags = ['print'];

    this.parse = function (parser, nodes, lexer) {
        var tok = parser.nextToken();

        var args = parser.parseSignature(null, true);
        parser.advanceAfterBlockEnd(tok.value);
        //var body = parser.parseUntilBlocks('end_print');
        let body = null;
        //parser.advanceAfterBlockEnd();
        return new nodes.CallExtension(this, 'run', args, [body]);

    };

    this.run = function(environment) {
      console.log(environment);
        let str = JSON.stringify(environment.ctx);
        return new Nunjucks__default['default'].runtime.SafeString(str);
    };
  }

  function register$O(env) {
    env.addExtension("raw_html", new handler$O(env));
  }
  function handler$O(env) {
    this.tags = ['raw_html'];

    this.parse = function (parser, nodes, lexer) {
        var tok = parser.nextToken();

        var args = parser.parseSignature(null, true);
        parser.advanceAfterBlockEnd(tok.value);
        //var body = parser.parseUntilBlocks('end_raw_html');
        let body = null;
        //parser.advanceAfterBlockEnd();
        return new nodes.CallExtension(this, 'run', args, [body]);

    };

    this.run = function(environment) {
      console.log(environment);
        let str = JSON.stringify(environment.ctx);
        return new Nunjucks__default['default'].runtime.SafeString(str);
    };
  }

  function register$P(env) {
    env.addExtension("related_blog_posts", new handler$P(env));
  }
  function handler$P(env) {
    this.tags = ['related_blog_posts'];

    this.parse = function (parser, nodes, lexer) {
        var tok = parser.nextToken();

        var args = parser.parseSignature(null, true);
        parser.advanceAfterBlockEnd(tok.value);
        //var body = parser.parseUntilBlocks('end_related_blog_posts');
        let body = null;
        //parser.advanceAfterBlockEnd();
        return new nodes.CallExtension(this, 'run', args, [body]);

    };

    this.run = function(environment) {
      console.log(environment);
        let str = JSON.stringify(environment.ctx);
        return new Nunjucks__default['default'].runtime.SafeString(str);
    };
  }

  function register$Q(env) {
    env.addExtension("require_css", new handler$Q(env));
  }
  function handler$Q(env) {
    this.tags = ['require_css'];

    this.parse = function (parser, nodes, lexer) {
        var tok = parser.nextToken();

        var args = parser.parseSignature(null, true);
        parser.advanceAfterBlockEnd(tok.value);
        //var body = parser.parseUntilBlocks('end_require_css');
        let body = null;
        //parser.advanceAfterBlockEnd();
        return new nodes.CallExtension(this, 'run', args, [body]);

    };

    this.run = function(environment) {
      console.log(environment);
        let str = JSON.stringify(environment.ctx);
        return new Nunjucks__default['default'].runtime.SafeString(str);
    };
  }

  function register$R(env) {
    env.addExtension("require_head", new handler$R(env));
  }
  function handler$R(env) {
    this.tags = ['require_head'];

    this.parse = function (parser, nodes, lexer) {
        var tok = parser.nextToken();

        var args = parser.parseSignature(null, true);
        parser.advanceAfterBlockEnd(tok.value);
        //var body = parser.parseUntilBlocks('end_require_head');
        let body = null;
        //parser.advanceAfterBlockEnd();
        return new nodes.CallExtension(this, 'run', args, [body]);

    };

    this.run = function(environment) {
      console.log(environment);
        let str = JSON.stringify(environment.ctx);
        return new Nunjucks__default['default'].runtime.SafeString(str);
    };
  }

  function register$S(env) {
    env.addExtension("require_js", new handler$S(env));
  }
  function handler$S(env) {
    this.tags = ['require_js'];

    this.parse = function (parser, nodes, lexer) {
        var tok = parser.nextToken();

        var args = parser.parseSignature(null, true);
        parser.advanceAfterBlockEnd(tok.value);
        //var body = parser.parseUntilBlocks('end_require_js');
        let body = null;
        //parser.advanceAfterBlockEnd();
        return new nodes.CallExtension(this, 'run', args, [body]);

    };

    this.run = function(environment) {
      console.log(environment);
        let str = JSON.stringify(environment.ctx);
        return new Nunjucks__default['default'].runtime.SafeString(str);
    };
  }

  function register$T(env) {
    env.addExtension("rich_text", new handler$T(env));
  }
  function handler$T(env) {
    this.tags = ['rich_text'];

    this.parse = function (parser, nodes, lexer) {
        var tok = parser.nextToken();

        var args = parser.parseSignature(null, true);
        parser.advanceAfterBlockEnd(tok.value);
        //var body = parser.parseUntilBlocks('end_rich_text');
        let body = null;
        //parser.advanceAfterBlockEnd();
        return new nodes.CallExtension(this, 'run', args, [body]);

    };

    this.run = function(environment) {
      console.log(environment);
        let str = JSON.stringify(environment.ctx);
        return new Nunjucks__default['default'].runtime.SafeString(str);
    };
  }

  function register$U(env) {
    env.addExtension("rss_listing", new handler$U(env));
  }
  function handler$U(env) {
    this.tags = ['rss_listing'];

    this.parse = function (parser, nodes, lexer) {
        var tok = parser.nextToken();

        var args = parser.parseSignature(null, true);
        parser.advanceAfterBlockEnd(tok.value);
        //var body = parser.parseUntilBlocks('end_rss_listing');
        let body = null;
        //parser.advanceAfterBlockEnd();
        return new nodes.CallExtension(this, 'run', args, [body]);

    };

    this.run = function(environment) {
      console.log(environment);
        let str = JSON.stringify(environment.ctx);
        return new Nunjucks__default['default'].runtime.SafeString(str);
    };
  }

  function register$V(env) {
    env.addExtension("section_header", new handler$V(env));
  }
  function handler$V(env) {
    this.tags = ['section_header'];

    this.parse = function (parser, nodes, lexer) {
        var tok = parser.nextToken();

        var args = parser.parseSignature(null, true);
        parser.advanceAfterBlockEnd(tok.value);
        //var body = parser.parseUntilBlocks('end_section_header');
        let body = null;
        //parser.advanceAfterBlockEnd();
        return new nodes.CallExtension(this, 'run', args, [body]);

    };

    this.run = function(environment) {
      console.log(environment);
        let str = JSON.stringify(environment.ctx);
        return new Nunjucks__default['default'].runtime.SafeString(str);
    };
  }

  function register$W(env) {
    env.addExtension("simple_menu", new handler$W(env));
  }
  function handler$W(env) {
    this.tags = ['simple_menu'];

    this.parse = function (parser, nodes, lexer) {
        var tok = parser.nextToken();

        var args = parser.parseSignature(null, true);
        parser.advanceAfterBlockEnd(tok.value);
        //var body = parser.parseUntilBlocks('end_simple_menu');
        let body = null;
        //parser.advanceAfterBlockEnd();
        return new nodes.CallExtension(this, 'run', args, [body]);

    };

    this.run = function(environment) {
      console.log(environment);
        let str = JSON.stringify(environment.ctx);
        return new Nunjucks__default['default'].runtime.SafeString(str);
    };
  }

  function register$X(env) {
    env.addExtension("social_sharing", new handler$X(env));
  }
  function handler$X(env) {
    this.tags = ['social_sharing'];

    this.parse = function (parser, nodes, lexer) {
        var tok = parser.nextToken();

        var args = parser.parseSignature(null, true);
        parser.advanceAfterBlockEnd(tok.value);
        //var body = parser.parseUntilBlocks('end_social_sharing');
        let body = null;
        //parser.advanceAfterBlockEnd();
        return new nodes.CallExtension(this, 'run', args, [body]);

    };

    this.run = function(environment) {
      console.log(environment);
        let str = JSON.stringify(environment.ctx);
        return new Nunjucks__default['default'].runtime.SafeString(str);
    };
  }

  function register$Y(env) {
    env.addExtension("space", new handler$Y(env));
  }
  function handler$Y(env) {
    this.tags = ['space'];

    this.parse = function (parser, nodes, lexer) {
        var tok = parser.nextToken();

        var args = parser.parseSignature(null, true);
        parser.advanceAfterBlockEnd(tok.value);
        //var body = parser.parseUntilBlocks('end_space');
        let body = null;
        //parser.advanceAfterBlockEnd();
        return new nodes.CallExtension(this, 'run', args, [body]);

    };

    this.run = function(environment) {
      console.log(environment);
        let str = JSON.stringify(environment.ctx);
        return new Nunjucks__default['default'].runtime.SafeString(str);
    };
  }

  function register$Z(env) {
    env.addExtension("style_settings", new handler$Z(env));
  }
  function handler$Z(env) {
    this.tags = ['style_settings'];

    this.parse = function (parser, nodes, lexer) {
        var tok = parser.nextToken();

        var args = parser.parseSignature(null, true);
        parser.advanceAfterBlockEnd(tok.value);
        //var body = parser.parseUntilBlocks('end_style_settings');
        let body = null;
        //parser.advanceAfterBlockEnd();
        return new nodes.CallExtension(this, 'run', args, [body]);

    };

    this.run = function(environment) {
      console.log(environment);
        let str = JSON.stringify(environment.ctx);
        return new Nunjucks__default['default'].runtime.SafeString(str);
    };
  }

  function register$_(env) {
    env.addExtension("targeted_module_attribute", new handler$_(env));
  }
  function handler$_(env) {
    this.tags = ['targeted_module_attribute'];

    this.parse = function (parser, nodes, lexer) {
        var tok = parser.nextToken();

        var args = parser.parseSignature(null, true);
        parser.advanceAfterBlockEnd(tok.value);
        //var body = parser.parseUntilBlocks('end_targeted_module_attribute');
        let body = null;
        //parser.advanceAfterBlockEnd();
        return new nodes.CallExtension(this, 'run', args, [body]);

    };

    this.run = function(environment) {
      console.log(environment);
        let str = JSON.stringify(environment.ctx);
        return new Nunjucks__default['default'].runtime.SafeString(str);
    };
  }

  function register$$(env) {
    env.addExtension("targeted_widget_attribute", new handler$$(env));
  }
  function handler$$(env) {
    this.tags = ['targeted_widget_attribute'];

    this.parse = function (parser, nodes, lexer) {
        var tok = parser.nextToken();

        var args = parser.parseSignature(null, true);
        parser.advanceAfterBlockEnd(tok.value);
        //var body = parser.parseUntilBlocks('end_targeted_widget_attribute');
        let body = null;
        //parser.advanceAfterBlockEnd();
        return new nodes.CallExtension(this, 'run', args, [body]);

    };

    this.run = function(environment) {
      console.log(environment);
        let str = JSON.stringify(environment.ctx);
        return new Nunjucks__default['default'].runtime.SafeString(str);
    };
  }

  function register$10(env) {
    env.addExtension("text", new handler$10(env));
  }
  function handler$10(env) {
    this.tags = ['text'];

    this.parse = function (parser, nodes, lexer) {
        var tok = parser.nextToken();

        var args = parser.parseSignature(null, true);
        parser.advanceAfterBlockEnd(tok.value);
        //var body = parser.parseUntilBlocks('end_text');
        let body = null;
        //parser.advanceAfterBlockEnd();
        return new nodes.CallExtension(this, 'run', args, [body]);

    };

    this.run = function(environment) {
      console.log(environment);
        let str = JSON.stringify(environment.ctx);
        return new Nunjucks__default['default'].runtime.SafeString(str);
    };
  }

  function register$11(env) {
    env.addExtension("textarea", new handler$11(env));
  }
  function handler$11(env) {
    this.tags = ['textarea'];

    this.parse = function (parser, nodes, lexer) {
        var tok = parser.nextToken();

        var args = parser.parseSignature(null, true);
        parser.advanceAfterBlockEnd(tok.value);
        //var body = parser.parseUntilBlocks('end_textarea');
        let body = null;
        //parser.advanceAfterBlockEnd();
        return new nodes.CallExtension(this, 'run', args, [body]);

    };

    this.run = function(environment) {
      console.log(environment);
        let str = JSON.stringify(environment.ctx);
        return new Nunjucks__default['default'].runtime.SafeString(str);
    };
  }

  function register$12(env) {
    env.addExtension("unless", new handler$12(env));
  }
  function handler$12(env) {
    this.tags = ['unless'];

    this.parse = function (parser, nodes, lexer) {
        var tok = parser.nextToken();

        var args = parser.parseSignature(null, true);
        parser.advanceAfterBlockEnd(tok.value);
        //var body = parser.parseUntilBlocks('end_unless');
        let body = null;
        //parser.advanceAfterBlockEnd();
        return new nodes.CallExtension(this, 'run', args, [body]);

    };

    this.run = function(environment) {
      console.log(environment);
        let str = JSON.stringify(environment.ctx);
        return new Nunjucks__default['default'].runtime.SafeString(str);
    };
  }

  function register$13(env) {
    env.addExtension("video_player", new handler$13(env));
  }
  function handler$13(env) {
    this.tags = ['video_player'];

    this.parse = function (parser, nodes, lexer) {
        var tok = parser.nextToken();

        var args = parser.parseSignature(null, true);
        parser.advanceAfterBlockEnd(tok.value);
        //var body = parser.parseUntilBlocks('end_video_player');
        let body = null;
        //parser.advanceAfterBlockEnd();
        return new nodes.CallExtension(this, 'run', args, [body]);

    };

    this.run = function(environment) {
      console.log(environment);
        let str = JSON.stringify(environment.ctx);
        return new Nunjucks__default['default'].runtime.SafeString(str);
    };
  }

  function register$14(env) {
    env.addExtension("widget_attribute", new handler$14(env));
  }
  function handler$14(env) {
    this.tags = ['widget_attribute'];

    this.parse = function (parser, nodes, lexer) {
        var tok = parser.nextToken();

        var args = parser.parseSignature(null, true);
        parser.advanceAfterBlockEnd(tok.value);
        //var body = parser.parseUntilBlocks('end_widget_attribute');
        let body = null;
        //parser.advanceAfterBlockEnd();
        return new nodes.CallExtension(this, 'run', args, [body]);

    };

    this.run = function(environment) {
      console.log(environment);
        let str = JSON.stringify(environment.ctx);
        return new Nunjucks__default['default'].runtime.SafeString(str);
    };
  }

  function register$15(env) {
    env.addExtension("widget_block", new handler$15(env));
  }
  function handler$15(env) {
    this.tags = ['widget_block'];

    this.parse = function (parser, nodes, lexer) {
        var tok = parser.nextToken();

        var args = parser.parseSignature(null, true);
        parser.advanceAfterBlockEnd(tok.value);
        //var body = parser.parseUntilBlocks('end_widget_block');
        let body = null;
        //parser.advanceAfterBlockEnd();
        return new nodes.CallExtension(this, 'run', args, [body]);

    };

    this.run = function(environment) {
      console.log(environment);
        let str = JSON.stringify(environment.ctx);
        return new Nunjucks__default['default'].runtime.SafeString(str);
    };
  }

  function register$16(env) {
    env.addExtension("widget_container", new handler$16(env));
  }
  function handler$16(env) {
    this.tags = ['widget_container'];

    this.parse = function (parser, nodes, lexer) {
        var tok = parser.nextToken();

        var args = parser.parseSignature(null, true);
        parser.advanceAfterBlockEnd(tok.value);
        //var body = parser.parseUntilBlocks('end_widget_container');
        let body = null;
        //parser.advanceAfterBlockEnd();
        return new nodes.CallExtension(this, 'run', args, [body]);

    };

    this.run = function(environment) {
      console.log(environment);
        let str = JSON.stringify(environment.ctx);
        return new Nunjucks__default['default'].runtime.SafeString(str);
    };
  }

  function register$17(env) {
    env.addExtension("widget_wrapper", new handler$17(env));
  }
  function handler$17(env) {
    this.tags = ['widget_wrapper'];

    this.parse = function (parser, nodes, lexer) {
        var tok = parser.nextToken();

        var args = parser.parseSignature(null, true);
        parser.advanceAfterBlockEnd(tok.value);
        //var body = parser.parseUntilBlocks('end_widget_wrapper');
        let body = null;
        //parser.advanceAfterBlockEnd();
        return new nodes.CallExtension(this, 'run', args, [body]);

    };

    this.run = function(environment) {
      console.log(environment);
        let str = JSON.stringify(environment.ctx);
        return new Nunjucks__default['default'].runtime.SafeString(str);
    };
  }

  function configure(env, config) {
    
    register(env);
    register$1(env);
    register$2(env);
    register$3(env);
    register$4(env);
    register$5(env);
    register$6(env);
    register$7(env);
    register$8(env);
    register$9(env);
    register$a(env);
    register$b(env);
    register$c(env);
    register$d(env);
    register$e(env);
    register$f(env);
    register$g(env);
    register$h(env);
    register$i(env);
    register$j(env);
    register$k(env);
    register$l(env);
    register$m(env);
    register$n(env);
    register$o(env);
    register$p(env);
    register$q(env);
    register$r(env);
    register$s(env);
    register$t(env);
    register$u(env);
    register$v(env);
    register$w(env);
    register$x(env);
    register$y(env);
    register$z(env);
    register$A(env);
    register$B(env);
    register$C(env);
    register$D(env);
    register$E(env);
    register$F(env);
    register$G(env);
    register$H(env);
    register$I(env);
    register$J(env);
    register$K(env);
    register$L(env);
    register$M(env);
    register$N(env);
    register$O(env);
    register$P(env);
    register$Q(env);
    register$R(env);
    register$S(env);
    register$T(env);
    register$U(env);
    register$V(env);
    register$W(env);
    register$X(env);
    register$Y(env);
    register$Z(env);
    register$_(env);
    register$$(env);
    register$10(env);
    register$11(env);
    register$12(env);
    register$13(env);
    register$14(env);
    register$15(env);
    register$16(env);
    register$17(env);
  }

  function register$18(env) {
    env.addGlobal("blog_all_posts_url", handler$18);
  }
      
  function handler$18(selected_blog) {


  }

  function register$19(env) {
    env.addGlobal("blog_author_url", handler$19);
  }
      
  function handler$19(selected_blog, author_slug) {


  }

  function register$1a(env) {
    env.addGlobal("blog_authors", handler$1a);
  }
      
  function handler$1a(selected_blog, limit) {


  }

  function register$1b(env) {
    env.addGlobal("blog_by_id", handler$1b);
  }
      
  function handler$1b(id) {


  }

  function register$1c(env) {
    env.addGlobal("blog_page_link", handler$1c);
  }
      
  function handler$1c(page) {


  }

  function register$1d(env) {
    env.addGlobal("blog_popular_posts", handler$1d);
  }
      
  function handler$1d(selected_blog, limit, tag_slug, time_frame) {


  }

  function register$1e(env) {
    env.addGlobal("blog_post_archive_url", handler$1e);
  }
      
  function handler$1e(selected_blog, year, month, day) {


  }

  function register$1f(env) {
    env.addGlobal("blog_post_by_id", handler$1f);
  }
      
  function handler$1f(blog_post_id) {


  }

  function register$1g(env) {
    env.addGlobal("blog_recent_author_posts", handler$1g);
  }
      
  function handler$1g(selected_blog, author_slug, limit) {


  }

  function register$1h(env) {
    env.addGlobal("blog_recent_posts", handler$1h);
  }
      
  function handler$1h(selected_blog, limit) {


  }

  function register$1i(env) {
    env.addGlobal("blog_recent_tag_posts", handler$1i);
  }
      
  function handler$1i(selected_blog, tag_slug, limit) {


  }

  function register$1j(env) {
    env.addGlobal("blog_recent_topic_posts", handler$1j);
  }
      
  function handler$1j(selected_blog, topic_slug, limit) {


  }

  function register$1k(env) {
    env.addGlobal("blog_tag_url", handler$1k);
  }
      
  function handler$1k(selected_blog, tag_slug) {


  }

  function register$1l(env) {
    env.addGlobal("blog_tags", handler$1l);
  }
      
  function handler$1l(selected_blog, limit) {


  }

  function register$1m(env) {
    env.addGlobal("blog_topics", handler$1m);
  }
      
  function handler$1m(selected_blog, limit) {


  }

  function register$1n(env) {
    env.addGlobal("blog_total_post_count", handler$1n);
  }
      
  function handler$1n(selected_blog) {


  }

  function register$1o(env) {
    env.addGlobal("color_variant", handler$1o);
  }
      
  function handler$1o(base_color, brightness_offset) {


  }

  function register$1p(env) {
    env.addGlobal("content_by_id", handler$1p);
  }
      
  function handler$1p(id) {


  }

  function register$1q(env) {
    env.addGlobal("content_by_ids", handler$1q);
  }
      
  function handler$1q(ids) {


  }

  function register$1r(env) {
    env.addGlobal("crm_associations", handler$1r);
  }
      
  function handler$1r(id, association_category, association_definition_id, query, properties, formatting) {


  }

  function register$1s(env) {
    env.addGlobal("crm_object", handler$1s);
  }
      
  function handler$1s(object_type, query_or_object_instance_id, properties, formatting) {


  }

  function register$1t(env) {
    env.addGlobal("crm_objects", handler$1t);
  }
      
  function handler$1t(object_type, query_or_list_of_object_ids, properties, formatting) {


  }

  function register$1u(env) {
    env.addGlobal("crm_property_definition", handler$1u);
  }
      
  function handler$1u(object_type, property_name) {


  }

  function register$1v(env) {
    env.addGlobal("crm_property_definitions", handler$1v);
  }
      
  function handler$1v(object_type, property_name) {


  }

  function register$1w(env) {
    env.addGlobal("cta", handler$1w);
  }
      
  function handler$1w(guid, align_opt) {

    Math.random()
        .toString(36)
        .substr(0, 9);

    return `<a id="cta_button_${id}" class="cta_button button" href="#" style="" cta_dest_link="#" title="">CTA example</a>`;

  }

  function register$1x(env) {
    env.addGlobal("datetimeformat", handler$1x);
  }
      
  function handler$1x(var_attr, format, timezone) {


  }

  function register$1y(env) {
    env.addGlobal("facebook_messenger_link", handler$1y);
  }
      
  function handler$1y() {


  }

  function register$1z(env) {
    env.addGlobal("file_by_id", handler$1z);
  }
      
  function handler$1z(file_id) {


  }

  function register$1A(env) {
    env.addGlobal("follow_me_links", handler$1A);
  }
      
  function handler$1A() {


  }

  function register$1B(env) {
    env.addGlobal("footer_js", handler$1B);
  }
      
  function handler$1B() {


  }

  function register$1C(env) {
    env.addGlobal("geo_distance", handler$1C);
  }
      
  function handler$1C(point1, point2_lat, point2_long, units) {


  }

  function register$1D(env) {
    env.addGlobal("get_asset_url", handler$1D);
  }
      
  function handler$1D(path) {
    return path;
  }

  function register$1E(env) {
    env.addGlobal("get_public_template_url_by_id", handler$1E);
  }
      
  function handler$1E(template_id) {


  }

  function register$1F(env) {
    env.addGlobal("get_public_template_url", handler$1F);
  }
      
  function handler$1F() {


  }

  function register$1G(env) {
    env.addGlobal("head_css", handler$1G);
  }
      
  function handler$1G() {


  }

  function register$1H(env) {
    env.addGlobal("head_elements", handler$1H);
  }
      
  function handler$1H() {


  }

  function register$1I(env) {
    env.addGlobal("head_js", handler$1I);
  }
      
  function handler$1I() {


  }

  function register$1J(env) {
    env.addGlobal("hubdb_table_column", handler$1J);
  }
      
  function handler$1J(table_id, column) {


  }

  function register$1K(env) {
    env.addGlobal("hubdb_table_row", handler$1K);
  }
      
  function handler$1K(table_id, row_id) {


  }

  function register$1L(env) {
    env.addGlobal("hubdb_table_rows", handler$1L);
  }
      
  function handler$1L(table_id, query) {


  }

  function register$1M(env) {
    env.addGlobal("hubdb_table", handler$1M);
  }
      
  function handler$1M(table_id) {


  }

  function register$1N(env) {
    env.addGlobal("i18n_getlanguage", handler$1N);
  }
      
  function handler$1N() {


  }

  function register$1O(env) {
    env.addGlobal("i18n_getmessage", handler$1O);
  }
      
  function handler$1O(message_name, substitutions) {


  }

  function register$1P(env) {
    env.addGlobal("include_css", handler$1P);
  }
      
  function handler$1P(path) {


  }

  function register$1Q(env) {
    env.addGlobal("include_javascript", handler$1Q);
  }
      
  function handler$1Q(path) {


  }

  function register$1R(env) {
    env.addGlobal("locale_name", handler$1R);
  }
      
  function handler$1R(language_code, target_language_code) {
    return 'English';
  }

  function register$1S(env) {
    env.addGlobal("menu", handler$1S);
  }
      
  function handler$1S(menu_id_or_menu_name, root_type, root_key) {

    return {
      children: [
        {label: 'Menu item 1', url: '/', pageId: 1, contentGroupId: 1, children: [], level: 0 }
      ]
    }

  }

  function register$1T(env) {
    env.addGlobal("module_asset_url", handler$1T);
  }
      
  function handler$1T(name) {
    return `https://cdn2.hubspot.net/hubfs/6178146/${ name }`;
  }

  function register$1U(env) {
    env.addGlobal("oembed", handler$1U);
  }

  // only works in emails.
  function handler$1U(request) {

    return {
      type: 'video',
      version: '1.0',
      html: '<iframe width="480" height="270" src="https://www.youtube.com/embed/KqpFNtbEOh8?feature=oembed" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      iframe: ''
    }

  }

  function register$1V(env) {
    env.addGlobal("page_by_id", handler$1V);
  }
      
  function handler$1V(page_id) {


  }

  function register$1W(env) {
    env.addGlobal("personalization_token", handler$1W);
  }
      
  function handler$1W(expression, default_attr) {
    return default_attr;
  }

  function register$1X(env) {
    env.addGlobal("postal_location", handler$1X);
  }
      
  function handler$1X(postal_code, country_code) {
    return {
      latitude: 42.3647,
      longitude: -71.1042
    }
  }

  function register$1Y(env) {
    env.addGlobal("range", handler$1Y);
  }
      
  function handler$1Y(start, end, step) {


  }

  function register$1Z(env) {
    env.addGlobal("require_css", handler$1Z);
  }
      
  function handler$1Z(url, render_options) {


  }

  function register$1_(env) {
    env.addGlobal("require_js", (url, render_options) => handler$1_(env, url));
  }


  function handler$1_(env, url, render_options) {
    const existing = env.getGlobal("standard_footer_includes");
    env.addGlobal(
      "standard_footer_includes", 
      new Nunjucks__default['default'].runtime.SafeString(existing + `\n<script src="${ url }"></script>`)
    );

  }

  function register$1$(env) {
    env.addGlobal("resize_image_url", handler$1$);
  }
      
  function handler$1$(url, width, height, length, upscale, upsize) {
    return `${ url }?length=${ length }&name=img.jpg`;
  }

  function register$20(env) {
    env.addGlobal("script_embed", handler$20);
  }
      
  function handler$20(type, src, title, options, description) {


  }

  function register$21(env) {
    env.addGlobal("set_response_code", handler$21);
  }
      
  function handler$21(code) {

    // Doesn't need to do anything.

  }

  function register$22(env) {
    env.addGlobal("strtotime", handler$22);
  }
      
  function handler$22(param1, param2 ) {


  }

  function register$23(env) {
    env.addGlobal("super", handler$23);
  }
      
  function handler$23() {


  }

  function register$24(env) {
    env.addGlobal("to_local_time", handler$24);
  }
      
  function handler$24(date) {


  }

  function register$25(env) {
    env.addGlobal("today", handler$25);
  }
      
  function handler$25(timezone) {


  }

  function register$26(env) {
    env.addGlobal("topic_cluster_by_content_id", handler$26);
  }
      
  function handler$26(content_id) {


  }

  function register$27(env) {
    env.addGlobal("truncate", handler$27);
  }
      
  function handler$27(s, length, killwords, end = '...') {

    if (s.length <= length) {
      return s;
    }

    if (killwords) {
      return s.substr(0, length) + end;
    }

    return s.substr(0, s.lastIndexOf(' ', length)) + end;
  }

  function register$28(env) {
    env.addGlobal("type", handler$28);
  }
      
  function handler$28(input) {

    let types = {
      'string' : 'str',
      'boolean': 'bool',
      'array': 'array',
      'number': 'int',
    };
    return types[typeof input];
  }

  function register$29(env) {
    env.addGlobal("unixtimestamp", handler$29);
  }
      
  function handler$29(var_attr) {
    return new Date().getTime() / 1000;
  }

  function register$2a(env) {
    env.addGlobal("video_metadata_by_player_id", handler$2a);
  }
      
  function handler$2a(request) {


  }

  function register$2b(env) {
    env.addGlobal("video_thumbnail", handler$2b);
  }
      
  function handler$2b(request) {


  }

  function configure$1(env, config) {
    
    register$18(env);
    register$19(env);
    register$1a(env);
    register$1b(env);
    register$1c(env);
    register$1d(env);
    register$1e(env);
    register$1f(env);
    register$1g(env);
    register$1h(env);
    register$1i(env);
    register$1j(env);
    register$1k(env);
    register$1l(env);
    register$1m(env);
    register$1n(env);
    register$1o(env);
    register$1p(env);
    register$1q(env);
    register$1r(env);
    register$1s(env);
    register$1t(env);
    register$1u(env);
    register$1v(env);
    register$1w(env);
    register$1x(env);
    register$1y(env);
    register$1z(env);
    register$1A(env);
    register$1B(env);
    register$1C(env);
    register$1D(env);
    register$1E(env);
    register$1F(env);
    register$1G(env);
    register$1H(env);
    register$1I(env);
    register$1J(env);
    register$1K(env);
    register$1L(env);
    register$1M(env);
    register$1N(env);
    register$1O(env);
    register$1P(env);
    register$1Q(env);
    register$1R(env);
    register$1S(env);
    register$1T(env);
    register$1U(env);
    register$1V(env);
    register$1W(env);
    register$1X(env);
    register$1Y(env);
    register$1Z(env);
    register$1_(env);
    register$1$(env);
    register$20(env);
    register$21(env);
    register$22(env);
    register$23(env);
    register$24(env);
    register$25(env);
    register$26(env);
    register$27(env);
    register$28(env);
    register$29(env);
    register$2a(env);
    register$2b(env);
  }

  function register$2c(env) {
    env.addFilter("add", handler$2c);
  }

  function handler$2c(input, addend) {
    return input + addend;
  }

  function register$2d(env) {
    env.addFilter("attr", handler$2d);
  }

  function handler$2d(input, name) {
    return input[name];
  }

  function register$2e(env) {
    env.addFilter("between_times", handler$2e);
  }

  function handler$2e(input, end, unit) {


  }

  function register$2f(env) {
    env.addFilter("bool", handler$2f);
  }

  function handler$2f(input) {
    return input.toLowerCase() == 'true' ? true : false;
  }

  function register$2g(env) {
    env.addFilter("convert_rgb", handler$2g);
  }

  function handler$2g(input) {


  }

  function register$2h(env) {
    env.addFilter("count", handler$2h);
  }

  function handler$2h(input) {
    return input.length;
  }

  function register$2i(env) {
    env.addFilter("cut", handler$2i);
  }

  function handler$2i(input, to_remove) {
    return input.replace(to_remove);
  }

  function register$2j(env) {
    env.addFilter("d", handler$2j);
  }

  function handler$2j(input) {


  }

  function register$2k(env) {
    env.addFilter("date", handler$2k);
  }

  function handler$2k(input) {


  }

  function register$2l(env) {
    env.addFilter("datetimeformat", handler$2l);
  }

  function handler$2l(input, format, timezone, locale) {


  }

  function register$2m(env) {
    env.addFilter("default", handler$2m);
  }

  /**
   * Not exactly correct.
   * @param {*} input 
   * @param {*} default_value 
   * @param {*} truthy 
   */
  function handler$2m(input, default_value, truthy) {

    return typeof input !== 'undefined' ? (truthy && !input ? default_value : input) : default_value;
    
  }

  function register$2n(env) {
    env.addFilter("difference", handler$2n);
  }

  function handler$2n(input, list) {

  }

  function register$2o(env) {
    env.addFilter("divide", handler$2o);
  }

  function handler$2o(input, divisor) {
    return parseFloat(input / divisor);
  }

  function register$2p(env) {
    env.addFilter("divisible", handler$2p);
  }

  function handler$2p(input, divisor) {


  }

  function register$2q(env) {
    env.addFilter("e", handler$2q);
  }

  function handler$2q(input) {


  }

  function register$2r(env) {
    env.addFilter("escape_jinjava", handler$2r);
  }

  function handler$2r(input) {


  }

  function register$2s(env) {
    env.addFilter("escapejs", handler$2s);
  }

  function handler$2s(input) {

  }

  function register$2t(env) {
    env.addFilter("escapejson", handler$2t);
  }

  function handler$2t(input) {
    return JSON.parse(input);
  }

  function register$2u(env) {
    env.addFilter("filesizeformat", handler$2u);
  }

  function handler$2u(input, binary) {


  }

  function register$2v(env) {
    env.addFilter("format_currency", handler$2v);
  }

  function handler$2v(input, locale, currency_code, use_default_decimal_digits) {


  }

  function register$2w(env) {
    env.addFilter("format", handler$2w);
  }

  function handler$2w(input, args) {


  }

  function register$2x(env) {
    env.addFilter("fromjson", handler$2x);
  }

  function handler$2x(input) {


  }

  function register$2y(env) {
    env.addFilter("fromyaml", handler$2y);
  }

  function handler$2y(input) {


  }

  function register$2z(env) {
    env.addFilter("geo_distance", handler$2z);
  }

  function handler$2z(input, point1, point2_lat, point2_long, units) {


  }

  function register$2A(env) {
    env.addFilter("int", handler$2A);
  }

  function handler$2A(input, default_attr) {
    return parseInt(input) || default_attr;
  }

  function register$2B(env) {
    env.addFilter("intersect", handler$2B);
  }

  function handler$2B(input, list) {


  }

  function register$2C(env) {
    env.addFilter("ipaddr", handler$2C);
  }

  function handler$2C(input, function_attr) {


  }

  function register$2D(env) {
    env.addFilter("ipv4", handler$2D);
  }

  function handler$2D(input, function_attr) {


  }

  function register$2E(env) {
    env.addFilter("ipv6", handler$2E);
  }

  function handler$2E(input, function_attr) {


  }

  function register$2F(env) {
    env.addFilter("length", handler$2F);
  }

  function handler$2F(input) {


  }

  function register$2G(env) {
    env.addFilter("log", handler$2G);
  }

  function handler$2G(input, base) {


  }

  function register$2H(env) {
    env.addFilter("map", (input, attribute, add) => handler$2H(input, attribute, add, env));
  }

  function handler$2H(input, attribute, add, env) {
    const fn = env.getFilter(attribute);
    return input.map(fn);
  }

  function register$2I(env) {
    env.addFilter("md5", handler$2I);
  }

  function handler$2I(input) {


  }

  function register$2J(env) {
    env.addFilter("minus_time", handler$2J);
  }

  function handler$2J(input, diff, unit) {


  }

  function register$2K(env) {
    env.addFilter("multiply", handler$2K);
  }

  function handler$2K(input, multiplier) {
    return input * multiplier;
  }

  function register$2L(env) {
    env.addFilter("plus_time", handler$2L);
  }

  function handler$2L(input, diff, unit) {


  }

  function register$2M(env) {
    env.addFilter("pprint", handler$2M);
  }

  function handler$2M(input) {
    return JSON.stringify(input);
  }

  function register$2N(env) {
    env.addFilter("regex_replace", handler$2N);
  }

  function handler$2N(input, regex, new_attr) {


  }

  function register$2O(env) {
    env.addFilter("reject", handler$2O);
  }

  function handler$2O(input, exp_test) {


  }

  function register$2P(env) {
    env.addFilter("render", handler$2P);
  }

  function handler$2P(input) {


  }

  function register$2Q(env) {
    env.addFilter("root", handler$2Q);
  }

  function handler$2Q(input, root) {


  }

  function register$2R(env) {
    env.addFilter("select", handler$2R);
  }

  function handler$2R(input, exp_test) {


  }

  function register$2S(env) {
    env.addFilter("shuffle", handler$2S);
  }

  function handler$2S(input) {


  }

  function register$2T(env) {
    env.addFilter("sort", handler$2T);
  }

  function handler$2T(input, reverse, case_sensitive, attribute) {


  }

  function register$2U(env) {
    env.addFilter("split", handler$2U);
  }

  function handler$2U(input, separator, limit) {
    return input.split(input, separator);
  }

  function register$2V(env) {
    env.addFilter("strtotime", handler$2V);
  }

  function handler$2V(input, datetimeFormat) {


  }

  function register$2W(env) {
    env.addFilter("symmetric_difference", handler$2W);
  }

  function handler$2W(input, list) {


  }

  function register$2X(env) {
    env.addFilter("tojson", handler$2X);
  }

  function handler$2X(input) {
    return JSON.parse(input);
  }

  function register$2Y(env) {
    env.addFilter("toyaml", handler$2Y);
  }

  function handler$2Y(input) {


  }

  function register$2Z(env) {
    env.addFilter("truncatehtml", handler$2Z);
  }

  function handler$2Z(input, length, end, breakword) {
    
  }

  function register$2_(env) {
    env.addFilter("union", handler$2_);
  }

  function handler$2_(input, list) {


  }

  function register$2$(env) {
    env.addFilter("unique", handler$2$);
  }

  function handler$2$(input, attr) {


  }

  function register$30(env) {
    env.addFilter("unixtimestamp", handler$30);
  }

  function handler$30(input) {


  }

  function register$31(env) {
    env.addFilter("wordwrap", handler$31);
  }

  function handler$31(input, width, break_long_words) {


  }

  function register$32(env) {
    env.addFilter("xmlattr", handler$32);
  }

  function handler$32(input, autospace) {


  }

  function configure$2(env, config) {
    
    register$2c(env);
    register$2d(env);
    register$2e(env);
    register$2f(env);
    register$2g(env);
    register$2h(env);
    register$2i(env);
    register$2j(env);
    register$2k(env);
    register$2l(env);
    register$2m(env);
    register$2n(env);
    register$2o(env);
    register$2p(env);
    register$2q(env);
    register$2r(env);
    register$2s(env);
    register$2t(env);
    register$2u(env);
    register$2v(env);
    register$2w(env);
    register$2x(env);
    register$2y(env);
    register$2z(env);
    register$2A(env);
    register$2B(env);
    register$2C(env);
    register$2D(env);
    register$2E(env);
    register$2F(env);
    register$2G(env);
    register$2H(env);
    register$2I(env);
    register$2J(env);
    register$2K(env);
    register$2L(env);
    register$2M(env);
    register$2N(env);
    register$2O(env);
    register$2P(env);
    register$2Q(env);
    register$2R(env);
    register$2S(env);
    register$2T(env);
    register$2U(env);
    register$2V(env);
    register$2W(env);
    register$2X(env);
    register$2Y(env);
    register$2Z(env);
    register$2_(env);
    register$2$(env);
    register$30(env);
    register$31(env);
    register$32(env);
  }

  function getPageDefaults() {
    return {
        account: {},
        company_domain: '',
        contact: {},
        content: {
          absolute_url: '',
          archived: false,
          author_email: '',
          author_name: '',
          author_username: '',

          campaign: '',
          campaign_name: '',
          created: '',
          meta_description: '', 
          name: '',
          publish_date: '',
          publish_date_localized: '',
          template_path: '',
          updated: '',
        },
        content_id: 1,
        favicon_link:1,
        hub_id: 1,
    }
  }

  /**
   * Setup page context.
   * @param {*} env 
   */
  function renderPage(env, content, page = {}) {
    const pageDefaults = getPageDefaults();
    page = { ...pageDefaults, globals: { ...pageDefaults.globals, ...page.globals }};

    env.addGlobal("standard_footer_includes", '');
    env.addGlobal("styleheets", []);

    return env.renderString(content, page);
  }


  function index(env, config) {


    configure(env);
    configure$1(env);
    configure$2(env);
    return env;
  }

  exports.default = index;
  exports.renderPage = renderPage;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

}({}, Nunjucks));

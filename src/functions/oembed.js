function register(env) {
  env.addGlobal("oembed", handler);
}

// only works in emails.
function handler(request) {

  return {
    type: 'video',
    version: '1.0',
    html: '<iframe width="480" height="270" src="https://www.youtube.com/embed/KqpFNtbEOh8?feature=oembed" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    iframe: ''
  }

}
  
    
export {
  handler,
  register as default
};
  
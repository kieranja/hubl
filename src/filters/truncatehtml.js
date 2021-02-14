import Nunjucks from 'nunjucks';
import clip from "text-clipper";

function register(env) {
  env.addFilter("truncatehtml", handler);
}

function handler(input, length, end = "...", breakword = false) {
  return new Nunjucks.runtime.SafeString(clip(input, length, { html: true, breakWords: breakword, indicator: end }));
}

/**
 * Found on StackOverflow... where else? (https://stackoverflow.com/questions/49304123/truncate-string-containing-html-tags-in-javascript)
 * @param {*} str 
 * @param {*} n 
 */
function trunc(str, n, end, breakword) {
  var openTags = [];
  var inTag = false;
  var openTagsSafe = [];
  var tagName = "";
  var tagNameComplete = false;
  var tagClosing = false;
  var lastSpace = 0;
  for (let p = 0; p < str.length && p < n; p++) {
    let c = str.charAt(p);
    switch (c) {
      case "<":
        lastSpace = ((!inTag && p + 3 < n) ? p : lastSpace);
        inTag = true;
        tagName = "";
        tagNameComplete = false;
        break;
      case ">":
        if (inTag && !tagNameComplete) {
          openTags.push({
            tag: tagName,
            p: p
          });
          tagNameComplete = true;
        }
        inTag = false;
        if (tagClosing) openTags.pop();
        tagClosing = false;
        tagName = ""; //may be redundant
        break;
      case "/":
        tagClosing = inTag;
        break;
      case " ":
        lastSpace = ((!inTag && p + 3 < n) ? p : lastSpace);
        if (inTag && !tagNameComplete) {
          openTags.push({
            tag: tagName,
            p: p
          });
          tagNameComplete = true;
        }
        break;
    }
    if (!tagNameComplete && c !== "<" && c !== ">") tagName += c;
  }

  var small = str.substring(0, lastSpace) + end;
  if (breakword) {
    small = str.substr(0, n) + end;
  }

  for (var i = openTags.length - 1; i >= 0; i--)
    if (openTags[i].p <= lastSpace) small += "</" + openTags[i].tag + ">";

  return small;
}


export {
  handler,
  register as default
};

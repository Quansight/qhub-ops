# markdown-it-div

[![Build Status](https://img.shields.io/travis/kickscondor/markdown-it-div/master.svg?style=flat)](https://travis-ci.org/kickscondor/markdown-it-div)
[![NPM version](https://img.shields.io/npm/v/markdown-it-div.svg?style=flat)](https://www.npmjs.org/package/markdown-it-div)
[![Coverage Status](https://img.shields.io/coveralls/kickscondor/markdown-it-div/master.svg?style=flat)](https://coveralls.io/r/kickscondor/markdown-it-div?branch=master)

> Plugin for adding block-level divs to [markdown-it](https://github.com/kickscondor/markdown-it) markdown parser.

__Requires `markdown-it` v5.+.__

With this plugin you can create block divs like:

```
::: #warning
*here be dragons*
:::
```

This block will be translated to HTML as:

```html
<div id="warning">
<em>here be dragons</em>
</div>
```

So, the triple-colon is used to start the div. This may be followed by an ID,
any number of class names and any number of other attributes.

The ID is prefixed with an octothorpe:

```
::: #my-id
```

Classes need not be prefixed (you can use a dot if like):

```
::: post .blog-post
```

Other attributes are of the format `attr=value`. So an ID and class could be
set with:

```
::: id=my-id class=blog-post
```

You can nest divs within each other as well:

```
::: #main

::: header
::: menu
*menu here*
:::
:::

::: body
::: post
*POST ONE*
:::
::: post
*POST TWO*
:::
:::

::: footer
Copyright 2018
:::

:::
```

## Installation

node.js, browser:

```bash
$ npm install markdown-it-div --save
$ bower install markdown-it-div --save
```


## API

```js
var md = require('markdown-it')()
            .use(require('markdown-it-div')[, options]);
```

Params:

- __options:__
   - __validate__ - optional, function to validate tail after opening marker, should
     return `true` on success.
   - __render__ - optional, renderer function for opening/closing tokens.
   - __marker__ - optional (`:`), character to use in delimiter.


## Example

Generally, you're just going to use this to add divs around your markdown text.

```markdown
These are my instructions for hooking the device to the mains.

::: note
Please do NOT do this if you have never handled the mains before!

These are not instructions: [link](https://example.org).
:::

Okay, moving along...
```

The `validate` method allows you to use this class like you would with `markdown-it-container`.
So, to add a custom `spoiler` tag in your javascript code:

```js
var md = require('markdown-it')();

md.use(require('markdown-it-div'), {

  validate: function(params) {
    return params.trim().match(/^spoiler\s+(.*)$/);
  },

  render: function (tokens, idx) {
    var m = tokens[idx].info.trim().match(/^spoiler\s+(.*)$/);

    if (tokens[idx].nesting === 1) {
      // opening tag
      return '<details><summary>' + md.utils.escapeHtml(m[1]) + '</summary>\n';

    } else {
      // closing tag
      return '</details>\n';
    }
  }
});

console.log(md.render('::: spoiler click me\n*content*\n:::\n'));

// Output:
//
// <details><summary>click me</summary>
// <p><em>content</em></p>
// </details>
```

## License

[MIT](https://github.com/kickscondor/markdown-it-div/blob/master/LICENSE)

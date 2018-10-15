# Togglr
## The super lightweight zero dependencies useful utility.

Togglr is a small (<1KB) utility specialized in one of the most common web tasks: adding or removing a class from one or more DOM nodes.
It works on any modern browser (IE10+) and has no dependency from any other libraries.

It works with (configurable) attributes on the trigger nodes. The following explanation assumes the default namespace `data-togglr-` is used.

`data-togglr-target=“SELECTOR”` required, identify with a css3 SELECTOR which nodes shall be targeted by the change

`data-togglr-toggle=“CLASS”` toggles CLASS on selected nodes

`data-togglr-add=“CLASS”` adds CLASS on selected nodes

`data-togglr-remove=“CLASS”` removes CLASS on selected nodes

`data-togglr-exclusive=“CLASS”` toggles CLASS on selected nodes and removes it from their siblings

`data-togglr-exclusiveAdd=“CLASS”` adds CLASS on selected nodes and removes it from their siblings

If no other option than `data-togglr-target` is provided, the behavior defaults to `data-togglr-toggle=“isActive”` (`isActive` is the default class and can be configured otherwise).

Togglr works on dynamic added nodes out of the box.

When togglr initialize successfully, it adds a `togglr` class to the html node. This feature can be used to implement no-js fallbacks via css.

Here are some examples: https://stefano.io/togglr/examples/ (no fancy stuff, just some demo of what you can do with togglr)

To build a minified version inside the dist folder you can use:
```
npm install && npm run build
```

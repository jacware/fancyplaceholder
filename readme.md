# fancyplaceholder: a jQuery plugin

fancyplaceholder allows text box placeholders to be retained after there is text in the field. This is done by dropping the placeholder into a label below the field.

See a demo here: <a href='demo.html'>demo</a>.

## Usage

Apply fancyplaceholder to the fields that you want it active on.

This will apply it to all the fields on a page that have a placeholder:

<pre>
  $(':input[placeholder]').fancyplaceholder();
</pre>

If you want to retain the labels even after the field loses focus call it like this:

<pre>
  $(':input[placeholder]').fancyplaceholder({keepLabels:true});
</pre>

You can also customize the built in CSS to change the look of the placeholder label.

## Browser support
Natively placeholders are only supported in Firefox 4+, Chrome 2+, Safari 3+, and IE 10+. To use placeholders in older browsers you must use a plugin to enable the legacy support.

There are many of these, we recommend: https://github.com/mathiasbynens/jquery-placeholder

You can chain the two plugins together to use both:
<pre>
$(':input[placeholder]').placeholder().fancyplaceholder();
</pre>

## Licensing

Licensed under the MIT license:
http://www.opensource.org/licenses/mit-license.php

Copyright (c) 2013 Aaron Cosentino
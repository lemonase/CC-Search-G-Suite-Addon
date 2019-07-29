# CC-Search addon for G Docs and Slides

## This is an addon in development for Google Slides and Google Docs

The idea of this addon is that a user should be able to search for CC licensed images
and easily insert them into the current slide/doc along with proper attribution with only one click.
Compare this to copy/pasting all the relevant information manually, this is much easier and faster.

Built using [Catalog API](https://github.com/creativecommons/cccatalog-api)
and [Google Apps Script](https://developers.google.com/apps-script/)
to integrate into Google Apps.

Creative Commons [CC Search](https://ccsearch.creativecommons.org/) is the
official website for searching CC licensed works.

One thing to note is the JavaScript and CSS portions of this project are wrapped in **.html**
files. This a limitation of Apps Script, which does not allow plain old **.js** or **.css** files.
They instead get inlined in index.html as a [Template](https://developers.google.com/apps-script/guides/html/best-practices).

Inspiration for this project originally came from [GSoC 2019](https://summerofcode.withgoogle.com/)
and the lack of decent image searching add-ons in the store.


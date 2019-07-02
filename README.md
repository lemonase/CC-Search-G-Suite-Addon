# CC-Search addon for GSuite

## This is an addon in development for Google Slides and Google Docs
The idea is that the user should be able to search for images licensed by CC and easily insert
them into the current slide/doc along with proper attribution.

Built using [Catalog API](https://github.com/creativecommons/cccatalog-api)
and leveraging [Google Apps Script](https://developers.google.com/apps-script/)
to integrate into Google Apps.

Creative Commons [CC Search](https://ccsearch.creativecommons.org/) is the
official website to search for CC content.

One thing to note is the JavaScript and CSS portions of this project are wrapped in *.html*
files. This a limitation of Apps Script, which does not allow plain old *.js* or *.css* files.
They instead get included by being inlined in index.html.

Inspiration for this project originally came from [GSoC 2019](https://summerofcode.withgoogle.com/)
and the lack of decent image searching add-ons in the store.

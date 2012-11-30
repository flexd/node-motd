I was linked http://maxogden.com/scraping-with-node.html the other day and it looked nice, I wanted to play with it.

This is basically the tutorial put together in a module, I plan on expanding it a bit to do the following things:

* Fetch a list of URLs to crawl from a main server.
* Cache images it fetches locally and display a random image from those instead of going online every time
* Possibly scale down the bigger images so you just get something fun in the terminal.
* Perhaps add an option to not always display an image.

How to use
==========

Run ```random-image``` and you will see a random 256-color image in your terminal.

Example
=======

![How to use](http://cognitive.io/uploaded/images/node-motd.jpg "Example")
Requirements
============
* cheerio
* request
* picture-tube

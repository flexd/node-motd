/*
 * The following code is taken from http://maxogden.com/scraping-with-node.html initially and will most likely be
 * built upon further.
 *
 * Plans are to create some kind of image crawling thing to add to cron on setup, fetch URLs to crawl from somewhere and * store pictures locally so you do not have to do hit the web each time you open a terminal.
 * 
 *
 *
*/
var $ = require('cheerio')
var request = require('request')

var imageURLs = []

function gotHTML(err, resp, html) {
  if (err) return console.error(err)
  var parsedHTML = $.load(html)
  // get all img tags and loop over them
  parsedHTML('a').map(function(i, link) {
    var href = $(link).attr('href')
    if (!href.match('.png')) return
    imageURLs.push(domain + href)
  })
  setTimeout(function(){
  
  var pictureTube = require('picture-tube')

  var randomIndex = Math.floor(Math.random() * imageURLs.length)
  var randomImage = imageURLs[randomIndex]
  request(randomImage).pipe(pictureTube()).pipe(process.stdout)
  }, 0);
}

var domain = 'http://substack.net/images/'
request(domain, gotHTML)




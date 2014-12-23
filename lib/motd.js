/*
 * The following code is taken from http://maxogden.com/scraping-with-node.html initially and will most likely be
 * built upon further.
 *
 * Plans are to create some kind of image crawling thing to add to cron on setup, fetch URLs to crawl from somewhere and * store pictures locally so you do not have to do hit the web each time you open a terminal.
 *
 *
 *
*/
var $ = require('cheerio');
var request = require('request');
var EventEmitter = require('events').EventEmitter;
var util = require('util');


var domain = 'http://substack.net'
var path = '/images/'

function Motd(callback) {
  var me = this;
  function gotHTML(err, resp, html) {
    if (err) return console.error(err)
    var imageURLs = []
    var parsedHTML = $.load(html)
    // get all img tags and loop over them
    parsedHTML('a').map(function(i, link) {
      var href = $(link).attr('href')
      if (!href.match('.png')) return
      imageURLs.push(domain + href)
      me.emit('url', domain + href);
    })
    callback(imageURLs);
  }
  request(domain + path, gotHTML)
}

util.inherits(Motd, EventEmitter);
exports.fetchUrls = function (callback) {
    return new Motd(callback);
}


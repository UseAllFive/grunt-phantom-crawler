/*
 * grunt-phantom-crawler
 *
 *
 *
 */

'use strict';

var phantom = require('node-phantom');
var _ = require('underscore');
var page;
var document;
var paths = [];
var options;
var done;
var crawl;

module.exports = function(grunt) {
    grunt.registerMultiTask('phantom-crawler', 'crawl a webpage and return urls', function(){

        options = this.options({
            baseUrl: 'http://localhost',
            filePath: 'config/paths.js',
            startingPath: '/',
            depth: 5,
        });

        done = this.async();

        crawl = function (path, depth) {
            var url;

            if (0 === depth || -1 !== paths.indexOf(path)) {
                done(grunt.file.write(options.filePath, JSON.stringify(_.uniq(paths))));
            }


            page = phantom.create(function(err, ph){
                ph.createPage(function(err, page) {
                    url = options.baseUrl + path;
                    return page.open(url, function (err, status) {
                        setTimeout(function(){
                            return page.evaluate(function() {
                                return [].map.call(document.querySelectorAll('a'), function(link) {
                                    return link.getAttribute('href');
                                });
                            }, function(err,result) {
                                result.forEach(function(href) {
                                    crawl(href, depth-1);
                                });
                                ph.exit();
                            });
                        }, 1000);
                    });
                });
            });
            paths.push(path);
        };
        setTimeout(function() {
            crawl(options.startingPath, options.depth);
        }, 1000);
    });
};

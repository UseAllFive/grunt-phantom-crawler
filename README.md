# grunt-phantom-crawler

> Crawl a site and generate a list of urls with phantomjs

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-phantom-crawler --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-phantom-crawler');
```

## The "phantom-crawler" task

### Overview
In your project's Gruntfile, add a section named `phantom-crawler` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  'phantom-crawler': {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.baseUrl
Type: `String`
Default value: `'http://localhost'`

The base url of the site you want to crawl.

#### options.startingPath
Type: `String`
Default value: `'/'`

The path in the site from which crawling will commence.

#### options.filePath
Type: `String`
Default value: `'config/paths.js'`

The filesystem path to which the urls will be output.

#### options.depth
Type: `String`
Default value: `'5'`

How many levels deep the crawler will travel

### Usage Examples

```js
grunt.initConfig({
  'phantom-crawler': {
    options: {
      'baseUrl': 'http://localhost:8080',
      'depth': 2
    }
  },
});
```

## Release History
_(Nothing yet)_

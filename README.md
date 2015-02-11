

Angular, Gulp, Webpack Starter
=============================
This starter kit configures [webpack](webpack.github.io) and [gulp](gulpjs.com) with an Angular single page app. For the three part blog post that accompanies this, head over to [Part III](http://luwen-huang.net/2015/01/25/Angular-webpack-and-gulp-for-SPAs-Part-III.html). 

I've updated the code from the blog to correct for some typos, so you should go with the code here, instead of from the posts.

This starter kit is barebones, rather ugly, and meant to be only an example for a few things:
- How to run webpack on gulp (because gulp is simple and awesome to use)
- How to require in html and scss, especially with Angular templates
- How to structure your Angular app in a modular way to be require'd
- How to set up ui-router with webpack lazy-loading

Note that the custom lodash build in `bower_components` was generated from the lodash-cli. If you want to use other builds, make sure to change the lodash path referenced in the webpack config.

Install
------
	git clone https://github.com/starterkits/frontend-starterkit-minimal.git
	cd angular-gulp-webpack-starter
	npm install

Development
-----------
	gulp watch


Production
-----------
For simplicity, I've decided not to include a production gulp task, but I've included a line in the webpack config that shows how you can do things like uglify. If there are requests, I can write out a production task.


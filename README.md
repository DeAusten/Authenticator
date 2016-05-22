# **Angular2Starter [ ![Codeship Status for DeAusten/Angular2Starter](https://codeship.com/projects/b379f120-0051-0134-9eed-1e95689fe79f/status?branch=master)](https://codeship.com/projects/153159)**
Angular 2.0 boilerplate application for new development. The focus here was to create an efficient workflow for developing angular 2.0 applications. Follow these installation notes to get your development enviornment setup correctly.


## Sass
**This project uses Sass 'Sassy CSS' for the construction its Css files.** 
[ [Get Sass](http://sass-lang.com/install "Sass") ]

To get Sass up and running on your development machine, follow these steps:

1. Install Ruby http://rubyinstaller.org/
2. Ruby -v to ensure the install was successful
3. Install Sass: run `sudo gem install sass` from a command prompt window. 
4. Run `sass -v` to ensure that installation was successful.


## **Gulp** 
This project uses Gulp as a taskrunner to accomplish basic development tasks such as concatentation, minification, and compression of files.
[ [Getting Started with Gulp](https://markgoodyear.com/2014/01/getting-started-with-gulp/ "Getting started with Gulp") ]

**Basic Setup**

**1.** 
Make sure you have node.js installed. [ [Get Node.js](https://nodejs.org/en/ "Node JS") ]

**2.** 
Open a Command Prompt(on windows, terminal for mac), and run `npm install gulp -g`. This will install gulp on your machine, the -g stands for globally.

**3.** 
Cd into the root directory of the project (This is where the gulpfile.js and package.json files live.)

- 	In command prompt run the command
	`npm install` (this will look at the packages.json file in the root directory that we just cd'd into and install the listed packages.
	
-	Then run the command `npm run clean & npm run build` (this will look at the gulpfile.js in the root directory of the web app and run the default task which is made up on multiple tasks: 'compile',  'styles', 'scripts', 'images' etc) This will build the scss files from the src/content/scss directory and copy the css files from, src/content/css into valid minified css and place them into the 	build/content/css directory.

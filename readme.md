# d3.js boilerplate - basic template

This is a basic template for using d3.js. See
[the master branch of this repository](https://github.com/zmaril/d3.js-boilerplate#how-it-works)
for more information for the template system and philosophy behind
this project.

## Types and purpose of files included 

### HTML

* index.html - This is what your webpage will be serving. 

### Coffeescript/Javascript

* js/index.coffee - The javascript file that tells d3.js what to do
* js/vendor/d3.v2.min.js - Minimized d3.js file. 
* js/vendor/jquery.min.js - Everybody needs a little jQuery
* js/vendor/underscore.min.js - Underscore is small and useful. 

### less/CSS

* css/index.less - TODO: make this file

## Quick start

### Get the right template
* Clone - `git clone git@github.com:zmaril/d3.js-boilerplate.git`
* Rename - `mv d3.js-boilerplate my-ballin-document`
* Checkout - 'git checkout basic'

### Develop locally
* Move `cd my-ballin-document`
* Host `python -m SimpleHTTPServer`
* Navigate to localhost:8000

### Deploy Globally 
* Host - `heroku create my-ballin-document --stack cedar`
* Commit - `git commit -am "Totes my goats"`
* Push - `git push heroku master`

### Current TODOS
* Make better examples. The current ones suck. See next idea. 

## License

### Major components:

* jQuery/jQuery-ui: MIT/GPL license
* d3.js: [License](https://github.com/mbostock/d3/blob/master/LICENSE)
* underscore: [License](https://github.com/documentcloud/underscore/blob/master/LICENSE)

### Everything else:

Public domain. 

### Parting thoughts

If you [sent me](https://twitter.com/#!/ZackMaril) a
tweet when you cloned this, I would be all warm and fuzzy for a few
minutes. If you needed some d3.js work done yesterday, I know [a guy](https://www.odesk.com/users/~~80bea7ba2750c34b). 

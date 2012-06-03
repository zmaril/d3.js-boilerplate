# d3.js boilerplate

d3.js boilerplate is a template system designed to help you build a
sophisticated data driven document as fast as possible. By providing a
full featured template and encouraging the use of coffeescript and
other time saving libraries, this project aims to help developers cut
down on development time.

# Under active development.

The framework for the branching system is still being
implemented. Large changes to infrastructure will be happening for a
while. So, uh, like, hold onto your horses. 

## How it works

d3.js boilerplate is a system that changes as your data
visualization needs do. The whole idea is to checkout the git branch
that best matches your needs.

Examples:

If you just need a page with d3.js loaded in, you just checkout the
"basic" branch.

If you need one with rickshaw installed, you checkout the "rickshaw"
branch.

## General usage

Unless otherwise specified, each branch has the following files:

### HTML

* index.html

### Coffeescript/Javascript

* js/index.coffee
* js/d3.v2.min.js
* js/jquery.min.js

### less/CSS

* css/index.less

N.B. [Coffescript](http://coffeescript.org/),
[{less}](http://lesscss.org/), and [Heroku](http://www.heroku.com/)
use are encouraged to speed up development and deployment. Learning
how to use these technologies within this context will save you a ton
of time. 

## Branches

Checkout each branch on github to see how to develop and deploy each
specific branch.

* basic - only has d3.js installed.
* brush
* geo-fisheye
* globe-mouse
* hex-heatmap
* jquery-ui - A simple example of how to use jquery-ui to interact
  with d3.js.
* rickshaw - 
* cubism -
* MathJax - Interactive graphics with Latex annotations.
* crossfilter - How to throw around millions of data points. 
* backbone - Simple example showing how to integrate d3 and backbone
  to create linkable graphics.
* graphene - Customizing graphene. 
* dashboard - Single page website layout with bootstrap. 
* investigator - A bootstrap backed website that builds on rickshaw,
  jquery-ui, underscore, and backbone to provide a jumping off point
  for designing your own data investigator.

## Quick start

### Get the right template
* Clone - `git clone git@github.com:zmaril/d3.js-boilerplate.git`
* Rename - `mv d3.js-boilerplate my-ballin-document`
* Checkout - 'git checkout []'

### Develop locally
* Move `cd my-ballin-document`
* Host `python -m SimpleHTTPServer`
* Navigate to localhost:8000

### Deploy Globally 
* Host - `heroku create my-ballin-document --stack cedar`
* Commit - `git commit -am "Totes my goats"`
* Push - `git push heroku master`

## Contributing

Tralfamadore needs more pull requests! 

### Current TODOS
* Find more useful datasets to include. Zip codes?
* Try to scale MathJax down some. It's huge. Only the SVG components are used, so
  everything else can fall away. 
* Make better examples. The current ones suck. See next idea. 
* Create templates. Ideas: Basic.html, only includes d3. X.html only
  includes d3 and X. Maximum.html includes everything. 

## License

### Major components:

* jQuery/jQuery-ui: MIT/GPL license
* Modernizr: MIT/BSD license
* Normalize.css: Public Domain
* d3.js: [License](https://github.com/mbostock/d3/blob/master/LICENSE)
* underscore: [License](https://github.com/documentcloud/underscore/blob/master/LICENSE)
* cubism: [License](https://github.com/square/cubism/blob/master/LICENSE)
* crossfilter: [License](https://github.com/square/crossfilter/blob/master/LICENSE)
* rickshaw: [License](https://github.com/shutterstock/rickshaw#license)
* MathJax: Apache 2.0 License

### Everything else:

Public domain. 

If you [sent me](https://twitter.com/#!/ZackMaril) a
tweet when you cloned this, I would be all warm and fuzzy for a few
minutes. If you needed some d3.js work done yesterday, I know [a guy](https://www.odesk.com/users/~~80bea7ba2750c34b). 

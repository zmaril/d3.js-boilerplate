# d3.js boilerplate

d3.js boilerplate is an opinionated template system designed to help
you build a sophisticated data driven document as fast as possible. By
providing a full featured template and encouraging the use of useful
tools, this project aims to help developers passively and actively cut
down on development time.

# Under active development.

The framework for the branching system is still being
implemented. Large changes to infrastructure will be happening for a
while. So, hold onto your horses. 

## How it works

d3.js boilerplate is a system that changes as your data
visualization needs do. The idea is to checkout the git branch
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
* js/underscore.min.js

### less/CSS

* css/index.less

[Coffescript](http://coffeescript.org/),
[{less}](http://lesscss.org/), and [Heroku](http://www.heroku.com/)
use are encouraged to speed up development and deployment. Learning
how to use these technologies within this context will save you a ton
of time.

## Branches

Checkout each branch on github to see how to develop and deploy each
specific branch.

* [basic](https://github.com/zmaril/d3.js-boilerplate/tree/basic) - only has d3.js installed.
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

## Contributing

Tralfamadore needs more pull requests! 

### Current Major TODOS
* Try to scale MathJax down some. It's huge. Only the SVG components
  are used, so everything else can fall away. _This will be moved to
  the MathJax branch once it gets made. But the files do slow down
  cloning, and thus the point of the project, pretty hard most of the
  time._
* Add in more branches
* Get a website set up to view all this all pretty like. Use [sandcastle](https://github.com/Khan/sandcastle).

Check each branch for more specific items. 

## License

See each branch for licenses. Unless otherwise licensed, this code is
released into the public domain as is, no warranty attached. 

## Parting Thoughts

[Zack Maril](https://twitter.com/#!/ZackMaril)- Need d3.js work done?
Contact me at zack@zacharymaril.com or on [oDesk](https://www.odesk.com/users/~~80bea7ba2750c34b). 

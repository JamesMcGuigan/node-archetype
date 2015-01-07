Installation
============
<pre><code># packagemanager install node GraphicsMagick
git clone git@github.com:JamesMcGuigan/infographic-generator.git
cd infographic-generator
npm install  # will also download bower dependencies and compile the client side browserify.js file
npm start    # runs nodemon and compass for development

# For production deployment
npm run production  # compiles minified js/css into ./production/
node InfographicGenerator.js NODE_ENV=production PORT_HTTP=4000 PORT_HTTPS=4001
</code></pre>

Then open up the following localhost url
http://localhost:4000/

See [package.json](https://github.com/JamesMcGuigan/infographic-generator/blob/master/package.json) for a list of other project npm scripts


Puppet configuration
====================

Demo server deployment is managed via puppet using the following project:
https://github.com/JamesMcGuigan/puppet-config


Project Layout
==============

- [/data/](https://github.com/JamesMcGuigan/infographic-generator/tree/master/data) - Example configuration files
- [/data/sources/](https://github.com/JamesMcGuigan/infographic-generator/tree/master/data/sources/) - Example data sources
- [/app/config/config.js](https://github.com/JamesMcGuigan/infographic-generator/tree/master/app/config/config.js) - Node configuration file
- [/app/controllers/](https://github.com/JamesMcGuigan/infographic-generator/tree/master/app/controllers/) - Node API logic
- [/app/routes/](https://github.com/JamesMcGuigan/infographic-generator/tree/master/app/routes/) - Node URL routing
- [/app/views/](https://github.com/JamesMcGuigan/infographic-generator/tree/master/app/views/) - Mustache templates for generating initial HTML page
- [/app/public/scss-src/](https://github.com/JamesMcGuigan/infographic-generator/tree/master/app/public/scss-src/) - SASS source files
- [/app/public/scss/](https://github.com/JamesMcGuigan/infographic-generator/tree/master/app/public/scss/) - Compiled SASS -> CSS
- [/app/public/html/](https://github.com/JamesMcGuigan/infographic-generator/tree/master/app/public/html/) - Angualar HTML Snippits
- [/app/public/angular/](https://github.com/JamesMcGuigan/infographic-generator/tree/master/app/public/angular/) - Angualar.js Application
- [/app/public/angular/directive/directive.infographic.js](https://github.com/JamesMcGuigan/infographic-generator/tree/master/app/public/angular/directive/directive.infographic.js) - The main logic for the SVG generator

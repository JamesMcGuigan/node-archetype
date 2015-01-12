Installation
============
<pre><code># packagemanager install node
git clone git@github.com:JamesMcGuigan/node-archetype.git
cd node-archetype
npm install  # will also download bower dependencies and compile the client side browserify.js file
npm start    # runs nodemon and compass for development

# For production deployment
npm run production  # compiles minified js/css into ./production/
node Server.js NODE_ENV=production PORT_HTTP=4000 PORT_HTTPS=4001
</code></pre>

Then open up the following localhost url
http://localhost:4000/

See [package.json](https://github.com/JamesMcGuigan/node-archetype/blob/master/package.json) for a list of other project npm scripts


Puppet configuration
====================

Demo server deployment is managed via puppet using the following project:
https://github.com/JamesMcGuigan/puppet-config


Project Layout
==============

- [/app/server/config/config.js](https://github.com/JamesMcGuigan/node-archetype/tree/master/app/server/config/config.js) - Node configuration file
- [/app/server/controllers/](https://github.com/JamesMcGuigan/node-archetype/tree/master/app/server/controllers/) - Node API logic
- [/app/server/routes/](https://github.com/JamesMcGuigan/node-archetype/tree/master/app/server/routes/) - Node URL routing
- [/app/server/views/](https://github.com/JamesMcGuigan/node-archetype/tree/master/app/server/views/) - Mustache templates for generating initial HTML page
- [/app/public/scss-src/](https://github.com/JamesMcGuigan/node-archetype/tree/master/app/public/scss-src/) - SASS source files
- [/app/public/scss/](https://github.com/JamesMcGuigan/node-archetype/tree/master/app/public/scss/) - Compiled SASS -> CSS
- [/app/public/html/](https://github.com/JamesMcGuigan/node-archetype/tree/master/app/public/html/) - Angualar HTML Snippits
- [/app/public/angular/](https://github.com/JamesMcGuigan/node-archetype/tree/master/app/public/angular/) - Angualar.js Application


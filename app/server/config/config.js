var fs     = require('fs');
var path   = require('path');
var extend = require("node.extend");

var config = {
    name: 'Node Archetype',
    access_log: '/var/log/node/node-archetype-access.log',
    error_log:  '/var/log/node/node-archetype-error.log',
    debug_log:  '/var/log/node/node-archetype-debug.log',

    db:      'mongodb://localhost/node-archetype',

    crudPermissions: {
        edit: ["node-archetype"],
        view: ["node-archetype"]
    },

    web: {
        host: "https://localhost:4000",
        port: {
            http:  4000,
            https: 4001
        }
    },

    sslcert: {
        key:  fs.readFileSync(path.join(__dirname, '../../../sslcert/san/node-archetype.san.key'), 'utf8'),
        cert: fs.readFileSync(path.join(__dirname, '../../../sslcert/san/node-archetype.san.crt'), 'utf8')
    },
    basicAuth: {
        realm: "Node Archetype",
        user:  "Liat",
        pass:  "password"
    },
    cookieSecret:  "Sometimes me think what is love, and then me think love is what last cookie is for. Me give up the last cookie for you!",
    sessionSecret: "Don't try to write too much in a single session. One thousand words a day is quite enough. Stop after about four or five hours?",

    facebook: {
        clientID:       '',
        clientSecret:   '',
        callbackURL:    '/auth/facebook/callback',
        apiURL:         '',
        apiCacheSeconds: 600
    },
    google: {
        clientID:       '',
        clientSecret:   '',
        callbackURL:    '/auth/google/callback',
        apiURL:         '',
        apiCacheSeconds: 600
    },
    twitter: {
        clientID:        '',
        clientSecret:    '',
        callbackURL:     '/auth/twitter/callback',
        apiURL:          '',
        apiCacheSeconds: 600
    }
};

module.exports = {
    test: extend(true, {}, config, {
        db: 'mongodb://localhost/node-archetype-test',
        web: {
            host: "http://localhost:4400",
            port: {
                http:  4400,
                https: 4401
            }
        }
    }),
    development: extend(true, {}, config, {
        web: {
            host: "http://localhost:4000",
            port: {
                http:  4000,
                https: 4001
            }
        }
    }),
    staging: extend(true, {}, config, {
        db: 'mongodb://staging.node-archetype.jamesmcguigan.com/node-archetype',
        web: {
            host: "http://staging.node-archetype.jamesmcguigan.com",
            port: {
                http:  4000,
                https: 4001
            }
        }
    }),
    production:  extend(true, {}, config, {
        db: 'mongodb://node-archetype/node-archetype',
        web: {
            host: "http://node-archetype.jamesmcguigan.com",
            port: {
                http:  4000,
                https: 4001
            }
        }
    })
};

// Allow Port configuration from the command line
if( process.env.PORT_HTTP || process.env.PORT_HTTPS ) {
    for( var key in module.exports ) {
        if( process.env.PORT_HTTP ) {
            module.exports[key].web.host = module.exports[key].web.host.replace(':'+module.exports[key].web.port.http, ':'+process.env.PORT_HTTP);
            module.exports[key].web.port.http = process.env.PORT_HTTP;
        }
        if( process.env.PORT_HTTPS ) {
            module.exports[key].web.host = module.exports[key].web.host.replace(':'+module.exports[key].web.port.https, ':'+process.env.PORT_HTTPS);
            module.exports[key].web.port.https = process.env.PORT_HTTPS;
        }
    }
}
'use strict';

// Declare app level module which depends on filters, and services
angular.module('infographicApp', [
    'infographicApp.config',
    'infographicApp.controllers',
    'infographicApp.directives',
    'infographicApp.filters',
    'infographicApp.routes',
    'infographicApp.services'
]);

// Declare app level module which depends on filters, and services
angular.module('infographicApp.config', [])
    .constant('version', "0.1")
    .constant('keyCodes', {
        enter:    13,
        up:       38,
        down:     40,
        left:     37,
        right:    39,
        escape:   27,
        space:    32
    });

angular.module('infographicApp.controllers', ['ngStorage']);
angular.module('infographicApp.directives', []);
angular.module('infographicApp.services', []);
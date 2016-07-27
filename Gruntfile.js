module.exports = function (grunt) {
    'use strict';

    // load grunt plugins
    require('jit-grunt')(grunt, {
        configureProxies: 'grunt-connect-proxy'
    });

    // create config
    grunt.initConfig({

        settings: {
            connect: {
                host: 'localhost',
                port: '9555'
            },
            proxy: {
                host: 'myhost',
                port: 'myport'
            }
        },

        connect: {
            options: {
                hostname: '<%= settings.connect.host %>',
                port: '<%= settings.connect.port %>',
                livereload: 35729,
                middleware: function (connect, options, defaultMiddleware) {
                    var aMiddlewares = [];
                    aMiddlewares.push(require('grunt-connect-proxy/lib/utils').proxyRequest);
                    aMiddlewares.push(defaultMiddleware);
                    return aMiddlewares;
                }
            },
            connectWebapp: {
                options: {
                    base: ['webapp'],
                    open: true
                }
            },
            proxies: [
                {
                    context: '/resources',
                    host: '<%= settings.proxy.host %>',
                    port: '<%= settings.proxy.port %>',
                    https: false,
                    rewrite: {
                        '/resources': '/sap/public/bc/ui5_ui5/resources'
                    }
                }, {
                    context: '/sap/opu/odata',
                    host: '<%= settings.proxy.host %>',
                    port: '<%= settings.proxy.port %>',
                    https: false
                }
            ]
        },

        watch: {
            options: {
                livereload: true
            },
            watchWebapp: {
                files: ['webapp/**/*']
            }
        }
    });

    // register serve task
    grunt.registerTask('serve', ['configureProxies:server', 'connect:connectWebapp', 'watch:watchWebapp']);

    // register default task
    grunt.registerTask('default', ['serve']);
}
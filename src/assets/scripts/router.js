var routeHash = require('./routes/**/*.js', {mode: 'hash'});

module.exports = Vue.component('ix-router', {

    props: ['lostPath'],

    data: function () {
        return {
            routeHash: routeHash,
            currentPath: window.location.pathname
        };
    },

    computed: {

        ViewComponent: function () {
            var template = this.computeTemplate(this.currentPath);
            return {
                template: template
            };
        }

    },

    mounted: function () {
        window.onpopstate = event => {
            this.currentPath = window.location.pathname;
        };
    },

    render: function (h) {
        return h(this.ViewComponent);
    },

    methods: {

        computeTemplate: function (urlPath) {
            var template;
            var component = this.computeComponent(urlPath) || this.computeComponent(this.lostPath || '/404');
            if (component) {
                try {
                    // TODO pass data parsed from query
                    // TODO validate component.options.name
                    template = `<${component.options.name}/>`;
                }
                catch (e) {
                    template = `<div>Internal Error</div>`;
                }
            }
            else {
                template = `<div>Page Not Found</div>`;
            }
            return template;
        },

        computeComponent: function(urlPath) {
            var componentPath = this.computeComponentPath(urlPath);
            var component = this.routeHash[componentPath];
            return component;
        },

        computeComponentPath: function (urlPath) {
            return String(urlPath).split('/').filter(part => Boolean(part)).join('/') || 'index';
        },

        matches: function (path, currentPath) {
            if (typeof path === 'function') {
                return path(currentPath);
            }
            else {
                return path === currentPath;
            }
        }
    }

});

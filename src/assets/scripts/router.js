module.exports = Vue.component('ix-router', {

    props: ['routes'],

    data: function () {
        return {
            currentPath: window.location.pathname
        };
    },

    computed: {

        ViewComponent: function () {
            var route = this.routes.find(route => {
                return this.matches(route.path, this.currentPath);
            });
            var template = route ? route.template : '<div>Error: undefined route</div>';
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

module.exports = Vue.component('ix-routed-page', {

    props: ['routes'],

    data: function () {
        return {
            currentRoute: window.location.pathname
        };
    },

    computed: {

        ViewComponent: function () {
            var template = '';
            var comp = this.routes[this.currentRoute];
            if (comp) {
                try {
                    template = ['<', comp.options.name, '/>'].join('');
                }
                catch (e) {
                    template = '<div>Error: invalid route component</div>';
                    console.error('invalid route component', e);
                }
            }
            else {
                template = '<div>Error: undefined route</div>';
            }
            return {
                template: template
            };
        }

    },

    mounted: function(){
        window.onpopstate = event => {
            this.currentRoute = window.location.pathname;
        };
    },

    render: function (h) {
        return h(this.ViewComponent);
    },

});

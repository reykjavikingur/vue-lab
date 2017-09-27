require('./router');

require('./components/*.js', {mode: 'expand'});

var routes = [
    {
        path: '/',
        template: '<ix-home/>'
    },
    {
        path: '/about',
        template: '<ix-about/>'
    },
    {
        path: () => true,
        template: '<ix-lost/>'
    },
];

module.exports = new Vue({

    el: 'ix-site-design',

    template: '<ix-router :routes="routes"/>',

    data: {
        routes: routes
    }

});

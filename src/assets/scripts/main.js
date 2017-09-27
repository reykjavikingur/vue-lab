require('./routed-page');

var Home = require('./components/home');
var About = require('./components/about');

var routes = {
    '/': Home,
    '/about': About,
};

module.exports = new Vue({

    el: 'ix-site-design',

    template: '<ix-routed-page :routes="routes"/>',

    data: {
        routes: routes
    }

});

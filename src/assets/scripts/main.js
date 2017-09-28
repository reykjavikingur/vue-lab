require('./router');
require('./components/**/*.js', {mode: 'expand'});

module.exports = new Vue({

    el: 'ix-site-design',

    template: '<ix-router lost-route="lost"/>',

    data: {}

});

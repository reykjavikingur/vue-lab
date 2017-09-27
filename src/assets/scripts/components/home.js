require('./page-layout');

var template = `
<ix-page-layout>
    <h2 slot="title">Welcome</h2>
    <div slot="main">
        What do you think of this internal home template? Awesome, right?
    </div>
</ix-page-layout>
`;

module.exports = Vue.component('ix-home', {
    template: template
});

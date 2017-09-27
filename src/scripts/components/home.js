require('./menu');

var template = `
<div>
<ix-menu/>
What do you think of this internal home template? Awesome, right?
</div>
`;

module.exports = Vue.component('ix-home', {
    template: template
});

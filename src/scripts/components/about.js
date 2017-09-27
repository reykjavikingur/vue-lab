require('./menu');

var template = `
<div>
<ix-menu/>
This is a site all about site-designer.
</div>
`;

module.exports = Vue.component('ix-about', {
    template: template
});

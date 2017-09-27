require('./page-layout');

var template = `
<ix-page-layout>
    <h2 slot="title">About this site</h2>
    <div slot="main">
        This is a site all about site-designer.
    </div>
</ix-page-layout>
`;

module.exports = Vue.component('ix-about', {
    template: template
});

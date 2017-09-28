var template = `
<ix-layout>
    <h2 slot="title">404 Not Found</h2>
    <div slot="main">
        We are unable to find the page you requested.
    </div>
</ix-layout>
`;

module.exports = Vue.component('ix-lost', {
    template: template
});

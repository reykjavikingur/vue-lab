var template = `
<ix-layout>
    <h2>404 Not Found</h2>
    <main>
        We are unable to find the page you requested.
    </main>
</ix-layout>
`;

module.exports = Vue.component('ix-lost', {
    template: template
});

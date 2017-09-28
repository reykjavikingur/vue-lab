var template = `
<ix-layout>
    <h2>Product</h2>
    <main>
        <div>path = {{path}}</div>
        <div>query = {{query}}</div>
    </main>
</ix-layout>
`;

module.exports = Vue.component('ix-product', {
    props: ['path', 'query'],
    template: template
});

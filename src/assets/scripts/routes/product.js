var template = `
<ix-layout>
    <h2 slot="title">Product</h2>
    <div slot="main" class="product">
    <div>path = {{path}}</div>
    <div>query = {{query}}</div>
    </div>
</ix-layout>
`;

module.exports = Vue.component('ix-product', {
    props: ['path', 'query'],
    template: template
});

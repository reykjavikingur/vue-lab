var template = `
<ul class="menu">
    <li><ix-nav-link href="/">Home</ix-nav-link></li>
    <li><ix-nav-link href="/about">About</ix-nav-link></li>
</ul>
`;

module.exports = Vue.component('ix-menu', {
    template: template
});

var template = `
<nav>
    <ul>
        <li><a href="/">home</a></li>
        <li><a href="/about">about</a></li>
    </ul>
</nav>
`;

module.exports = Vue.component('ix-menu', {
    template: template
});

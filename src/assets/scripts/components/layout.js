var template = `
<div class="layout">

    <ix-header/>
    
    <slot></slot>
    
    <ix-footer/>
    
</div>
`;

module.exports = Vue.component('ix-layout', {
    template: template
});

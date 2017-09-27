var template = `
<div class="page-layout">

    <slot name="title"></slot>
    
    <ix-menu/>
    
    <slot name="main"></slot>
    
    <hr/>
    
</div>
`;

module.exports = Vue.component('ix-layout', {
    template: template
});

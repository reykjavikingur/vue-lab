require('./menu');

var template = `
<div class="page-layout">

    <slot name="title"></slot>
    
    <ix-menu/>
    
    <slot name="main"></slot>
    
    <hr/>
    
</div>
`;

module.exports = Vue.component('ix-page-layout', {
    template: template
});



odoo.define('another_percentage_widget.another_field_percentage', function (require) {
"use strict";


    var basic_fields = require('web.basic_fields')
    var core = require('web.core');
    var registry = require('web.field_registry');
    var QWeb = core.qweb;
    var _t = core._t;
    
    
    var AnotherFieldPercentage = basic_fields.FieldFloat.extend({
        formatType:'percentage',
        
        
        init: function () {
            console.log("[another_field_percentage.js] function:init()")
            this._super.apply(this, arguments);
            //增加如下一行：因为定义的formatType属性未生效  
            this.formatType = 'percentage';
        
    });
        
    registry.add('another_percentage', AnotherFieldPercentage);
});





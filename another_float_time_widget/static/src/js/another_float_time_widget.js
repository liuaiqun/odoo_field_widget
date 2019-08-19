

odoo.define('another_float_time_widget.another_field_float_time', function (require) {
"use strict";


    var basic_fields = require('web.basic_fields')
    var core = require('web.core');
    var registry = require('web.field_registry');
    var QWeb = core.qweb;
    var _t = core._t;

    
    var AnotherFieldFloatTime = basic_fields.FieldFloat.extend({
        
        // this is not strictly necessary, as for this widget to be used, the 'widget'
        // attrs must be set to 'float_time', so the formatType is automatically
        // 'float_time', but for the sake of clarity, we explicitely define a
        // FieldFloatTime widget with formatType = 'float_time'.
        formatType: 'float_time',

        init: function () {
            console.log("[another_float_time_widget.js] function:init()")
            this._super.apply(this, arguments);
            this.formatType = 'float_time';
        }
    });


    registry.add('another_float_time', AnotherFieldFloatTime);
});





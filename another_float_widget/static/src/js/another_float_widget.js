

odoo.define('another_float_widget.another_field_float', function (require) {
"use strict";


    var basic_fields = require('web.basic_fields')
    var core = require('web.core');
    var registry = require('web.field_registry');
    var QWeb = core.qweb;
    var _t = core._t;
    
    
    var AnotherFieldFloat = basic_fields.NumericField.extend({
        className: 'o_field_float o_field_number',
        supportedFieldTypes: ['float'],

        /**
         * Float fields have an additional precision parameter that is read from
         * either the field node in the view or the field python definition itself.
         *
         * @override
         */
        init: function () {
            
            console.log("[another_float_widget.js] function:init()")
            
            this._super.apply(this, arguments);
            if (this.attrs.digits) {
                this.nodeOptions.digits = JSON.parse(this.attrs.digits);
            }
        },
    });
        

    registry.add('another_float', AnotherFieldFloat);
});





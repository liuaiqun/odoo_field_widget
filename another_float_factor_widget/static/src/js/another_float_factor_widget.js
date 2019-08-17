

odoo.define('another_float_factor_widget.another_field_float_factor', function (require) {
"use strict";


    var basic_fields = require('web.basic_fields')
    var core = require('web.core');
    var registry = require('web.field_registry');
    var QWeb = core.qweb;
    var _t = core._t;
    
    
    var AnotherFieldFloatFactor = basic_fields.FieldFloat.extend({
        supportedFieldTypes: ['float'],
        className: 'o_field_float_factor',
        formatType: 'float_factor',

        /**
         * @constructor
         */
        init: function () {
            console.log("[another_float_factor_widget.js] function:init()")
            this._super.apply(this, arguments);
            // default values
            if (!this.nodeOptions.factor){
                this.nodeOptions.factor = 1;
            }
            // use as format and parse options
            this.parseOptions = this.nodeOptions;
            
            //增加如下一行：因为定义的formatType属性未生效  
            this.formatType = 'float_factor';
            
        }
    });
        
 

    registry.add('another_float_factor', AnotherFieldFloatFactor);
});





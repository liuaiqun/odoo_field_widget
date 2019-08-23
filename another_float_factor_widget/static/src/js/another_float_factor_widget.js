

odoo.define('another_float_factor_widget.another_field_float_factor', function (require) {
"use strict";

    var field_utils = require('web.field_utils');
    var basic_fields = require('web.basic_fields')
    var core = require('web.core');
    var registry = require('web.field_registry');
    var QWeb = core.qweb;
    var _t = core._t;
    
    /**==========================================================
    * widget定义
    * from  odoo\addons\web\static\src\js\fields\basic_fields.js
    ==========================================================*/
     
    var AnotherFieldFloatFactor = basic_fields.FieldFloat.extend({
        supportedFieldTypes: ['float'],
        className: 'o_field_float_factor',
        formatType: 'another_float_factor',

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
            
        }
    });
        
 
    /**==========================================================
     * 格式化
     * Ref： odoo\addons\web\static\src\js\fields\field_utils.js
     ==========================================================*/

    /**
     * Returns a string representing a float value, from a float converted with a
     * factor.
     *
     * @param {number} value
     * @param {number} [options.factor]
     *          Conversion factor, default value is 1.0
     * @returns {string}
     */
    function AnotherFormatFloatFactor(value, field, options) {
        var factor = options.factor || 1;
        //return formatFloat(value * factor, field, options);
        return field_utils.format.float(value * factor, field, options);
    }; 

    /**
     * Parse a String containing float and unconvert it with a conversion factor
     *
     * @param {number} [options.factor]
     *          Conversion factor, default value is 1.0
     */
    function AnotherParseFloatFactor(value, field, options) {
        //var parsed = parseFloat(value);
        var parsed = field_utils.parse.float(value);
        var factor = options.factor || 1.0;
        return parsed / factor;
    };

 
 
 
    /**==========================================================
     * 注册  
     * Ref：  odoo\addons\web\static\src\js\fields\field_registry.js
     ==========================================================*/
    registry.add('another_float_factor', AnotherFieldFloatFactor);
    field_utils.format['another_float_factor'] = AnotherFormatFloatFactor;
    field_utils.parse['another_float_factor']  = AnotherParseFloatFactor;
    console.log("[another_float_factor.js] registry over ");
 

});





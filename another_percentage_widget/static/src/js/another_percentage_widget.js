

odoo.define('another_percentage_widget.another_field_percentage', function (require) {
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
    
    var AnotherFieldPercentage = basic_fields.FieldFloat.extend({
        formatType:'percentage',
        
        
        //init: function () {
        //    console.log("[another_field_percentage.js] function:init()")
        //    this._super.apply(this, arguments);
        //    //增加如下一行：因为定义的formatType属性未生效  
        //    this.formatType = 'percentage';

    });
        

    
    
    /**==========================================================
     * 格式化
     * Ref： odoo\addons\web\static\src\js\fields\field_utils.js
     ==========================================================*/
     
    
    /**
     * Returns a string representing the given value (multiplied by 100)
     * concatenated with '%'.
     *
     * @param {number | false} value
     * @param {Object} [field]
     * @param {Object} [options]
     * @param {function} [options.humanReadable] if returns true, parsing is avoided
     * @returns {string}
     */
    function AnotherFormatPercentage(value, field, options) {
        options = options || {};
        var result = field_utils.format.float(value * 100, field, options) || '0';
        if (options.humanReadable && options.humanReadable(value * 100)) {
            return result + "%";
        }
        return field_utils.parse.float(result) + "%";
    };
    


    
    /**==========================================================
     * 注册
     * Ref：  odoo\addons\web\static\src\js\fields\field_registry.js
     ==========================================================*/
    registry.add('another_percentage', AnotherFieldPercentage);
    field_utils.format['another_percentage']=AnotherFormatPercentage;
    console.log("[another_field_percentage.js] registry over ");
});





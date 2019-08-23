

odoo.define('another_float_time_widget.another_field_float_time', function (require) {
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
    
    var AnotherFieldFloatTime = basic_fields.FieldFloat.extend({
        
        // this is not strictly necessary, as for this widget to be used, the 'widget'
        // attrs must be set to 'float_time', so the formatType is automatically
        // 'float_time', but for the sake of clarity, we explicitely define a
        // FieldFloatTime widget with formatType = 'another_float_time'.
        formatType: 'another_float_time',

        init: function () {
            console.log("[another_float_time_widget.js] function:init()")
            this._super.apply(this, arguments);
            this.formatType = 'another_float_time';
        }
    });


    /**==========================================================
     * 格式化
     * Ref： odoo\addons\web\static\src\js\fields\field_utils.js
     ==========================================================*/

    
    /**
     * Returns a string representing a time value, from a float.  The idea is that
     * we sometimes want to display something like 1:45 instead of 1.75, or 0:15
     * instead of 0.25.
     *
     * @param {float} value
     * @returns {string}
     */
    function AnotherFormatFloatTime(value) {
        var pattern = '%02d:%02d';
        if (value < 0) {
            value = Math.abs(value);
            pattern = '-' + pattern;
        }
        var hour = Math.floor(value);
        var min = Math.round((value % 1) * 60);
        if (min === 60){
            min = 0;
            hour = hour + 1;
        }
        return _.str.sprintf(pattern, hour, min);
    }

    

    
    function AnotherParseFloatTime(value) {
        var factor = 1;
        if (value[0] === '-') {
            value = value.slice(1);
            factor = -1;
        }
        var float_time_pair = value.split(":");
        if (float_time_pair.length !== 2)
            // return factor * parseFloat(value);
            return factor * field_utils.parse.float(value);
        // var hours = parseInteger(float_time_pair[0]);
        // var minutes = parseInteger(float_time_pair[1]);
        var hours = field_utils.parse.parse.integer(float_time_pair[0]);
        var minutes = field_utils.parse.parse.integer(float_time_pair[1]);
        return factor * (hours + (minutes / 60));
    }

    
    
    /**==========================================================
     * 注册  
     * Ref：  odoo\addons\web\static\src\js\fields\field_registry.js
     ==========================================================*/
    registry.add('another_float_time', AnotherFieldFloatTime);
    field_utils.format['another_float_time'] = AnotherFormatFloatTime;
    field_utils.parse['another_float_time']  = AnotherParseFloatTime;
    console.log("[another_float_time.js] registry over ");
 

});





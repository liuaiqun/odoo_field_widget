odoo.define('another_phone_widget.another_field_phone', function (require) {
"use strict";

    var basic_fields = require('web.basic_fields')
    var core = require('web.core');
    var registry = require('web.field_registry');
    var QWeb = core.qweb;
    var _t = core._t;
    
    
     /**==========================================================
     * widget定义
     * from  odoo\addons\web\static\src\js\fields\basic_fields.js
     ==========================================================*/
    
    var AnotherFieldPhone = basic_fields.FieldEmail.extend({
        
        className: 'o_field_another_phone',
        prefix: 'tel',

        init: function () {
            arguments[3].mode="readonly";
            this._super.apply(this, arguments);
            //this.attrs.readonly= true;
            console.log("[another_phone_widget.js] function:init()")
        },
         
        _renderReadonly: function () {
            var phone_str=this.value.substr(0,5)+"xxx"+this.value.substr(8,99)
            this.$el.text(phone_str)
                .addClass('o_readonly_modifier');
            console.log("[another_phone_widget.js] function:_renderReadonly()")
        },


        
    });

     
     
    /**==========================================================
     * 注册
     * Ref：  odoo\addons\web\static\src\js\fields\field_registry.js
     ==========================================================*/
    registry.add('another_phone', AnotherFieldPhone);
    console.log("[another_phone_widget.js] registry over ");
});





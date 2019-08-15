odoo.define('another_phone_widget.another_field_phone', function (require) {
"use strict";

    var basic_fields = require('web.basic_fields')
    var core = require('web.core');
    var registry = require('web.field_registry');
    var QWeb = core.qweb;
    var _t = core._t;
    
    var AnotherFieldPhone = basic_fields.FieldEmail.extend({
        
        className: 'o_field_phone',
        prefix: 'tel',

        //--------------------------------------------------------------------------
        // Private
        //--------------------------------------------------------------------------

        /**
         * @override
         * @private
         */
        _renderReadonly: function () {
            this._super();
            
            console.log("[another_phone_widget.js] function:_renderReadonly()")

            // This class should technically be there in case of a very very long
            // phone number, but it breaks the o_row mechanism, which is more
            // important right now.
            this.$el.removeClass('o_text_overflow');
        },
    });


    registry.add('another_phone', AnotherFieldPhone);
});





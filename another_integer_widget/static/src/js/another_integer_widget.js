

odoo.define('another_widget_integer.AnotherFieldInteger', function (require) {
"use strict";


    var basic_fields = require('web.basic_fields')
    var core = require('web.core');
    var registry = require('web.field_registry');
    var QWeb = core.qweb;
    var _t = core._t;
    
    
    
    var FieldAnotherInteger = basic_fields.NumericField.extend({
        className: 'o_field_integer o_field_number',
        supportedFieldTypes: ['integer'], 

        //--------------------------------------------------------------------------
        // Private
        //--------------------------------------------------------------------------

        /**
        * Format integer value
        *
        * Note: We have to overwrite this method to allow virtual ids. A virtual id
        * is a character string composed of an integer and has a dash and other
        * information.
        * E.g: in calendar, the recursive event have virtual id linked to a real id
        * virtual event id "23-20170418020000" is linked to the event id 23
        *
        * @override
        * @private
        * @param {integer|string} value
        * @returns {string}
        */
        _formatValue: function (value) {
            
            console.log("[another_integer_widget.js] function:_formatValue()")
            if (typeof value === 'string') {
                if (!/^[0-9]+-/.test(value)) {
                    throw new Error('"' + value + '" is not an integer or a virtual id');
                }
                return value;
            }
            return this._super.apply(this, arguments);
        },
    });


    registry.add('another_integer', FieldAnotherInteger);
});





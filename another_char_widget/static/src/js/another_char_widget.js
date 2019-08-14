odoo.define('another_char_widget.another_field_char', function (require) {
"use strict";

    var basic_fields = require('web.basic_fields')
    var core = require('web.core');
    var registry = require('web.field_registry');
    var QWeb = core.qweb;
    var _t = core._t;
    
 
    var AnotherFieldChar = basic_fields.InputField.extend(basic_fields.TranslatableFieldMixin, {
        className: 'o_field_char',
        tagName: 'span',
        supportedFieldTypes: ['char'],

        //--------------------------------------------------------------------------
        // Private
        //--------------------------------------------------------------------------

        /**
         * Add translation button
         *
         * @override
         * @private
         */
        _renderEdit: function () {
            
            console.log("[another_char_widget.js] function:_renderEdit()")
                        
            var def = this._super.apply(this, arguments);
            if (this.field.size && this.field.size > 0) {
                this.$el.attr('maxlength', this.field.size);
            }
            this.$el = this.$el.add(this._renderTranslateButton());
            return def;
        },
        /**
         * Trim the value input by the user.
         *
         * @override
         * @private
         * @param {any} value
         * @param {Object} [options]
         */
        _setValue: function (value, options) {
            
            console.log("[another_char_widget.js] function:_setValue()")
            
            if (this.field.trim) {
                value = value.trim();
            }
            return this._super(value, options);
        },
    });



    registry.add('another_char', AnotherFieldChar);
});





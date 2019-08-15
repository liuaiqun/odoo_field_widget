odoo.define('another_email_widget.another_field_email', function (require) {
"use strict";

    var basic_fields = require('web.basic_fields')
    var core = require('web.core');
    var registry = require('web.field_registry');
    var QWeb = core.qweb;
    var _t = core._t;
    
 
    var AnotherFieldEmail = basic_fields.InputField.extend({

        className: 'o_field_email',
        events: _.extend({}, basic_fields.InputField.prototype.events, {
            'click': '_onClick',
        }),
        prefix: 'mailto',
        supportedFieldTypes: ['char'],

        /**
         * In readonly, emails should be a link, not a span.
         *
         * @override
         */
        init: function () {
            console.log("[another_email_widget.js] function:init()")
            this._super.apply(this, arguments);
            this.tagName = this.mode === 'readonly' ? 'a' : 'input';
        },
        
        

        //--------------------------------------------------------------------------
        // Public
        //--------------------------------------------------------------------------

        /**
         * Returns the associated link.
         *
         * @override
         */
        getFocusableElement: function () {
            console.log("[another_email_widget.js] function:getFocusableElement()")
            return this.mode === 'readonly' ? this.$el : this._super.apply(this, arguments);
        },

        //--------------------------------------------------------------------------
        // Private
        //--------------------------------------------------------------------------

        /**
         * In readonly, emails should be a mailto: link with proper formatting.
         *
         * @override
         * @private
         */
        _renderReadonly: function () {
            console.log("[another_email_widget.js] function:_renderReadonly()")
            this.$el.text(this.value)
                .addClass('o_form_uri o_text_overflow')
                .attr('href', this.prefix + ':' + this.value);
        },

        //--------------------------------------------------------------------------
        // Handlers
        //--------------------------------------------------------------------------

        /**
         * Prevent the URL click from opening the record (when used on a list).
         *
         * @private
         * @param {MouseEvent} ev
         */
        _onClick: function (ev) {
            console.log("[another_email_widget.js] function:_onClick()")
            ev.stopPropagation();
        },
        
    });

    registry.add('another_email', AnotherFieldEmail);
});





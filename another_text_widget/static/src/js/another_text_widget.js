odoo.define('another_text_widget.another_field_text', function (require) {
"use strict";

    var basic_fields = require('web.basic_fields')
    var core = require('web.core');
    var registry = require('web.field_registry');
    var dom = require('web.dom');
    var QWeb = core.qweb;
    var _t = core._t;
    
    var AnotherFieldText = basic_fields.InputField.extend(basic_fields.TranslatableFieldMixin, {
        className: 'o_field_text',
        supportedFieldTypes: ['text'],
        tagName: 'span',

        /**
         * @constructor
         */
        init: function () {
            console.log("[another_text_widget.js] function:init()")
            this._super.apply(this, arguments);

            if (this.mode === 'edit') {
                this.tagName = 'textarea';
            }
        },
        /**
         * As it it done in the start function, the autoresize is done only once.
         *
         * @override
         */
        start: function () {
            console.log("[another_text_widget.js] function:start()")
            if (this.mode === 'edit') {
                dom.autoresize(this.$el, {parent: this});

                this.$el = this.$el.add(this._renderTranslateButton());
            }
            return this._super();
        },
        /**
         * Override to force a resize of the textarea when its value has changed
         *
         * @override
         */
        reset: function () {
            console.log("[another_text_widget.js] function:reset()")
            var self = this;
            return $.when(this._super.apply(this, arguments)).then(function () {
                if (self.mode === 'edit') {
                    self.$input.trigger('change');
                }
            });
        },
        //--------------------------------------------------------------------------
        // Handlers
        //--------------------------------------------------------------------------

        /**
         * Stops the enter navigation in a text area.
         *
         * @private
         * @param {OdooEvent} ev
         */
        _onKeydown: function (ev) {
            console.log("[another_text_widget.js] function:_onKeydown()")
            if (ev.which === $.ui.keyCode.ENTER) {
                return;
            }
            this._super.apply(this, arguments);
        },
    });
            


    registry.add('another_text', AnotherFieldText);
});





odoo.define('another_char_cc_widget.another_field_char_cc', function (require) {
"use strict";

    var basic_fields = require('web.basic_fields')
    var core = require('web.core');
    var registry = require('web.field_registry');
    var qweb = core.qweb;
    var _t = core._t;
    
        
  
    // ---------- 辅助类 CopyClipboard--------
    //  CopyClipboard 定义在web.basic_fields'， 但在retain中未包含它
    //  因此不能在本文件中使用 .extend(basic_fields.CopyClipboard,  
    //  只能将CopyClipboard 拷贝至此， 然后使用.extend(CopyClipboard,
    //
    var CopyClipboard = {

        /**
         * @override
         */
        destroy: function () {
            this._super.apply(this, arguments);
            this.clipboard.destroy();
        },

        //--------------------------------------------------------------------------
        // Private
        //--------------------------------------------------------------------------

        /**
         * Instatiates the Clipboad lib.
         */
        _initClipboard: function () {
            var self = this;
            var $clipboardBtn = this.$('.o_clipboard_button');
            $clipboardBtn.tooltip({title: _t('Copied !'), trigger: 'manual', placement: 'right'});
            this.clipboard = new ClipboardJS($clipboardBtn[0], {
                text: function (_) {
                   return self.value.trim();
                },
                // Container added because of Bootstrap modal that give the focus to another element.
                // We need to give to correct focus to ClipboardJS (see in ClipboardJS doc)
                // https://github.com/zenorocha/clipboard.js/issues/155
                container: self.$el[0]
            });
            this.clipboard.on('success', function () {
                _.defer(function () {
                    $clipboardBtn.tooltip('show');
                    _.delay(function () {
                        $clipboardBtn.tooltip('hide');
                    }, 800);
                });
            });
        },
    };
        
    
    var AnotherCharCopyClipboard = basic_fields.FieldChar.extend(CopyClipboard, {

        //--------------------------------------------------------------------------
        // Private
        //--------------------------------------------------------------------------

        /**
         * @override
         */
        _render: function() {
            
            console.log("[another_char_cc_widget.js] function:_render()")
            
            this._super.apply(this, arguments);
            this.$el.addClass('o_field_copy');
            this.$el.append($(qweb.render('CopyClipboardChar')));
            this._initClipboard();
        }
    });
    
     

    registry.add('another_CopyClipboardChar', AnotherCharCopyClipboard);
});





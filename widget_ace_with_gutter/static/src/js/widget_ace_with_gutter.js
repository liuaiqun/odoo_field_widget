

odoo.define('widget_ace_with_gutter.ace', function (require) {
"use strict";


    var basic_fields = require('web.basic_fields')
    var core = require('web.core');
    var registry = require('web.field_registry');
    var QWeb = core.qweb;
    var _t = core._t;
    

    var AceWithGutter = basic_fields.AceEditor.extend({
        //className: 'ace_with_gutter',
        supportedFieldTypes: ['text'],

        init: function () {
            console.log("[AceWithGutter] function:init()");
            this._super.apply(this, arguments);

        },
        
       //_startAce: function (node) {
       //     console.log("[AceWithGutter] function:_startAce()");
       //     this._super.apply(this, arguments);
       //     this.aceEditor.renderer.setOptions({
       //         displayIndentGuides: True,
       //         //showGutter: True, 
       //     });
       // 
       // },
        
        
        
    _startAce: function (node) {
        this.aceEditor = ace.edit(node);
        this.aceEditor.setOptions({
            maxLines: Infinity,
            showPrintMargin: false,
        });
        if (this.mode === 'readonly') {
            this.aceEditor.renderer.setOptions({
                displayIndentGuides: true,
                showGutter: true,
            });
            this.aceEditor.setOptions({
                highlightActiveLine: false,
                highlightGutterLine: false,
                readOnly: true,
            });
            this.aceEditor.renderer.$cursorLayer.element.style.display = "none";
        }
        this.aceEditor.$blockScrolling = true;
        this.aceSession = this.aceEditor.getSession();
        this.aceSession.setOptions({
            useWorker: false,
            mode: "ace/mode/" + (this.nodeOptions.mode || 'xml'),
            tabSize: 2,
            useSoftTabs: true,
        });
        if (this.mode === "edit") {
            this.aceEditor.on("change", this._doDebouncedAction.bind(this));
            this.aceEditor.on("blur", this._doAction.bind(this));
        }
        

        var ace_gutter_element = this.$el.find(".ace_gutter");
        //console.log(ace_gutter_element);
        if (ace_gutter_element.length > 0) {
            ace_gutter_element[0].setAttribute("aria-hidden","false");
        }
    },
        
        
        
        
        
        
        
        
        
        
        
    });

    registry.add('ace_with_gutter', AceWithGutter);
});





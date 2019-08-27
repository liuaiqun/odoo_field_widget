# -*- coding: utf-8 -*-
{
    "name": "Another Phone Widget",
    "summary": "Reimplementation  of odoo  basic field widget -- Phone",
    "description": """ 
               重新实现odoo基本字段的小部件 -- phone
               
               本系列(another_xxxxxx)代码取自 odoo的web模块，供学习分析odoo前端代码使用
               
               与odoo原phone widget相比， 本模块做了如下修改
               
                  ---- 将手机号码13912345678 显示为 13912xxx678
                  
                  ---- 强制使用readonly方式  
                """ ,  
    "category": "Web",
    "version": "12.0.0.0.0",
    "license": "LGPL-3",
    "author": "odoo",
    "website": "https://github.com/odoo/web/static/src/js/fields/basic_fields.js",
    "depends": ["web"],
    "data": [
        "templates/assets.xml",
    ],
    "installable": True,
}

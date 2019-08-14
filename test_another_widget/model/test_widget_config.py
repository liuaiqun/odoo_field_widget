from odoo import api, fields, models


class TestWidgetConfig(models.Model):
    _name = 'test.widget.config'
    name = fields.Char(string="record id")
    module_name = fields.Char(string="module name")
    form_type = fields.Char(string="form view type")
    view_arch_default = fields.Text(string="arch content about default widget")
    view_arch_another = fields.Text(string="arch content about another widget")
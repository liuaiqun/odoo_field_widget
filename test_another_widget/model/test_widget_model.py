from odoo import api, fields, models
from lxml import etree
import logging

_logger = logging.getLogger(__name__)


class TestWidgetModel(models.Model):
    _name = 'test.widget.model'

    name = fields.Char(help="field_name")
    
    #---------------
    # Numeric Fields
    #---------------
    
    default_integer = fields.Integer()
    another_integer = fields.Integer()

    default_float   = fields.Float()
    another_float = fields.Float()
    
    default_float_time   = fields.Float()
    another_float_time   = fields.Float()
    
    default_float_factor   = fields.Float()
    another_float_factor   = fields.Float()
        
    default_float_percentage   = fields.Float()
    another_float_percentage   = fields.Float()
    
    #---------------
    # String Fields
    #--------------
    
    default_char = fields.Char()
    another_char = fields.Char()
    
    default_copy_clipboard_char = fields.Char()
    another_copy_clipboard_char = fields.Char()
    
    default_text = fields.Text()
    another_text = fields.Text()
    
    default_copy_clipboard_text = fields.Text()
    another_copy_clipboard_text = fields.Text()
    
    default_email = fields.Char()
    another_email = fields.Char()
    
    default_phone = fields.Char()
    another_phone = fields.Char(default="13912345678")

    
    #------------------
    # Date and Boolean
    #-----------------
    
    default_date = fields.Date()
    another_date = fields.Date()
    
    default_date_time = fields.Datetime()
    another_date_time = fields.Datetime()
    
    default_boolean = fields.Boolean()
    default_boolean = fields.Boolean()
    

    @api.model
    def get_detail_xml(self,form_type):
        
        left_group ='<group>'
        right_group='<group>'
        
        installed_modules = self.env['ir.module.module'].search([ ('name', 'like', 'another_%_widget'), ('state','=','installed')])
        installed_modules_names =[module.name  for module in installed_modules]
        
        form_view_configs = self.env['test.widget.config'].search([('form_type', '=', form_type)])
        for config in form_view_configs:
            if config.module_name in installed_modules_names:
                left_group  += "<%s/>" % (config.view_arch_default)
                right_group += "<%s/>" % (config.view_arch_another)
            else:
                _logger.info("module %s not installed, ignore it", config.module_name )
                
        left_group  += '</group>'
        right_group += '</group>'
                
        res='<group name="new_detail"> %s %s </group>' %(left_group, right_group)
        return res

        
    @api.model 
    def _fields_view_get(self, view_id=None, view_type='form', toolbar=False, submenu=False):
        
        res = super(TestWidgetModel, self)._fields_view_get(view_id=view_id, view_type=view_type, toolbar=toolbar, submenu=submenu)
        
        # 如果非表单视图， 退出。
        if view_type != 'form':
            _logger.info("not form view")
            return res
        
        #如果windowd action中没有指定form_type上下文， 退出
        form_type = self._context.get('form_type')
        
        # debug 
        #form_type = "form_basic_numeric"
        _logger.info("form_type: %s" % (form_type) )
        
        if not form_type:
            _logger.info("it is form view, not givin form type")
            return res
        
        #  删除其中的  <group name='test' /> 
        doc = etree.XML(res['arch'])
        for node in doc.xpath("//group[@name='test']") :
            node.getparent().remove(node)
        
        # 扩充<group name='detail' />         
        detail_xml = self.get_detail_xml(form_type)
        detail_node = etree.fromstring(detail_xml)  
        
        for node in doc.xpath("//group[@name='detail']") :
            node.getparent().replace(node, detail_node)
            break # 或略更多的
            
        res['arch'] = etree.tostring(doc, encoding='utf-8') 
        return res
        
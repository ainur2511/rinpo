from django.contrib import admin
from django_mptt_admin.admin import DjangoMpttAdmin
from mptt.admin import MPTTModelAdmin

from .models import Location

admin.site.site_header = 'Система-сервис мониторинг скважин '
admin.site.site_title = 'Система-сервис мониторинг скважин'
admin.site.index_title = 'Добро пожаловать в административную панель мониторинга скважин'

class LocationAdmin(DjangoMpttAdmin):
    pass

admin.site.register(Location, LocationAdmin)
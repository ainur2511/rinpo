from django.db import models
from mptt.fields import TreeForeignKey
from mptt.models import MPTTModel


class Location(MPTTModel):
    name = models.CharField("Название", max_length=255)
    parent = TreeForeignKey('self', on_delete=models.CASCADE, null=True, blank=True, related_name='children')
    is_leaf = models.BooleanField("Это скважина?", default=False)
    ip_address = models.GenericIPAddressField("IP Modbus устройства", null=True, blank=True)
    modbus_port = models.IntegerField("Порт Modbus", default=502)
    native_id = models.IntegerField("NATIVE_ID (Modbus register)", null=True, blank=True)
    code = models.CharField("CODE параметра", max_length=50, null=True, blank=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Объект"
        verbose_name_plural = "Объекты"

    class MPTTMeta:
        order_insertion_by = ['name']
from django.urls import path
from . import views

app_name = 'web_ui'

urlpatterns = [
    path('', views.tree_view, name='tree'),
    path('load-children/<int:location_id>/', views.load_children, name='load_children'),
]
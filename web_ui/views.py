from django.shortcuts import render, get_object_or_404
from django.contrib.auth.decorators import login_required

from web_ui.models import Location


@login_required
def tree_view(request):
    locations = Location.objects.filter(parent__isnull=True)
    for location in locations:
        print(location.name)
    return render(request, 'tree/tree.html', {'locations': locations})

def load_children(request, location_id):
    print(f"Вызов от {location_id}")
    node = get_object_or_404(Location, id=location_id)
    locations = node.children.all()
    return render(request, 'tree/_children.html', {'locations': locations})
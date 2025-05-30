from django.shortcuts import redirect
from django.urls import reverse

class LoginRequiredMiddleware:
    """ MIDDLEWARE для проверки доступа неавторизованных пользователей"""
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        # Список URL, доступных без логина
        public_urls = [reverse('login'), reverse('admin:index')]

        if not request.user.is_authenticated and request.path not in public_urls:
            return redirect('login')

        response = self.get_response(request)
        return response
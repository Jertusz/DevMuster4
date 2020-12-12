<<<<<<< HEAD
"""
ASGI config for mathbattle project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/3.1/howto/deployment/asgi/
"""

import os

from django.core.asgi import get_asgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'mathbattle.settings')

application = get_asgi_application()
=======
"""
ASGI config for mathbattle project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/3.1/howto/deployment/asgi/
"""

import os

from channels.auth import AuthMiddlewareStack
from channels.routing import ProtocolTypeRouter, URLRouter
from django.core.asgi import get_asgi_application
import duel.routing

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'mathbattle.settings')

application = ProtocolTypeRouter({
    "http": get_asgi_application(),
    "websocket": AuthMiddlewareStack(
        URLRouter(
            duel.routing.websocket_urlpatterns
        )
    ),
})
>>>>>>> 0e4766f107f1118bbbd0da04a8acd0e460488100

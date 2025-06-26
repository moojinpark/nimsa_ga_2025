from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    #path('about/', views.about, name='about'),
   # path('contact/', views.contact, name='contact'),
   # path('dashboard/', views.dashboard, name='dashboard'),
   # path('login/', views.login_view, name='login'),
   # path('logout/', views.logout_view, name='logout'),
   # path('register/', views.register, name='register'),
   # path('profile/', views.profile, name='profile'),
    path('flutterwave-webhook/', views.flutterwave_webhook, name='flutterwave_webhook'),
    # ...add other view patterns as needed...
]

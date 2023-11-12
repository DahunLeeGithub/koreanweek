from django.urls import path, include
from .views import RegisterAPIView, AuthAPIView, PostViewSet, PostListView, PostDetailView
from rest_framework_simplejwt.views import TokenRefreshView
from rest_framework.routers import DefaultRouter
router = DefaultRouter()
router.register(r'posts', PostViewSet)

urlpatterns = [
    path("register/", RegisterAPIView.as_view()), # post - 회원가입
    path("auth/", AuthAPIView.as_view()), # post - 로그인, delete - 로그아웃, get - 유저정보
    path("auth/refresh/", TokenRefreshView.as_view()), # jwt 토큰 재발급
    path('', include(router.urls)),
    path('list/', PostListView.as_view(), name='posts'),
    path('detail/<int:pk>/', PostDetailView.as_view(), name='post-detail'),
]
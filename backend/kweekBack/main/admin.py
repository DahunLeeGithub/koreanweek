from django.contrib import admin
from .models import Post, Box, CustomUser


class PostAdmin(admin.ModelAdmin):
    list_display = ['titleJp', 'titleEn', 'posted_time']  # 여기에 posted_time 추가

admin.site.register(Post, PostAdmin)
admin.site.register(Box)
admin.site.register(CustomUser)
# Register your models here.

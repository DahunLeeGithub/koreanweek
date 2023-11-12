
from .models import CustomUser, Box, Post
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = '__all__'

    def create(self, validated_data):
        user = CustomUser.objects.create_user(
            email = validated_data['email'],
            password = validated_data['password'] 
        )
        return user
    

class BoxSerializer(serializers.ModelSerializer):
    class Meta:
        model = Box
        fields = ['titleJp', 'bodyJp', 'titleEn', 'bodyEn', 'img', 'index']

class PostSerializer(serializers.ModelSerializer):
    boxes = BoxSerializer(many=True, required=False)

    class Meta:
        model = Post
        fields = ['titleJp','titleEn', 'boxes']

    def create(self, validated_data):
        boxes_data = validated_data.pop('boxes', [])
        post = Post.objects.create(**validated_data)
        
        for box_data in boxes_data:
            Box.objects.create(post=post, author=post.author, **box_data)
        return post
class listBoxSerializer(serializers.ModelSerializer):
    class Meta:
        model = Box
        fields = ['titleJp', 'titleEn', 'bodyJp', 'bodyEn', 'img', 'index']

class listPostSerializer(serializers.ModelSerializer):
    boxes = BoxSerializer(many=True, read_only=True)
    author = serializers.SerializerMethodField()

    class Meta:
        model = Post
        fields = ['id', 'author', 'titleJp', 'titleEn', 'boxes', 'posted_time']
    def get_author(self, obj):
        print(obj.author)
        return [obj.author.first_name, obj.author.last_name]
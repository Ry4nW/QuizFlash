from rest_framework import serializers
from .models import Room, Player

class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = ('id', 'code', 'host', 'created_at', 'round_time_limit', 'max_players')

class CreateRoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = ('round_time_limit', 'max_players')

class PlayerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Player
        fields = ('user_score', 'name', 'room')

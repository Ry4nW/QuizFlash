from django.db import models
import string
import datetime
import random

def generate_room_code():
    length = 4

    while True:
        code = ''.join(random.choices(string.ascii_uppercase, k=length))
        if Room.objects.filter(code=code).count() == 0:
            break
    
    return code

# Create your models here.
class Room(models.Model):
    code = models.CharField(
        max_length=6, default=generate_room_code, unique=True)
    host = models.CharField(max_length=50, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)
    round_time_limit = models.IntegerField(blank=True, null=True)
    max_players = models.IntegerField(blank=True, null=True)

# class Player(models.Model):
#     room = models.ForeignKey(Room)
#     score = models.IntegerField(default=0)

class Quiz(models.Model):
    title = models.CharField(max_length=50)

class FlashCard(models.Model):
    question = models.CharField(max_length=100)
    answer = models.CharField(max_length=100)
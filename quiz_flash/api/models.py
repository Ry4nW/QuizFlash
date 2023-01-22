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

    def players(self):
        return self.users.all()

class Player(models.Model):
    user_score = models.IntegerField(default=0)
    submit_time = models.DateTimeField(null=True, blank=True)
    name = models.CharField(max_length=10)
    room = models.ForeignKey('Room', on_delete=models.SET_NULL, null=True, default=None, related_name='users')

class Quiz(models.Model):
    title = models.CharField(max_length=50)
    description = models.CharField(max_length=100, default='')

    def cards(self):
        return self.cards.all()

class FlashCard(models.Model):
    question = models.CharField(max_length=100)
    answer = models.CharField(max_length=100)
    quiz = models.ForeignKey('quiz', on_delete=models.SET_NULL, null=True, default=None, related_name='cards')
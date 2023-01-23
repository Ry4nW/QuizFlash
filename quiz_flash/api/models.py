from django.db import models
import string
import random

def generate_room_code():
    length = 4

    while True:
        code = ''.join(random.choices(string.ascii_uppercase, k=length))
        if Room.objects.filter(code=code).count() == 0:
            break
    
    return code

class Room(models.Model):
    code = models.CharField(
        max_length=6, default=generate_room_code, unique=True)
    host = models.CharField(max_length=50, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)
    round_time_limit = models.IntegerField(blank=True, null=True)
    max_players = models.IntegerField(blank=True, null=True)
    quiz = models.ForeignKey('Quiz', on_delete=models.CASCADE, null=True, default=None, blank=True)
    rounds = models.IntegerField(default=0)

    def players(self):
        return self.users.all()

class Player(models.Model):
    user_score = models.IntegerField(default=0)
    submit_time = models.DateTimeField(null=True, blank=True, default=None)
    name = models.CharField(max_length=10)
    room = models.ForeignKey('Room', on_delete=models.SET_NULL, null=True, default=None, related_name='users')

class Quiz(models.Model):
    title = models.CharField(max_length=50)
    description = models.CharField(max_length=100, default='')

    def cards(self):
        return self.cards.all()

class FlashCard(models.Model):
    question = models.CharField(max_length=100)
    answer = models.BooleanField(default=True)
    quiz = models.ForeignKey('Quiz', on_delete=models.SET_NULL, null=True, default=None, related_name='cards')
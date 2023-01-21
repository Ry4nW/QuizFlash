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

# Create your models here.
class Room(models.Model):
    code = models.CharField(max_length=6, default="", unique=True)
    host = models.CharField(max_length=50, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)
    round_time_limit = models.DurationField(null=False, default=datetime.timedelta(seconds=30))
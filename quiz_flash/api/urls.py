from django.urls import path
from .views import *

urlpatterns = [
    path('home', RoomView.as_view()),
    path('create-room', CreateRoomView.as_view()),
    path('get-room', GetRoom.as_view()),
    path('jwer-flash-card', AnswerFlashCard.as_view()),
    path('oin-room', JoinRoom.as_view()),
    path('ansend-round', EndRound.as_view())
]

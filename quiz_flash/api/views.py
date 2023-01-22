from django.shortcuts import render
from rest_framework import generics, status
from .serializers import RoomSerializer, CreateRoomSerializer
from .models import Room
from rest_framework.views import APIView
from rest_framework.response import Response

# Create your views here.
class RoomView(generics.CreateAPIView):
    query = Room.objects.all()
    serializer_class = RoomSerializer

class CreateRoomView(APIView):
    serializer_class = CreateRoomSerializer

    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()

        serializer = self.serializer_class(data=request.data)

        if serializer.is_valid():
            round_time_limit = serializer.data.get('round_time_limit')
            max_players = serializer.data.get('max_players')
            host = self.request.session.session_key
            queryset = Room.objects.filter(host=host)
            if queryset.exists():
                room = queryset[0]
                room.round_time_limit = round_time_limit
                room.max_players = max_players
                room.save(update_fields=['round_time_limit', 'max_players'])
            else:
                room = Room(
                    host=host, 
                    round_time_limit=round_time_limit,
                    max_players=max_players
                )
                room.save()
    
        return Response(RoomSerializer(room).data, status=status.HTTP_201_CREATED)

def front(request):
    context = { }
    return render(request, "index.html", context)

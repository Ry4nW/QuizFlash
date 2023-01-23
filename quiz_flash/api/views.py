from django.shortcuts import render
from rest_framework import generics, status
from .serializers import RoomSerializer, CreateRoomSerializer, PlayerSerializer
from .models import Room, Player
from rest_framework.views import APIView
from rest_framework.response import Response
import datetime

class RoomView(generics.CreateAPIView):
    query = Room.objects.all()
    serializer_class = RoomSerializer

class JoinRoom(APIView):
    code_key = 'code'

    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()

        code = request.data.get(self.code_key)
        if code != None:
            room_result = Room.objects.filter(code=code)
            if len(room_result) > 0:
                room = room_result[0]
                self.request.session['room_code'] = code
                return Response({'message': 'Room Joined!'}, status=status.HTTP_200_OK)

            return Response({'Bad Request': 'Invalid Room Code'}, status=status.HTTP_400_BAD_REQUEST)

        return Response({'Bad Request': 'Invalid post data, did not find a code key'}, status=status.HTTP_400_BAD_REQUEST)

class EndRound(APIView):
    code_key = 'code'

    def post(self, request, format=None):
        code = request.GET.get(self.code_key)
        room = Room.objects.filter(code=code)
        if len(room) > 0:
            room = room[0]
            queryset = Player.objects.filter(room__code=code)

    
        return Response({'Bad Request': 'Invalid Room Code'}, status=status.HTTP_400_BAD_REQUEST)



class AnswerFlashCard(APIView):
    serializer_class = PlayerSerializer
    code_key = 'code'
    name_key = 'name'
    answer_key = 'answer'

    def post(self, request, format=None):
        code = request.GET.get(self.code_key)
        name = request.GET.get(self.name_key)
        player = Player.objects.filter(name=name).filter(room__code=code)
        if player.exists():
            player = player[0]
        else:
            return Response({}, status=status.HTTP_404_NOT_FOUND)

        my_answer = request.GET.get(self.answer)
        room = Room.objects.filter(code=code)
        quiz = room[0].quiz
        true_answer = quiz[room[0].rounds]
        data = RoomSerializer(room[0]).data
        data['correct'] = my_answer == true_answer
        player.submit_time = datetime.datetime.utcnow()
        player.save(update_fields=['submit_time'])

        return Response(data, status=status.HTTP_200_OK)

        
class GetRoom(APIView):
    serializer_class = RoomSerializer
    code_key = 'code'
    name_key = 'name'

    def get(self, request, format=None):
        code = request.GET.get(self.code_key)
        name = request.GET.get(self.name_key)
        if code != None:
            room = Room.objects.filter(code=code)
            if len(room) > 0:
                data = RoomSerializer(room[0]).data
                data['is_host'] = self.request.session.session_key == room[0].host
                player = Player(
                    user_score=0,
                    name=name,
                    room=room[0]
                )
                player.save()
                return Response(data, status=status.HTTP_200_OK)
            return Response({'Room Not Found': 'Invalid Room Code.'}, status=status.HTTP_404_NOT_FOUND)

        return Response({'Bad Request': 'Code paramater not found in request'}, status=status.HTTP_400_BAD_REQUEST)

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
                self.request.session['room_code'] = room.code
            else:
                room = Room(
                    host=host, 
                    round_time_limit=round_time_limit,
                    max_players=max_players
                )
                room.save()
                self.request.session['room_code'] = room.code
    
        return Response(RoomSerializer(room).data, status=status.HTTP_201_CREATED)
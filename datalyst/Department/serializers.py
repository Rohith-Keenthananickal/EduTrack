from rest_framework import serializers
from .models import Seat


class SeatDetail(serializers.ModelSerializer):
    class Meta:
        model = Seat
        fields = '__all__'
        depth = 1
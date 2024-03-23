from rest_framework import viewsets
from .serializer import TurnSerializer
from .models import Turn


class TurnRequestView(viewsets.ModelViewSet):
    serializer_class = TurnSerializer
    queryset = Turn.objects.all()

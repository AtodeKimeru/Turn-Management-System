from django.db import models


class Turn(models.Model):
    """
    Model for storing turn requests
    """

    id = models.CharField(max_length=255, unique=True)
    client_id = models.IntegerField()
    advisor_id = models.IntegerField()
    date = models.DateTimeField()
    stage = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    finish_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.request_id

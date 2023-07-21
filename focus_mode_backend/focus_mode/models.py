from django.db import models

class FocusMode(models.Model):
    MUSIC_CHOICES = [
        ('music1.mp3', 'Music 1'),
        ('music2.mp3', 'Music 2'),
    ]
    title = models.CharField(max_length=350)
    duration = models.CharField(max_length=5)
    music_enabled = models.BooleanField(default=False)
    default_music = models.CharField(max_length=255, choices=MUSIC_CHOICES, default='music1.mp3')

    def __str__(self):
        return self.title
    
class Todo(models.Model):
    title = models.CharField(max_length=150)
    description = models.CharField(max_length=500)
    completed = models.BooleanField(default=False)

    def __str__(self):
        return self.title
    

    
 
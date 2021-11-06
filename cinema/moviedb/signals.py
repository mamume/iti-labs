from django.db.models.signals import post_save, post_delete
from django.dispatch import receiver
from .models import Movie
from django.core.mail import send_mail

@receiver(post_save, sender=Movie)
def send_on_save(sender, instance, created, *args, **kwargs):
    if created:
        send_mail(
            f'Movie {instance.name} Added',
            f'Hi, Movie {instance.name} has been added to our website',
            'sender@example.com',
            ['receiver@example.com'],
            fail_silently=False
            )
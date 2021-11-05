# Generated by Django 3.2.9 on 2021-11-05 13:57

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Movie',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('description', models.TextField(verbose_name='Movie Description')),
                ('rating', models.IntegerField(blank=True, default=0, null=True)),
                ('create_time', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]

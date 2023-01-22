# Generated by Django 4.1.5 on 2023-01-22 02:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_alter_room_max_players_alter_room_round_time_limit'),
    ]

    operations = [
        migrations.AlterField(
            model_name='room',
            name='max_players',
            field=models.IntegerField(blank=True, default=30, null=True),
        ),
        migrations.AlterField(
            model_name='room',
            name='round_time_limit',
            field=models.IntegerField(blank=True, default=30, null=True),
        ),
    ]
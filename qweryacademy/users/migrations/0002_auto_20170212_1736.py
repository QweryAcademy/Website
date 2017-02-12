# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-02-12 16:36
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='location',
            field=models.CharField(blank=True, choices=[('', 'Your Location'), ('Lagos', 'Lagos'), ('Ibadan', 'Ibadan'), ('Abuja', 'Abuja')], max_length=50, verbose_name='Location'),
        ),
        migrations.AddField(
            model_name='user',
            name='number',
            field=models.CharField(blank=True, max_length=13, verbose_name='Phone Number'),
        ),
        migrations.AlterField(
            model_name='user',
            name='name',
            field=models.CharField(blank=True, max_length=255, verbose_name='Your Full Name'),
        ),
    ]

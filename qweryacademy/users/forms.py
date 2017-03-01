from django import forms
from .models import User


class UserForm(forms.ModelForm):

    class Meta:
        model = User
        fields = ['email','name','number','location']
        

    def save(self, commit=True):
        instance = super().save(commit=False)
        instance.username = self.cleaned_data['name']
        if commit:
            instance.save()
        return instance
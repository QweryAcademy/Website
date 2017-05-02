from django.views.generic import TemplateView
from qweryacademy.users.forms import UserForm
from django.shortcuts import redirect, reverse
from django.contrib import messages


class HomeView(TemplateView):
    template_name = 'pages/home.html'

    def post(self, request, *args, **kwargs):
        form = UserForm(request.POST)
        if form.is_valid():
            form.save()
            
            messages.add_message(request, messages.INFO, "Thank You for Registering")
            return redirect(reverse('home'))
        return self.render_response(self.get_context_data(form=form))

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        if not 'form' in kwargs:
            context['form'] = UserForm()
        return context

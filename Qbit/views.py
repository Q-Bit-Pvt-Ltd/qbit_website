from django.shortcuts import render
from django.http import JsonResponse
from .forms import ContactForm


def index(request):
    return render(request, 'Qbit/index.html')



def contact_view(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            # If the form is valid, save it to the database
            form.save()
            # Send a JSON response indicating success
            return JsonResponse({'success': True})
        else:
            # If the form is invalid, return a failure response
            return JsonResponse({'success': False, 'message': 'Please try again'})

    else:
        form = ContactForm()
    return render(request, 'Qbit/contact_form.html', {'form': form})
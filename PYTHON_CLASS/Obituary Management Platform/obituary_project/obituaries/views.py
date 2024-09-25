from django.shortcuts import render, redirect, get_object_or_404
from django.utils.text import slugify
from .models import Obituary
from .forms import ObituaryForm

def obituary_detail(request, slug):
    obituary = get_object_or_404(Obituary, slug=slug)
    return render(request, 'obituaries/obituary_detail.html', {'obituary': obituary})

def submit_obituary(request):
    if request.method == 'POST':
        form = ObituaryForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('obituary_list')
    else:
        form = ObituaryForm()
    return render(request, 'obituary_form.html', {'form': form})

def view_obituaries(request):
    obituaries = Obituary.objects.all()
    return render(request, 'obituaries/view_obituaries.html', {'obituaries': obituaries})

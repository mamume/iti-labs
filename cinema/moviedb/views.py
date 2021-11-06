from django.shortcuts import render, redirect
from django.http import HttpResponse
from .forms import MovieForm
from .models import Movie

# Create your views here.
def index(request):
    movies = Movie.objects.all()

    return render(request, 'index.html', context={'movies': movies})


def create_movie(request):
    form = MovieForm()
    if request.method == 'POST':
            form = MovieForm(request.POST, files=request.FILES)

            if form.is_valid():
                form.save()
                return redirect('moviedb:index')

    return render(request, 'create_movie.html', context={'form': form})


def movie_details(request, id):
    movie = Movie.objects.get(pk=id)

    print(movie)
    return render(request, 'index.html', context={'movies':[movie]})

def edit_movie(request, id):
    movie = Movie.objects.get(pk=id)
    form = MovieForm(instance=movie)

    if request.method == 'POST':
        form = MovieForm(data=request.POST, instance=movie, files=request.FILES)
        if form.is_valid():
            form.save()
            return redirect('moviedb:index')
        print('notvalid')

    return render(request, 'create_movie.html', context={'form': form})

def delete_movie(request, id):
    Movie.objects.get(pk=id).delete()

    return redirect('moviedb:index')
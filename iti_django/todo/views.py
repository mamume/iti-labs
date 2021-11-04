from django.shortcuts import render
from django.http import HttpResponse

todos = [
    {
        id: 1,
        title: 'Read a book',
        priority: 1
    },
    {
        id: 2,
        title: 'Play a game',
        priority: 3
    },
    {
        id: 3,
        title: 'Watch a movie',
        priority: 5
    }
]

# Create your views here.
def index(request):
    # return HttpResponse("Hello, World!")
    return render(request, 'index.html')
from django.shortcuts import render
from django.http import HttpResponse

todos = [
    {
        "id": 1,
        "title": 'Read a book',
        "priority": 1,
        "description": "desc. 1: Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"
    },
    {
        "id": 2,
        "title": 'Play a game',
        "priority": 3,
            "description": "desc. 2: Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"
    },
    {
        "id": 3,
        "title": 'Watch a movie',
        "priority": 5,
            "description": "desc. 1: Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"
    }
]

# Create your views here.
def index(request):
    # return HttpResponse("Hello, World!")
    return render(request, 'index.html', context={"todos":todos})


def view(request, todo_id):


    return render(request, 'index.html', context={"todos":todos})


def edit(request, todo_id):
    pass

def delete(request, todo_id):
    pass
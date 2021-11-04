from django.shortcuts import render, redirect
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
    todo = filter(lambda todo: todo.get('id') == todo_id, todos)

    return render(request, 'index.html', context={"todos":todo})


def edit(request, todo_id):
    for index in range(len(todos)):
        if todos[index].get('id') == todo_id:
            todos[index]['description'] = "[UPDATED] " + todos[index]['description']
            break
    
    return redirect('/todo')


def delete(request, todo_id):
    for todo in todos:
        if todo.get('id') == todo_id:
            todos.remove(todo)

    return redirect('/todo')

def movies(request):
    return render(request, 'movies.html')
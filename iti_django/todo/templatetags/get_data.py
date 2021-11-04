from django.template import Library
import requests

register = Library()

@register.simple_tag
def get_movies_data():
    movies_data = requests.get("https://www.omdbapi.com/?apikey=eeba7242&s=man").json()
    # pprint(movies_data.search[0].get('title'))
    return movies_data.get('Search')
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt


def index(request):
    return render(request, "index.html")

def search(request):
    return render(request, "search.html")
@csrf_exempt
def get_results(request):
    searchTerm = request.POST.get('searchTerm');
    return render(request, "results.html", {"searchTerm": searchTerm})
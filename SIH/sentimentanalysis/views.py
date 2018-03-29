from django.shortcuts import render

def index(request):
    return render(request, "index.html")

def search(request):
    return render(request, "search.html")

def results(request):
    return render(request, "results.html")
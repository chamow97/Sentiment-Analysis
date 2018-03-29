from django.conf.urls import url
from sentimentanalysis import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^search$', views.search, name='search'),
    url(r'^results$', views.results, name='results')
]
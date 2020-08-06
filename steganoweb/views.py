from django.shortcuts import render
from django.http import HttpResponse

def index(request):
    return render(request,'index.html')

def encode(request):
    return render(request,'encode.html')
    
def decode(request):
    return render(request,'decode.html')
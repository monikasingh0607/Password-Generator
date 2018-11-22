from django.shortcuts import render
from django.http import JsonResponse
import random


def generate_password(request):
    #characters for the password
    chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~'
	
    #Check method and request type
    if request.method == 'POST' and request.is_ajax():
        if request.POST['length'] == "" or (isinstance(request.POST['length'], int)) == False:
            len = 8
        else:
            len = int(request.POST['length'])
        if request.POST['number_of_passwords'] == "" or (isinstance(request.POST['number_of_passwords'], int)) == False:
            n = 10
        else:
            n = int(request.POST['number_of_passwords'])

        if len>64:
            len = 64

        if n>100:
            n = 100

        passwords = []
	
	#Generate Passwords
        for p in range(n):
            password = ''
            for c in range(len):
                password += random.choice(chars)
            passwords.append({"password":password})
	#return to ajax success function
        return JsonResponse(passwords,safe=False)

    else:
        return render(request, 'password_gen/pass_gen.html')




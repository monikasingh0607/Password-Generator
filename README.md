# Password-Generator
A Python Django App to genhoerate random passwords

**Step 1**

* Clone and Add the app to your django project.

**Step 2**

* Add the app to `settings.py` of your project in 
```
INSTALLED_APPS = [
'password_gen',
]
```
**Step 3**

*Add 

```path('', include('password_gen.urls')),```

in `urls.py` file of your project

**Step 4**

Run using

```python manage.py runserver```

**Final Step**

* GO T0

```/password_gen``` in your browser

Add inputs and click button to Generate Passwords

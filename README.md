# Repo Bar

A simple application using Github API to find Github users built with Javascript, Ajax and jQuery.

### Prerequisites

Git initialized on the project directory by running :

```
git init
```

Firebase project created from the Firebase console at https://console.firebase.google.com/


### Clone and Deploy

On your local directory, clone the repo bar repository by running :

```
git clone https://github.com/thegirlfromipanema/repo_bar
```

then, initialize the Firebase by running :

```
firebase init
```

Firebase will prompt some questions :
```
? What Firebase do you want to use? <choose your Firebase project>
```

```
? What directory should be the public root?
```

type :
```
public
```

It will then prompt back the confirmation :
```
Firebase initialized, configuration written to firebase.json  
```

Do not overwrite your public.html file (type 'N')

Finally run :

```
firebase deploy
```

and followed by :

```
firebase open
```

If you want to shoot the project up to your local server, run :

```
firebase serve

```

### Coding style

Due to the small size of the project and the main and only js file, I put the html code in there too.
This can not be justifiable if the project is bigger.


## Deployment

https://repobar-4f038.firebaseapp.com/

## Built With

* [jQuery](https://jquery.com/) - Used to simplify client side web development
* [jQuery.ajax](http://api.jquery.com/jquery.ajax/) - Used to send an asynchronous request to a web server
* [Firebase](https://firebase.google.com/) - Used for deployment

## Versioning

1.0.0

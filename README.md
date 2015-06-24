# Login-game
Who has the longest login streak?

## Description
On the surface this is just a test project for an authentication flow with Ember, but it is actually an awesome game of login fun!

## Live demo
Go to https://login-game.firebaseapp.com/ and play away!

## How to play
1. sign up with username and password
2. log in, your login counter will increase and you will move up in the highscores list
3. log out

Repeat step 2 and 3 until you are on top of the highscores list!
But beware: there is a chance on every login that your account gets deleted and you will have to start all over again.
No risk no fun :)

## How to run locally
You need the following things installed
- [Node.js](https://nodejs.org/)
- [Ember.js](http://emberjs.com/)

Then install and run the project:
```
git clone https://github.com/sebastianschnock/login-game.git
cd login-game
npm install && bower install
ember serve
```
Access at [http://localhost:4200](http://localhost:4200)

## Custom firebase location
To use your own firebase account for this project, edit ```config/environment.js``` and insert it there.

## Technical details
This is an Ember.js project that implements user authentication and authorization with:
- [Ember Simple Auth](https://github.com/simplabs/ember-simple-auth)
- [Firebase authentication](https://www.firebase.com/docs/web/guide/user-auth.html)
- [Emberfire](https://github.com/firebase/emberfire)

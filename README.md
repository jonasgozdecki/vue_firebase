#VueJS with Firebase

![VueJS](https://img.shields.io/badge/vue-2.2.4-green.svg?longCache=true&style=for-the-badge)


** Playing with VueJs
In this example is possible to see the how easy is to integrate your VueJS with firebase. 

The Firebase integration is made by creating a new app at https://console.firebase.google.com
After creating a new App there, it's possible to see the parameters at the image bellow:
[![firebase_int](https://github.com/jonasgozdecki/vue_firebase/blob/master/readme/firebase_integration.PNG)]()


To start the application, the command "npm run dev" gets it online at localhost:8080 by default.
[![npm](https://github.com/jonasgozdecki/vue_firebase/blob/master/readme/npm_run.PNG)]()


This Home is a static page that links to sub-pages. In order to get the pages the user must be logged, this is specified at the "Router" in index.js.
[![home](https://github.com/jonasgozdecki/vue_firebase/blob/master/readme/home.PNG)]()

It's possible to create a new account and see it in your Firebase Console
[![firebase_email](https://github.com/jonasgozdecki/vue_firebase/blob/master/readme/firebase_email.PNG)]()

[![firebase_row](https://github.com/jonasgozdecki/vue_firebase/blob/master/readme/firebase_row.PNG)]()

SignUp.vue, createUserWithEmailAndPassword is ready to go, and using promisse to send the user somewhere.

```javascript

<script>
  import firebase from 'firebase'
  export default {
    name: 'signUp',
    data: function() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      signUp: function() {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
          (user) => {
            this.$router.replace('hello')
          },
          (err) => {
            alert('Oops. ' + err.message)
          }
        );
      }
    }
  }
</script>
```


[![login_firebase](https://github.com/jonasgozdecki/vue_firebase/blob/master/readme/login_firebase.PNG)]()

# Dynamic
This JSON bellow could be loaded externally, but shows how nice could be build something only using JSON and pre-defined structures.


```javascript

var buttonsInPages = {
	"pages": {
		"home": {
			"navBar": {
				"position": "top-fixed",
				"style": "sty_transparent",
				"buttons": {
					"home": {
						"id": "1Brtevfb",
						"name": "home",
						"label": "Home",
						"action": "goto(home)",
						"tip": "Go to Home"
					},
					"about": {
						"id": "1Cagvjkl",
						"name": "about",
						"label": "About",
						"action": "goto(about)",
						"tip": "Know about Nephew"
					},

```

[![dev_menu](https://github.com/jonasgozdecki/vue_firebase/blob/master/readme/dev_menu.PNG)]()

[![dev](https://github.com/jonasgozdecki/vue_firebase/blob/master/readme/dev.PNG)]()

[![dev_profile](https://github.com/jonasgozdecki/vue_firebase/blob/master/readme/dev_profile.PNG)]()

	
# NavBar testing

The navbar is dynamic, loaded by ckNavItems and based in a template.
Just playing with templates you can see taht they can use condictions and interpolation like Angular. 

```javascript	
				
ckNavItems: function(pgN,btN) { 
	var result = false;
	var btnRes = "";
	
	try{ 
	  btnRes = JSON.stringify(buttonsInPages.pages[pgN.toLowerCase()].navBar.buttons[btN.toLowerCase()].name);
	  console.log(btnRes);
	  if(btnRes.replace(/"/g,"") === btN){
		result = true;
	  }
	} catch(e) { 
	  result = false;
	}
	console.log("result: " + btN.replace(/"/g,"") + " - " + result)
	
	return result;
},

```

# Static

It's possible to keep static content, they can receive permitions with "requiresAuth: true"


[![static](https://github.com/jonasgozdecki/vue_firebase/blob/master/readme/static.PNG)]()

[![contact](https://github.com/jonasgozdecki/vue_firebase/blob/master/readme/contact.PNG)]()


# Developer Profile
[![dev_profile](https://github.com/jonasgozdecki/vue_firebase/blob/master/readme/dev_profile.PNG)]()

To customers... in progress.
[![otherArea](https://github.com/jonasgozdecki/vue_firebase/blob/master/readme/otherArea.PNG)]()

			

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```



### Using

- Just clone to your desktop and use it, since doesn't requires a webserver.

---

### Clone

- Clone this repo to your local machine using `https://github.com/jonasgozdecki/vue_firebase.git`

---

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
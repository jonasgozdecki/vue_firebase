import Vue from 'vue'
import Router from 'vue-router'

import Hello from '@/components/Hello'
import Plan from '@/components/Plan'
import About from '@/components/About'
import Contact from '@/components/Contact'

import Login from '@/components/Login'
import SignUp from '@/components/SignUp'

import CustomerArea from '@/components/CustomerArea'
import CustomerJobs from '@/components/CustomerJobs'
import CustomerProfile from '@/components/CustomerProfile'

import DeveloperArea from '@/components/DeveloperArea'
import DeveloperJobs from '@/components/DeveloperJobs'
import DeveloperProfile from '@/components/DeveloperProfile'


import firebase from 'firebase'



Vue.use(Router)

let router = new Router({
	
  routes: [
    {
      path: '*',
      redirect: '/hello'
    },
    {
      path: '/',
      redirect: '/hello'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
      
    },
	{
      path: '/plan',
      name: 'Plan',
      component: Plan      
    },
	{
      path: '/about',
      name: 'About',
      component: About      
    },
	{
      path: '/contact',
      name: 'Contact',
      component: Contact      
    },
	{
      path: '/customerArea',
      name: 'CustomerArea',
      component: CustomerArea,
      meta: {
        requiresAuth: true
      }
    },
	{
      path: '/customerJobs',
      name: 'CustomerJobs',
      component: CustomerJobs,
      meta: {
        requiresAuth: true
      }
    },
	{
      path: '/customerProfile',
      name: 'CustomerProfile',
      component: CustomerProfile,
      meta: {
        requiresAuth: true
      }
    },
	{
      path: '/developerArea',
      name: 'DeveloperArea',
      component: DeveloperArea,
      meta: {
        requiresAuth: true
      }
    },
	{
      path: '/developerJobs',
      name: 'DeveloperJobs',
      component: DeveloperJobs,
      meta: {
        requiresAuth: true
      }
    },
	{
      path: '/developerProfile',
      name: 'DeveloperProfile',
      component: DeveloperProfile,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser;
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    
  if (requiresAuth && !currentUser){ 	
		localStorage.setItem('toURL', to.path)
		next('login')
  }else{
	  next()
  }
})


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
					"plan": {
						"id": "1Sfdbndh",
						"name": "plan",
						"label": "Plan",
						"action": "goto(plan)",
						"tip": "Buy your plan"
					},
					"contact": {
						"id": "1Dmdbfdu",
						"name": "contact",
						"label": "Contact",
						"action": "goto(contact)",
						"tip": "Contact Newphew"
					},
					"login": {
						"id": "1Seffjfj",
						"name": "login",
						"label": "Login",
						"action": "goto(login)",
						"tip": "Login (Developer/Customer)",
						"style": "right-fixed"
					}

				}
			}
		},

		"about": {
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
					"plan": {
						"id": "1Sfdbndh",
						"name": "plan",
						"label": "Plan",
						"action": "goto(plan)",
						"tip": "Buy your plan"
					},
					"contact": {
						"id": "1Dmdbfdu",
						"name": "contact",
						"label": "Contact",
						"action": "goto(contact)",
						"tip": "Contact Newphew"
					},
					"login": {
						"id": "1Seffjfj",
						"name": "login",
						"label": "Login",
						"action": "goto(login)",
						"tip": "Login (Developer/Customer)",
						"style": "right-fixed"
					}
				}
			}
		},
		
		"plan": {
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
					"plan": {
						"id": "1Sfdbndh",
						"name": "plan",
						"label": "Plan",
						"action": "goto(plan)",
						"tip": "Buy your plan"
					},
					"contact": {
						"id": "1Dmdbfdu",
						"name": "contact",
						"label": "Contact",
						"action": "goto(contact)",
						"tip": "Contact Newphew"
					},
					"login": {
						"id": "1Seffjfj",
						"name": "login",
						"label": "Login",
						"action": "goto(login)",
						"tip": "Login (Developer/Customer)",
						"style": "right-fixed"
					}
				}
			}
		}
		,
		
		"contact": {
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
					"plan": {
						"id": "1Sfdbndh",
						"name": "plan",
						"label": "Plan",
						"action": "goto(plan)",
						"tip": "Buy your plan"
					},
					"contact": {
						"id": "1Dmdbfdu",
						"name": "contact",
						"label": "Contact",
						"action": "goto(contact)",
						"tip": "Contact Newphew"
					},
					"login": {
						"id": "1Seffjfj",
						"name": "login",
						"label": "Login",
						"action": "goto(login)",
						"tip": "Login (Developer/Customer)",
						"style": "right-fixed"
					}
				}
			}
		}
		,
		
		"developerArea": {
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
					"developerJobs": {
						"id": "1Cagvjkl",
						"name": "developerJobs",
						"label": "Jobs",
						"action": "goto(developerJobs)",
						"tip": "Developer Jobs"
					},
					"developerProfile": {
						"id": "1Sfdbndh",
						"name": "developerProfile",
						"label": "Profile",
						"action": "goto(developerProfile)",
						"tip": "Developer Profile"
					},
					
					"logout": {
						"id": "1Seffjfj",
						"name": "logout",
						"label": "Logout",
						"action": "goto(logout)",
						"tip": "Logout",
						"style": "right-fixed"
					}
				}
			}
		}
	}

}

	
function getButtonInPageNav(page) { //in progress...
	//"pages"-> "home"-> "navBar"-> "buttons" (all);
	console.log( JSON.stringify(buttonsInPages.pages.home.navBar.buttons.home));
	for(var i=0;i<buttonsInPages.length;i++){
		
	  if(buttonsInPages[i] == 'home'){
		break;
	  }
	}
}


// Definindo novo componente chamado button-counter
Vue.component('nav-bar-cust', {
  props: ['pageNow'],
  data: function () {
    return {
      brandName: "Nephew",	  
	  activeTab: "active",
	  logged: "",
	  seeBtDeveloperItems: "false",
	  image: require('@/assets/images/icon_user40.jpg')
    }
  },
	mounted () {
			
				this.logged = localStorage.logged;
			
	},
  methods: {
	  
	    loadUserButtons: function() {
			console.log('seeBtDeveloperItems');
			if(this.seeBtDeveloperItems === 'false'){
				this.seeBtDeveloperItems = 'true';
			}else{
				this.seeBtDeveloperItems = 'false';
			}
		},
	  
		logout: function() {
		  firebase.auth().signOut().then(() => {
			localStorage.setItem('logged', '');
			localStorage.setItem('displayName', '');
			localStorage.setItem('uid', '')
			localStorage.setItem('photoURL', '')
			localStorage.setItem('email', '')
			this.$router.replace('hello');
		  })
		},
		ckLogged: function() {
			
		},
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

		
		home: function() {
			this.$router.replace('home')
		},
		about: function() {
			this.$router.replace('about')
		},
		plan: function() {
			this.$router.replace('plan')
		},
		contact: function() {
			this.$router.replace('contact')
		},
		login: function() {
			this.$router.replace('login')
		},
		developerArea: function() {
			this.$router.replace('developerArea')
		},
		developerProfile: function() {
			this.$router.replace('developerProfile')
		},
		developerJobs: function() {
			this.$router.replace('developerJobs')
		},
		customerArea: function() {
			this.$router.replace('customerArea')
		},
		customerProfile: function() {
			this.$router.replace('customerProfile')
		},
		customerJobs: function() {
			this.$router.replace('customerJobs')
		}	
		
	  },
  template:`
  <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
			<a class="navbar-brand" style="color: #5499C7; font-weight:bold; font-size:22px" href="#">{{brandName}}</a>
			
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
			  <span class="navbar-toggler-icon"></span>
			</button>
			
		  <div class="collapse navbar-collapse" id="navbarCollapse">
			<ul class="navbar-nav mr-auto mt-2 mt-lg-0">						
				
			    <li v-bind:class="[pageNow === 'Home' ? activeTab : '', 'nav-item']" v-if="ckNavItems(pageNow,'home') === true">
				  <a class="nav-link" href="#" v-on:click="home">Home</a>								  
				</li>			
			
			    <li v-bind:class="[pageNow === 'About' ? activeTab : '', 'nav-item']" v-if="ckNavItems(pageNow,'about') === true">
				  <a class="nav-link" href="#" v-on:click="about">About</a>								  
				</li>
				
				<li v-bind:class="[pageNow === 'Plan' ? activeTab : '', 'nav-item']" v-if="ckNavItems(pageNow,'plan') === true">
				  <a class="nav-link" href="#" v-on:click="plan">Plan</a>								  
				</li>
				
				<li v-bind:class="[pageNow === 'Contact' ? activeTab : '', 'nav-item']" v-if="ckNavItems(pageNow,'contact') === true">
				  <a class="nav-link" href="#" v-on:click="contact">Contact</a>								  
				</li>	

				
			</ul>

		  
			<p class="navbar-text"></p>

			
			
			<ul v-if="logged === 'true'" class="nav navbar-nav navbar-right">

				<img v-on:click="loadUserButtons" :src="image" alt="">
												
				<li v-if="seeBtDeveloperItems === 'true' || pageNow != 'DeveloperArea' ">
				  <a class="nav-link" href="#" v-if="pageNow != 'DeveloperArea'" v-on:click="developerArea">Dev. Area</a>								  
				</li>
				
				
				<li v-if="seeBtDeveloperItems === 'true' || pageNow != 'DeveloperArea'">
				  <a class="nav-link" href="#" v-if="pageNow != 'DeveloperProfile'" v-on:click="developerProfile">Profile</a>				  
				</li>
				
				<li v-if="seeBtDeveloperItems === 'true' || pageNow != 'DeveloperArea'">
				  <a class="nav-link" href="#" v-if="pageNow != 'DeveloperJobs'" v-on:click="developerJobs">Jobs</a>								  
				</li>
				
				

				<li class="nav-item">
					  <!--a class="nav-link" href="#" v-on:click="login">Login</a-->					  
					  <a class="nav-link" href="#" v-on:click="logout">Logout</a>
				</li>
				

			</ul>
			<ul v-else class="nav navbar-nav navbar-right">
				<li class="nav-link">Already have an account? </li>
				<li class="nav-item">
					  <a class="nav-link" href="#" v-on:click="login">Login</a>					  
				</li>
			</ul> 			
		</div>		  
	</nav>
	  `		
})

export default router
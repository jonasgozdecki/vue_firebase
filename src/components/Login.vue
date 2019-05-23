<template>
	<div class="login">
		<div class="jumbotron jumbotron-fluid">
			<div class="container">
				<h1 class="subheading">{{ title }}</h1>
			</div>
		</div>
		<div class="container">
			<div >
				<div class="d-flex align-items-center">
					<div class="col-sm-6 col-md-4 col-md-offset-6">
						<div class="account-wall">
							<img class="profile-img" src="../assets/images/icon_user.jpg?sz=120"
								alt="">
							<form class="form-signin">
							<input type="text" class="form-control" v-model="email" placeholder="Email" required autofocus>
							<input type="password" class="form-control" v-model="password" placeholder="Password" required>
							<button class="btn btn-lg btn-primary btn-block" type="submit" v-on:click="signIn">
								Sign in</button>
							<label class="checkbox pull-left">
								<input type="checkbox" value="remember-me">
								Remember me
							</label>
							<center><h5>OR</h5></center>
							<input class="btn btn-lg btn-facebook btn-block" type="submit" value="Login via facebook">
							<a href="#" class="pull-right need-help">Need help? </a><span class="clearfix"></span>
							</form>
						</div>
						<p>You don't have an account ? You can <router-link to="/sign-up">create one</router-link></p>
					</div>
				</div>
			</div>
		</div>
	</div>			
</template>


<script>
	import firebase from 'firebase'
	export default {
		name: 'login',
		data: function() {
			return {
				email: 'jonasgozdecki@hotmail.com',
				password: 'myPassword',
				title: 'Login',
				pageNowData: "Login",
				footerText: "Nephew footer",
				displayName: null
			}
		},
		
		mounted () {
			if (localStorage.displayName) this.displayName = localStorage.displayName;
		},

		methods: {
			signIn: function() {
				firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
					(user) => {
						this.created();				
					},
					(err) => {
						alert('Oops. ' + err.message)
					}
				);
			},
			created: function() {
				firebase.auth().onAuthStateChanged(user => {					
					if (user) {	
						/*console.log('displayName: ' + user.displayName);
						console.log('uid: ' + user.uid);
						console.log('photoURL: ' + user.photoURL);
						console.log('email: ' + user.email);*/
						
						localStorage.setItem('displayName', user.displayName);
						localStorage.setItem('uid', user.uid)
						localStorage.setItem('photoURL', user.photoURL)
						localStorage.setItem('email', user.email)
						localStorage.setItem('logged', 'true')
						
						//console.log('localStorage.toURL: ' + localStorage.toURL);						
						if (localStorage.toURL){						
							this.$router.replace(localStorage.toURL);
						}else{
							this.$router.replace('hello');
						}
					}
				})
			}
		}
	}
</script>

<style scoped>  
  .login {
    
	
  }
  input {
    margin: 10px 0;
    padding: 15px;
  }
  
  button {
    background-color: rgb(66, 139, 202);
	border-color: rgb(66, 139, 202);
    cursor: pointer;
  }
  p {
    margin-top: 40px;
    font-size: 13px;
  }
  p a {
    text-decoration: underline;
    cursor: pointer;
  }
  
  .row{
	
	display:block;
  }
  
 
 

.white{
    color:#000;
    background-color:#fff;
}

.btn-facebook {
    color: #ffffff;
    -webkit-text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
    background-color: #2b4b90;
    *background-color: #133783;
    background-image: -moz-linear-gradient(top, #3b5998, #133783);
    background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#3b5998), to(#133783));
    background-image: -webkit-linear-gradient(top, #3b5998, #133783);
    background-image: -o-linear-gradient(top, #3b5998, #133783);
    background-image: linear-gradient(to bottom, #3b5998, #133783);
    background-repeat: repeat-x;
    border-color: #133783 #133783 #091b40;
    border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff3b5998', endColorstr='#ff133783', GradientType=0);
    filter: progid:DXImageTransform.Microsoft.gradient(enabled=false);
}

.btn-facebook:hover,
.btn-facebook:focus,
.btn-facebook:active,
.btn-facebook.active,
.btn-facebook.disabled,
.btn-facebook[disabled] {
	color: #ffffff;
	background-color: #133783 !important;
	*background-color: #102e6d !important;
}

.btn-facebook:active,
.btn-facebook.active {
	background-color: #0d2456 \9 !important;
}

.form-signin
{
    max-width: 330px;
    padding: 15px;
    margin: 0 auto;
}
.form-signin .form-signin-heading, .form-signin .checkbox
{
    margin-bottom: 10px;
}
.form-signin .checkbox
{
    font-weight: normal;
}
.form-signin .form-control
{
    position: relative;
    font-size: 16px;
    height: auto;
    padding: 10px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
.form-signin .form-control:focus
{
    z-index: 2;
}
.form-signin input[type="text"]
{
    margin-bottom: -1px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
}
.form-signin input[type="password"]
{
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
}
.account-wall
{
    
    padding: 40px 0px 20px 0px;
    background-color: #f7f7f7;
    -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
}
.login-title
{
    color: #555;
    font-size: 18px;
    font-weight: 400;
    display: block;
}
.profile-img
{
    width: 96px;
    height: 96px;
    margin: 0 auto 10px;
    display: block;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
}
.need-help
{
    margin-top: 10px;
}
.new-account
{
    display: block;
    margin-top: 10px;
}


.jumbotron-fluid{
	background-image: url(../assets/images/bg2.png);
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	height:140px;
	margin-bottom:0px;
}

.jumbotron.hero .subheading {
	font-family: 'Open Sans', sans-serif;
    font-weight: 700;
	color: #5499C7;
}



</style>
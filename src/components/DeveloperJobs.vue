<template>

	<div class="developerJobs">
		<header>
			<div id="components-navbar">
				<nav-bar-cust :pageNow="pageNowData"></nav-bar-cust>
			</div>
		</header>

		<main role="main">
			<div class="jumbotron jumbotron-fluid">
			  <div class="container">
				<h1 class="display-4">{{ title }}</h1>
				<p class="lead">{{ subtitle }}</p>
			  </div>
			</div>

			
			<!-- FOOTER -->
			
		</main>
		<footer class="footer">
			<div class="container">
				<span class="text-muted">{{ footerText }}</span>
			</div>
		</footer>
	</div>
</template>



<script>




export default {
  name: 'developerJobs',
  
  data () {
    return {
		brandName: 'Nephew',
		title: 'developerJobs',
		subtitle: 'My Jobs',
		pageNowData: "DeveloperJobs",
		footerText: "Nephew footer"		
    }
  },
  methods: {
    logout: function() {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    }
  }
}




</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer {
  left: 0;
  bottom: 0;
  width: 100%;
  color: white;
  text-align: center;
  padding-top:10px;
  height:50px;
  background-color:#eee;
}
  
.navbar-brand {
    color: #5499C7;
	font-size:20px;
	font-family: 'Lato', sans-serif;
	padding-right:20px;

}

.bg-dark{
	opacity: 0.95;
}

.jumbotron-fluid{
	background-image: url(../assets/images/bg10.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940);
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
}

.nav {
	padding:5px;
	background-color: #000;
	border: 0;
	border-radius: 0;
}

.nav-item{
	padding-top:5px;
}

.nav-link{
	color: #fff;
}




</style>

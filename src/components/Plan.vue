<template>

	<div class="plan">
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

			<div class="container marketing">
				<!-- Three columns of text below the carousel -->
				<div class="row">
				  <div class="col-lg-4">
					<img class="rounded-circle"  alt="Generic placeholder image" width="140" height="140">
					<h2>Heading</h2>
					<p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
					<p><a class="btn btn-secondary" href="#" role="button">View details »</a></p>
				  </div><!-- /.col-lg-4 -->
				  <div class="col-lg-4">
					<img class="rounded-circle"  alt="Generic placeholder image" width="140" height="140">
					<h2>Heading</h2>
					<p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
					<p><a class="btn btn-secondary" href="#" role="button">View details »</a></p>
				  </div><!-- /.col-lg-4 -->
				  <div class="col-lg-4">
					<img class="rounded-circle"  alt="Generic placeholder image" width="140" height="140">
					<h2>Heading</h2>
					<p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
					<p><a class="btn btn-secondary" href="#" role="button">View details »</a></p>
				  </div><!-- /.col-lg-4 -->
				</div><!-- /.row -->


				<!-- START THE FEATURETTES -->

				<hr class="featurette-divider">

				<div class="row featurette">
				  <div class="col-md-7">
					<h2 class="featurette-heading">First featurette heading. <span class="text-muted">It'll blow your mind.</span></h2>
					<p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
				  </div>
				  <div class="col-md-5">
					<img class="featurette-image img-fluid mx-auto"  alt="500x500" style="width: 500px; height: 500px;" data-holder-rendered="true">
				  </div>
				</div>

				<hr class="featurette-divider">

				<div class="row featurette">
				  <div class="col-md-7 order-md-2">
					<h2 class="featurette-heading">Oh yeah, it's that good. <span class="text-muted">See for yourself.</span></h2>
					<p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
				  </div>
				  <div class="col-md-5 order-md-1">
					<img class="featurette-image img-fluid mx-auto"  alt="500x500" style="width: 500px; height: 500px;"  data-holder-rendered="true">
				  </div>
				</div>

				<hr class="featurette-divider">

				<div class="row featurette">
				  <div class="col-md-7">
					<h2 class="featurette-heading">And lastly, this one. <span class="text-muted">Checkmate.</span></h2>
					<p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
				  </div>
				  <div class="col-md-5">
					<img class="featurette-image img-fluid mx-auto" alt="500x500" style="width: 500px; height: 500px;"  data-holder-rendered="true">
				  </div>
				</div>

				<hr class="featurette-divider">

				<!-- /END THE FEATURETTES -->

			</div><!-- /.container -->
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
import firebase from 'firebase';
export default {
  name: 'plan',
  
  data () {
    return {
		brandName: 'Nephew',
		title: 'Buy your plan',
		subtitle: 'Get the best plan that suits right for you',
		pageNowData: "Plan",
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


<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}


.heading > span {
	color: #5499C7;
	font-weight: 700;
	font-size:30px;
}

.jumbotron.hero .subheading {
	font-family: 'Open Sans', sans-serif;
    font-weight: 700;
	color: #5499C7;
	
}
.subheading {
	padding-right:30px;
	font-family: 'Open Sans', sans-serif;
    font-weight: 700;
	color: #fff;
	font-size:20px;
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
	color: #eee;
}

.card{
	padding:5px;
}

.jumbotron-fluid{
	background-image: url(../assets/images/bg1.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940);
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
}

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
  
</style>

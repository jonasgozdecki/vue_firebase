<template>

  <div class="about">
    <!--h1>{{ msg }}</h1-->
	
	<header>
	<div class="container-fluid">
		<div class="jumbotron hero">

			<nav class="navbar">
				<div class="container">
					<div id="navbar" class="navbar navbar-nav navbar-static-top">
						<ul class="nav navbar-default navbar-right">
							<li><a href="#">Home</a></li>
							<li><a href="#" v-on:click="about">Sobre</a></li>
							<li><a href="#" v-on:click="jobs" >Trabalhos</a></li>
							<li><a href="#" v-on:click="contact" >Contato</a></li>
							<li><a href="#"v-on:click="login" >Login</a></li>
					  </ul>
					</div>
				</div>
			</nav>
			<div class="text-center hero-row">
				<h1 class="heading"><span>Nephew</span> Design</h1>
                <h2 class="subheading">Agência Virtual</h2>
				
			</div>
		</div>
	</div>
</header>

		
		
<div class="container">
	<div class="row">
        <!-- Boxes de Acoes -->
    	<div class="col-xs-12 col-sm-6 col-lg-4">
			<div class="box">							
				<div class="icon">
					<div class="image"><i class="fa fa-thumbs-o-up"></i></div>
					<div class="info">
						<h3 class="title">Made with Bootstrap</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in lobortis nisl, vitae iaculis sapien. Phasellus ultrices gravida massa luctus ornare. Suspendisse blandit quam elit, eu imperdiet neque semper.
						</p>
						<div class="more">
							<a href="#" title="Title Link">
								Read More <i class="fa fa-angle-double-right"></i>
							</a>
						</div>
					</div>
				</div>
				<div class="space"></div>
			</div> 
		</div>
			
        <div class="col-xs-12 col-sm-6 col-lg-4">
			<div class="box">							
				<div class="icon">
					<div class="image"><i class="fa fa-flag"></i></div>
					<div class="info">
						<h3 class="title">Icons by Font Awesome</h3>
    					<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in lobortis nisl, vitae iaculis sapien. Phasellus ultrices gravida massa luctus ornare. Suspendisse blandit quam elit, eu imperdiet neque semper.
						</p>
						<div class="more">
							<a href="#" title="Title Link">
								Read More <i class="fa fa-angle-double-right"></i>
							</a>
						</div>
					</div>
				</div>
				<div class="space"></div>
			</div> 
		</div>
			
        <div class="col-xs-12 col-sm-6 col-lg-4">
			<div class="box">							
				<div class="icon">
					<div class="image"><i class="fa fa-desktop"></i></div>
					<div class="info">
						<h3 class="title">Desktop Friendly</h3>
    					<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in lobortis nisl, vitae iaculis sapien. Phasellus ultrices gravida massa luctus ornare. Suspendisse blandit quam elit, eu imperdiet neque semper.
						</p>
						<div class="more">
							<a href="#" title="Title Link">
								Read More <i class="fa fa-angle-double-right"></i>
							</a>
						</div>
					</div>
				</div>
				<div class="space"></div>
			</div> 
		</div>		    
		<!-- /Boxes de Acoes -->
	</div>
</div>
		
		
		

    <div class="container mb-5 mt-5">
    <div class="pricing card-deck flex-column flex-md-row mb-3">
        <div class="card card-pricing text-center px-3 mb-4">
            <span class="h6 w-60 mx-auto px-4 py-1 rounded-bottom bg-primary text-white shadow-sm">Starter</span>
            <div class="bg-transparent card-header pt-4 border-0">
                <h1 class="h1 font-weight-normal text-primary text-center mb-0" data-pricing-value="15">$<span class="price">3</span><span class="h6 text-muted ml-2">/ per month</span></h1>
            </div>
            <div class="card-body pt-0">
                <ul class="list-unstyled mb-4">
                    <li>Up to 5 users</li>
                    <li>Basic support on Github</li>
                    <li>Monthly updates</li>
                    <li>Free cancelation</li>
                </ul>
                <button type="button" class="btn btn-outline-secondary mb-3">Order now</button>
            </div>
        </div>
        <div class="card card-pricing popular shadow text-center px-3 mb-4">
            <span class="h6 w-60 mx-auto px-4 py-1 rounded-bottom bg-primary text-white shadow-sm">Professional</span>
            <div class="bg-transparent card-header pt-4 border-0">
                <h1 class="h1 font-weight-normal text-primary text-center mb-0" data-pricing-value="30">$<span class="price">6</span><span class="h6 text-muted ml-2">/ per month</span></h1>
            </div>
            <div class="card-body pt-0">
                <ul class="list-unstyled mb-4">
                    <li>Up to 5 users</li>
                    <li>Basic support on Github</li>
                    <li>Monthly updates</li>
                    <li>Free cancelation</li>
                </ul>
                <a href="https://www.totoprayogo.com" target="_blank" class="btn btn-primary mb-3">Order Now</a>
            </div>
        </div>
        <div class="card card-pricing text-center px-3 mb-4">
            <span class="h6 w-60 mx-auto px-4 py-1 rounded-bottom bg-primary text-white shadow-sm">Business</span>
            <div class="bg-transparent card-header pt-4 border-0">
                <h1 class="h1 font-weight-normal text-primary text-center mb-0" data-pricing-value="45">$<span class="price">9</span><span class="h6 text-muted ml-2">/ per month</span></h1>
            </div>
            <div class="card-body pt-0">
                <ul class="list-unstyled mb-4">
                    <li>Up to 5 users</li>
                    <li>Basic support on Github</li>
                    <li>Monthly updates</li>
                    <li>Free cancelation</li>
                </ul>
                <button type="button" class="btn btn-outline-secondary mb-3">Order now</button>
            </div>
        </div>
        <div class="card card-pricing text-center px-3 mb-4">
            <span class="h6 w-60 mx-auto px-4 py-1 rounded-bottom bg-primary text-white shadow-sm">Enterprise</span>
            <div class="bg-transparent card-header pt-4 border-0">
                <h1 class="h1 font-weight-normal text-primary text-center mb-0" data-pricing-value="60">$<span class="price">12</span><span class="h6 text-muted ml-2">/ per month</span></h1>
            </div>
            <div class="card-body pt-0">
                <ul class="list-unstyled mb-4">
                    <li>Up to 5 users</li>
                    <li>Basic support on Github</li>
                    <li>Monthly updates</li>
                    <li>Free cancelation</li>
                </ul>
                <button type="button" class="btn btn-outline-secondary mb-3">Order now</button>
            </div>
        </div>
    </div>
</div>
<div class="text-muted mt-5 mb-5 text-center small">by : <a class="text-muted" target="_blank" href="http://totoprayogo.com">totoprayogo.com</a></div>

    <button v-on:click="logout">Logout</button>
	<button v-on:click="customers">Customers</button>
  </div>
</template>



<script>





import firebase from 'firebase';
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    logout: function() {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    },
	customers: function() {
		this.$router.replace('customers')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
a {
  color: #42b983;
}

.card-pricing.popular {
    z-index: 1;
    border: 3px solid #007bff;
}
.card-pricing .list-unstyled li {
    padding: .5rem 0;
    color: #6c757d;
}






h1, h2, h3, h4, h5, h6 {
	font-family: 'Lato', sans-serif;
    font-weight: 700;
}

header, section, footer, aside, nav, main, article, figure {
    display: block; 
}

p {
	font-family: 'Open Sans', sans-serif;
	font-size: 14px;
}

.container-fluid {
	margin: 0;
	padding: 0;
	width:100%;
}

.btnx-blue {
    background-color: #2874A6;
}

.btnx-blue:hover,
.btnx-blue:focus,
.btnx-blue:active,
.btnx-blue:visited {
    background-color: #1F618D;
    color: #fcfcfc;
}

.btnx-white {
    background-color: #fcfcfc;
    color: #131313;
}

.btnx-white:hover {
    background-color: #D0D3D4;
    color: #131313;
}

.btnx-white:hover,
.btnx-white:focus,
.btnx-white:active,
.btnx-white:visited {
    background-color: #D0D3D4;
    color: #131313;
}

.navbar {
	background-color: transparent;
	border: 0;
	border-radius: 0;
}

.navbar-header > div > span {
	font-size: 32px;
	color: #fcfcfc;
}

.navbar-header > div > span:hover {
	cursor: pointer;
}

.navbar-brand {
	color: #fcfcfc;
	font-size: 24px;
}

.navbar-brand:hover,
.navbar-brand:focus {
	color: #2874A6;
	font-size: 24px;
}

.navbar-nav a {
	color: #fcfcfc;
	font-size: 14px;
}

.nav > li > a:hover,
.nav > li > a:focus {
	background-color: transparent;
	color: #2874A6;
}

.nav > li.active {
	border-bottom: 3px solid #2874A6;
}

.nav > hr {
    border: 2px solid #2874A6;
}

.jumbotron.hero {
	color: #fcfcfc;
	height: 100vh;
	margin: 0;
	padding: 0;
	background-image: url(https://imgnooz.com/sites/default/files/wallpaper/travel/66569/los-angeles-night-wallpapers-66569-6541364.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940);
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	display: table;
	border-radius: 0;
	width:100%;
}

.jumbotron.hero .heading {
	font-weight: 900;
}

.jumbotron.hero .heading > span {
	color: #5499C7;
}

.jumbotron.hero .subheading {
	font-family: 'Open Sans', sans-serif;
    font-weight: 700;
	color: #5499C7;
}

.header-features {
	padding: 10px;
}

.header-features > div {
	padding: 0 50px;
}

.header-features > div > div {
	border-left: 1px solid #2874A6;
	border-right: 1px solid #2874A6;
}

.header-features > div > span {
	font-size: 32px;
}

.header-features p {
	font-size: 14px;
}

.hero-row {
	display: table-row;
	
}

.hero-row.hero-bottom {
	display: table-cell;
	vertical-align: bottom;
	
}

@media only screen and (max-width: 768px) {
	.navbar-nav a {
		font-size: 18px;
		text-align: center;
	}
	.nav > li.active {
		border-bottom: none;
	}
}





.box > .icon { text-align: center; position: relative; }

.box > .icon:hover > .image { background: #333; }
.box > .icon > .image > i { font-size: 36px !important; color: #fff !important; }
.box > .icon:hover > .image > i { color: white !important; }
.box > .icon > .info { margin-top: 12px; background: rgba(0, 0, 0, 0.04); border: 1px solid #e0e0e0; padding: 15px 0 10px 0; }
.box > .icon:hover > .info { background: rgba(0, 0, 0, 0.04); border-color: #e0e0e0; color: white; }
.box > .icon > .info > h3.title { font-family: "Roboto",sans-serif !important; font-size: 16px; color: #222; font-weight: 500; }
.box > .icon > .info > p { font-family: "Roboto",sans-serif !important; font-size: 13px; color: #666; line-height: 1.5em; margin: 20px;}
.box > .icon:hover > .info > h3.title, .box > .icon:hover > .info > p, .box > .icon:hover > .info > .more > a { color: #222; }
.box > .icon > .info > .more a { font-family: "Roboto",sans-serif !important; font-size: 12px; color: #222; line-height: 12px; text-transform: uppercase; text-decoration: none; }
.box > .icon:hover > .info > .more > a { color: #fff; padding: 6px 8px; background-color: #63B76C; }
.box .space { height: 30px; }
</style>

<template>
	<div class="contact">
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

			<div class="contact-us">
		   <div class="container">
			  <div class="contact-form">
			   <div class="row">
				   <div class="col-sm-7">                  
						<form id="ajax-contact"  method="post" action="contact-form-mail.php" role="form">
							<div class="messages" id="form-messages"></div>
							<div class="controls">
								<div class="row">
									<div class="col-md-6">
										<div class="form-group">
											<label for="form_name">Firstname *</label>
											<input id="form_name" type="text" name="name" class="form-control" placeholder="Please enter your firstname *" required="required" data-error="Firstname is required.">
											<div class="help-block with-errors"></div>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<label for="form_lastname">Lastname *</label>
											<input id="form_lastname" type="text" name="surname" class="form-control" placeholder="Please enter your lastname *" required="required" data-error="Lastname is required.">
											<div class="help-block with-errors"></div>
										</div>
									</div>
								</div>
								<div class="row">
									<div class="col-md-6">
										<div class="form-group">
											<label for="form_email">Email *</label>
											<input id="form_email" type="email" name="email" class="form-control" placeholder="Please enter your email *" required="required" data-error="Valid email is required.">
											<div class="help-block with-errors"></div>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<label for="form_phone">Phone*</label>
											<input id="form_phone" type="tel" name="phone"  class="form-control" placeholder="Please enter your phone*" required oninvalid="setCustomValidity('Plz enter your correct phone number ')" onchange="try{setCustomValidity('')}catch(e){}">	
										</div>
									</div>
								</div>
								<div class="row">
									<div class="col-md-12">
										<div class="form-group">
											<label for="form_message">Message *</label>
											<textarea id="form_message" name="message" class="form-control" placeholder="Message for me *" rows="4" required="required" data-error="Please,leave us a message."></textarea>
											<div class="help-block with-errors"></div>
										</div>
									</div>
									<div class="col-md-12">
										<input type="submit" class="btn btn-black" value="Send message">
									</div>
								</div>
								<div class="row">
									<div class="col-md-12">
									   <br>
										<small class="text-muted"><strong>*</strong> These fields are required.</small>
									</div>
								</div>
							</div>
						</form>
				   </div>
				   <div class="col-sm-5">
					   <div class="row col1">
						   <div class="col-xs-3">
							   <i class="fa fa-map-marker" style="font-size:16px;"></i>   Address:  
						   </div>
						   <div class="col-xs-9">
								   José Vieira St. Santa Catarina<br> Joinville 23, SC 253
						   </div>
					   </div>
					   
						<div class="row col1">
							<div class="col-sm-3">
								<i class="fa fa-phone"></i>   Phone
							</div>
							<div class="col-sm-9">
								 +(47) 999 999 999
							</div>
						</div>
						<div class="row col1">
							<div class="col-sm-3">
								 <i class="fa fa-fax"></i>    Fax  
							</div>
							<div class="col-sm-9">
								  888 888 888
							</div>
						</div>
						<div class="row col1">
							<div class="col-sm-3">
								<i class="fa fa-envelope"></i>   Email
							</div>
							<div class="col-sm-9">
								 <a href="mailto:info@yourdomain.com">info@yourdomain.com</a> <br> <a href="mailto:support@yourdomain.com">support@yourdomain.com</a>
							</div>
						</div><br>
						<iframe width="100%" height="230" frameborder="0" style="border-radius:0px;border-radius:20px;" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5058.731923058656!2d-48.84706021781467!3d-26.292036627539662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5f28a2d47ffac773!2sEscola+do+Teatro+Bolshoi+no+Brasil!5e0!3m2!1spt-BR!2sbr!4v1546739773559&output=embed"></iframe>

				   </div>
			   </div>
			   
			  </div>
		   </div>
	   </div>

			
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
  name: 'contact',
  
  data () {
    return {
		brandName: 'Nephew',
		title: 'Contact Nephew',
		subtitle: 'Get in touch with us',
		pageNowData: "Contact",
		footerText: "Nephew footer"		
    }
  },
  methods: {
    logout: function() {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    }
  },
  setCustomValidity(test){
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
	background-image: url(../assets/images/bg0.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940);
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

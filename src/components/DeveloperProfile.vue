<template>

	<div class="developerProfile">
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
			

		<div class="container bootstrap snippet">
    
			<div class="row">
				<div class="col-sm-3"><!--left col-->
					<div class="text-center">
						<img src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png" :src="photoURL" class="avatar img-circle img-thumbnail" alt="avatar">
						<label for="file-upload" class="custom-file-upload">
							<i class="glyphicon glyphicon-cloud-upload"></i>Upload
						</label>
						<input id="file-upload" type="file" @change="detectFiles($event)"/>
						<div class="progress" v-if="uploading && !uploadEnd">
						  <div class="progress-bar progress-bar-striped bg-info progress-bar-animated" role="progressbar" aria-valuenow="progressUpload" aria-valuemin="0" aria-valuemax="100" style="width: 75%"></div>
						</div>
					</div>

					<ul class="list-group">
						<li class="list-group-item text-muted">Activity <i class="fa fa-dashboard fa-1x"></i></li>
						<li class="list-group-item text-right"><span class="pull-left"><strong>Shares</strong></span> 125</li>
						<li class="list-group-item text-right"><span class="pull-left"><strong>Likes</strong></span> 13</li>
						<li class="list-group-item text-right"><span class="pull-left"><strong>Posts</strong></span> 37</li>
						<li class="list-group-item text-right"><span class="pull-left"><strong>Followers</strong></span> 78</li>
					</ul> 
				</div><!--/col-3-->
				<div class="col-sm-9">
						  <form class="form" action="##" method="post" id="registrationForm">
							  <div class="form-group">
								  
								  <div class="col-xs-6">
									  <label for="first_name"><h4>First name</h4></label>
									  <input type="text" class="form-control" v-model="dbUser.displayName" name="first_name" id="first_name" placeholder="first name" title="enter your first name if any.">
								  </div>
							  </div>
							  				  
							  <div class="form-group">
								  
								  <div class="col-xs-6">
									  <label for="phone"><h4>Phone</h4></label>
									  <input type="text" class="form-control" v-model="dbUser.phone" name="phone" id="phone" placeholder="enter phone" title="enter your phone number if any.">
								  </div>
							  </div>
				  
							  <div class="form-group">
								  <div class="col-xs-6">
									 <label for="mobile"><h4>Mobile</h4></label>
									  <input type="text" class="form-control" v-model="dbUser.mobile" name="mobile" id="mobile" placeholder="enter mobile number" title="enter your mobile number if any.">
								  </div>
							  </div>
							  <div class="form-group">
								  
								  <div class="col-xs-6">
									  <label for="email"><h4>Email</h4></label>
									  <input type="email" class="form-control" v-model="dbUser.email" name="email" id="email" placeholder="you@email.com" title="enter your email.">
								  </div>
							  </div>
							  <div class="form-group">
								  
								  <div class="col-xs-6">
									  <label for="email"><h4>Location</h4></label>
									  <input type="email" class="form-control" v-model="dbUser.location" id="location" placeholder="somewhere" title="enter a location">
								  </div>
							  </div>
							  <div class="form-group">
								  
								  <div class="col-xs-6">
									  <label for="password"><h4>Password</h4></label>
									  <input type="password" class="form-control" v-model="dbUser.password" name="password" id="password" placeholder="password" title="enter your password.">
								  </div>
							  </div>
							  <div class="form-group">
								  
								  <div class="col-xs-6">
									<label for="password2"><h4>Verify</h4></label>
									  <input type="password" class="form-control" name="password2" id="password2" placeholder="password2" title="enter your password2.">
								  </div>
							  </div>
							  <div class="form-group">
								   <div class="col-xs-12">
										<br>
										<button class="btn btn-lg btn-success" type="submit"><i class="glyphicon glyphicon-ok-sign"></i> Save</button>
										<button class="btn btn-lg" type="reset"><i class="glyphicon glyphicon-repeat"></i> Reset</button>
									</div>
							  </div>
						</form>
					</div>
				</div><!--/col-9-->
			</div><!--/row-->			
		</main>
		<footer class="footer">
			<div class="container">
				<span class="text-muted">{{ footerText }}</span>
			</div>
		</footer>
	</div>
</template>



<script>


import firebase from 'firebase'

export default {
  name: 'developerProfile',
  
  data () {
    return {
		brandName: 'Nephew',
		title: 'developerProfile',
		subtitle: 'My profile',
		pageNowData: "DeveloperProfile",
		footerText: "Nephew footer",

		progressUpload: 0,
		fileName: '',
		uploadTask: '',
		uploading: false,
		uploadEnd: false,
		downloadURL: '',
		photoURL : localStorage.photoURL,

		
		dbUser: {
		  uid: localStorage.uid,
		  displayName: localStorage.displayName,
		  photoName: '',
		  photoUrl: '',
          phone: '',
          mobile: '',
		  email: localStorage.email,
		  location: '',
		  password: ''
		}
		
		

    }
  },  
  
  mounted () {
	//getLoggedUserDetails();
	//this.tempCreateUserDetails();
  }, 
  
  methods: {
    /*logout: function() {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    },*/
	
	saveUserDetails: function() {
		let userRef = firebase.database().ref('users/' + this.dbUser.uid)
		userRef.set(this.dbUser);
	},
	
	updateDBUserPhoto: function() {
		let userRef = firebase.database().ref('users/' + this.dbUser.uid).
		userRef.set(this.dbUser);
		photoName
		this.photoUrl
		photoName
		this.fileName
		
	},
	
	detectFiles : function(e) {
      let fileList = e.target.files || e.dataTransfer.files
      Array.from(Array(fileList.length).keys()).map(x => {
        this.upload(fileList[x])
      })
    },
	
	upload: function(file) {
		firebase.storage().ref('usersImages/' + file.name).delete().then(() => {
			this.fileName = file.name
			this.uploading = true
			this.uploadTask = firebase.storage().ref('usersImages/' + file.name).put(file)
		})
		.catch((error) => {
		  console.error('file delete error occured.')
		})
    },
	
	
	getLoggedUserDetails: function() {
		
		/*this.displayName = 
		this.uid = localStorage.uid;
		this.photoURL = localStorage.photoURL;
		this.email = localStorage.email;*/
		
	
		
	
	},
	
	changeEmail: function() {
	
		/*firebase.auth()
		.signInWithEmailAndPassword('you@domain.com', 'correcthorsebatterystaple')
		.then(function(userCredential) {
			userCredential.user.updateEmail('newyou@domain.com')
		})*/
	},
	
	changePassword: function() {	
		/*this.af.auth.currentUser.updatePassword(password)
		.then(() => {
		  ...
		});*/
	}
	
	
	
	
	
  },
  
  watch: {
    uploadTask: function () {
      this.uploadTask.on('state_changed', sp => {
        this.progressUpload = Math.floor(sp.bytesTransferred / sp.totalBytes * 100)
      },
      null,
      () => {
        this.uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
          this.uploadEnd = true
          this.downloadURL = downloadURL
		  localStorage.setItem('photoURL', this.downloadURL)
		  this.photoURL = this.downloadURL
		  this.updateDBUserPhoto();
          this.$emit('downloadURL', downloadURL)
		  
        })
      })
    }
  }
}




</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.progress{
	margin:5px;
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
	background-image: url(../assets/images/bg9.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940);
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

input[type="file"] {
    display: none;
}
.custom-file-upload {
	margin: 5px;
    border: 1px solid #ccc;
    display: inline-block;
    padding: 6px 12px;
    cursor: pointer;
}


</style>

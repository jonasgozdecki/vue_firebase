// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'
import { Layout } from 'bootstrap-vue/es/components';

Vue.config.productionTip = false
Vue.use(Layout);

let app;
let config = {
  apiKey: "AAA",
  authDomain: "my_project.firebaseapp.com",
  databaseURL: "https://my_project.firebaseio.com",
  projectId: "my_project",
  storageBucket: "my_project.appspot.com",
  messagingSenderId: "888"
};

firebase.initializeApp(config)
firebase.auth().onAuthStateChanged(function(user) {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      el: '#app',
      template: '<App/>',
      components: { App },
	  render: h => h(App),
      router
    })
  }

	
  
});
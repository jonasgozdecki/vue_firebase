<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button v-on:click="logout">Logout</button>
	<button v-on:click="home">Home</button>
  </div>
</template>

<script>
import firebase from 'firebase';
export default {
  name: 'customers',
  data () {
    return {
      msg: 'Customers Page'
    }
  },
  methods: {
    logout: function() {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    },
	home: function() {
		this.$router.replace('hello')
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
</style>
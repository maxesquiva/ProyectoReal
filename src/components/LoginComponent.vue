<template>
    <div>
    <h2>Login</h2>
    <form>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email">
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password">
      </div>
      <button type="button" @click="submitForm">Login</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
const url = "http://localhost:8000/api";

export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    submitForm() {
      const data = {
        email: this.email,
        password: this.password
      }
      axios.post(url+"/login/", data)
        .then(response => {
          console.log(response.data)
            // this.getTasks();
            // this.show = false;
            // window.location.reload()
          this.$router.push('/Create')
        })
        .catch(error => { 
          alert("Usuario o contraseña no valido")
          console.log(error.response) 
        })
     
    }
  }
}
</script>
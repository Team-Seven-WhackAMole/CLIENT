<template>
<div class="login" style="height: 100vh;">
  <div class="container d-flex h-100 justify-content-center align-items-center">
    <div class="card shadow bg-info">
      <div class="card-body">
    <form
    @submit.prevent="login">
      <div class="form-group">
    <label for="username">Username</label>
    <input
    v-model="username"
    type="text" class="form-control" id="username" placeholder="Username">
  </div>
    <button class="btn btn-dark btn-block" type="submit">Login</button>
    </form>
      </div>
    </div>
  </div>
</div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Login',
  data () {
    return {
      username: ''
    }
  },
  methods: {
    login () {
      const payload = this.username
      console.log(payload)
      localStorage.setItem('username', payload)
      this.$socket.emit('login', payload)
      this.$router.push('/lobby')
      // this.$store.dispatch('login', payload)
    }
  }
}
</script>

<style scoped>

.login{
  background-image: url('../assets/mole-bg.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
}

</style>

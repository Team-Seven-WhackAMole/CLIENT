<template>
<div class="room">
  <div class="container d-flex h-100 justify-content-center align-items-center">
    <div class="card shadow bg-info">
      <div class="card-body">
        <form @submit.prevent="login">
          <div class="form-group">
            <label for="username">Username</label>
            <input v-model="username" type="text" class="form-control" id="username" placeholder="Username">
          </div>
        </form>
        <button class="btn btn-dark btn-block">Login</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Room',
  data() {
    return {
      username: '',
    };
  },
  methods: {
    lobby() {
      const payload = this.username;
      localStorage.setItem('username', payload);
      this.$socket.emit('room', payload);
      this.$router.push('/game');
    },
  },
};
</script>

<style scoped>
.container {
  background-image: url("../assets/mole-bg.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
}
</style>

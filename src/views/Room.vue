<template>
  <div class="container">
    <h2
    v-for="(ononlineUser, i) in onlineUsers"
    :key="i"
    class="mt-3">Welcome {{ ononlineUser }}</h2>
    <form
      @submit.prevent="room"
      class="form-inline justify-content-center mt-3"
    >
      <div class="form-group mx-sm-3 mb-2">
        <input
          v-model="nameRoom"
          type="text"
          class="form-control"
          id="createRoom"
          placeholder="Please your room name"
        />
      </div>
      <button type="submit" class="btn btn-dark mb-2">Create Room</button>
    </form>

    <div class="card ml-3 mr-3 mt-3" style="width: 18rem">
      <div class="card-body">
        <h5 class="card-title">Room Name</h5>
        <p class="card-text">Status</p>
        <a href="#" class="btn btn-dark">Join</a>
      </div>
    </div>

    <!-- <div class="card ml-3 mr-3 mt-3" style="width: 18rem">
      <div class="card-body">
        <h5 class="card-title">Room Name</h5>
        <p class="card-text">Status</p>
        <a href="#" class="btn btn-dark">Join</a>
      </div>
    </div>

    <div class="card ml-3 mr-3 mt-3" style="width: 18rem">
      <div class="card-body">
        <h5 class="card-title">Room Name</h5>
        <p class="card-text">Status</p>
        <a href="#" class="btn btn-dark">Join</a>
      </div>
    </div> -->

    <div class="card ml-3 mr-3 mt-3" style="width: 18rem">
      <div class="card-body">
        <h5 class="card-title">Room Name</h5>
        <p class="card-text">Status</p>
        <a href="#" class="btn btn-dark">Join</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Room",
  data() {
    return {
      nameRoom: ''
    }
  },
  computed: {
    onlineUsers() {
      return this.$store.state.onlineUser;
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

<template>
<div style="height: 100vh; align-items: center; position: relative">
  <div style="position: absolute;">
    <video autoplay muted loop id="myVideo" style="height: auto; width: 100%; z-index: -2; position: relative;">
      <source src="../assets/kids.mp4" type="video/mp4">
    </video>
  </div>
  <div class="container p-5">
    <div class="row mt-2">
      <div class="col-4"></div>
      <form @submit.prevent="createRoom" class="col-4">
        <div class="form-group">
          <label for="room">Enter room name</label>
          <input v-model="newRoom" type="text" class="form-control" id="room" placeholder="Room Name">
          <button type="submit" class="btn btn-info btn-block mt-2">Create new room</button>
        </div>
      </form>
      <div class="col-4"></div>
    </div>
    <div class="row mt-5">
      <div v-for="(room, i) in rooms" :key="i" class="col-4 m-4">
        <div class="card bg-light shadow" style="width: 100%;">
          <div class="card-body">
            <h5 class="card-title">{{ room.name }}</h5>
            <div class="row h-100">
              <div v-for="(user, i) in room.users" :key="i" class="bg-secondary d-flex card shadow m-2">
                <div class="d-flex">
                  <img class="img-fluid" style="width: 40px" :src="`https://avatars.dicebear.com/api/avataaars/${user}.svg`" alt="avatar">
                  <div class="flex-fill p-0 mx-1 align-items-center d-flex">
                    <span>{{user}}</span>
                  </div>
                </div>
              </div>
            </div>
            <button 
            v-if="!room.status"
            @click="joinRoom(room.name)" class="btn btn-info btn-block mt-4">Join</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "Lobby",
  data() {
    return {
      username: "",
      newRoom: ""
    };
  },
  methods: {
    createRoom() {
      const payload = {
        admin: localStorage.username,
        room: this.newRoom
      };
      this.$socket.emit('createRoom', payload)
    },
    joinRoom(roomName) {
      const payload = {
        username: localStorage.username,
        roomName: roomName
      }
      this.$socket.emit('joinRoom', payload)
      this.$router.push(`/lobby/${roomName}`)
    }
  },
  computed: {
    rooms() {
      return this.$store.state.rooms
    }
  }
};
</script>

<style scoped>
</style>

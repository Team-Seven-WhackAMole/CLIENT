<template>
<div>
  <div class="room" v-if="!iStart">
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="card shadow shadow-lg bg bg-warning" style="width: 40rem; margin-top: 140px">
          <div class="card-body">
            <h5 class="card-title">Welcome to {{playersInRoom.name}}</h5>
            <h6 class="card-text">Number of players: {{playersInRoom.users.length}}</h6>
            <a href="" @click.prevent="changeStatus" class="btn btn-success mt-5">let's play</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Game v-else>
  </Game>
</div>
</template>

<script>
import Game from './Game.vue'

export default {
  name: "Room",
  components: {
    Game
  },
  methods: {
    toGame(roomName) {
      const payload = {
        username: localStorage.username,
        roomName: roomName
      }
      this.$router.push(`/game/${roomName}`)
    },
    changeStatus() {
      this.$socket.emit('startGame', this.$store.state.activeRoom.name)
      this.$store.commit('changeStatus')
    }
  },
  computed: {
    playersInRoom() {
      return this.$store.state.activeRoom
    },
    iStart() {
      return this.$store.state.activeRoom.status
    }
  }
};
</script>

<style scoped>
.room {
  background-image: url("../assets/img/poly-mount.jpg");
  background-size: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
}

.container {
  margin-top: 8%;
}

.inner {
  overflow: hidden;
}

.inner img {
  transition: all 1.5s ease;
}

.inner:hover img {
  transform: scale(1.5);
}

.card-body h5,
h6 {
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}
</style>

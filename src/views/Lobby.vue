<template>
  <div class="container">
    <form
      @submit.prevent="lobby"
      class="form form-inline justify-content-center mt-3"
    >
      <div class="card mt-5 ml-5" style="width: 18rem; height: 25rem">
        <div class="card-body">
          <h5 class="card-title">{{ usernmae }}</h5>
          <p class="card-text mt-5">Point</p>
        </div>
        <p class="btn btn-dark">Player</p>
      </div>
      <div class="card mt-5 ml-5" style="width: 18rem; height: 25rem">
        <div class="card-body">
          <h5 class="card-title">{{ usernmae }}</h5>
          <p class="card-text mt-5">Point</p>
          <p class="card-text"></p>
        </div>
        <p class="btn btn-dark">Player</p>
      </div>
      <button type="submit" class="btn btn-dark mt-5 ml-5">Start Game</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Lobby",
  data() {
    return {
      username: "",
    };
  },
  methods: {
    lobby() {},
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

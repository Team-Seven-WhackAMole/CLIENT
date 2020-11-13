<template>
<div class="result">
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="card shadow shadow-lg" style="width: 20rem; margin-top: 140px">
        <div class="inner">
          <img :src="img" class="card-img-top" alt="...">
        </div>
        <div class="card-body">
          <h5 class="card-title">Player Name</h5>
          <h6 class="card-text">U got 1st place</h6>
          <h6 class="card-text">U got xx points</h6>
          <a href="#" class="btn btn-success">Play again</a>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Result',
  data () {
    return {
      img: 'https://img.freepik.com/free-vector/congratulations-lettering-message-vector-greeting_7233-463.jpg?size=626&ext=jpg'
    }
  }
}
</script>

<style scoped>
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

.result {
  background: rgb(156, 58, 180);
  background: linear-gradient(90deg, rgba(156, 58, 180, 1) 0%, rgba(253, 107, 29, 1) 50%, rgba(252, 241, 69, 1) 100%);
  height: 100vw;
}
</style>

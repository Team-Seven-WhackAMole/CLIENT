<template>
<div class="WhackGame">
  <h1>Whack-A-Mole</h1>

  <button type="button" class="btn btn-warning" onclick="mulai()">Mulai</button>

  <h2 class="papan-skor">0</h2>

  <div class="container">
    <div class="tanah">
      <div class="tikus"></div>
    </div>
    <div class="tanah">
      <div class="tikus"></div>
    </div>
    <div class="tanah">
      <div class="tikus"></div>
    </div>
    <div class="tanah">
      <div class="tikus"></div>
    </div>
    <div class="tanah">
      <div class="tikus"></div>
    </div>
    <div class="tanah">
      <div class="tikus"></div>
    </div>
  </div>

  <audio src="../assets/audio/Pop.mp3" id="pop"></audio>
  <audio src="../assets/audio/Alarm.mp3" id="alarm"></audio>
</div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'WhackGame',
}
</script>

<style scoped>
.WhackGame {
  background: url("../assets/img/horizont.jpg");
  background-repeat: no-repeat;
  background-size: 100%;
  position: relative;
  height: 100vh;
  overflow: hidden;
}

h1,
h2 {
  font-size: 60px;
  text-align: center;
  font-family: arial;
  margin: 10px;
}

button {
  display: block;
  margin: auto;
}

.container {
  width: 700px;
  margin: auto;
  cursor: url("../assets/img/palu1.png"), auto;
}

.container:active {
  cursor: url("../assets/img/palu2.png"), auto;
}

.tanah {
  width: 200px;
  height: 200px;
  position: relative;
  overflow: hidden;
  float: left;
}

.tanah::after {
  content: '';
  display: block;
  width: 200px;
  height: 100px;
  background: url("../assets/img/tanah.png") bottom center no-repeat;
  background-size: 80%;
  position: absolute;
  bottom: -20px;
}

.tikus {
  width: 100%;
  height: 100%;
  background: url("../assets/img/tikus.png") bottom center no-repeat;
  background-size: 60%;
  position: absolute;
  top: 100px;
  transition: top 0.3s;
}

.tanah.muncul .tikus {
  top: -20px;
}
</style>

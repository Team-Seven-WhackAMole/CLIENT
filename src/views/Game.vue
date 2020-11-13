<template>
<div class="game">
  <h1>Whack-a-Mole</h1>

  <button type="button" class="mulai btn btn-warning" @click="mulai">Mulai</button>

  <h2 class="papan-skor" ref="papanSkor">0</h2>

  <div class="container">
    <div class="tanah" ref="tanah">
      <div class="tikus" ref="tikus"></div>
    </div>
    <div class="tanah" ref="tanah">
      <div class="tikus" ref="tikus"></div>
    </div>
    <div class="tanah" ref="tanah">
      <div class="tikus" ref="tikus"></div>
    </div>
    <div class="tanah" ref="tanah">
      <div class="tikus" ref="tikus"></div>
    </div>
    <div class="tanah" ref="tanah">
      <div class="tikus" ref="tikus"></div>
    </div>
    <div class="tanah" ref="tanah">
      <div class="tikus" ref="tikus"></div>
    </div>
  </div>

  <audio src="../assets/audio/Pop.mp3" id="pop" ref="pop"></audio>
  <audio src="../assets/audio/Alarm.mp3" id="alarm" ref="alarm"></audio>
</div>
</template>

<script>
export default {
  data() {
    return {
      tanahSebelumnya: 0,
      selesai: null,
      skor: 0,
      papanSkor: '',
      tanah: [],
      tikus: []
    };
  },
  name: "Game",
  methods: {
    randomTanah(tanah) {
      const t = Math.floor(Math.random() * tanah.length);
      const tRandom = tanah[t];
      if (tRandom == this.tanahSebelumnya) {
        this.randomTanah(tanah);
      }
      this.tanahSebelumnya = tRandom;
      return tRandom;
    },
    randomWaktu(min, max) {
      return Math.round(Math.random() * (max - min) + min);
    },
    munculkanTikus() {
      const tRandom = this.randomTanah(this.tanah);
      const wRandom = this.randomWaktu(300, 1300);
      tRandom.classList.add("muncul");
      setTimeout(() => {
        tRandom.classList.remove("muncul");
        if (!this.selesai) {
          this.munculkanTikus();
        }
      }, wRandom);
    },
    mulai() {
      this.skor = 0;
      this.selesai = false;
      this.papanSkor.textContent = 0;
      this.munculkanTikus();
      setTimeout(() => {
        this.selesai = true;
        const payload = {
          username: localStorage.username,
          skor: this.skor,
          roomId: this.$route.params.id
        }
        this.$socket.emit('gameEnd', payload);
        alarm.play();
      }, 10000);
    },
    pukul() {
      this.skor++;
      pop.play();
      this.papanSkor.textContent = this.skor;
      this.parentNode.classList.remove("muncul");
    }
  },
  created() {
    this.$socket.on('gameEnd', roomDetail => {
      let winner = roomDetail.users[0];
      roomDetail.users.forEach(user => {
        if (user.skor > winner.skor) winner = user;
      })
      this.$router.push(`/lobby/${roomDetail.id}/game/result`);
    })
  },
  mounted() {
    this.tanah = document.querySelectorAll(".tanah");
    this.tikus = document.querySelectorAll(".tikus");
    this.papanSkor = document.querySelector(".papan-skor");
    const pop = document.querySelector("#pop");
    const alarm = document.querySelector("#alarm");
    this.tikus.forEach(t => {
      t.addEventListener("click", this.pukul);
    });
  }
};
</script>

<style>
body {
  background: url("../assets/img/horizont.jpg");
  background-size: 100%;
  height: 100vh;
  position: relative;
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
  content: "";
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

<template>
  <div class="game">
    <h1>Pukul Tikus Tanah</h1>

    <button type="button" class="mulai" @click="mulai">Mulai</button>

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

    <!-- <button @click="test">
        klik me
        <div ref="cobaKlik"></div>
        <div ref="cobaKlik"></div>
        <div ref="cobaKlik"></div>
    </button> -->

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
      skor: 0
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
      const tRandom = this.randomTanah(this.$refs.tanah);
      const wRandom = this.randomWaktu(300, 1300);
      tRandom.classList.add("muncul");
      setTimeout(() => {
        tRandom.classList.remove("muncul");
        if (!selesai) {
          this.munculkanTikus();
        }
      }, wRandom);
    },
    mulai() {
      this.skor = 0;
      this.selesai = false;
      this.$refs.papanSkor.textContent = 0;
      this.munculkanTikus();
      setTimeout(() => {
        this.selesai = true;
        this.$refs.alarm.play();
      }, 10000);
    },
    pukul() {
      this.skor++;
      this.$refs.pop.play();
      this.$refs.papanSkor.textContent = skor;
      this.parentNode.classList.remove("muncul");
    },
    test () {
        console.log(this.$refs)
    }
  },
  created() {
    // const tanah = document.querySelectorAll(".tanah");
    // const tikus = document.querySelectorAll(".tikus");
    // const papanSkor = document.querySelector(".papan-skor");
    // const pop = document.querySelector("#pop");
    // const alarm = document.querySelector("#alarm");
  },
  mounted() {
    this.$refs.tikus.forEach(t => {
      t.addEventListener("click", pukul);
    });
  }
};
</script>

<style>
body {
  background: url("../assets/img/horizont.jpg");
  background-size: 100%;
  position: relative;
  top: 50px;
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
  width: 600px;
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

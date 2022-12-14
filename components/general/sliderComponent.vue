<template>
  <v-carousel hide-delimiters continuous :height="setHeight()" cycle>
    <v-carousel-item src="/slider/1.png" class="slider">
      <div class="fill-height fill-width d-flex justify-md-end justify-center align-center align-md-center">
        <generalTitleComponent>
          <span class="primary--text">SEGUI LAS CARRERAS</span>
          <br>
          EN VIVO

        </generalTitleComponent>
      </div>
    </v-carousel-item>
    <v-carousel-item src="/slider/2.png" class="slider">
      <div class="fill-height fill-width d-flex justify-md-end justify-center align-center align-md-center">
        <generalTitleComponent>
          <span class="primary--text">ESCUCHA TODAS TUS</span>
          <br>
          RADIOS
        </generalTitleComponent>
      </div>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    data() {
      return {
        items: [{
          src: "./slider/1.png",
        }, {
          src: "./slider/2.png",
        }, ],
      };
    },
    methods:{
      setHeight() {
        return window.innerWidth > 768 ? '600' : '300px'
      }
    }
  }

</script>

<style scoped>
  .slider:after {
    background: linear-gradient(to bottom, #b3b3b326, #1c1c1c1f, #121212) !important;
    content: "";
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
  }

</style>

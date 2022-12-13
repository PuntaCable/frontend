<template>
      <v-carousel hide-delimiters continuous cycle>
      <v-carousel-item v-for="(item,i) in items" cover :key="i"  :src="item.src"  class="slider">
        <div class="fill-height fill-width d-flex justify-md-end justify-center align-end align-md-center">
          <generalTitleComponent></generalTitleComponent>
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
          },
        ],
      };
    },

}
</script>

<style scoped>
.slider:after{
    background: linear-gradient(to bottom, #302b6326, #121212) !important;
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
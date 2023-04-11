<template>
  <v-carousel hide-delimiters :height="setHeight()" >
    <v-carousel-item v-for="(item, index) in items.data" :key="index" :src="item.image.url" class="slider">
      <div class="fill-height fill-width d-flex justify-md-end justify-center align-center align-md-center">
        <general-title-component>
          <span v-html="formatString(item.title)"></span>
        </general-title-component>
      </div>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      items: [],
    };
  },
  created(){
    this.getSlider()
  },
  methods: {
    getSlider() {
      this.$axios.get('/sliders/?populate=*').then((response) => {
        this.items = response.data
      })
    },
    formatString(inputString) {
      const words = inputString.split(" ");
      const firstWords = words.slice(0, -1).join(" ");
      const lastWord = words[words.length - 1];

      return `<span class="primary-gradient--text">${firstWords}</span><span class="white--text"> ${lastWord}</span>`;
    },

    setHeight() {
      return window.innerWidth > 768 ? "600" : "300px";
    },
  },
};
</script>

<style scoped>
.slider::after {
  background: linear-gradient(to bottom, #b3b3b326, #1c1c1c1f, #121212) !important;
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 1;
}
</style>

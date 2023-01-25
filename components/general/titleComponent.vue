<template>
  <typewriter ref="typewriter">
    <div class="text-md-h2 text-h4 font-weight-bold title">
      <slot></slot>
    </div>
  </typewriter>
</template>

<script>
  import Typewriter from "typewriter-vue";

  export default {
    name: "App",
    components: {
      Typewriter,
    },
    methods: {},
  };

</script>

<style scoped>
  .title {
    border-left: 10px solid #00ACC1;
    padding-left: 5px;
  }

  @media(max-width:768px) {}

  @media(min-width:768px) {
    .title {
      height: 120px;
      width: 740px
    }
  }

</style>

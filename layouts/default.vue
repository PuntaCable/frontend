<template>
  <v-app>
    <v-main>
      <Header></Header>
      <Nuxt/>
    </v-main>
  </v-app>
</template>

<script>
import Header from "../components/Header.vue";
export default {
    data() {
        return {};
    },
    components: { Header }
}
</script>

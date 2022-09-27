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
import Card from "../components/Card.vue";
export default {
    data() {
        return {};
    },
    components: { Header, Card }
}
</script>

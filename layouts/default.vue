<template>
  <v-app>
    <v-main>
      <GeneralNavigationComponent></GeneralNavigationComponent>
      <Nuxt/>
      <generalFooter></generalFooter>
      <v-btn fixed right bottom icon class="mr-4 mb-4">
      <v-img src="/whatsapp.png" contain width="70" height="70"></v-img>
    </v-btn>
    </v-main>
  </v-app>
</template>

<script>
export default {
    data() {
        return {};
    },
    computed: {
      isMobile() {
        return this.$vuetify.breakpoint.smAndDown
      }
    }


}
</script>

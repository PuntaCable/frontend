<template>
  <v-app>
    <v-main>
      <GeneralNavigationComponent></GeneralNavigationComponent>
      <Nuxt/>
      <generalFooter></generalFooter>
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

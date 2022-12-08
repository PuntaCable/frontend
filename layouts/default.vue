<template>
  <v-app>
    <v-toolbar color="background-gradient" height="80">
      <v-toolbar-title v-if="!isMobile">
        <router-link to="/">
       <img src="/orange-logo.png" alt="" width="120">
          </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="align-center">
          <v-img contain src="/play-btn.svg" alt="" width="120" height="50" class=""/>
          <v-img contain src="/+television.png" alt="" width="90" height="32" class="rounded-xl "/>
          <v-img contain src="/turnos-btn.svg" alt="" width="120" height="35" class="rounded-pill"/>
      </v-toolbar-items>
    </v-toolbar>

    <v-main>
      <GeneralNavigationComponent></GeneralNavigationComponent>
      <Nuxt/>
      <generalFooter></generalFooter>
    </v-main>
  </v-app>
</template>

<script>
export default {
  middleware:'auth',
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

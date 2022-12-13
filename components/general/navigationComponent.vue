<template>
  <div>

    <v-app-bar color="grey darken-4" height="100" elevation="0">
      <v-toolbar-title v-if="!isMobile">
        <router-link to="/">
          <img src="/orange-logo.png" alt="" width="120">
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="align-center">
        <v-img contain src="/play-btn.svg" alt="" width="120" height="50" class="" />
        <v-img contain src="/+television.png" alt="" width="90" height="32" class="rounded-xl " />
        <v-img contain src="/turnos-btn.svg" alt="" width="120" height="35" class="rounded-pill" />
      </v-toolbar-items>
      <template v-slot:extension>
        <template v-if="isMobile">
          <v-app-bar-nav-icon class="" @click="openDrawer =!openDrawer"></v-app-bar-nav-icon>
          <v-spacer></v-spacer>
          <router-link to="/">
            <img contain src="~/static/orange-logo.png" alt="" height="40">
          </router-link>
        </template>
        <template v-else>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn to="/" text class="font-weight-regular">Inicio</v-btn>
            <v-btn to="/#packages" text>Paquetes</v-btn>
            <v-btn to="/schedules" text>Programación</v-btn>
            <v-btn to="/centroAyuda" text>Preguntas frecuentes</v-btn>
            <v-btn to="/contacto" text>Contacto</v-btn>
          </v-toolbar-items>

        </template>

      </template>
    </v-app-bar>


    <v-navigation-drawer app v-model="openDrawer" class="background-gradient">
      <template v-slot:prepend>
        <v-toolbar flat color="background-gradient">
          <v-app-bar-nav-icon @click="openDrawer =!openDrawer"></v-app-bar-nav-icon>
        </v-toolbar>
      </template>
      <v-divider></v-divider>
      <v-list>
        <v-list-item to="/">
          <v-list-item-avatar>
            <v-img src="/icons/home.png"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title class="font-weight-regular">Inicio</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="/#packages">
          <v-list-item-avatar>
            <v-img src="/icons/list.png"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title class="font-weight-regular">Paquetes</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/schedules">
          <v-list-item-avatar>
            <v-img src="/icons/clock.png"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="font-weight-regular">Programacion</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/centroAyuda">
          <v-list-item-avatar>
            <v-img src="/icons/question.png"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="font-weight-regular">Centro de ayuda</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="/contacto">
          <v-list-item-avatar>
            <v-img src="/icons/envelope.png"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title class="font-weight-regular">Contacto</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>

          <v-list-item-content>
            <v-btn large outlined class="rounded-lg">
              <img width="40" src="/icons/stack.png">
              &nbsp;&nbsp;
              <span>Activa tu Deco</span>
            </v-btn>
          </v-list-item-content>
        </v-list-item>
        <v-list-item href="https://app-2np.pages.dev/">

          <v-list-item-content>
            <v-btn large color="primary" class="rounded-lg">
              <img width="40" src="/icons/account.png">
              &nbsp;&nbsp;
              <span class="font-weight-regular black--text">Mi cuenta</span>
            </v-btn>
          </v-list-item-content>
        </v-list-item>


      </v-list>
    </v-navigation-drawer>


  </div>
</template>

<script>
  export default {
    data() {
      return {
        openDrawer: false
      }
    },
    computed: {
      isMobile() {
        return this.$vuetify.breakpoint.smAndDown
      }
    }
  }

</script>

<style>

</style>

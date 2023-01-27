<template>
  <div>
    <v-app-bar v-show="!isMobile" fixed color="#00000012" height="100" elevation="0">
      <v-toolbar-title>
        <router-link to="/">
          <img src="/logo.png" alt="" width="120">
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="align-center">
        <div>
          <v-btn outlined color="white" rounded class="font-weight-bold text-h6  rounded-lg">
            <img src="/icons/plus.png" alt="" width="30">
            <span class="primary-gradient--text">television</span>
          </v-btn>
        </div>
        <div>
          <v-btn outlined color="white" href="https://reservaweb.servimatica.com.uy/" rounded class="font-weight-bold text-h6 rounded-lg">
            <img src="/icons/calendar.png" alt="" width="30">
            <span class="font-weight-bold primary-gradient--text text-capitalize">Turnos</span>
            <span class="font-weight-bold blue--text text-capitalize">Online</span>
          </v-btn>
        </div>
      </v-toolbar-items>
    </v-app-bar>
    <v-app-bar v-show="isMobile || scrollY>100" @scroll.native="checkScroll($e)" :fixed="!isMobile"
      color="grey darken-4" height="100" elevation="0">
      <v-toolbar-title v-if="!isMobile">
        <router-link to="/">
          <img src="/logo.png" alt="" width="120">
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="align-center" v-show="!isMobile" >
        <div>
          <v-btn outlined color="white" rounded class="font-weight-bold text-h6  rounded-lg">
            <img src="/icons/plus.png" alt="" width="30">
            <span class="primary-gradient--text">television</span>
          </v-btn>
        </div>
        <div>
          <v-btn outlined color="white" rounded href="https://reservaweb.servimatica.com.uy/" class="font-weight-bold text-h6 rounded-lg">
            <img src="/icons/calendar.png" alt="" width="30">
            <span class="font-weight-bold primary-gradient--text text-capitalize">Turnos</span>
            <span class="font-weight-bold blue--text text-capitalize">Online</span>
          </v-btn>
        </div>
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
            <v-btn href="https://play.puntacable.com.uy/uplay/servlet/uplayonlogin" text>Hoteles</v-btn>
            <v-btn to="/contacto" text>Contacto</v-btn>
            <div class="mt-1">
              <v-btn color="primary" @click="decoModal = true">ACTIVA TU DECO</v-btn>
            </div>
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
            <v-btn large outlined class="rounded-lg" @click="decoModal = true">
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

    <decoActivationComponent v-model="decoModal"></decoActivationComponent>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        openDrawer: false,
        scrollY: 0,
        decoModal: false
      }
    },
    mounted() {
      window.addEventListener("scroll", this.checkScroll)
    },
    methods: {
      checkScroll(e) {
        this.scrollY = window.top.scrollY
      }
    },
    computed: {
      isMobile() {
        return this.$vuetify.breakpoint.smAndDown
      },
    }
  }

</script>

<style>

</style>

<template>
  <div>
    <v-toolbar v-if="isMobile == false">
      <v-toolbar-title >
        <a href="/"><img src="../static/orange-logo.png" class="pt-2" alt="" width="120"></img></a>
        
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="align-center">
          <v-img contain src="/play-btn.svg" alt="" width="120" height="50" class=""/>
          <v-img contain src="/+television.png" alt="" width="90" height="32" class="rounded-xl "/>
          <v-img contain src="/turnos-btn.svg" alt="" width="120" height="35" class="rounded-pill"/>
      </v-toolbar-items>
    </v-toolbar>
    
    
    <v-divider></v-divider>
    <v-app-bar v-if="isMobile == false">
      <v-toolbar-items class="d-flex justify-space-around fill-width">
        <v-btn to="/paquetes" text class="font-weight-light">Paquetes</v-btn>
        <v-btn to="/oficina" text class="font-weight-light">Oficina Virtual</v-btn>
        <v-btn to="/programacion" text class="font-weight-light">Programación</v-btn>
        <v-btn to="/contacto" text class="font-weight-light">Sucursales</v-btn>
        <v-btn to="/hoteles" text class="font-weight-light">Hoteles</v-btn>
        <v-btn to="/deco" text class="font-weight-light">Activa tu Deco</v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-app-bar v-else app>
      <v-app-bar-nav-icon class="" @click="openDrawer =!openDrawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <a href="/"><img contain src="~/static/orange-logo.png" alt="" height="40"></img></a>
    </v-app-bar>

    <v-navigation-drawer app v-model="openDrawer" class="d-flex d-sm-none">
      <app-bar>
      <v-app-bar-nav-icon @click="openDrawer =!openDrawer"></v-app-bar-nav-icon>
    </app-bar>
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Paquetes</v-list-item-title> 
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Oficina virtual</v-list-item-title> 
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Programacion</v-list-item-title> 
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/contacto">
          <v-list-item-content>
            <v-list-item-title>Sucursales</v-list-item-title> 
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Hoteles</v-list-item-title> 
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Activa tu Deco</v-list-item-title> 
          </v-list-item-content>
        </v-list-item>
      </v-list>

    </v-navigation-drawer>


  </div>
</template>

<script>
export default {
  data() {
    return{
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
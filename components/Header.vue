<template>
  <div>
    <v-toolbar class="d-none d-sm-flex">
      <v-toolbar-title>
        <img src="../static/orange-logo.png" alt="" width="120">
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="align-center">
          <v-img contain src="/play-btn.svg" alt="" width="120" height="50" class=""/>
          <v-img contain src="/+television.png" alt="" width="90" height="32" class="rounded-xl "/>
          <v-img contain src="/turnos-btn.svg" alt="" width="120" height="50" class="rounded-pill"/>
      </v-toolbar-items>
    </v-toolbar>
    <v-divider></v-divider>

    <v-app-bar class="d-none d-sm-flex">
      <v-toolbar-items class="d-flex justify-space-around fill-width">
        <v-btn text class="font-weight-light">Paquetes</v-btn>
        <v-btn text class="font-weight-light">Oficina Virtual</v-btn>
        <v-btn text class="font-weight-light">Programación</v-btn>
        <v-btn text class="font-weight-light">Sucursales</v-btn>
        <v-btn text class="font-weight-light">Hoteles</v-btn>
        <v-btn text class="font-weight-light">Activa tu Deco</v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-app-bar app class="d-flex d-sm-none">
      <v-app-bar-nav-icon @click="openDrawer =!openDrawer"></v-app-bar-nav-icon>
      <v-row class="align-center">
        <v-img contain src="/orange-logo.png" alt="" height="40"></v-img>
      </v-row>
      
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
        <v-list-item>
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
  }
}
</script>

<style>

</style>
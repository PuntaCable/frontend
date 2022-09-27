<template>
  <div>
    <v-toolbar>
      <v-toolbar-title>
        <img src="../static/orange-logo.png" alt="" width="120">
  
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
          <v-img src="/play-btn.svg" alt="" width="120" contain height="50" class="mt-md-2"/>
          <img src="/+television.png" alt="" width="120" contain height="35" class="rounded-pill mt-md-4"/>
          <img src="/turnos-btn.svg" alt="" width="120" contain height="50" class="mt-md-2"/>
      </v-toolbar-items>
    </v-toolbar>
    <v-divider></v-divider>
    <v-app-bar>
      <v-toolbar-items class="d-flex justify-space-around fill-width">
        <v-btn text class="font-weight-light">Paquetes</v-btn>
        <v-btn text class="font-weight-light">Oficina Virtual</v-btn>
        <v-btn text class="font-weight-light">Programación</v-btn>
        <v-btn text class="font-weight-light">Sucursales</v-btn>
        <v-btn text class="font-weight-light">Hoteles</v-btn>
        <v-btn text class="font-weight-light">Activa tu Deco</v-btn>
      </v-toolbar-items>
    </v-app-bar>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
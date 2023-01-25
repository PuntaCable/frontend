<template>
  <v-card color="background-gradient" style="border-top:4px solid #00ACC1">
    <v-card-title class="d-flex justify-center">
      <img contain height="80" src="~/static/light-logo.svg">
    </v-card-title>
    <v-card-subtitle class="d-flex justify-center py-3">
      <v-btn to="/contacto" height="50" width="200" color="primary">Contactanos</v-btn>
    </v-card-subtitle>
    <v-card-subtitle class="text-center">
      <h2 class="text-h5">Seguinos en las redes</h2>
    </v-card-subtitle>
    <v-card-subtitle>
      <v-row>
        <v-col class="flex-column d-flex align-center">
          <v-row class="justify-space-around">
            <a href="https://www.facebook.com/puntacablemaldonado">
              <v-img contain height="40" width="40" src="/facebook-logo-3-1.png"></v-img>
            </a>
            <a href="https://www.youtube.com/channel/UCev-0rKQjFKeNNcygkhDjpA">
              <v-img class="ml-md-2" contain height="40" width="40" src="/youtube.svg"></v-img>
            </a>
            <a href="https://twitter.com/puntacable">
              <v-img class="ml-md-2" contain height="40" width="40" src="/twitter.svg"></v-img>
            </a>
            <a href="https://www.instagram.com/puntacable/">
              <v-img class="ml-md-2" contain height="40" width="40" src="/ig.png"></v-img>
            </a>
          </v-row>
        </v-col>
      </v-row>
    </v-card-subtitle>
    <v-card-text class="d-flex justify-center">
      <v-list dense color="transparent"  class="list-footer-width">
          <v-list-item>
            <v-list-item-avatar>
              <v-img src="/icons/call.png"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="font-weight-regular text-subtitle-1 mb-2">Llamanos</v-list-item-title>
              <v-divider></v-divider>
              <v-list-item-subtitle class="body-2 font-weight-regular white--text">
                WhatsApp +598 2904 9235
              </v-list-item-subtitle>

            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-avatar>
              <v-img src="/icons/pin.png"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="font-weight-regular text-subtitle-1 mb-2">Visitanos</v-list-item-title>
              <v-divider></v-divider>
              <v-list-item-subtitle class="body-2 font-weight-regular white--text pa-2">
                <b>Punta del Este: </b> San Francisco y Lunas de Oro <br> Lunes a viernes
                10 a 18 hs Sábados 10 a 14 hs <br> Domingo cerrado
              </v-list-item-subtitle>
              <v-list-item-subtitle class="body-2 font-weight-regular white--text mt-2 pa-2">
                <b>Maldonado: </b>Rincón 615 casi 3 de Febrero <br> Lunes a Viernes
                de 9 a
                13 hs y de 14 a 18 hs. <br> Sábado de 9 a 13 hs. Domingo cerrado

              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-avatar>
              <v-img src="/icons/envelope.png"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="font-weight-regular text-subtitle-1 mb-2">Escribenos</v-list-item-title>
              <v-divider></v-divider>
              <v-list-item-subtitle class="body-2 font-weight-regular white--text">comercial@puntacable.com</v-list-item-subtitle>

            </v-list-item-content>
          </v-list-item>

        </v-list>
    </v-card-text>

    <v-footer color="primary">
      <v-row class="text-center">
        <v-text class="font-weight-light text-caption">2020 Puntacable. Todos los derechos reservados.</v-text>
      </v-row>
    </v-footer>
  </v-card>
</template>

<script>
  export default {
    computed: {
      isMobile() {
        return this.$vuetify.breakpoint.smAndDown
      }
    }
  }

</script>
<style scoped>
@media(max-width:700px) {
  .list-footer-width{
    width: 100%;
  }
}
</style>
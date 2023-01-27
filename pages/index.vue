<template>
  <div>
    <generalSliderComponent></generalSliderComponent>
    <v-container>

      <v-row class="mt-16">
        <v-col class="col-12">
          <channelsComponent></channelsComponent>
        </v-col>
      </v-row>
      <div id="packages">
        <packagesListComponent></packagesListComponent>
      </div>

      <v-row>
        <v-col class="col-12">
          <GeneralCardComponent color="background-gradient" flat>
            <GeneralCardTitleComponent>
              <span>DISFRUTALO</span>&nbsp;EN TODOS TUS&nbsp;<SPAN CLASS="primary-gradient--text">DISPOSITIVOS!</SPAN>
            </GeneralCardTitleComponent>
            <v-divider class="cyan darken-1"></v-divider>
            <v-card-text>
              <v-img src="https://puntacable.com.uy/assets/img/dispositivos-play.png"></v-img>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions class="justify-center">
              <v-col class="col-md-6 col-12">
                <v-btn rounded block large outlined color="white"
                  class="font-weight-regular black--text text-subtitle-1 font-weight-bold">ENTRAR AHORA</v-btn>
              </v-col>
            </v-card-actions>

          </GeneralCardComponent>
        </v-col>
      </v-row>
    </v-container>
    <v-card class="border-color-top">

      <v-carousel hide-delimiters continuous cycle>
    <v-carousel-item src="/slider/1.png" cover class="slider">
      <div class="fill-height fill-width d-flex justify-md-end justify-center align-center align-md-center">
        <generalTitleComponent>
          <span class="primary-gradient--text">SEGUI LAS CARRERAS</span>
          <br>
          EN VIVO
        </generalTitleComponent>
      </div>
    </v-carousel-item>
    <v-carousel-item src="/slider/2.png" cover class="slider">
      <div class="fill-height fill-width d-flex justify-md-end justify-center align-center align-md-center">
        <generalTitleComponent>
          <span class="primary-gradient--text">ESCUCHA TODAS TUS</span>
          <br>
          RADIOS
        </generalTitleComponent>
      </div>
    </v-carousel-item>
    <v-carousel-item src="/prepago/background.png" class="slider">
      <div class="fill-width fill-height d-inline-flex justify-end align-center py-4">
          <v-row>
            <v-col class="col-12 col-md-7"></v-col>
            <v-col class="col-12 col-md-5 d-flex align-center flex-column">
              <generalTitleComponent>
              <span class="primary-gradient--text">LA NUEVA FORMA</span>
                <br>
                DE VER TV
        </generalTitleComponent>
              <div>
                <v-btn class="mt- font-weight-bold" rounded x-large color="primary" to="/contacto/?motivo=prepago">
                  CONTRATA tu prepago AHORA
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </div>
    </v-carousel-item>
  </v-carousel>
    </v-card>
  </div>
</template>

<script>
  import generalFooter from "~/components/general/Footer.vue"
  export default {
    name: "IndexPage",
    components: {
      generalFooter
    },
    computed: {
      isMobile() {
        return this.$vuetify.breakpoint.smAndDown
      }
    }
  }

</script>
<style scoped>
  .bg {
    height: 400px;
    background: url('~/static/help-banner-bg.svg') no-repeat center center !important;
    background-size: cover;
  }

</style>

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
              <span>DISFRUTALO</span>&nbsp;EN TODOS TUS&nbsp;<SPAN CLASS="primary--text">DISPOSITIVOS!</SPAN>
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
      <v-img src="/prepago/background.png">
        <div class="fill-width fill-height d-inline-flex justify-end align-center py-4">
          <v-row>
            <v-col class="col-12 col-md-7"></v-col>
            <v-col class="col-12 col-md-5 d-flex align-center flex-column">
              <generalTitleComponent>
              <span class="primary--text">LA NUEVA FORMA</span>
                <br>
                DE VER TV
        </generalTitleComponent>
              <div>
                <v-btn class="mt- font-weight-bold" rounded x-large color="primary">
                  CONTRATA tu prepago AHORA
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </div>
      </v-img>
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

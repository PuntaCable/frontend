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
          <v-card flat color="transparent">
            <v-card-text class="text-center text-h4">Disfrutalo en todos tus dispositivos</v-card-text>
            <v-card-text>
              <v-img src="https://puntacable.com.uy/assets/img/dispositivos-play.png"></v-img>
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn rounded color="primary" class="font-weight-regular black--text">ENTRAR AHORA</v-btn>
            </v-card-actions>
          </v-card>

        </v-col>
      </v-row>
    </v-container>
    <v-card class="border-color-top">
      <v-img src="/prepago/background.png">
        <div class="fill-width fill-height d-inline-flex justify-end align-center">
          <v-row>
            <v-col class="col-12 col-md-7"></v-col>
            <v-col class="col-12 col-md-5 d-flex align-center flex-column">
              <img src="/prepago/title.gif" width="100%">
              <div>
                <v-btn class="mt- font-weight-bold" rounded x-large color="primary">
                  CONTRATA tu servicio prepago AHORA
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

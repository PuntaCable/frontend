<template>
  <div>
    <v-carousel hide-delimiters continuous cycle>
      <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
    </v-carousel>

    <v-container>
      <v-row class="mt-n16">
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
    <v-img src="https://puntacable.com.uy/assets/img/prepago-banner.svg"></v-img>

    <v-container>
      <v-row>
        <v-col class="col-12 col-md-4">
          <GeneralCardComponent flat to="/centroAyuda" class="transparent">
            <v-card-title class="d-flex align-center justify-center">
              <v-btn color="primary" x-large fab>
                <v-icon>mdi-book-open</v-icon>
              </v-btn>
            </v-card-title>

            <v-card-subtitle class="text-center font-weight-regular">Instructivos y manuales</v-card-subtitle>
          </GeneralCardComponent>

        </v-col>
        <v-col class="col-12 col-md-4" to="/centroAyuda">
          <GeneralCardComponent flat elevation="0" class="transparent">
            <v-card-title class="d-flex align-center justify-center">
              <v-btn color="primary" x-large fab>
                <v-icon>mdi-help</v-icon>
              </v-btn>
            </v-card-title>

            <v-card-subtitle class="text-center font-weight-regular">Centro de ayuda</v-card-subtitle>
          </GeneralCardComponent>

        </v-col>
        <v-col class="col-12  col-md-4" to="/centroAyuda">
          <GeneralCardComponent outlined elevation="0" class="transparent">
            <v-card-title class="d-flex align-center justify-center">
              <v-btn color="primary" x-large fab>
                <v-icon>mdi-tools</v-icon>
              </v-btn>
            </v-card-title>

            <v-card-subtitle class="text-center font-weight-regular">Asistencia Técnica</v-card-subtitle>
          </GeneralCardComponent>

        </v-col>

      </v-row>
    </v-container>

  </div>
</template>

<script>
  import generalFooter from "~/components/general/Footer.vue"
  export default {
    data() {
      return {
        items: [{
            src: "./1.jpg",
          },
          {
            src: "./2.jpeg",
          },
          {
            src: "./3.jpeg",
          },
          {
            src: "./4.jpg",
          },
          {
            src: "./5.jpg",
          },
          {
            src: "./6.jpg",
          },
        ],
      };
    },
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

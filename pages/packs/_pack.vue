<template>
  <v-container>
    <v-row>
      <v-col class="col-12">
            <packsCard :pack="pack"></packsCard>
            <v-col class="col-12 text-center">
            <h1 class="text-xl align-center">Envianos tus datos y te contactaremos </h1>
            <v-btn to="/contacto" height="50" width="200" color="primary">Contactanos</v-btn>
      </v-col>
        </v-col>

      <v-col class="col-12">
        <v-card class="text-center">
          <v-card-tittle>
            Nacionales
          </v-card-tittle>
          <v-card-text class="d-flex">
            <v-img contain v-for="img in 6" :key="img" src="/cuatro.jpeg" width="50" height="50"></v-img>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    mounted() {},
    data() {
      return {
        pack: {
          name: 'Pack MANSA',
          description: 'Un pack básico con: cine, series y fútbol uruguayo (VTV)',
          price: '$ 1.750',
          items: [{
              text: '70 señales en tu Básico Digital',
              icon: 'mdi-circle'
            },
            {
              text: 'Plan Básico a solo $ 1750',
              icon: 'mdi-circle'
            },
            {
              text: 'Cine, series y fútbol Uruguayo incluido (VTV)',
              icon: 'mdi-circle'
            }
          ]
        }
      }
    }
  }

</script>

<style>
  .bg {
    height: 400px;
    background: url('~/static/contact-bg.svg') no-repeat center !important;
    background-size: cover;
  }

  .bg2 {
    height: 400px;
    background: url('~/static/pack.jpg') no-repeat center !important;
    background-size: cover;
  }

</style>

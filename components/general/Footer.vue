<template>
  <v-card class="">
    <v-card-title class="d-flex justify-center">
        <img contain height="80" src="~/static/light-logo.svg">
    </v-card-title>
    <v-card-subtitle>
      <v-row v-if="isMobile == false" class="justify-space-around text-center mt-md-12">
        <v-col class="flex-column d-flex align-center">
          <v-btn outlined height="50" width="200" color="primary">Contactanos</v-btn>
          <v-text class="mt-md-12 mb-md-5 text-h5">Seguinos en las redes</v-text>
          <v-row class="justify-space-around">
            <v-img contain height="40" width="40" src="./facebook-logo-3-1.png"></v-img>
            <v-img class="ml-md-2" contain height="40" width="40" src="./youtube.svg"></v-img>
            <v-img class="ml-md-2" contain height="40" width="40" src="./ig.png"></v-img>
            <v-img class="ml-md-2" contain height="40" width="40" src="./twitter.svg"></v-img>
          </v-row>
        </v-col>
      </v-row>
      
      <v-row v-else class="justify-space-around text-center mt-md-12">
        <v-col class="flex-column d-flex align-center mt-4">
          <v-btn outlined height="50" width="200" color="primary">Contactanos</v-btn>
          <v-text class="mt-6 text-h5">Seguinos en las redes</v-text>
          <v-row class="justify-space-around mt-6">
            <v-img contain height="40" width="40" src="./facebook-logo-3-1.png"></v-img>
            <v-img class="ml-md-2" contain height="40" width="40" src="./youtube.svg"></v-img>
            <v-img class="ml-md-2" contain height="40" width="40" src="./ig.png"></v-img>
            <v-img class="ml-md-2" contain height="40" width="40" src="./twitter.svg"></v-img>
          </v-row>
        </v-col>
      </v-row>
    </v-card-subtitle>
    <v-card-text>
      <v-row >
        <v-col class="col-12 col-md-6">
          <v-list>
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-map-marker</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Punta del Este: San Francisco y Lunas de Oro</v-list-item-title>

              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-map-marker</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Maldoando: Rincón 615 casi 3 de Febrero</v-list-item-title>

              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-phone</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Punta del Este: San Francisco y Lunas de Oro</v-list-item-title>

              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-whatsapp</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Punta del Este: San Francisco y Lunas de Oro</v-list-item-title>
                
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col class="col-12 col-md-6">
          <v-list>
            <v-list-item>
              <v-list-item-icon>
                <v-icon size="20">mdi-circle</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Pack MANSA</v-list-item-title>
              </v-list-item-content>
              <v-list-item-icon>
                <v-icon size="20">mdi-circle</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Prepago</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon size="20">mdi-circle</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Pack BRAVA</v-list-item-title>
              </v-list-item-content>
              <v-list-item-icon>
                <v-icon size="20">mdi-circle</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Pack Adultos</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon size="20">mdi-circle</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Pack LA BARRA</v-list-item-title>
              </v-list-item-content>
              <v-list-item-icon>
                <v-icon size="20">mdi-circle</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Nuevo Pack VTV PLUS</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon size="20">mdi-circle</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Pack JOSÉ IGNACIO</v-list-item-title>
              </v-list-item-content>
              <v-list-item-icon>
                <v-icon size="20">mdi-circle</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Universal Plus </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon size="20">mdi-circle</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Pack HBO Premium</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>

        

        <v-col class="col-md-3">
      <v-list dense>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Contratá Puntacable</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Ver Ofertas</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Ver Planes</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
        </v-col>

        <v-col class="col-md-3">
          <v-list dense>
            <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Programación</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Grilla</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Buscador de Programación</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
          </v-list>
        </v-col>

        <v-col class="col-md-3">
          <v-list dense>
            <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Atención al cliente </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Centro de ayuda</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Asistencia Técnica</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Cómo contrato Puntacable</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Cortes zonales</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Contactanos</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
          </v-list>
        </v-col>

        <v-col class="col-md-3">
          <v-list dense>
            <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Mi Puntacable</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Ingresar</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Panel</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Facturación</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Mis Productos</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Mi Perfil</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </v-card-text>


    <v-footer color="primary">
      <v-row class="text-center">
        <v-text class="font-weight-light text-caption">2020 Puntacable. Todos los derechos reservados.</v-text>
      </v-row>
    </v-footer>
  </v-card>
</template>

<script>
  export default{
    computed: {
    isMobile() {
      return this.$vuetify.breakpoint.smAndDown
    }
  }
  }
</script>

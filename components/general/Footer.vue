<template>
  <v-card>
    <v-card-title class="d-flex justify-center">
        <img contain height="80" src="~/static/light-logo.svg">
    </v-card-title>
    <v-card-subtitle>
      <v-row class="justify-space-around text-center mt-md-12">

        <v-col class="flex-column d-flex align-center">
          <v-btn outlined height="50" width="200" color="primary rounded-pill align-center">Contactanos</v-btn>
          <v-text class="mt-md-12 mb-md-5 text-h5">Seguinos en las redes</v-text>
          <v-row class="md-mt-4 justify-space-around">
            <v-img contain height="40" width="40" src="./facebook-logo-3-1.png"></v-img>
            <v-img class="ml-md-2" contain height="40" width="40" src="./youtube.svg"></v-img>
            <v-img class="ml-md-2" contain height="40" width="40" src="./ig.png"></v-img>
            <v-img class="ml-md-2" contain height="40" width="40" src="./twitter.svg"></v-img>
          </v-row>
        </v-col>
      </v-row>
    </v-card-subtitle>
    <v-card-text>
      <v-row>
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
        <v-col class="col-md-3"></v-col>
        <v-col class="col-md-3"></v-col>
        <v-col class="col-md-3"></v-col>
      </v-row>
    </v-card-text>
    <v-container class="d-flex flex-wrap">
      <v-list>
        <v-list-item>
          <v-subheader>
            Productos
          </v-subheader>
          <v-list-item-content>
            <v-list-item-title></v-list-item-title>
            <v-list-item-subtitle>Pack MANSA</v-list-item-subtitle>
            <v-list-item-subtitle>Pack BRAVA</v-list-item-subtitle>
            <v-list-item-subtitle>Pack LA BARRA</v-list-item-subtitle>
            <v-list-item-subtitle>Pack JOSÉ IGNACIO</v-list-item-subtitle>
            <v-list-item-subtitle>Pack HBO Premium</v-list-item-subtitle>
            <v-list-item-subtitle>Prepago</v-list-item-subtitle>
            <v-list-item-subtitle>Pack Adultos</v-list-item-subtitle>
            <v-list-item-subtitle>Nuevo Pack VTV PLUS</v-list-item-subtitle>
            <v-list-item-subtitle>Universal Plus</v-list-item-subtitle>
            <v-list-item-subtitle>Prepago</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Programacion</v-list-item-title>
            <v-list-item-subtitle>Grilla</v-list-item-subtitle>
            <v-list-item-subtitle>Buscador de Programación</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-list>

        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Atención al cliente</v-list-item-title>
            <v-list-item-subtitle>Centro deayuda</v-list-item-subtitle>
            <v-list-item-subtitle>Asistencia Técnica</v-list-item-subtitle>
            <v-list-item-subtitle>Cómo contrato Puntacable</v-list-item-subtitle>
            <v-list-item-subtitle>Cortes zonales</v-list-item-subtitle>
            <v-list-item-subtitle>Contactanos</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-list>

        <v-list-item>
          <v-list-content>
            <v-list-item-title>Mi Puntacable</v-list-item-title>
            <v-list-item-subtitle>Ingresar</v-list-item-subtitle>
            <v-list-item-subtitle>Panel</v-list-item-subtitle>
            <v-list-item-subtitle>Facturación</v-list-item-subtitle>
            <v-list-item-subtitle>Mis Productos</v-list-item-subtitle>
            <v-list-item-subtitle>Mi perfil</v-list-item-subtitle>
          </v-list-content>
        </v-list-item>
      </v-list>
    </v-container>

    <v-footer color="primary">
      <v-row>
        <v-text class="font-weight-light text-caption">2020 Puntacable. Todos los derechos reservados.</v-text>
      </v-row>
    </v-footer>
  </v-card>
</template>

<script>

</script>
